var webpack = require('webpack');
module.exports = {
  entry: './src/App.js',
  output: {
    filename: './build/bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query:{
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      }
    ]
  }
}
// 先es2015 后react
//
//
// entry: 
// output: 
// module --> loaders -> loader