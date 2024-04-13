/**
 * 理解文件存储的表达方式
 * unix使用32位二进制数存储文件类型和权限
 * 0000 0000 0000 0000
 * 0000(文件类型) 000(特殊权限) 000(用户权限) 000(组权限) 000(其他权限)
 *
 * 0
 * 1
 * 10
 * 11
 * 110
 * 111
 * 1110
 * 1111
 * 当前类型位:0001 如何判断最后一位是1呢?
 * 0001 & 0001 = 0001 true
 * 0000 & 0001  = 0000 false
 * 0000 & 0010 = 0000 false
 * 因为 只要带0 结果都是false 所以所有带0的都要删除
 *
 * 所以最终能够表达状态的只有
 * 1
 * 11
 * 111
 * 1111
 *
 * 所以 例如 用户权限这里 001 010 100 都可以代表一种权限
 */

const fs = require("fs");
function auth(mode) {
  let authString = "";

  // u: 当前登录用户
  const canUserRead = mode & fs.constants.S_IRUSR;
  const canUserWrite = mode & fs.constants.S_IWUSR;
  const canUserExecute = mode & fs.constants.S_IXUSR;

  canUserRead ? (authString += "r") : (authString += "-");
  canUserWrite ? (authString += "w") : (authString += "-");
  canUserExecute ? (authString += "x") : (authString += "-");

  // g: 当前用户所在分组
  const canGroupRead = mode & fs.constants.S_IRGRP;
  const canGroupWrite = mode & fs.constants.S_IWGRP;
  const canGroupExecute = mode & fs.constants.S_IXGRP;

  canGroupRead ? (authString += "r") : (authString += "-");
  canGroupWrite ? (authString += "w") : (authString += "-");
  canGroupExecute ? (authString += "x") : (authString += "-");

  // o:其他用户
  const canOtherRead = mode & fs.constants.S_IROTH;
  const canOtherWrite = mode & fs.constants.S_IWOTH;
  const canOtherExecute = mode & fs.constants.S_IXOTH;

  canOtherRead ? (authString += "r") : (authString += "-");
  canOtherWrite ? (authString += "w") : (authString += "-");
  canOtherExecute ? (authString += "x") : (authString += "-");

  return authString + "\t";
}

module.exports = auth;
