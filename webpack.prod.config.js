const path = require('path');

const webpackCommonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const HappyPack = require('happypack');

const TerserPlugin = require("terser-webpack-plugin");

const cwd = process.cwd();
const outputPath = path.join(cwd, 'build');

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: 'happypack/loader?id=styles',
        },
      ]
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threads: 4,
      loaders: ['babel-loader'],
    }),
    new HappyPack({
      id: 'styles',
      threads: 2,
      loaders: ['style-loader', 'css-loader'],
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      parallel: 4,
    })],
  },
});
