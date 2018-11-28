<template>
    <div class='todo-footer'>
        <div>
            <input type='checkbox' v-model='isAllCheck'>

            <span>已完成{{completedTodo}}</span>
            <span>/全部{{todos.length}}</span>
        </div>
        
        <button class='btn' @click='deleteCompleteTodos' v-show='completedTodo'>清除已完成任务</button>
    </div>
    
</template>
<script>
    export default{
        props:{
            todos:Array,
            deleteCompleteTodos:Function,
            selectAllTodos:Function
        },
        data(){
            return{
                check:false
            }
        },
        computed:{
            completedTodo(){
                return this.todos.filter(todo=>todo.complete).length
            },
            isAllCheck:{
                get(){
                    return this.completedTodo === this.todos.length && this.completedTodo !==0
                },
                set(value){//value是当前checkbox的值 就是 当前是否勾选

                    this.selectAllTodos(value)
                }
            }
        }
    }
</script>
<style>
.todo-footer{
    width:300px;
    display:flex;
    justify-content:space-between;
    align-items: center;
}
.btn{
    color:#fff;
    background: #ff0000;
    
}
</style>
