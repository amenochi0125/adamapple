const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const current = process.cwd()

module.exports = {
  context: current,
  entry: {
    style: './src/scss/style.scss'
  },
  output: {
    filename: '[name].css'
  },
  resolve: {
    root: [path.join(current, 'public/assets/css')],
    extensions: ['', '.webpack.config.js', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css-loader?-url!sass-loader")
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}
