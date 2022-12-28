const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: [name].js
    },
    module: {
        rules: [
            {
                test: /\.js$/gi,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/gi,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(gif|png|jpeg|jpg|tiff)/gi,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src/assets"),
                use: "url-loader?limit=30000&name=[name]-[hash].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html",
            path: path.resolve(__dirname, "bundle")
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "bundle"),
        port: 5000,
        host: "127.0.0.1",
        hot: true,
        inline: true,
        historyApiFallback: true
    }
};
