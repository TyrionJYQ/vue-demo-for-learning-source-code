const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./dist'),
       
    },
    resolve: {
        // 设置别名
        alias: {
            'vue': path.resolve('node_modules/vue/dist/vue.runtime.esm.js'),
            '@components': path.resolve('./src/components'),
            '@js':path.resolve('./src/js')
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
           
        ]
    },
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        host:'192.168.1.105'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new VueLoaderPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};