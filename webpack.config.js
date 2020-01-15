'use strict';

const { resolve } = require('path');

module.exports = {
  // entry point into your code. All client code for this app flows through this file
  // entry: ['babel-polyfill', './client/index.jsx', './client/form.jsx'],
  entry: {
    'index' : './client/index.jsx',
    'form': './client/form.jsx'
  },
  output: {
    // output of script file that gets loaded into your browser
    filename: './client/[name].js',
    path: __dirname + '/public',
    chunkFilename: '[id].[chunkhash].js'
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  // Rules define what you need to transpile (which folders and files) and how (loader)
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './client'),
        loader: 'babel-loader'
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i, 
      //   loader: "file-loader?name=/public/icons/[name].[ext]"
      // }
    ]
  }
};
