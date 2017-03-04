const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['latest']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
