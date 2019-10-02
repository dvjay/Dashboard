const path = require("path");
const webpackMerge = require("webpack-merge");

const env = process.env.NODE_ENV;
const rootDirPath = path.resolve(__dirname, "../");
const outputDirPath = path.join(rootDirPath, "dist");
const modeConfig = context => require(`./webpack.${context.env}`)(context);

module.exports = () => {
  return webpackMerge(
    {
      mode: process.env.NODE_ENV,
      externals: {
        'Config': JSON.stringify(require('../config/config.common.json'))
      }
    },
    modeConfig({env, rootDirPath, outputDirPath})
  )
};