const {resolve} = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    jquery: ['jquery']
  },
  output: {
    path: resolve(__dirname, 'dll'),
    filename: '[name].js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: resolve(__dirname, 'dll/manifest.json')
    })
  ],
  mode: "production"
}