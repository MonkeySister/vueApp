import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './module/user'

export default new Vuex.Store({
    state: {},
    getters: {
        token: state => state.user.token,
        loginTime: state => state.user.loginTime
    },
    mutations: {},
    actions: {},
    modules: {
        user
    }
})