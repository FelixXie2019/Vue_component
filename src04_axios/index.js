import Vue from 'vue'
import App from './App'

Vue.config.productionTip=false;

new Vue({
    beforeCreate() {
        Vue.prototype.$eventBus=this
    },
    el:'#root',
    components:{
        App:App
    },
    template:'<App/>'
})