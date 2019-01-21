const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

const rules = [].concat(
    {
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader',
            },
        ],
    }
);

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    module: {
        rules,
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    externals: [nodeExternals()],
};
