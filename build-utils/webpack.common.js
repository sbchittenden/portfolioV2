const commonPaths = require('./common-paths.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const config = {
  entry: commonPaths.appEntry,
  output: {
    filename: 'app.js',
    path: commonPaths.outputPath
  },
  resolve:
    {
      alias: {
        'handlebars': 'handlebars/dist/handlebars.js'
      }
    },
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        use:[
          {
            loader: "handlebars-loader/?helperDirs[]=" + commonPaths.helperPath
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Amazeballs',
      template: 'src/index.html' // Load a custom template (lodash by default see the FAQ for details)
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/img',
        to: 'img'
      }
    ])
  ]
};

module.exports = config;


