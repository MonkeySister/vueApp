import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//全局挂载自定义指令来检测权限
import { checkAccess } from '@/permission/permission'
Vue.directive('permission', {
    inserted(el, binding) {
        let permission = binding.value
        if (permission) {
            let hasPermission = checkAccess(permission)
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    }
})

//component中的组件自动全局注册
import '@/components/global.js'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')