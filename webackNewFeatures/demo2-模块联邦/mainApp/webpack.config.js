const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    port: 3000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      filename: "app_b.js",
      name: "app_b",
      remotes: {
        // 远程模块名称: 模块名称@远程地址/远程模块名称
        main: "main@http://localhost:3001/app_a.js",
      },
    }),
  ],
};
