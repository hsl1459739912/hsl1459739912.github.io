
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.config = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        chunks: ["main",'jquery'],
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/bed.html",
        inject: true,
        chunks: ["bed"],
        filename: "static/pages/bed.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/chair.html",
        inject: true,
        chunks: ["chair"],
        filename: "static/pages/chair.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/detail.html",
        inject: true,
        chunks: ["detail"],
        filename: "static/pages/detail.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/login.html",
        inject: true,
        chunks: ["login"],
        filename: "static/pages/login.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/more.html",
        inject: true,
        chunks: ["more"],
        filename: "static/pages/more.html"
    }), 
    new HtmlWebpackPlugin({
        template: "./src/pages/shopcar.html",
        inject: true,
        chunks: ["shopcar"],
        filename: "static/pages/shopcar.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/sofa.html",
        inject: true,
        chunks: ["sofa"],
        filename: "static/pages/sofa.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/storage.html",
        inject: true,
        chunks: ["storage"],
        filename: "static/pages/storage.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/detailsofa.html",
        inject: true,
        chunks: ["detailsofa"],
        filename: "static/pages/detailsofa.html"
    }),
]

