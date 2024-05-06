const chokidar = require("chokidar");
const path = require("path");
const cp = require("child_process");

let child;

// 启动服务
function runServer() {
  // 启动子进程的方式
  const childFile = path.resolve(__dirname, "./DevService.js");
  // 4. 方式四 双向通信
  child = cp.fork(childFile, ["--port 8080"]);
  child.on("exit", (code) => {
    // 当子进程结束时，会触发这个事件, code是子进程的退出码,主进程也需要退出
    console.log(code);
    // 接收来自子进程的消息
    if (code) {
      process.exit(code);
    }
  });
}

// 文件变化后的回调
function onChange() {
  console.log("changed");
  // 关闭子进程
  child.kill();
  // 重新启动服务
  runServer();
}
// 文件监听
function runWatcher() {
  const configPath = path.resolve(__dirname, "./config.json");
  chokidar
    .watch(configPath)
    .on("change", onChange)
    .on("error", (error) => {
      console.error("Error happened", error);
    });
}

const startServer = (arg, opts, cmd) => {
  console.log("startServer");
  // 1. 通过子进程启动webpack-dev-server服务
  // 1.1 子进程启动可以避免主进程受限制
  runServer();
  // 1.2 子进程启动可以方便重启,解决配置修改后无法重启
  runWatcher();
};

module.exports = startServer;
