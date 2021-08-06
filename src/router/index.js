import Vue from "vue"
import VueRouter from "vue-router"

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

import vuePages from "./vuePages"

const baseRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Index"),
  },
]

let routes = [...new Set([...baseRoutes, ...vuePages])]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
