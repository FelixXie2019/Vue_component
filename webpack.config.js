const path=require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={    //配置对象
    //入口
    entry: {
        app:path.resolve(__dirname,'src/index.js')
    },
    //出口
    output: {
        filename: "static/js/[name].bundle.js", //可以带路径
        path: path.resolve(__dirname,'dist')
    },
    //模块加载器
    module: {
        rules: [
            //处理ES6
            {
                test: /\.js$/,
                include: [path.resolve(__dirname,'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            //处理css
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            //处理图片
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
                        },
                    },
                ],
            },

        ]
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html', //将哪个页面作为模板页面处理(在根目录查找)
            filename:'index.html' //生成页面(在output指定的path下)
        })
    ],
    devServer: {
        open:true, //自动打开浏览器
        // quiet:true //不做太多的日志输出
    },

}