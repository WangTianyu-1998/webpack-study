const path = require("path");
const fs = require('fs');
const log = require('../utils/log');
const getConfigFile = require("../utils/getConfigFile");
class Service {
  constructor(opts) {
    this.args = opts;
    this.config = {};
    this.hooks = {};
    // console.log(opts, "@opts");
    this.dir = process.cwd();
  }

  async start() {
    this.resolveConfig();
  }

  // 解析配置文件
  resolveConfig() {
    const { config = '' } = this.args;
    const configPath = this.changeAbsolutePath(config);
    // console.log(configPath, "解析配置文件");
  }

  // 将文件转化为绝对路径以及读取文件配置
  changeAbsolutePath(configPath) {
    console.log(configPath);
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
      console.log(configFile, '@@@configFile');
      if (configFile && fs.existsSync(configFile)) {
        configFilePath = configFile;
        // 读取文件内容
        // 如果是JSON文件直接读取 使用require读取
        // 如果是js文件使用commonjs规范 也使用 require读取
        // 如果js文件中使用ESModule规范,则需要将文件转化为mjs文件再用require读取
        // 所以这里建议交给用户自己处理,但是要遵守规范
        this.config = require(configFilePath);
        // console.log(this.config);
        log.verbose("config", this.config);
        // log.info("config", this.config);
        // log.error("config", this.config);

      } else {
        console.log('配置文件不存在, 终止执行');
        process.exit(1);
      }
    }
    return configFilePath;
  }
}

module.exports = Service;
