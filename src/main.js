// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import changeColor from './directive/changeColor'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import BaiduMap from 'vue-baidu-map'


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Wmb0OU8pU8CHVDvfnu4z9GSZfU2lMC4M'
})

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(changeColor)
/* eslint-disable no-new */

//过滤器
Vue.filter('cap', function (v) {

  return v.charAt(0).toUpperCase() + v.slice(1)
})

// 全局前置守卫
  router.beforeEach((to,from,next)=>{
    let token = localStorage.getItem("token")
    if(token){//判断是否登录
      next()
    }
  
    else{
      if(to.path!=='/login'){
        alert("请先登录")
        next({path:'/login'})
      }
      else{
        next()
      }
    }
  })

new Vue({
  el: '#app',
  router,
  store,//挂载仓库
  components: { App },
  template: '<App/>'
})
