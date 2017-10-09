// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-default/index.css'
import '../static/main.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.prototype.$ajax = axios

Vue.use(Vuex)
Vue.use(ElementUI)

window._ = _

const store = new Vuex.Store({
  state: {
    userInfo: sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo) || {}
  },
  mutations: {
    updateUserInfo(state) {
      state.userInfo = sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo) || {}
      state.isShowLogin = false
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Date.prototype.toISOString = function () {
  let month = this.getMonth() + 1
  month = month < 10 ? ('0' + month) : month
  let date = this.getDate()
  date = date < 10 ? ('0' + date) : date
  return [this.getFullYear(), month, date].join('-')
}
/* eslint no-extend-native: 0 */
Date.prototype.toString = function () {
  let month = this.getMonth() + 1
  month = month < 10 ? ('0' + month) : month
  let date = this.getDate()
  date = date < 10 ? ('0' + date) : date
  return [this.getFullYear(), month, date].join('-')
}
/* eslint no-extend-native: 0 */
Date.prototype.format = function (fmt) { // author: meizz
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
