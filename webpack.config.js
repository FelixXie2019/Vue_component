const path=require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
                        plugins:[
                            ["component", {
                                "libraryName": "mint-ui",
                                "style": true
                        }],
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                }
            },
            //处理css
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
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
            //处理Vue单文件组件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    //插件
    plugins: [

        new HtmlWebpackPlugin({
            template:'index.html', //将哪个页面作为模板页面处理(在根目录查找)
            filename:'index.html' //生成页面(在output指定的path下)
        }),
        new VueLoaderPlugin(),

    ],
    devServer: {
        open:true, //自动打开浏览器
        // quiet:true //不做太多的日志输出
        proxy:{
            // '/api':'http://localhost:3000'
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api' : ''}
            },
            changeOrigin:true  //如果协议/主机也不相同，必须加上
        }
    },
    // 引入模块的解析
    resolve: {
        extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
        alias: { // 路径别名(简写方式)
            'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
        }
    },
}