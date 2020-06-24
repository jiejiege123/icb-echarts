
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
      return Promise.reject(new Error(res.Msg || 'Error'))
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
