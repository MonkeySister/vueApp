import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

// 全局自定义组件
import "@/components/global.js"

// 全局注册的iview组件
import "@/components/iviewComponents.js"
import "./assets/less/iview.less"
import "./assets/less/index.less"

//全局挂载自定义指令来检测权限
import "./permission/index"

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
