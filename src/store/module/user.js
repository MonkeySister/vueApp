export default {
    state: {
        token: localStorage.getItem('token'),
        access: '',
    },
    getters: {},
    //都是同步事务
    mutations: {
        setAccess(state, access) {
            state.access = access
        },
    },
    //可以包含任意异步操作
    actions: {
        //获取用户相关信息
        getUserInfo(state, commit) {
            return new Promise((resolve, reject) => {
                getUserInfo({ Authorization: state.token }).then(res => {
                    let access = ''
                    commit('setAccess', access)
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    },
}