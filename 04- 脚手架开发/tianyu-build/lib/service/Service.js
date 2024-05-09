const path = require("path");
const fs = require('fs');
const log = require('../utils/log');
const getConfigFile = require("../utils/getConfigFile");
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
    this.registerHooks();
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
      if (configFile && fs.existsSync(configFile)) {
        const isMjs = configFile.endsWith('mjs');
        if (isMjs) {
          // ESModule规范, 需要使用import读取
          this.config = (await import(configFile)).default;
        } else {
          // commonjs规范 也使用 require读取
          this.config = require(configFile);
        }
        configFilePath = configFile;
        // log.verbose('config', this.config);

      } else {
        console.log('配置文件不存在, 终止执行');
        process.exit(1);
      }
      // 执行configResolved hooks
    }
    return configFilePath;
  }

  // 注册hooks
  registerHooks() {
    const { hooks } = this.config
    if (hooks && hooks?.length) {
      hooks.forEach(hook => {
        const [key, fn] = hook
        if (key && fn && typeof fn === 'function' && typeof key === 'string' && HOOK_KEYS.includes(key)) {
          const existHook = this.hooks[key]
          if (!existHook) {
            this.hooks[key] = []
          }
          this.hooks[key].push(fn)
        }
      })
    }
    // log.verbose('hooks!!!', this.hooks)
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
