<!--hello component-->
<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
//向外默认暴露一个对象
  export default{//配置对象（与Vue一致）
    data(){//配置项data可以写成函数后者对象。但是组件中要求必须写函数
      return {
        msg:'hello'
      }
    }

  }
</script>

<style>
  .msg{
    color:red;
    font-size:30px;
  }
</style>