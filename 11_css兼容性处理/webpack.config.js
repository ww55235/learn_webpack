const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
process.env.NODE_ENV = 'production'
module.exports = {
  entry: './src/index.js',
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'less-loader'
        ]
      },

    ]
  },
  optimization: {
   // minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
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
  // mode: "production",
  devServer: {
    port: 3000,
    compress: true,
    contentBase: resolve(__dirname, 'build'),
    open: true
  }
}