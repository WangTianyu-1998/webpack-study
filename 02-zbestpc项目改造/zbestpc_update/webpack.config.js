const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ProvidePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'development',
  // 入口
  entry: {
    index: './src/index.js',
    login: './src/login.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    // 服务器压缩
    compress: true,
    // 自动打开浏览器
    open: true,
    // 开启热更新
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 打包文件
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // webpack自带
        type: 'asset',
        // 如果图片小于8kb，就会被转换成base64
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        // 大于8kb的图片会被打包到images文件夹下
        generator: {
          filename: 'images/[name].[hash:6][ext]',
        },
      },
    ],
  },
  plugins: [
    // 配置首页资源
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index'],
    }),
    // 配置登录页面资源
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html',
      chunks: ['login'],
    }),
    // 路径别名
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    // 从.. 拷贝文件 至..
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/img'),
          to: path.resolve(__dirname, './dist/img'),
        },
      ],
    }),
  ],
}
