import axios from 'axios'
import {
  Loading,
  Message
} from 'element-ui'

let base = '/api'
let loadingInstance1
let ajaxCount = 0

axios.interceptors.request.use(function(config) {
  ajaxCount++
  if (ajaxCount > 0) {
    loadingInstance1 = Loading.service({
      fullscreen: true
    })
  }
  return config
}, function(error) {
  if (ajaxCount === 0) loadingInstance1.close()
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response) {
  ajaxCount--
  if (ajaxCount === 0) loadingInstance1.close()
  if (!response.data.status) {
    Message.error({
      message: response.data.message,
      duration: 3000
    })
  }
  return response
}, function(error) {
  // error.response.status
  ajaxCount--
  if (ajaxCount === 0) loadingInstance1.close()
  if (error.response && error.response.status === 401) location.replace('#/login')
  console.log(error)
  return Promise.reject(error)
})

// let cache = {}
// let cacheFn = {}

// 大区
// function useCache(url, params) {
//   const result = getFromCache(url, params)
//   if (result) {
//     return new Promise(function(resolve, reject) {
//       if (result === 'Loading') {
//         setCashFn(url, params, (r) => {
//           resolve(r)
//         })
//       } else {
//         setTimeout(() => {
//           return resolve(result)
//         }, 0)
//       }
//     })
//   } else {
//     saveToCache(url, params, 'Loading')
//     return axios.get(url, params).then(res => {
//       saveToCache(url, params, res.data)
//       return res.data
//     })
//   }
// }

// function setCashFn(key, params, fn) {
//   let paramKey = getParamKey(key, params)
//   if (cacheFn[paramKey]) {
//     cacheFn[paramKey].push(fn)
//   } else {
//     cacheFn[paramKey] = [fn]
//   }
// }
//
// function saveToCache(key, params, data) {
//   let paramKey = getParamKey(key, params)
//   cache[paramKey] = data
//   runCacheFn(key, params, data)
// }
//
// function runCacheFn(key, params, data) {
//   if (data === 'Loading') return
//   let paramKey = getParamKey(key, params)
//   const fn = cacheFn[paramKey]
//   if (fn) {
//     fn.forEach(f => f(data))
//   }
// }
//
// function getFromCache(key, params, data) {
//   let paramKey = getParamKey(key, params)
//   return cache[paramKey]
// }
//
// function getParamKey(key, params) {
//   if (params) {
//     return key + '-' + JSON.stringify(params)
//   } else {
//     return key
//   }
// }

// 登录
export const requestLogin = params => {
  return axios.post(`${base}/security/login`, params).then(res => res.data)
}
// 退出登录
export const logout = () => {
  return axios.get(`${base}/security/logout`).then(res => res.data)
}

// 客户管理

// 我的客户--客户意向度
export const cuscategory = () => {
  return axios.get(`${base}/cuscategory`).then(res => res.data)
}
// 我的客户--客户标签
export const tags = () => {
  return axios.get(`${base}/tag`).then(res => res.data)
}
