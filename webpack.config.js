const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const DIST_PATH = path.join(__dirname, "/dist");

const HtmlPlugin = new HtmlWebpackPlugin({
    template: "index.html",
    cache: false,
    minify: {
        caseSensitive: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
    },
});

module.exports = {
        entry: "./src/index.js",
        output: {
            path: DIST_PATH,
            filename: "[name].js",
            publicPath: '/',
        },
        plugins: [
            HtmlPlugin,
            new MiniCssExtractPlugin({
            filename: "[name].css",
            }),
            new CleanWebpackPlugin({}),
        ],
        module: {
            rules: [
            {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
            },
            {
                    test: /\.html$/,
                    use: ["html-loader"],
            },
            {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: "css-loader", options: { importLoaders: 1 } },
                        'postcss-loader'
                    ],
            },
            ],
        },
        devServer: {
            host: '0.0.0.0',
            port: 8080,
            static: {
                directory: path.resolve(__dirname, "./")
            },
            historyApiFallback: true
        },
};
