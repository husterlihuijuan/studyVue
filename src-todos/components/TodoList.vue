<template>
    <div class='todo-list'>
        <ul class='todo-item'> 
            <TodoItem v-for='(todo,index) in todos' :key='index'
             :todo='todo' :index='index' :deleteTodo='deleteTodo'/>
        </ul>
        
    </div>
</template>

<script>
import TodoItem from './TodoItem'
   export default{
       components:{
           TodoItem
       },
       props:{
           todos:Array,
           deleteTodo:Function
       }
   }
    
</script>

<style>
    .todo-item{
        list-style: none;
        padding:0;
    }
    .todo-item li{
        border:1px solid #ccbebe;
        padding:5px;
    }
    
</style>