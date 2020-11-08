const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/index.ts'),
    devtool: 'source-map',
    output: {
        filename: 'dist/app.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};