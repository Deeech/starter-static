'use strict';

var path = require('path');

var paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  //src: path.join(__dirname, 'dev'),
}

module.exports = {
  entry: path.join(paths.src, 'js/entry'),
  output: {
    path: path.join(paths.dist, 'js/'),
    filename: 'build.js',
    library: 'app'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.pug', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }
}
