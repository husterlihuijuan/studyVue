<template>
   
        <li class=list-group-item>
            <div class="handle">
                <a href="javascript:;" @click='deleteItem'>删除</a>
            </div>
            <p class="user"><span>{{comment.name}}</span><span>说：</span></p>
            <p class="centence">{{comment.content}}</p>        
        </li>
    
</template>

<script>
export default{
    props:{//指定属性名和属性值的类型
        comment:Object,
        deleteComment:Function,
        index:Number
    },
    methods:{
        deleteItem(){
            const {comment,deleteComment,index} = this;
            if(window.confirm(`确定删除${this.comment.name}的评论吗？`)){
                deleteComment(index)
            }
        }
    }
}
</script>

<style>
</style>
        

    
    