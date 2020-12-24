const common = require('./webpack.common.config')
const merge = require('webpack-merge')
var MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new MergeJsonWebpackPlugin({
      "files": [
        "./src/ext/manifest.common.json",
        "./src/ext/manifest.dev.json",
      ],
      "output": {
        "fileName": "../manifest.json"
      }
    })
  ]
})
