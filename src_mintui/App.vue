<template>
    <mt-button type="primary" @click.native="handleClick">Test</mt-button>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default{
        methods:{
            handleClick(){
                Toast('提示信息')
            }
        }
    }
</script>

<style>

</style>
