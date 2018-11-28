import Vue from 'vue'
import App from './App'
import router from './router' //index可以省略不写，引入路由器



new Vue({//配置对象的属性名都是一些默认的属性名，不能随便修改
    el:'#app',
    components:{
        App
    },
    template:'<App/>',
    router
})