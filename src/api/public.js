import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
/*import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)*/

axios.defaults.timeout = 5000
// axios.interceptors.response.setHeader('authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3guY2hpbmF4eXdsLmNvbVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU0MTg0MTE4MCwiZXhwIjoxNTQxODQ0NzgwLCJuYmYiOjE1NDE4NDExODAsImp0aSI6InVob1dKSW5IbFN0U0ZlVGQiLCJzdWIiOjEsInBydiI6IjIxMWVkN2M0MTllZDlkOTIwYjI5OTRjOWE5ZWQ3MzgwZGM4M2Y2MGEifQ.guSmPo9DjNCT0gBdOrQs4msIXOZT6odMHpCewl5Cpw0')
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
// axios.interceptors.response.setHeader("Access-Control-Allow-Origin", "*");

// 添加一个响应拦截器
axios.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  console.log(err.response)
  // Do something with response error
  if (err.response.data.message=='Unauthenticated.') {
      router.replace({
        path: '/login'
      })
  }
  return Promise.reject(err);
})

// axios.defaults.withCredentials=true;
 
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers.authorization = localStorage.getItem('authorization');
  // console.log(config.headers.authorization,'--config.headers.authorization--')
  // 参数格式转换
  if(config.method=="post"){
      config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


export default {
  fetchGet(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, (data)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
