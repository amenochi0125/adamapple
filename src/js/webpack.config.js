const path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app : './src/js/app.js'
  },
  output: {
    filename: 'js/[name].js'
  },
  resolve: {
    root: [path.join(__dirname,'node_modules')],
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/app.bundle.js')
  ],
  devtool: 'source-map'
}