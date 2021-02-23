//component中的组件自动全局注册
import Vue from 'vue'


const changeStr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const requireComponent = require.context('./', false, /\.vue$/)

const installComponent = () => {
    requireComponent.keys().forEach(fileName => {
        let config = requireComponent(fileName)
        console.log(config) // ./child1.vue 然后用正则拿到child1
        let componentName = changeStr(
            fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
        )
        Vue.component(componentName, config.default || config)
    })
}

export default {
    installComponent
}