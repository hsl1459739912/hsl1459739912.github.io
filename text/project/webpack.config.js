//引入模块
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

//引入插件
const CleanWebpackPluin = require('clean-webpack-plugin');//清空文件夹
const HtmlWebpackPlugin = require("html-webpack-plugin");//打包html
const extractCSS = require('extract-text-webpack-plugin');//抽离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//抽离css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css
const PurifyCSS = require("purifycss-webpack");//消除未使用css


//配置任务
module.exports = {
    //配置入口
    entry:{
        main:"./src/js/main.js",
        news:'./src/js/news.js'
    },
    //出口文件
    output:{
        //输出路径
        path:path.resolve(__dirname,'./dist/'),
        //文件名
        filename:'static/js/[name]-bundle-[hash:5].js',
        publicPath:"http://localhost:8080/"
    },
    //加载器
    module:{
        rules:[
            //ES6转换ES5
            {
                //匹配规则
                test:/\.js$/,
                //模块名称
                use:'babel-loader',
                //排除
                exclude:/node_modules/,
            },
            //less
            {  
                test:/\.(less|css)$/,
                use:extractCSS.extract({
                    publicPath: "../../src/style/less/",
                    fallback:'style-loader',
                    use:[{
                        loader:"css-loader",
                        options:{
                            //压缩css
                            mininmize:true
                        }
                    },'postcss-loader','less-loader']
                }),
                exclude:/node_modules/
            },
            //处理图片
            {
                test:/\.(jpg|png|jpeg|gif|svg)/,
                use:{
                    loader:"file-loader",
                    options:{
                        limit:3000,
                        //输出文件名字
                        name:"[name].[ext]",
                        //输出路径
                        outputPath:"static/images"
                    }
                },
                exclude:/node_modules/
            },
            {
                test: /\.html/,
                loader: 'html-withimg-loader'
            }
        ]
    },

    //插件
    plugins:[
        //清空指定文件夹
        new CleanWebpackPluin(['./dist/static']),
        //编译主页
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:true,
            chunks:['main'],
            filename:"/static/index.html"
        }),
        //编译新闻
         new HtmlWebpackPlugin({
            template:'./src/pages/news.html',
            inject:true,
            chunks:['news'],
            filename:"/static/pages/news.html"
        }),
        //抽离css
        new extractCSS('static/css/[name]-[hash:5].css'),
        //压缩css
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g, 
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: { removeAll: false },
                // 避免 cssnano 重新计算 z-index
                safe: false,
                // cssnano 集成了autoprefixer的功能
                // 会使用到autoprefixer进行无关前缀的清理
                // 关闭autoprefixer功能
                // 使用postcss的autoprefixer功能
                autoprefixer: false
            },
            canPrint: true
        }),
        //去除未使用的css
        new PurifyCSS({
            paths:glob.sync(path.join(__dirname,'src/(**/*.html|*.html)'))
        }),
        //版权声明
        new webpack.BannerPlugin('版权所有，翻版必究！'),
        //热更新
        new webpack.HotModuleReplacementPlugin(),
    ],
    //服务和热更新
    devServer:{
        //设置服务器根路径
        contentBase:path.resolve(__dirname,'./dist/static'),
        //设置域名
        host:'localhost',
        //设置端口号
        port: process.env.PORT||8080,
        publicPath: '/dist/',
        openPage: "dist/",
        //是否自动跟踪浏览器
        open:true,
        historyApiFallback: true, 
        //自动刷新
        inline:true,
        //热模块替换
        hot:true
    }
}