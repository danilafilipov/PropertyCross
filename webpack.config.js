const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index-bundel.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
    ],
};