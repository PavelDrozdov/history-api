/**
 * Webpack main configuration file
 */

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const environment = require('./configuration/environment');

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, 'app.js'),
  },
  output: {
    filename: '[name].js',
    path: environment.paths.output,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HTMLWebpackPlugin({
      inject: true,
      hash: false,
      filename: 'index.html',
      template: path.resolve(environment.paths.source, 'index.html'),
      favicon: path.resolve(environment.paths.source, 'favicon.ico'),
    })
  ],
  target: 'web',
};
