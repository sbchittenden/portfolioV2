const commonPaths = require('./common-paths.js');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: commonPaths.appEntry,
  output: {
    filename: 'app.js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          { 
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      title: 'Amazeballs',
      template: './src/index.html', // Load a custom template (lodash by default see the FAQ for details)
    })
  ]
};

module.exports = config;


