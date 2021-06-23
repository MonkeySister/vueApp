export default {
    state: {
        token: localStorage.getItem('token') || null,
        loginTime: localStorage.getItem('loginTime') || 0
    },
    getters: {},
    //都是同步事务
    mutations: {},
    //可以包含任意异步操作
    actions: {},
}