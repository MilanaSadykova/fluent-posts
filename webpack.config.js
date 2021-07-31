const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/main.tsx',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss',]
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                exclude: [
                    /node_modules/,
                ],
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                test: /\.tsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-typescript'],
                            ["@babel/preset-env"],
                            ["@babel/preset-react"]
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ],
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',
        hot: true,
        historyApiFallback: true,
    }
}