const path = require("path");
const fs = require('fs');
const log = require('../utils/log');
const getConfigFile = require("../utils/getConfigFile");
const loadModule = require("../utils/loadModule");
const constant = require('./const');

const HOOK_KEYS = [
  constant.HOOK_START
]
class Service {
  constructor(opts) {
    this.args = opts;
    this.config = {};
    this.hooks = {};
    this.dir = process.cwd();
  }

  async start() {
    await this.resolveConfig();
    await this.registerHooks();
    await this.emitHooks(constant.HOOK_START)
  }

  // 解析配置文件
  async resolveConfig() {
    const { config = '' } = this.args;
    const configPath = await this.changeAbsolutePath(config);
    // console.log(configPath, "解析配置文件");
  }

  // 将文件转化为绝对路径以及读取文件配置
  async changeAbsolutePath(configPath) {
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
      const configFile = getConfigFile(this.dir)
      if (configFile) {
        configFilePath = configFile;
        this.config = await loadModule(configFile)
      } else {
        console.log('配置文件不存在, 终止执行');
        process.exit(1);
      }
      // 执行configResolved hooks
    }
    return configFilePath;
  }

  // 注册hooks
  async registerHooks() {
    const { hooks } = this.config
    if (hooks && hooks?.length) {
      for (const hook of hooks) {
        const [key, fn] = hook
        const verify = key && fn && HOOK_KEYS.includes(key) && typeof key === 'string'
        if (verify) {
          // 是js 或者 mjs 配置文件
          if (typeof fn === 'function') {
            const existHook = this.hooks[key]
            if (!existHook) {
              this.hooks[key] = []
            }
            this.hooks[key].push(fn)
          }
          // 是JSON配置文件
          else if (typeof fn === 'string') {
            // 读取文件内容
            const f = await loadModule(fn)
            const existHook = this.hooks[key]
            if (!existHook) {
              this.hooks[key] = []
            }
            this.hooks[key].push(f)
          }
        }
      }

    }
    log.verbose('hooks!!!', this.hooks)
  }

  // 执行hooks
  async emitHooks(hooksName) {
    const hooks = this.hooks[hooksName]
    if (hooks) {
      for (const hook of hooks) {
        try {
          await hook(this)
        } catch (error) {
          log.error('emitHooks', error)
        }
      }
    }
  }
}

module.exports = Service;
