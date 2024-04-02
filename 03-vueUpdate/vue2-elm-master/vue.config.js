const path = require("path");
const { DllReferencePlugin } = require("webpack");
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

// 拷贝文件 目的是为了将dll中拆分的包放到dist目录下
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

// CPU线程数
console.log(require("os").cpus(), "require('os').cpus()");

module.exports = {
  // parallel: true,
  configureWebpack: smp.wrap({
    mode: "production",

    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
    },
    // module: {
    //   rules: [
    //     {
    //       // js 多进程
    //       test: /\.js$/,
    //       // 排除 node_modules
    //       exclude: /node_modules/,
    //       use: [
    //         {
    //           loader: "thread-loader",
    //           options: {
    //             // 开启几个 worker 进程来处理打包，默认是 os.cpus().length - 1
    //             // workers: 2,
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
    plugins: [
      new BundleAnalyzerPlugin({
        // 通过环境变量指定是否输出 为 xxx 格式
        analyzerMode: process.env.MEASURE === "true" ? "server" : "disabled",
      }),
      // 拆除分包
      new DllReferencePlugin({
        context: __dirname,
        manifest: path.resolve(__dirname, "./dll/vue-manifest.json"),
      }),
      // 拷贝dll 拆分的第三方包文件 因为 AddAssetHtmlWebpackPlugin可以将拆分的第三方包引入到模版并复制文件,所以这里不需要拷贝
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: path.resolve(__dirname, "./dll/vue.dll.js"),
      //       to: path.resolve(__dirname, "./dist/js/vue.dll.js"),
      //     },
      //   ],
      // }),
      // 在模版中引入拆分的第三方包
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, "./dll/vue.dll.js"),
      }),
    ],
  }),
};
