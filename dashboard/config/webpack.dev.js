const { merge } = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const commonConfig = require("./webpack.common")
const packagesJson = require("../package.json")

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8083,
        // historyApiFallback: {
        //     index: '/index.html'
        // },
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry',
            exposes: {
                './DashboardApp': './src/bootstrap'
            },
            shared: packagesJson.dependencies
        }),
        new htmlWebpackPlugin({
            template: './public/index.html',
            publicPath: '/'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)