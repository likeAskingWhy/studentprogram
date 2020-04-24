// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'

import ElementUI from 'element-ui';   // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css';    // 引入element-ui全局样式
Vue.use(ElementUI);     // 注册使用element-ui

import axios from 'axios'     // 引入axios
axios.defaults.baseURL = 'http://localhost:3000/'   // 配置请求的根路径
Vue.prototype.$http = axios     // 将axios作为Vue原型，使所有的子组件可通过this访问

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
