const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = require('./webpack.config.js');
delete module.exports.devtool;
module.exports.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
);
module.exports.optimization.minimizer= [new UglifyJsPlugin()];