const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'js/[name].bundle.js', // [name] takes folder name
        path: path.resolve(__dirname, 'dist') // Will create dist folder where files will be bundled
    },
    watch: true, // Watch for any changes to automatically rebuild
    devServer: {
        contentBase: './', // Server from root directory
        open: 'Chrome', // Open with Google Chrome
        compress: true, // Internal way to speed up code
        hot: true //Hot reload
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts/,
                use: [
                    'ts-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', 
                    'css-loader',
                    'sass-loader'               
                ]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

        ]
    },
    resolve: {
        extensions: [
            '.js', '.ts'
        ]
    }
}