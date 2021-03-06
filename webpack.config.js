const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function(env) {
    var commonConfig = {
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
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('styles.css')
        ]
    }

    if (env && env.production) {
        // Production config
        commonConfig.plugins.push(new UglifyJSPlugin())
    } else {
        // Development config
        commonConfig.plugins.push(new HtmlWebpackPlugin())
    }

    return commonConfig
}
