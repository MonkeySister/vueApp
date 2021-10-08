import axios from "axios"
import store from "@/store"

// 创建axios实例
const api = axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: "https://wserverone.5kmds.com/swechat",
  timeout: 5000,
})

// 请求拦截器
api.interceptors.request.use(
  function(config) {
    console.log(config)
    // 判断token并赋值到header
    if (store.getters.token) {
      config.headers["token"] = store.getters.token
    }

    if (config.method === "post") {
      config.data = config.parameter || {}
      config.data.brandId = 1
      // config.contentType
      //   ? config.data
      //   : (config.data = Qs.stringify(config.data))
    } else if (config.method === "get") {
      config.params = config.parameter || {}
      config.params.brandId = 1
    }

    console.log(config)
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default api
