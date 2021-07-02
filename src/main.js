import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局组件
import '@/components/global.js'





import './assets/less/index.less'


import { Button, Table, Avatar } from 'view-design';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Avatar', Avatar)
    // import 'view-design/dist/styles/iview.css';



import './assets/less/iview.less'

// import ViewUI from 'view-design';
// Vue.use(ViewUI, {
//     transfer: true,
//     size: 'large',
//     capture: false,
//     select: {}
// });



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')