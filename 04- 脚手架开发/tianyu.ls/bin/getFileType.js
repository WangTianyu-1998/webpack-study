const fs = require("fs");
function getFileType(mode) {
  let fileType = "";
  const isDir = mode & (fs.constants.S_IFDIR === fs.constants.S_IFDIR); // mode 和 fs.constants.S_IFDIR是否相同 通过 & 来判断是否是文件夹
  const isFile = mode & (fs.constants.S_IFREG === fs.constants.S_IFREG); // 是否是文件
  const isLink = mode & (fs.constants.S_IFLNK === fs.constants.S_IFLNK); // 是否是链接

  if (isDir) {
    fileType = "d";
  } else if (isFile) {
    fileType = "-";
  } else if (isLink) {
    fileType = "l";
  }

  return fileType;
}

module.exports = getFileType;
