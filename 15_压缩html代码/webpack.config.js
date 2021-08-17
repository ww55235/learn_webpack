const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      /*
            js 兼容性处理：babel-loader @babel/core @babel/preset-env
                1. 基本js兼容性处理 --> @babel/preset-env
                    问题：只能转换基本语法，如Promise不能转换
                2. 全部js兼容性处理 --> @babel/polyfill   使用时直接在js文件里面引入：import '@babel/polyfill'
                    问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了
                3. 需要做兼容性处理的就做：按需加载 --> core-js
        */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定 core-js版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      //压缩html代码
      minify: {
        //移出空格
        collapseWhitespace: true,
        //移出注释
        removeComments:true
      }
    }),
  ],
  // mode: "development",
  //压缩js代码只需要 把mode 改为production即可
  mode: "production",
  devServer: {
    port: 3000,
    compress: true,
    contentBase: resolve(__dirname, 'build'),
    open: true
  }
}