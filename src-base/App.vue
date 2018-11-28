<!--root component-->
<template>
  <div>
    <img class='logo' src='./assets/logo.png' alt='logo'>
    <!---使用组件标签---->
    <hello/>
  </div>
</template>

<script>
/*
使用组件的步骤：
先引入组件import hello from './components/hello.vue'；
然后映射组件标签；
使用组件标签
*/
import hello from './components/hello.vue'
//向外默认暴露一个对象
  export default{//配置对象（与Vue一致）
    //映射组件标签
    components:{
      hello
    }

  }
</script>

<style>
  .logo{
    width:200px;
    height:200px;
  }
</style>