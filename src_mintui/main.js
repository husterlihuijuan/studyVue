import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'

//把mint-ui组件 注册成标签（全局）
Vue.component(Button.name,Button)

new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})