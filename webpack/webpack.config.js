const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const resolve = require("./webpack.resolve");

const modeConfig = env => require(`./webpack.${env}`)(env);

module.exports = () => {
  return webpackMerge(
    {
      mode: process.env.NODE_ENV,
      resolve
    },
    modeConfig(process.env.NODE_ENV)
  )
};