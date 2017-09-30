const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body',

})


module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }), 
        test: /\.css$/
      },
      { test: /\.(jpeg|png|gif|svg|JPG|pdf|ico)$/, use: [{loader: 'url-loader', options: {limit: 40000}}, 'image-webpack-loader']}
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('style.css')
  ]
}
