<template>
    <div class='col-md-4'>
        <form>
            <p>用户名</p>
            <input type="text" placeholder="用户名" v-model="name"/>
            <p>评论内容</p>
            <textarea placeholder="评论内容" v-model="content"></textarea>
            <br/>
            <button @click.prevent='add'>提交</button> 
        </form>        
    </div>
</template>

<script>
    export default {
        props:['addComment'],
        data(){
            return {
                name:'',
                content:''
            }
        },
        methods:{
            add(){
                //检查输入是否合法
                //根据输入的数据，封装成一个comment对象
                //添加到comments中
                const name = this.name,
                      content = this.content;
                if(!name || !content){
                    alert('不能为空')
                    return
                }
                const comment = {
                    name,
                    content
                }
                this.addComment(comment)
                //清除输入
                this.name = "";
                this.content = "";
                
            }
        }
    }
</script>

<style>
</style>

