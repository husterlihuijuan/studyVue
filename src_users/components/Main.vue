<template>
    <div>
        <h2 v-if="firstView">输入用户名进行搜索</h2>
        <h2 v-if="loading">loading.....</h2>
        <h2 v-if="errorMessage">{{errorMessage}}</h2>
        <div class="row">
            <div class="card" v-for="(user,index) in users">
                <a :href="user.url" target="_blank">
                    <img :src="user.avatar_url" style="width:100px" alt="img"/>
                </a>
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
    import PubSub from 'pubsub-js'
    import axios from 'axios'
    export default{
        data(){
            return {
                firstView:true,//为true时，显示第一个界面
                loading:false,//为true时，标志在请求中，显示第二个页面
                users:null,//请求成功后，请求到的数据 [{url:'',avatar_url:'',name:''}]
                errorMessage:'',//请求失败

            }
        },
        mounted(){
            //订阅搜索的消息
            PubSub.subscribe('search',(msg,searchName)=>{//说明需要发ajax请求去搜索
                const url = `https://apo.github.com/search/users?q=${searchName}`;
                //更新为请求中的状态
                this.loading = true;
                this.firstView = false;
                this.users = null;
                this.errorMessage = '';
                //发ajax请求
                axios.get(url).then(response=>{
                    const result = response.data;
                    const users = result.items.map(item=>({
                        url:item.html_url,
                        avatar_url:item.avatar_url,
                        name:item.login
                    }));
                    //更新为成功状态
                    this.loading = false;
                    this.users = users;
                    
                }).catch(error=>{
                    this.loading = false;
                    this.errorMessage = 'error!!!'
                })
            })
        }
    }
</script>

<style>
    .card{
        float:left;
        width:33.333%;
        padding:0.75rem;
        margin-bottom:2rem;
        border:1px solid #efefef;
        text-align:center;
    }

    .card>img{
        margin-bottom:0.75rem;
        border-radius:100px;
    }

    .card-text{
        font-size:85%;
    }
</style>



