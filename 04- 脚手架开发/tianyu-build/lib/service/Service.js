const path = require("path");
const DEFAULT_CONFIG_NAME = "tianyu-config";
class Service {
  constructor(opts) {
    this.args = opts;
    this.config = {};
    this.hooks = {};
    // console.log(opts, "@opts");
  }

  async start() {
    this.resolveConfig();
  }

  // 解析配置文件j
  resolveConfig() {
    const { config } = this.args;
    const configPath = this.changeAbsolutePath(config);
    console.log(configPath, "解析配置文件");
  }

  // 将文件转化为绝对路径
  changeAbsolutePath(configPath) {
    let configFilePath = "";
    if (configPath) {
      if (path.isAbsolute(configPath)) {
        configFilePath = configPath;
      } else {
        configFilePath = path.resolve(configPath);
      }
    }
    return configFilePath;
  }
}

module.exports = Service;
