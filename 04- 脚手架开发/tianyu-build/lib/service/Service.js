const path = require("path");
const fs = require("fs");
const log = require("../utils/log");
const getConfigFile = require("../utils/getConfigFile");
const loadModule = require("../utils/loadModule");
const constant = require("./const");
const WebPackChain = require("webpack-chain");
const InitPlugin = require("../plugins/InitPlugin");

const HOOK_KEYS = [constant.HOOK_START];
class Service {
  constructor(opts) {
    this.args = opts;
    this.config = {};
    this.hooks = {};
    this.dir = process.cwd();
    this.plugins = [];
    this.webpackConfig = null;
    // 内部值,提供插件的通讯使用
    this.interiorValues = {};
    this.webpack = null;
  }

  async start() {
    await this.resolveConfig();
    await this.setWebpackConfig();
    await this.registerHooks();
    await this.emitHooks(constant.HOOK_START);
    await this.registerPlugin();
    await this.runPlugin();
    this.initWebpack();

    console.log(this.webpack, "webpackConfig");
  }

  // 获取实际项目中的webpack地址
  initWebpack = () => {
    // 从config中获取 CustomWebpackPath 属性
    // 如果存在则使用改地址引入webpack配置
    // 如果不存在则使用node_modules中的webpack配置
    this.webpack = require.resolve("webpack", {
      paths: [path.resolve(process.cwd(), "node_modules")],
    });
  };

  // 解析配置文件
  resolveConfig = async () => {
    const { config = "" } = this.args;
    const configPath = await this.changeAbsolutePath(config);
    // console.log(configPath, "解析配置文件");
  };

  // 将文件转化为绝对路径以及读取文件配置
  changeAbsolutePath = async (configPath) => {
    let configFilePath = "";
    if (configPath) {
      // 能进来说明通过--config制定了文件名称
      if (path.isAbsolute(configPath)) {
        configFilePath = configPath;
      } else {
        configFilePath = path.resolve(configPath);
      }
    } else {
      // 能进来说明没有指定--config,此时就需要从项目文件中快速查找指定的文件名称
      // 此时就需要使用fast-glob absolute转化为绝对路径
      const configFile = getConfigFile(this.dir);
      if (configFile) {
        configFilePath = configFile;
        this.config = await loadModule(configFile);
      } else {
        console.log("配置文件不存在, 终止执行");
        process.exit(1);
      }
      // 执行configResolved hooks
    }
    return configFilePath;
  };

  // webpack配置
  setWebpackConfig = async () => {
    this.webpackConfig = new WebPackChain();
    this.webpackConfig
      .entry("index")
      .add("src/index.js")
      .end()
      .output.path("dist")
      .filename("[name].bundle.js");

    console.log(this.webpackConfig.toConfig(), "webpackConfig");
  };

  getWebpackConfig = () => {
    return this.webpackConfig;
  };

  // 注册hooks
  registerHooks = async () => {
    const { hooks } = this.config;
    if (hooks && hooks?.length) {
      for (const hook of hooks) {
        const [key, fn] = hook;
        const verify =
          key && fn && HOOK_KEYS.includes(key) && typeof key === "string";
        if (verify) {
          // 是js 或者 mjs 配置文件
          if (typeof fn === "function") {
            const existHook = this.hooks[key];
            if (!existHook) {
              this.hooks[key] = [];
            }
            this.hooks[key].push(fn);
          }
          // 是JSON配置文件
          else if (typeof fn === "string") {
            // 读取文件内容
            const f = await loadModule(fn);
            const existHook = this.hooks[key];
            if (!existHook) {
              this.hooks[key] = [];
            }
            this.hooks[key].push(f);
          }
        }
      }
    }
    // log.verbose("hooks!!!", this.hooks);
  };

  // 执行hooks
  emitHooks = async (hooksName) => {
    const hooks = this.hooks[hooksName];
    if (hooks) {
      for (const hook of hooks) {
        try {
          await hook(this);
        } catch (error) {
          log.error("emitHooks", error);
        }
      }
    }
  };

  // 注册插件
  registerPlugin = async () => {
    // 内置的插件
    const initPlugins = [InitPlugin];
    for (const plugin of initPlugins) {
      this.plugins.push({ mod: plugin });
    }
    // console.log(this.config, "registerPlugin");
    let { plugins } = this.config;
    if (plugins) {
      if (typeof plugins === "function") {
        plugins = plugins();
      }
      if (Array.isArray(plugins)) {
        for (const plugin of plugins) {
          if (typeof plugin === "string") {
            const mod = await loadModule(plugin);
            this.plugins.push({ mod });
          } else if (Array.isArray(plugin)) {
            const [pluginPath, params] = plugin;
            const mod = await loadModule(pluginPath);
            this.plugins.push({ mod, params });
          } else if (typeof plugin === "function") {
            this.plugins.push({ mod: plugin });
          }
        }
      }
    }
  };

  // 执行插件
  runPlugin = async () => {
    // console.log(this.plugins, "runPlugin");
    for (const plugin of this.plugins) {
      const { mod, params } = plugin;
      if (!mod) continue;
      const API = {
        // webpack配置
        getWebpackConfig: this.getWebpackConfig,
        // 执行hooks
        emitHooks: this.emitHooks,
        // 设置内部值
        setValue: this.setValue,
        // 获取内部值
        getValue: this.getValue,
      };
      await plugin.mod(API, params);
    }
  };

  setValue = (key, value) => {
    this.interiorValues[key] = value;
  };

  getValue = (key) => {
    return this.interiorValues[key];
  };
}

module.exports = Service;
