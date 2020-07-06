/*
 * @Author: your name
 * @Date: 2020-06-19 14:44:08
 * @LastEditTime: 2020-06-28 11:09:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\my\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { mockXHR } from '../mock'
// 引入dataV
import dataV from '@jiaminghi/data-view'

if (process.env.NODE_ENV === 'development') {
  mockXHR()
}
// mockXHR()
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/component/graphic')
require('echarts/lib/chart/pie')
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(dataV)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
