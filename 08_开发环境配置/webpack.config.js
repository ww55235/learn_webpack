const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        // 'style-loader',
        //MiniCssExtractPlugin.loader,取代 style-loader
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      //webpack 5 已经废弃了 file-loader 和url-loader
      // {
      //   exclude: /\.(png|html|jpg|css|less|jpeg|gif)$/,
      //   loader: "file-loader",
      //   options: {
      //     outputPath:'media',
      //     name:'[hash:10].[ext]',
      //     esModule:false
      //   },
      //   type: "javascript/auto"
      // },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/,
      //   loader: "url-loader",
      //   options: {
      //     limit: 8 * 1024,
      //     name: '[hash:10].[ext]',
      //     outputPath: 'imgs',
      //     esModule:false
      //   },
      //   type: "javascript/auto"
      // }
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
  mode: "development",
  devServer: {
    port: 3000,
    compress: true,
    contentBase: resolve(__dirname, 'build'),
    open: true
  }
}