const path = require('path')
const webpack = require('webpack')
const FooterPlugin = require('./plugin/FooterPlugin.js')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 这里必须是绝对路径
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.wty$/,
        use: path.resolve(__dirname, './loader/wty-loader.js'),
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '学习 webpack',
    }),
    new FooterPlugin({
      banner: '在最后加上注释',
    }),
  ],
}
