const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
module.exports = {
  //单入口打包
  entry: './src/index.js',
  //多入口打包
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  //压缩js代码只需要 把mode 改为production即可
  mode: "production",
}