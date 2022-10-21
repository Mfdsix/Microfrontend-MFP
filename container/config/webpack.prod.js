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
                auth: `auth@${baseUrl}/auth/latest/remoteEntry.js`,
                marketing: `marketing@${baseUrl}/marketing/latest/remoteEntry.js`,
            },
            shared: packagesJson.dependencies
        }),
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, config)