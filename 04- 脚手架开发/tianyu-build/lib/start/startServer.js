const chokidar = require("chokidar");
const path = require("path");
const cp = require("child_process");
// 启动服务
function runServer() {
  // 启动子进程的方式
  const childFile = path.resolve(__dirname, "./DevService.js");
  // 1. 方式一
  // cp.execFile(
  //   "node",
  //   [childFile, ["a=1", "b=2"], "2323"],
  //   {},
  //   (error, stdout) => {
  //     console.log("子进程启动");
  //     if (!error) {
  //       console.log(stdout);
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // );
  // 2. 方式二
  // cp.exec(
  //   `node ${path.resolve(__dirname, "./DevService.js")} --force`,
  //   (err, stdout) => {
  //     console.log("子进程启动");
  //     if (!err) {
  //       console.log(stdout);
  //     } else {
  //       console.error(err, "123");
  //     }
  //   }
  // );

  // 3. 方式三
  // const buffer = cp.execSync(`${childFile} --force`);
  // console.log(buffer.toString());

  // 4. 方式四 双向通信
  const child = cp.fork(childFile, ["--port 8080"]);
  child.on("message", (msg) => {
    // 接收来自子进程的消息
    console.log("父进程收到消息", msg.toString());
  });
  child.send("hello child process!");
}

// 文件变化后的回调
function onChange() {
  throw new Error("123");
}
// 文件监听
function runWatcher() {
  const configPath = path.resolve(__dirname, "./config.js");
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
  // runWatcher();
};

module.exports = startServer;
