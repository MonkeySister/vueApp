import axios from 'axios'
import router from 'router'
import store from '@/store/index.js'


// token检查
const checkToken = () => {
    let token = store.getters.token
    let loginTime = store.getters.loginTime
    let now = new Date().getTime()

    // 无token,直接返回
    if (!token) return false

    // 过期前5分钟到30分钟内需要刷新token
    if (!loginTime || (loginTime > (now + 5 * 60 * 1000) && loginTime < (now + 30 * 60 * 1000))) return

}

class Request {


    // 拦截器
    interceptors(instance, url) {

        // 请求拦截器,请求时检查是否有token以及token是否过期
        instance.interceptors.request.use(

            // 请求成功
            config => {

                // 除了这些接口其他都需要检查token
                let urlArr = ['/login', '/refresh']
                if (!urlArr.includes(url)) {

                }


                return config
            },

            // 请求错误
            error => {
                return Promise.reject(error)
            }
        );


        // 响应拦截器
        instance.interceptors.response.use(

            // 响应成功
            response => {
                const { data, status } = response
                return response
            },


            // 响应失败
            error => {
                return Promise.reject(error);
            }
        );


    }


    //创建axios请求
    request(options) {
        const instance = axios.create()
        const config = {
            baseURL: '',
            headers: {},
            timeout: 3000,
        }
        options = Object.assign(config, options)

        // 拦截器
        this.interceptors(instance, options.url)
        return instance(options)
    }


}

const axios = new Request()

export default axios