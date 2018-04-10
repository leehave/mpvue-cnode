const wx = 'wx';
import Fly from 'flyio'
import {baseURL} from '@/utils/api'

const request = new Fly()

request.config.timeout = 10 * 1000

request.config.baseURL = baseURL


request.interceptors.request.use((request) => {
  wx.showLoading({ title: '拼命加载中...' })
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request
