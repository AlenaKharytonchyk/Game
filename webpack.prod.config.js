const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config.js');

delete config.devtool;

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
);
config.optimization = {
    splitChunks: {
        chunks: 'all'
    },
    minimizer: [new UglifyJsPlugin()]
}

module.exports = config;