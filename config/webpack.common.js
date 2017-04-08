const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
    entry: {
        vendor: './client/vendor.ts',
        main: './client/main.ts',
    },
    output: {
        path: path.resolve(__dirname, '../client_dist/js'),
        publicPath: '/client_dist/', //reference path in html
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: [{
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'client/tsconfig.json'
                        }
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                use: 'html-loader?minimize=false'
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'url-loader?limit=25000'
            }
        ]
    }
};