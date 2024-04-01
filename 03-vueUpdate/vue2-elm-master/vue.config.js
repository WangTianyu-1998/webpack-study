const path = require("path");
// 构建速度
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// 打包体积
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// SpeedMeasurePlugin 用于测量webpack构建时间
const smp = new SpeedMeasurePlugin({
  // 为true就关闭功能  process.env.MEASURE(文档推荐的方式) 环境变量 可以在package.json中配置
  disable: !(process.env.MEASURE === "true"),
  // 输出结果的格式
  outputFormat: "humanVerbose",
});

module.exports = {
  configureWebpack: smp.wrap({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
    },
    plugins: [new BundleAnalyzerPlugin()],
  }),
};
