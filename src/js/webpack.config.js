const path = require('path')
var webpack = require('webpack')

const current = process.cwd()

module.exports = {
  entry: {
    app : './src/js/app.js'
  },
  output: {
    path: path.join(current, 'public/assets/js'),
    filename: '[name].js'
  },
  resolve: {
    root: [path.join(current,'node_modules')],
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
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
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(path.join(current, 'public/assets/js/app.bundle.js'))
  ]
}
