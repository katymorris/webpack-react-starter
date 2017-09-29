var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/assets/javascripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    }
};