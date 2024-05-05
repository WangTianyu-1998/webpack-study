const detect = require("detect-port");

// console.log("DevService");
// console.log(process.argv);
// console.log(process.pid);
// console.log(process.ppid);

// // 通过fork方式启动子进程进行双向通信
// process.on("message", (msg) => {
//   console.log("子进程收到消息", msg);
//   process.send("hello parent process!");
// });

function getPort() {
  const DEFAULT_PORT = 8000;
  const params = process.argv.slice(2);
  const paramsObj = {};
  params.forEach((item) => {
    const paramsArr = item.split(" ");
    const key = paramsArr[0].replace("--", "");
    const value = paramsArr[1];
    paramsObj[key] = +value;
  });
  // 端口号 默认8000 但是还需要确认端口是否被占用
  return paramsObj.port || DEFAULT_PORT;
}

const port = getPort();

// 检测端口是否被占用
detect(port)
  .then((_port) => {
    if (port == _port) {
      console.log(port);
    } else {
      console.log(`端口${port}被占用`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
