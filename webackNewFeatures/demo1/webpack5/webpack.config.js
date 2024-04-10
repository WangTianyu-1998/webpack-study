const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { plugins } = require("../webpack4/webpack.config");

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
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1000 * 1024, // 当文件超过1024时，将文件转换为base64
          },
        },
        // 输出文件名
        generator: {
          filename: "images/[name][hash:5][ext]",
        },
      },
    ],
  },
  // 是否开启引入外部资源 / 实现特性
  experiments: {
    buildHttp: {
      allowedUris: ["https://imooc-dev.youbaobao.xyz"],
      frozen: false,
      // cacheLongPolling: false,
      // upgrade: true,
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
