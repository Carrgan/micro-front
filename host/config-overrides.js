const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


// config-overrides.js
module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    config.plugins.push(...[
        new ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                wpc: 'wpc@http://localhost:3001/_next/static/chunks/remoteEntry.js'
            }
        })
        // new HtmlWebpackPlugin({
        //     template: './public/index.html',
        // }),
    ])
    return config
}