import Vue from 'vue'
import App from './App.vue'  //引入自定义组件，记得要用路径


//注册全局组件
Vue.config.productionTip=false;

new Vue({
    el:'#root',
    //注册局部组件
    components:{  //注册组件后面才能使用
        App:App
    },
    template:'<App/>'
})
