
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.config = [
    {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader", "less-loader"]
        }),
        exclude: /node_modules/
    },
    {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use: {
            loader: "url-loader",
            options: {
                limit: "1024",
                name: "[name].[ext]",
                outputPath: "static/images/"
            }
        },
        exclude: /node_modules/
    },
    {
        test: /\.html/,
        loader: 'html-withimg-loader',
        exclude: /node_modules/
    },
    {
            test: /\.html/,
            loader: 'html-loader'
     }
]