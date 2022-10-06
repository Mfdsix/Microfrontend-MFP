const { merge } = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry',
            exposes: {
                './MarketingApp': './src/bootstrap'
            }
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)