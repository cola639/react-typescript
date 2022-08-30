import axios from 'axios'
import {AxiosError} from 'axios'
import {message, Modal} from 'antd'
import {ApiError} from '@app/api/ApiError'
// import {readToken} from '@app/services/localStorage.service'

export const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // url = base url + request url
  timeout: 8 * 1000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = getToken()

    return config
  },

  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      message.error(res.message || 'Error')

      if (res.code === 401) {
        // to re-login
        message.error('登录超过有效期,正在重新登录')
        // Modal.confirm({
        //     title: '确定登出?',
        //     content:
        //       '由于长时间未操作，您已被登出，可以取消继续留在该页面，或者重新登录',
        //     okText: '重新登录',
        //     cancelText: '取消',
        //     onOk() {
        //       let token = store.getState().user.token
        //       store.dispatch(logout(token))
        //     },
        //     onCancel() {
        //       console.log('Cancel')
        //     },
        //   })
      }
      if (res.code === 500) {
        message.error(res.msg || 'Error')
      }

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      console.log('🚀 ~ res', res)
      return res
    }
  },

  (error: AxiosError) => {
    throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data)
  },
)

export interface ApiErrorData {
  message: string
}
