<template>
    <div>
        <header class='site-header' jumbotron>
            <h1>请对Vue发表评论</h1>
        </header>
        <div class='row'>
            
            <Add :addComment="addComment"/>
            <List :comments="comments" :deleteComment="deleteComment"/>
        </div>
    </div>
</template>

<script>
    import Add from './components/Add'
    import List from './components/List'
    export default{
        data(){
            return{
                comments:[//数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
                    {name:'bob',content:'very good'},
                    {name:'joe',content:'so easy'},
                    {name:'tom',content:'duficueet'}
                ]

            }
        },
        components:{
            Add,
            List
        },
        methods:{
            //add
            addComment(comment){
                this.comments.unshift(comment);
            },
            //delete指定下标的评论
            deleteComment(index){
                this.comments.splice(index,1)
            }
        }
    }
</script>

<style>

</style>
