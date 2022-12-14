const { merge } = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packagesJson = require("../package.json")

const config = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        },
        // historyApiFallback: true
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry',
                auth: 'auth@http://localhost:8082/remoteEntry',
                dashboard: 'dashboard@http://localhost:8083/remoteEntry'
            },
            shared: packagesJson.dependencies
        }),
        new htmlWebpackPlugin({
            template: './public/index.html',
            publicPath: '/'
        })
    ]
}

module.exports = merge(commonConfig, config)