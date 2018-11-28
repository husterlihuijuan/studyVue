<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-offset-2 cool-xs-8">
                <div class="page-header"><h2>Router Basic - 01 </h2></div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">             
                    <router-link to="/home" class="list-group-item">Home</router-link>
                    <router-link to="/about" class="list-group-item">About</router-link>                                      
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

    export default{
        
    }
</script>

<style>
    .container{
        width:1000px;
        margin:0 auto;
    }
    .router-link-active{
        color:red !important;
    }
</style>
