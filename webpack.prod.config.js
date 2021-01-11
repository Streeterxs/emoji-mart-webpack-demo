const path = require('path');

const webpackCommonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');

const TerserPlugin = require("terser-webpack-plugin");

const cwd = process.cwd();
const outputPath = path.join(cwd, 'build');

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin({
      parallel: 4,
    })],
  },
});
