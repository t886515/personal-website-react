const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const preset = require('./.babelrc');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body',
})


module.exports = {
  entry: './src/client',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
  "presets":[
    "es2015", "react"
  ]
} },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: {
  "presets":[
    "es2015", "react"
  ]
} },
      { use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }), 
        test: /\.css$/
      },
      { test: /\.(jpeg|png|gif|svg|jpg|pdf|ico)$/, use: [{loader: 'url-loader', options: {limit: 40000}}, 'image-webpack-loader']}
    ]
  },
   devServer: {
    historyApiFallback: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('style.css')
  ]
}
