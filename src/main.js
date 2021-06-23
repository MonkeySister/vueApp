import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.silent = true

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

import driver from './tools/driver/index'
import './tools/driver/driver.scss'

Vue.prototype.$driver = new driver({
    opacity: 0.7,
    allowClose: false, //禁止点击外部关闭
    animate: true,
    doneBtnText: '完成', // 完成按钮标题
    closeBtnText: '关闭', // 关闭按钮标题
    stageBackground: '#fff', // 引导对话的背景色
    nextBtnText: '下一步', // 下一步按钮标题
    prevBtnText: '上一步', // 上一步按钮标题
    showButtons: true,
    onReset: (e) => {
        console.log('关闭指引')
    },
    onNext: (e) => {
        router.push('/About')
    },
})

import swiper from 'swiper'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')