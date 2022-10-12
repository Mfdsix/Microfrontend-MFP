const { merge } = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packagesJson = require("../package.json")

const baseUrl = process.env.BASE_URL

const config = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${baseUrl}/marketing/remoteEntry`
            },
            shared: packagesJson.dependencies
        }),
        new htmlWebpackPlugin({}),
    ]
}

module.exports = merge(commonConfig, config)