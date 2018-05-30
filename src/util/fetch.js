import Axios from 'axios'
import Element from 'element-ui'
const fetch = Axios.create({
  baseURL: localStorage.getItem('baseURL') || 'https://cnodejs.org/api/v1'
})

fetch.interceptors.request.use(config => {
  console.log('request => ', config)
  return config
})

fetch.interceptors.response.use(response => {
  if (!response.data.success) {
    return Element.Message({
      type: 'error',
      message: '数据获取失败!'
    })
  }
  return response
}, error => { console.log(error) })

export default fetch
