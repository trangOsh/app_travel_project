const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-wepback-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry:'./src/client/index.js',
    mode: 'production',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.scss$/,
                use:[ 'style-loader','css-loader', 'sass-loader']
            },
            // {
            //     test: /\.scss$/,
            //     use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            // }
        
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/view/index.html',
            filename:'./index.html',
        }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css'
        // }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
         }),
    
        new BundleAnalyzerPlugin()
    
    ],
    // optimization: {
    //     minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // },


}


// npm install mini-css-extract-plugin
// npm install optimize-css-assets-webpack-plugin
// npm install terser-webpack-plugin