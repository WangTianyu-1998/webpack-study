// 使用分包DllPlugin 将变化几率很小的的第三方包单独抽离
// 这里的配置不放在vue.config.js的原因是因为这里的分包要先单独打出来
const path = require("path");
const { DllPlugin } = require("webpack");

// 输出路径
const dllPath = "../dll";
module.exports = {
  // 环境
  mode: "production",
  // 指定那些第三方包进行抽离分包
  entry: {
    vue: ["vue", "vue-router", "vuex"],
  },
  // 输出
  output: {
    path: path.resolve(__dirname, dllPath),
    filename: "[name].dll.js",
    // window引用时找到这个全局变量
    library: "[name]_[hash]",
  },
  plugins: [
    new DllPlugin({
      // 要生成的manifest文件的名称即路径
      path: path.resolve(__dirname, dllPath, "[name]-manifest.json"),
      // 必须要和output.library中保持一致
      name: "[name]_[hash]",
      context: process.cwd(),
    }),
  ],
};
