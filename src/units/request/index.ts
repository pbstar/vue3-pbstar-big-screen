//封装axios
import axios from 'axios';

const request = axios.create({
  baseURL: '/api', // 设置请求的基础URL
  timeout: 5000, // 设置请求超时时间
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  }
)

export default request;