const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // 解决 html文件 的HMR 问题
  entry: ['./src/index.js', './src/index.html'],
//  entry: './src/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        //样式文件开启HMR功能,需要使用style-loader
        'style-loader',
        'css-loader'
      ]
    },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      //打包其他资源 代替file-loader
      {
        exclude: /\.(png|gif|jpg|jpeg|html|js|css|less)$/,
        type: "asset/inline",
      },
      // //代替 url-loader
      {
        test: /\.(png|gif|jpeg|jpg)$/,
        type: 'asset/inline',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    //提取css成单独文件
    new MiniCssExtractPlugin({
      // 输出文件名
      filename: 'css/bulit.css'
    })
  ],
  //开启HMR 需要加
  target: 'web',
  mode: "development",
  devServer: {
    port: 3000,
    compress: true,
    contentBase: resolve(__dirname, 'build'),
    open: true,
    //开启HMR功能
    hot: true
  },
  devtool: 'eval-source-map'
}