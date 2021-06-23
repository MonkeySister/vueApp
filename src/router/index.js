import Vue from 'vue'
import VueRouter from 'vue-router'
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
        component: import ('@/views/Home.vue'),
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
    },
    {
        path: '/Map',
        name: 'Map',
        component: import ('@/views/plugIn/baiduMap/index'),
        meta: {
            cache: true
        }
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router