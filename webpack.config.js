var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        path.join(__dirname, 'index.js')
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
            },
            {
                test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true
    }
}