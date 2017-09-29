var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
})

module.exports = {
    entry: './src/assets/javascripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
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
                        },
                    },
                ],
}﻿
        ]
    },
    plugins: [ 
        extractPlugin,
        new webpack.optimize.UglifyJsPlugin({
            // ...
        })
    ]
};