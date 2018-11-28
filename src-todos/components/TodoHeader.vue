<template>
    <div class='todo-header'>
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"
         class='content' v-model='title' @keyup.enter='addItem(title)'/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title:''
            }
        },
        props:{
            addTodos:Function
        },
        methods:{           
            addItem(title){
                if(title===''){
                    alert('can not be null');
                    return 
                }
                this.addTodos(title);
                this.title='';
            }
        }
    }
</script>
    
<style>
    .todo-header{
        margin:20px 0;
    }
    .content{
        width:300px;
    }
</style>

