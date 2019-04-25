const path = require('path');

module.exports = {
    entry: './app/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.js']
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/dist'
    }
}
