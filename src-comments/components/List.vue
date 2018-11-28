<template>
    <div class='col-md-8'>
        <h3 class='reply'>评论回复：</h3>
        <h2 v-show="comments.length===0">暂无评论，在左侧进行添加</h2>
        <ul class="list-group">
            
            <Item v-for="(comment,index) in comments" :key="index"
             :comment="comment" :deleteComment="deleteComment" :index='index'/>
        </ul>
        
    </div>
</template>

<script>
import Item from './Item'
    export default {
        //声明接受 父组件传过来的值 这个属性就会成为组件对象的属性 使用时和data一样
        props:['comments','deleteComment'],       
        components:{
            Item
        }
    }
</script>

<style>
    
</style>