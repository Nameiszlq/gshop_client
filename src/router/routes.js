/**
 * 路由配置
 */
import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import General from '../pages/General/General.vue'
import Person from '../pages/Person/Person.vue'
import Shop from '../pages/Shop/Shop.vue'
export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/Classify',
    component:Classify
  },
  {
    path:'/General',
    component:General
  },
  {
    path:'/Person',
    component:Person
  },
  {
    path:'/Shop',
    component:Shop
  },
]