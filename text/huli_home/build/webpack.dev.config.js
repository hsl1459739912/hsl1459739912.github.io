// 1.【模块引入】
const webpack = require('webpack');
const path    = require('path');
const glob    = require('glob');
const Entry   = require('./webpack.entry');
const HTML    = require('./webpack.html');
const Loader  = require('./webpack.loader');
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const CopyWebpackPlugin    = require("copy-webpack-plugin");


module.exports = {
    /*devtool: 'source-map',*/
    context: path.resolve(__dirname, '../'),
    entry: Entry.config,
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: "static/js/[name].js",
        publicPath: "http://localhost:8080/"
    },
    module: {
        rules: Loader.config,
    },
    plugins: [
        ...HTML.config,
        //new CleanWebpackPlugin(["../dist/static"]),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('static/css/[name].css'),
        new CopyWebpackPlugin([
            {
                from:'./src/json',
                to: './static/json'
            }
        ]),
        new webpack.BannerPlugin("版权所有， 翻版必究！"),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
    ],
    resolve: {
        alias: {
            'Router': path.resolve(__dirname, '../src/js/router.js'),
            'Common-LESS': path.resolve(__dirname, '../src/less/common.less')
        }
    },
    devServer:{
        contentBase:path.resolve(__dirname,'./dist'),
        host:'localhost',
        port:8080,
        open:true,
        inline: true,
        hot: true
    }
}
