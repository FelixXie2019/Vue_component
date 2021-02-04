import Vue from 'vue'
import App from './App.vue'  //引入自定义组件，记得要用路径
import store from './vuex/store'


//注册全局组件
Vue.component('App',App)
new Vue({
    el:'#root',
    component:{
        App:App
    },
    store,  //所有的组件对象都能有一个指定store属性:$store
    template:'<App/>'
})
