const path = require('path');

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotEnv = require('dotenv-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const cwd = process.cwd();
const outputPath = path.join(cwd, 'build');

module.exports = {
  context: path.resolve(cwd, './'),
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [path.resolve(__dirname, './src/index.tsx')],
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'main.js',
    pathinfo: false,
    futureEmitAssets: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new dotEnv({
      path: './.env',
    }),
    new ReactRefreshPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    contentBase: outputPath,
    disableHostCheck: true,
    // headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: { disableDotRule: true },
    hot: true,
    port: 4001,
    hotOnly: false,
    compress: true,
  },
};
