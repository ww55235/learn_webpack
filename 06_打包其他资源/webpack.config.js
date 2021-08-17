const {resolve} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: /\.(js|html|jpg|css|less|png)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          //关闭es6 模块化
           esModule: false
        },
        type: "javascript/auto"
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
}
