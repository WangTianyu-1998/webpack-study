const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: "url-loader",
        options: {
          name: "[name][hash:5].[ext]",
          // 限制大小 1000kb
          limit: 1024,
          outputPath: "images",
        },
      },
    ],
  },
};
