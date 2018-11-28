
//入口js： 创建vue实例
/*
使用根组件的步骤：
先引入根组件
然后映射根组件标签；
使用根组件标签
*/
import Vue from 'vue'//引入vue
import App from './App'//先引入根组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },//然后映射根组件标签
  template: '<App/>'//使用根组件标签
})
