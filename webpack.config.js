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
                                ['es2015', { modules: false }],
                                'react',
                                'stage-2'
                            ],
                        }
                    }
                ]
            }
        ]
    },

    // serveur de dev
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },

    // source map
    devtool: 'source-map'

};