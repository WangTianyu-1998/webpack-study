const fs = require("fs");
function getSubFileCount(stat, file) {
  console.log({
    stat,
    file,
  });
  if (file === ".Trash") {
    return "1\t"; // 如果是垃圾箱，直接返回1
  }
  if (!stat.isDirectory() || !fs.readdirSync(file).length) {
    return "1\t"; // 如果不是目录，直接返回1
  }
  // 读取目录下的所有文件，包含 . —— 指向当前目录自身的引用。 .. —— 指向父目录的引用。
  const allEntries = Number(fs.readdirSync(file).length) + 2;
  return allEntries.toString().trim() + "\t";
}

module.exports = getSubFileCount;
