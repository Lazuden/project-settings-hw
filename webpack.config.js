const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: argv.mode === "production" ? 'hidden-source-map' : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MiniCssPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
      })
    ],
    module: { 
        rules: [
            {
                test: /\.jsx?/i,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            },
            {
                test: /\.(png|jpe?g)/i,
                use: 'file-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        } 
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    }
});