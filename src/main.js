// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import './common/font-awesome-4.7.0/css/font-awesome.css'
import 'babel-polyfill'
import './common/scss/reset.scss'
import './common/scss/icon.scss'
import './common/scss/common.scss'
// import './common/js/utils'
// import utils from './common/js/utils'
import Axios from "axios"
import Cookies from 'js-cookie'
//将axios挂载到原型上
Vue.prototype.$axios = Axios;
Vue.prototype.$cookie = Cookies;
Vue.prototype.HOST='/api'

import AMap from 'vue-amap'
AMap.initAMapApiLoader({
  key: 'f74ac94ad8e172979ca2ebd2899548c8',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});

Vue.use(AMap);
 
//配置全局的axios默认值（可选）
 
// Axios.defaults.baseURL = 'https://wx.chinaxywl.com';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(utils)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
