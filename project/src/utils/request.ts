import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_ENV,
  timeout: 5000,
})

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers.token = ''
    return config
  },
  (error: any) => {
    // 错误处理
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res.code !== 200 || !res.success) {
      //错误code 统一拦截
      ElMessage.error(response.data.msg)
      return Promise.reject(new Error(response.data.msg))
    } else {
      return res
    }
  },
  (error) => {
    ElMessage({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
   })
    return Promise.reject(error)
  }
)
export default service
