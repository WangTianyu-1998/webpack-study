const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  // 拆分代码
  optimization: {
    splitChunks: {
      minSize: 1024,
      chunks: "all",
      name: "common",
    },
  },
  // 缓存
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, "./cache_temp"),
    // 指定缓存文件的名字
    name: "vue3-filesystem",
  },
};
