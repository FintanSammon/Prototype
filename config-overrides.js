const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }
    config.plugins.push(
        new CopyWebpackPlugin([{ from: 'src/serviceWorker.js', to: 'serviceWorker.js' }])
    );
    return config;
};
