import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js' //移动端适配
import router from './router'//引入路由
import store from './store'//vuex 包含多个数据的对象
Vue.config.productionTip = false
new Vue({
  
  render: h => h(App),
  router,
  store
}).$mount('#app')
