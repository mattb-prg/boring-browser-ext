const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')
var MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'none',
    plugins: [
        new MergeJsonWebpackPlugin({
            "files": [
                "./src/ext/manifest.common.json",
                "./src/ext/manifest.prod.json",
            ],
            "output": {
                "fileName": "../manifest.json"
            }
        })
    ]
})
