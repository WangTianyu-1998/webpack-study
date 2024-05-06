const detect = require("detect-port");
const inquirer = require("inquirer");
const Service = require("../service/Service");

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

function onInquirer(newPort, port) {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "answer",
          message: `端口${port}被占用，是否使用${newPort}端口`,
          choices: [
            {
              name: "yes",
              value: true,
            },
            {
              name: "no",
              value: false,
            },
          ],
        },
      ])
      .then((answers) => {
        resolve(answers);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

(async () => {
  const port = getPort();

  // 检测端口是否被占用
  const newPort = await detect(port);
  console.log(newPort);
  if (newPort === port) {
    console.log(port);
  } else {
    // 命令行交互
    const { answer } = await onInquirer(newPort, port);
    console.log(answer);
    if (!answer) return process.exit(1);
    // 退出进程
    const args = {
      port: newPort,
    };
    // 设置环境变量
    process.env.NODE_ENV = "development";
    // 启动服务
    const service = new Service(args);
    service.start();
  }
})();
