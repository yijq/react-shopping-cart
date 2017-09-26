const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowser = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        host: "0.0.0.0",
        historyApiFallback: true,
        port: "7072",
        hot: true
    },
    entry: path.resolve(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: ['babel-loader'],
                include: path.join(__dirname,'./src')
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }) ,
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowser({
            url: 'http://localhost:7072'
        })
    ],
    resolve: {
        alias: {
            components: path.join(__dirname,'./src/components'),
            pages: path.join(__dirname,'./src/pages'),
            native: path.join(__dirname,'./src/Native')
        }
    }
}