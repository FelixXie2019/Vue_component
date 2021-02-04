/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import MessageDetail from '../pages/MessageDetail'

//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history', //去掉路径中的#
    //应用中所有路由
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',  //path最左边的/代表项目的根路径
            component:Home,
            children:[
                {
                    path:'/home/news',
                    component:News
                },
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/detail/:id',  //动态路由
                            component:MessageDetail
                        }
                    ]
                }
            ]
        },
        //自动重定向的路由
        {
            path:'/',
            redirect:'/about'
        },
    ]
})