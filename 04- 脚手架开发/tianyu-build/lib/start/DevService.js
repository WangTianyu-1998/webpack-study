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
function getPort(paramsObj) {
  const DEFAULT_PORT = 8000;
  const params = process.argv.slice(2);
  params.forEach((item) => {
    const paramsArr = item.split(" ");
    const key = paramsArr[0].replace("--", "");
    const value = paramsArr[1];
    paramsObj[key] = value;
  });
  // 端口号 默认8000 但是还需要确认端口是否被占用
  return +paramsObj.port || DEFAULT_PORT;
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
  const paramsObj = {};
  // 获取端口号
  const port = getPort(paramsObj);
  // 获取配置文件 支持--config 自定义配置文件路径
  // 需要在 program 中定义 --config <config>
  // 通过startServer 传递给DevService 在传递给Service
  const config = paramsObj.config || "";

  // 检测端口是否被占用
  const newPort = await detect(port);
  if (newPort !== port) {
    // 端口被占用 提供选择重新选择端口
    // 命令行交互
    const { answer } = await onInquirer(newPort, port);
    // 退出进程
    if (!answer) return process.exit(1);
  }
  // 启动服务的参数
  const args = {
    port: newPort,
    config,
  };
  // 设置环境变量
  process.env.NODE_ENV = "development";
  // 启动服务
  const service = new Service(args);
  await service.start();
})();
