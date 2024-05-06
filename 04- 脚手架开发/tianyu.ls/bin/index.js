#!/usr/bin/env node
const fs = require("fs");
const parseArgs = require("./parseArgs");
// console.log("我们来开发脚手架!");
// console.log(process.argv);
const { isAll, isList } = parseArgs();
const authFn = require("./auth");
const getFileType = require("./getFileType");
const getFileUser = require("./getFileUser");
const getFileSizeAndDate = require("./getFileSizeAndDate");
const getSubFileCount = require("./getSubFileCount");

// 当前工作目录：
const dir = process.cwd(); // 获取当前工作目录，并赋值给dir

let files = fs.readdirSync(dir);
let output = "";

// 没有输入 -a -l 时 获取当前文件夹下的所有文件排除以.开头的文件或文件夹(隐藏文件)
if (!isAll) {
  files = files.filter((file) => !file.startsWith("."));
}
// ls -a的情况 获取当前文件夹下的所有文件包含隐藏文件
if (!isList) {
  files.forEach((file) => (output += file + "      "));
}

// ls -a -l的情况 已列表形式展示当前文件夹下的所有文件包含隐藏文件
else {
  const total = `total ${files.length}` + "\n";
  files.forEach((file, index) => {
    const stat = fs.statSync(file); // 文件信息对象
    const mode = stat.mode; // 文件二进制
    const authString = authFn(mode);
    const fileType = getFileType(mode);
    const fileUser = getFileUser(stat); // 获取文件用户即用户分组
    const sizeAndDate = getFileSizeAndDate(stat); //大小和日期
    const subDirCount = getSubFileCount(stat, file); // 子文件数量

    index === files.length - 1
      ? (output +=
          fileType +
          authString +
          subDirCount +
          fileUser +
          "\t" +
          sizeAndDate +
          file)
      : (output +=
          fileType +
          authString +
          subDirCount +
          fileUser +
          "\t" +
          sizeAndDate +
          file +
          "\n");
  });
  output = total + output;
}

console.log(output);

console.log({
  isAll,
  isList,
});
