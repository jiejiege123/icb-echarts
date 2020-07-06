/*
 * @Author: your name
 * @Date: 2020-06-24 08:42:37
 * @LastEditTime: 2020-06-28 15:41:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\utils\request.js
 */

import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['X-Requested-With'] = XMLHttpRequest
    return config
  },
  error => {
    // do something with request error
    console.error(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code && res.code !== 200) {
      // return Promise.reject(new Error(res.msg || 'Error'))
      return Promise.reject(res.msg)
    } else {
      return res
    }
  },
  error => {
    console.error('err:' + error) // for debug

    return Promise.reject(error)
  }
)

export default service
