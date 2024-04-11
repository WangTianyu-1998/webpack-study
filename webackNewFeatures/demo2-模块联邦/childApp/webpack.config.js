const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    host: "localhost",
    port: 3001,
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 配置模块联邦插件
    new ModuleFederationPlugin({
      filename: "app_a.js",
      // 应用名称
      name: "main",
      // 暴露的模块
      exposes: {
        // 暴露的模块名称: 模块路径
        "./moduleA": "./index.js",
      },
    }),
  ],
};
