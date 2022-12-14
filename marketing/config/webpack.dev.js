const { merge } = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packagesJson = require("../package.json")

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        // historyApiFallback: {
        //     index: '/index.html'
        // },
        historyApiFallback: true
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packagesJson.dependencies
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)