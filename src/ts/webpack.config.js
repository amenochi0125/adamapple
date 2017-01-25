const path = require('path')
var webpack = require('webpack')

const current = process.cwd()

module.exports = {
  entry: {
    app : './src/ts/app.ts'
  },
  output: {
    filename: 'js/[name].js'
  },
  resolve: {
    root: [path.join(current,'node_modules')],
    extensions: ['', '.ts', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/app.bundle.js')
  ]
}
