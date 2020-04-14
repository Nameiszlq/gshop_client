/*包含多个数据的管理对象*/
import Vue from 'vue'
import Vuex from 'vuex'
import interval from './modules/interval'
import search from './modules/search'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    search,
    interval
   }
 })