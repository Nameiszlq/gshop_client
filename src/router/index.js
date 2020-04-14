/**
 * 搭建路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
import routes from './routes'
Vue.use(VueRouter)
export default new VueRouter({
  routes,
  mode: 'history'//去除#
})