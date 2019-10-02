/* eslint-disable */
const path = require('path');
const root = process.cwd();

module.exports = {
  alias: {
    "src": path.resolve(root, "src")
  },
  extensions: [".ts", ".tsx", ".js", ".jsx"]
};