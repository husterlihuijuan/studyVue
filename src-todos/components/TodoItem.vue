<template>
   
    <li class='todo-li' @mouseenter='handleEnter(true)'
     @mouseleave='handleEnter(false)' :style="{background:bgColor}"> 
        <label>
            <input type='checkbox' v-model='todo.complete'/> <span> {{todo.title}}</span>
        </label>
        
        <button class='btn btn-danger' v-show='isShow' @click='deleteItem'>delete</button>
    </li>
       
        
</template>

<script>
export default{
   props:{
      todo:Object,
      index:Number,
      deleteTodo:Function
   },
   data(){
       return {
           bgColor:'white',
           isShow:false
       }

   },
   methods:{
       handleEnter(bool){
           this.isShow = bool;
           this.bgColor = bool?'#eae7e7':'white';
       },
       deleteItem(){
           if(window.confirm('Do you sure delete it?')){
               this.deleteTodo(this.index);
           }
       }
   }
}
</script>

<style>
.todo-li{
    display:flex;
    justify-content: space-between;
    align-items: center;
}

</style>
        

    