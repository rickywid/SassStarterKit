var ExtractTextPlugin = require('extract-text-webpack-plugin');                 

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css', 'sass')                       
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./style/style.css')                                         
  ],  
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
