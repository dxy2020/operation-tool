const path = require('path')
const { mode } = require('./webpack.config')
module.exports = {
  entry: "./test/index.js",
  output: {
    path: path.resolve(__dirname, "./tes"),
    filename: "[name].js"
  },
  mode: "development"
}