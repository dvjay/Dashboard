/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ENV = "development";

module.exports = () => ({
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    writeToDisk: true,
    progress: true,
    publicPath: "/",
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
              "process.env.NODE_ENV": JSON.stringify(ENV)
            })
          ],
});