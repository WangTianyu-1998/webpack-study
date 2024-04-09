const path = require("path");
const { experiments } = require("webpack");

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
  experiments: {
    buildHttp: {
      allowedUris: ["https://imooc-dev.youbaobao.xyz"],
      frozen: false,
      // cacheLongPolling: false,
      // upgrade: true,
    },
  },
};
