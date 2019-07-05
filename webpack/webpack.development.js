/* eslint-disable */
const resolve = require("./webpack.resolve");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (context) => ({
  entry: ['./src/index'],
  output: {
    path: context.outputDirPath,
    publicPath: "/",
    filename: 'bundle.js',
  },
  devServer: {
    compress: true,
    port: 9001,
    open: true,
    writeToDisk: true,
    progress: true,
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  resolve,
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          'style-loader', 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
              filename: '[name].css',
              chunkFilename: '[id].css'
            }),
            new CleanWebpackPlugin()
          ],
});