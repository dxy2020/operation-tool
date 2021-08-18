const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: {
    "operation-tool": "./src/index.js",
    "operation-tool.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    library: "operationTool",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  mode: "none",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        test: /\.min\.js$/
      })
    ]
  } 
}