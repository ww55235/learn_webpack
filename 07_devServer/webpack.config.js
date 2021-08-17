const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  //运行指令 npx webpack serve
  devServer: {
    // 运行文件根目录
    contentBase: resolve(__dirname, 'build'),
    //  是否启用gzip压缩
    compress: true,
    //是否默认打开浏览器
    open: true,
    // 指定端口号
    port: 3001,
  },
  mode: 'development',
}
