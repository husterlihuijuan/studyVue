/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import News from '../views/News.vue'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({//向外暴露一个路由器
    //n个路由
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/message', //path最左侧的斜杠永远代表根路径
                    component:Message,
                    children:[
                        {
                            path:'/home/message/detail/:id', //:用来占位
                            component:MessageDetail
                        }
                    ]
                },
                {
                    path:'/home/news',
                    component:News
                },
                {
                    path:'/home',
                    redirect:'/home/news'
                }
            ]
        },
        {//当请求根路径时，重定向请求home
            path:'/',
            redirect:'/home'
        }
    ]
})