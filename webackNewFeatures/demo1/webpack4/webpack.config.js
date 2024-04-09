const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
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
  // cache:true
  // 缓存
  plugins: [
    // 缓存
    new HardSourceWebpackPlugin({
      cacheDirectory: path.resolve(__dirname, ".temp_cache"),
    }),
  ],
};
