import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"
import { Modal, Message } from "view-design"

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err)
// }

Vue.use(VueRouter)

// 自动化路由注册
const requiredRoutes = require.context(".", false, /.js$/)
const getRoutes = []
requiredRoutes.keys().forEach((key) => {
  if (key === "./index.js") return
  getRoutes.unshift(requiredRoutes(key).default[0])
})

const baseRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Index"),
  },
]

let routes = [...new Set([...baseRoutes, ...getRoutes])]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!store.getters.token && to.name != "login") {
    Message.error({
      content: "登陆过期,请重新登陆！！",
    })
    next({
      name: "login",
    })
  } else {
    next()
  }
})

export default router
