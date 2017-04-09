const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const extractCSS = new ExtractTextPlugin('vendor.css');
/*
module.exports = (env) => {
    const sharedConfig = {
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
                    use: extractCSS.extract({
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: 'url-loader?limit=25000'
                }
            ]
        }
    };

    return [sharedConfig];
}*/
module.exports = {
    entry: {
        vendor: './client/vendor.ts',
        main: './client/main.ts'
    },
    output: {
        path: path.resolve(__dirname, '../client_dist/'),
        publicPath: '/client_dist/', //reference path in html
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: 'client/tsconfig.json'
                    }
                }, 
                'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader'
                // })
                exclude: /node_modules/,
                //loaders: 'style-loader!css-loader!'
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'url-loader?limit=25000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin()
    ]
};