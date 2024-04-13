function getFileSizeAndDate(stat) {
  const { size, birthtimeMs } = stat;
  // 创建 Date 对象
  const date = new Date(birthtimeMs);

  // 手动构建不包含月份的日期字符串：日-年，例如"5th-2023"
  const dateString = `${
    date.getMonth() + 1
  } ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

  return `${size}\t${dateString}\t`;
}

module.exports = getFileSizeAndDate;
