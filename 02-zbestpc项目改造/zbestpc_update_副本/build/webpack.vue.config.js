const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 路径别名
const { ProvidePlugin } = require('webpack')
// 拷贝文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// js压缩
const TerserPlugin = require('terser-webpack-plugin')
// css压缩
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// vue配置
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  // 入口
  entry: {
    index: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    https: {
      key: fs.readFileSync(path.join(__dirname, '../localhost-key.pem')),
      cert: fs.readFileSync(path.join(__dirname, '../localhost.pem')),
    },
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    host: 'localhost',
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
      // 解析vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
      // ejs 复用模版
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },
  optimization: {
    // 是否开启代码压缩
    minimize: true,
    // 代码优化
    minimizer: [
      // js 代码压缩
      new TerserPlugin({ parallel: true }),
      // css代码压缩
      new CssMinimizerPlugin(),
    ],
    // 代码分割
    splitChunks: {
      // 代码最小的分割大小
      minSize: 300 * 1024,
      // async 异步代码分割 initial 同步代码分割 all 同步异步代码分割都开启
      chunks: 'all',
      // 名称
      name: 'common',
      // 这里可以继续打包第三方库
      cacheGroups: {
        lodash: {
          test: /lodash-es/,
          name: 'lodash-es',
          // 优先级
          // priority:10,
          chunks: 'all',
        },
        jquery: {
          test: /jquery/,
          name: 'jquery',
          // priority: 10,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    // 配置首页资源
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      chunks: ['index'],
    }),
    // 从.. 拷贝文件 至..
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/img'),
          to: path.resolve(__dirname, '../dist/img'),
        },
      ],
    }),
    // css压缩
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css',
    }),
    new CleanWebpackPlugin(),
  ],
}
