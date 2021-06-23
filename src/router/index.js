import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About'

Vue.use(VueRouter)
    /*
      cache:true//是否对组件进行缓存
     */

const routes = [
    //主页
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            cache: true
        }
    },
    {
        path: '/About',
        name: 'About',
        component: About,
        meta: {
            cache: true
        }
    }
]

const router = new VueRouter({
    routes
})

export default router