const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const config = require('../config');
const utils = require('./utils.js');

//define a resolve function for absolute file path
const resolve = directory => {
  return path.join(__dirname, '..', directory);
};

//creating linting rule
const createLintingRule = () => ({
  test: /\.(js|jsx)$/,
  loader: 'eslint-loader',
  //PROBABLY means this is happening before save/commit?
  enforce: 'pre',
  include: [resolve('src'), resolve(test)],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
});

//each string will be the name of the library of vendor
//node modules!
// const VENDOR_LIBS = ['react'];

module.exports = {
  //pointing to the main folder?
  context: path.resolve(__dirname, '../'),
  //couple different entry points to define multiple bundles with object
  // key = output js file name, and value as the entry file
  entry: {
    bundle: './src/index.js'
    // vendor: VENDOR_LIBS
  },
  // entry: './src/index/js',
  output: {
    path: config.build.assetsRoot,
    // filename: 'bundle.js',
    //this will dynamically change the output name with the entry object.
    filename: '[name].js',
    //this is for url-loader: prepend build/ on the original path url when url saving that path to get the image from bundle.js
    //file:///Users/nana/Documents/npm-project-boilerplate/5a5d26dc90783605883d868c3855a54f.jpg this is what it would try to go
    //without publicPath..
    //resulting path after adding publicPath:
    //file:///Users/nana/Documents/npm-project-boilerplate/build/5a5d26dc90783605883d868c3855a54f.jpg

    //this not only applies to "url-loader", but any loader that save a direct file path reference to a file in our output dir
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  //webpack 1 these are called loaders. webpack 2+ are called module
  resolve: {
    //When you import a file with these types, don't need to add .js/.jsx/.json at the end, webpack
    //would automatically look for these file types
    extensions: ['.js', '.jsx', '.json'],
    //allow import SOME_FILES from '@/components' --> meaning start looking from src, so no more relative file path!! Always looking
    //from outside! No more confusion...
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      //this checks for eslint boolean and decide if we want to activate eslint or not
      //TODO using spread operator with array in case there's multiple objects of linting rules?
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        //regex expression - only applies to those files ends in js
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        //the acutal rule using babel-preset-env - use .babelrc
        //can also do query?? need to look more into this as it prompts error if no .babelrc file is specified with the
        //same query

        //this will tell babel to not do anything inside of this folder
        // exclude: /node_modules/,

        //this tell babel only translate these files included
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ]
      },
      {
        //$ for end of string, ? for either end e or eg
        test: /\.(jpe?g|png|gif|svg)$/,
        //need to add extra config to url-loader for "image size big or small determination"
        use: [
          {
            loader: 'url-loader',
            //image > 40000 kb, then save to another file, if not, add to bundle.js
            options: {
              limit: 40000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          },
          //resize/compress images for us if necessary
          'image-webpack-loader'
        ]
      },
      //checking on audio/video assets
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 40000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      //for special font type files
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 40000,
      //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
      //   },
      // },
      //for supporting graphql query files
      {
        test: /\.(gql|graphql)$/,
        loader: 'graphql-tag/loader'
      }
      // {
      //   //["style-loader", "css-loader"]
      //   //these loaders are applied from right to the left -> first css loader for parsing css code, then
      //   //use style-laoder to apply the css to the actual html
      //   //this "raw" way of injecting all the CSS style into the style tag into the html documenet itself
      //
      //   //loading css in a separate file is a lot faster than laoding CSS and JS all in one file (and that's what we want to do)
      //   //this ExtractTextPlugin extract all css style into one file, then this can be loaded using link in index.html
      //
      //   //offially, they are the same... but because of how extract text plugin is written, gotta fall back to use this
      //   //legacy property??????? ExtractTextPlugin doesn't support webpack >= 4.0. needs to down-grade webpack for this
      //   //to work.
      //   test: /\.css$/,
      //   // use: ['style-loader', 'css-loader']
      //   use: ExtractTextPlugin.extract({
      //     //this ensure the style will still be applied to the html file using style-loader if things went wrong with
      //     //extract text plugin?
      //     fallback: 'style-loader',
      //     use: 'css-loader',
      //   }),
      // },
    ]
    // node: {
    //   //prevent webpack from injecting moacks to Node native modules
    //   //that are not required by client
    //   dgram: 'empty',
    //   net: 'empty',
    //   tls: 'empty',
    //   child_process: 'empty',
    //   //TODO might not want to disable fs?
    //   fs: 'empty',
    // },
  }
  // devServer: {
  //   port: 8080,
  //   hot: true,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   // historyApiFallback: true
  // },
  // plugins: [
  //   //anything this plugin caught from loaders, will be passed in to ExtractTextPlugin and then be transform into the style.css file
  //   new ExtractTextPlugin('style.css'),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor'
  //   })
  // ]
};
