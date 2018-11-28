<template>
    <div style="margin-left:10px;">
        <h2>Home 组件</h2>
        <div>
            <ul  class="nav nav-tabs">
                <li><router-link to="/home/news">News</router-link></li>
                <li><router-link to="/home/message">Message</router-link></li>
            </ul>
            <div>
                <router-view></router-view>
                
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style>

</style>

