const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
    context: path.resolve(__dirname, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        plugins: [new TsconfigPathsPlugin()],
    },
    entry: {
        app: "./index.tsx",
        styles: "./styles.scss",
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: 
                [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",
            },
            {
              test: /\.css$/,
              //exclude: /node_modules/,
              use: [
                {
                  loader: "style-loader",
                },
                {
                  loader: "css-loader",
                },
              ],
            },
            {
                test: /\.wav$/,
                loader: "file-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    devtool: "eval-source-map",
    devServer: {
        static: path.join(__dirname, "./src"),
        historyApiFallback: true,
    },
    stats: "errors-only",
};