<template>
    <div>
        <div v-if="!repoUrl">loading</div>
        <div v-else>most star repo is <a :href='repoUrl'>{{repoName}}</a></div>
    </div>
</template>

<script>
   import axios from 'axios';
   export default{
       data(){
           return {
               repoUrl:'',
               repoName:''
           }
       },
       mounted(){//初始化完成后触发,发送ajax请求获取数据
        //使用axios发送ajax请求
        axios.get('https://api.github.com/search/repositories?q=v&sort=stars').then(respose=>{
            const result = respose.data;
            const mostRepo = result.items[0];
            this.repoUrl = mostRepo.html_url;
            this.repoName = mostRepo.name;
        }).catch(error=>{
            alert('error!');
        })

       }

   }
</script>

<style>



</style>
