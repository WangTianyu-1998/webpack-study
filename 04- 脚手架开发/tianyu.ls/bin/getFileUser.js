// child_process 模块提供了衍生子进程的能力，我们可以通过 execSync 方法来执行 shell 命令，并获取其返回值。
const cp = require("child_process");
function getFileUser(state) {
  const { uid } = state;
  const username = cp.execSync(`id -nu ${uid}`).toString().trim();
  const groupname = cp.execSync(`id -ng ${uid}`).toString().trim();

  return username + "\t" + groupname + "\t";
}

module.exports = getFileUser;
