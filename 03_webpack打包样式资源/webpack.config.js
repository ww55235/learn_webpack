const { resolve } = require('path')

module.exports = {
  //打包入口文件
  entry: './src/index.js',
  // 输出配置
  output: {
    //打包后的文件名
    filename: 'built.js',
    // 打包后放到哪个目录中
    path: resolve(__dirname, 'build'),
  },
  // loader配置
  module: {
    rules: [
      {
        // 匹配文件正则表达式
        test: /\.css$/,
        // 使用的loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  // 插件配置
  plugins: [],
  // 模式
  mode: 'development',
  // mode: 'production',
}
