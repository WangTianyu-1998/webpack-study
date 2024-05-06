#!/usr/bin/env node
const { program } = require("commander");
const checkNode = require("../lib/checkNode");
const startServer = require("../lib/start/startServer");
const pkj = require("../package.json");
const buildProject = require("../lib/build/buildProject");
const MIN_NODE_VERSION = "18.0.0";

(async () => {
  try {
    if (!checkNode(MIN_NODE_VERSION)) {
      throw new Error("Node.js版本过低，请升级Node.js版本至8.0.0以上");
    }
    // console.log(pkj.version);

    program.version(
      pkj.version,
      "-v, --vers",
      `output tianyu-build 版本为 ${pkj.version}`
    ); // 子命令的版本

    program
      .command("start")
      .option("-c, --config <config>", "指定配置文件路径")
      .description("启动项目")
      .allowUnknownOption() // 允许未知参数
      .action(startServer);

    program
      .command("build")
      .option("-c, --config <config>", "指定配置文件")
      .description("打包项目")
      .allowUnknownOption() // 允许未知参数
      .action(buildProject);

    // 解析命令行参数
    program.parse(process.argv);
  } catch (error) {
    console.log(error.message);
  }
})();
