var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        app: SRC_DIR + '/assets/javascripts/app.js'
    },
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        //publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
                        {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test:   /\.js$/,
                use:    [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["es2015"],
                        }
                    }
                ]
            }﻿,
            {
                test:   /\.html$/,
                use:    [
                   'html-loader'
                ]
            }﻿,
            {
                test:   /\.(jpg|png)$/,
                use:    [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            // publicPath: 'images/'
                        }
                    }
                ]
            }﻿,
            {
                test:   /\.html$/,
                use:    [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            }﻿
        ],
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    plugins: [ 
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'profile.html',
        //     template: 'src/profile.html',
        //     chunks: ['app']
        // }),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin({
            // ...
        })
    ]
};