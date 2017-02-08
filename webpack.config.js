var StyleLintPlugin = require('stylelint-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');     
var Autoprefixer = require('autoprefixer');

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
        loader: ExtractTextPlugin.extract('css-loader?importLoaders=1!postcss-loader!sass-loader')                       
      }
    ]
  },
  plugins: [
    new StyleLintPlugin(),
    new ExtractTextPlugin('./style/style.css')                                         
  ],  
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  postcss: () => {
    return [
      new Autoprefixer()
  ];
}
}
