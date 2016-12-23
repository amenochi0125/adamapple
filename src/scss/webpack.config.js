const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    style: './src/scss/style.scss'
  },
  output: {
    filename: 'css/[name].css'
  },
  resolve: {
    root: [path.join(__dirname,'node_modules')],
    extensions: ['', '.scss', '.sass', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css")
  ]
}
