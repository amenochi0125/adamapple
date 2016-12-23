const path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app : './src/ts/app.ts'
  },
  output: {
    filename: 'js/[name].js'
  },
  resolve: {
    root: [path.join(__dirname,'node_modules')],
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/app.bundle.js')
  ],
  devtool: 'source-map'
}
