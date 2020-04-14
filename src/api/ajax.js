
import axios from 'axios'
export default function ajax(url, data={}, type='GET') {
  return new Promise((resolve, reject) => {
    let promise
    // 执行异步请求
    if(type==='GET') {
      promise = axios.get(url, { // 配置对象
        params: data // 包含所有query请求参数的对象
      })
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 成功了, 调用resolve
      resolve(response.data)
    }).catch(error => {
      // 出错了, 调用reject
      reject(error)
      // 统一处理请求错误
      alert('请求出错: '+error.message)
    })
  })
}
