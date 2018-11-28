<template>
    <div class="todo-wrap">
        <div class='container'>
            <TodoHeader :addTodos='addTodos'/>
            <TodoList :todos="todos" :deleteTodo='deleteTodo'/>
            <TodoFooter :todos='todos' :selectAllTodos='selectAllTodos' 
                    :deleteCompleteTodos='deleteCompleteTodos'/>            
        </div>
        
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader'
    import TodoList from './components/TodoList'
    import TodoFooter from './components/TodoFooter'
    import storageUtil from './util/storageUtil'
    export default{
        data(){
            return {
                /*
                使用localStorage进行本地储存
                当todos有变化时进行储存操作 
                深度监视 即内部发生任何改变都要监视到 使用watch
                */
                //从localStorage中读取todos      
                //window.localStorage.getItem('todosKey') 是一个字符串形式 ,且无值的时候返回的是null     
                //todos:JSON.parse(window.localStorage.getItem('todosKey') || '[]')
                todos:storageUtil.readTodos()
            }
        },        
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },
        methods:{
            addTodos(title){
                const todo = {title,complete:false};
                this.todos.push(todo);
            },
            deleteTodo(index){
                this.todos.splice(index,1);
            },
            //删除所有 complete为true的todo
            deleteCompleteTodos(){
                this.todos = this.todos.filter(function(todo){
                    return !todo.complete
                })
            },
            //全选 或者 全不选
            selectAllTodos(check){
                this.todos = this.todos.map(function(todo){
                    todo.complete = check;
                    return todo;
                })
            }
        },
        watch:{//监视
            todos:{
                deep:true,//深度监视
                handler(value){
                    //将todos最新的值的json数据 保存到localStorage
                   // window.localStorage.setItem('todosKey',JSON.stringify(value))
                   storageUtil.saveTodos(value)
                }
            }
        }
    }
</script>

<style>
.todo-wrap{
    width:300px;
   
    margin:10px auto;
    background:rgb(199, 236, 233);
    padding:10px;
    box-sizing: content-box;
    border-radius:5px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.container{
    flex:0;
}


</style>
