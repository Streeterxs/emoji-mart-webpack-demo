const path = require('path');

const webpack = require('webpack');
const webpackCommonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const cwd = process.cwd();
const outputPath = path.join(cwd, 'build');

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshPlugin(),
  ],
  watch: true,
  devServer: {
    contentBase: outputPath,
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    hotOnly: false,
    compress: true,
    open: true,
  },
});
