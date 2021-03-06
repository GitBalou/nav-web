const webpack = require('webpack');
const path = require("path");

module.exports = {
    // folder containing files to process
    context: path.resolve(__dirname, './src'),

    // entry point for the processing tree
    entry: {
        index: ["./index.js"]
    },

    // output move to this folder
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: '[name].bundle.js',
        publicPath: '/assets'
    },

    // additional module
    module: {
        rules: [
            // babel transpiler for es6 / react script
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }], // es2015 syntax
                                'react', // jsx syntax
                                'stage-2' // spread operator
                            ],
                        }
                    }
                ]
            }
        ]
    },

    // serveur de dev
    devServer: {
        contentBase: path.resolve(__dirname, './src'), // index is served from src
        historyApiFallback: true // fallback any 404 error to index.html
    },

    // source map
    devtool: 'source-map'

};