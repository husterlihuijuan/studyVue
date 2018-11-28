<template>
    <div>
        <ul>
            <li v-for="(message,index) in messages" :key="message.id">                
                <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
                <button @click="pushShow(message.id)">push 查看</button>
                <button @click="replaceShow(message.id)">replace查看</button>
            </li>
        </ul>
        <button @click="$router.back()">back</button>
        <hr>
        <router-view></router-view>
    </div>
    
    
</template>

<script>
    export default{
        data(){
            return {
                messages:[]
            }
        },
        mounted(){
            var that = this;
            //模拟ajax请求从后台请求数据
            setTimeout(()=>{
                const messages = [
                    {id:1,title:'message1'},
                    {id:2,title:'message2'}
                ]
                that.messages = messages;
            },1000)
        },
        methods:{
            pushShow(id){
                this.$router.push(`/home/message/detail/${id}`);
            },
            replaceShow(id){
                this.$router.replace(`/home/message/detail/${id}`);
            }
        }
    }
</script>

<style>

</style>

