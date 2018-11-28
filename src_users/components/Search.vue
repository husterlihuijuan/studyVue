<template>
    <div class="header">
        <h2>Search Github Users</h2>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="searchName"/>
            <button @click="search">Search</button>
        </div>      
    </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    export default{
        data(){
            return {
                searchName:''
            }
        },
        methods:{
            search(){
                const searchName = this.searchName.trim();
                if(searchName){
                    //发布搜索的消息
                    PubSub.publish('search',searchName)
                }
            }
        }

    }
</script>

<style>
    .header{
        background-color:rgb(179, 174, 174);
        height:200px;
        padding-left:100px;
        padding-top:50px;
        margin-bottom:20px;
    }
</style>
