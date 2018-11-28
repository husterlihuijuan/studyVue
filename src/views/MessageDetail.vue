<template>
    <ul>
        <li>id:{{messageDetail.id}}</li>
        <li>title:{{messageDetail.title}}</li>
        <li>content:{{messageDetail.content}}</li>
    </ul>

</template>

<script>
    const allMessageDetails = [
                    {id:1,title:'message1',content:'content1'},
                    {id:2,title:'message2',content:'content2'}
                ]
    export default{
        data(){
           return {
                messageDetail:{}
           }
        },
        mounted(){//该钩子函数只会执行一次
            var that = this;
            this.messageDetail = allMessageDetails.find(function(detail){
                return detail.id == that.$route.params.id
            })
        },
        watch:{//监测变化
            //路由路径发生变化时触发
            $route:function(value){//value是 $route 的值
                this.messageDetail = allMessageDetails.find(function(detail){
                    return detail.id == value.params.id
                })

            }
        }
    }
</script>

<style>

</style>

