import Vue from 'vue'
import App from './App.vue'  //引入自定义组件，记得要用路径


//注册全局组件
Vue.config.productionTip=false;

//创建一个全局的用于绑定事件监听和分发事件的对象：Global Event Bus （全局事件总线）
//事件总线对象就是一个vm
//将其挂载到Vue的原型对象，所有的组件对象就都可以看到这个歌事件总线
//所有组件对象的原型对象是一个vm对象 ==> Vue原型对象是组件对象的原型链上的对象


new Vue({
    beforeCreate() {
        Vue.prototype.$globalEventBus=this
    },
    el:'#root',
    //注册局部组件
    components:{  //注册组件后面才能使用
        App:App
    },
    template:'<App/>'
})
