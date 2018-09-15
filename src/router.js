/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeList from '@/views/home-list'
import GoodsDetail from '@/views/goods-detail'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/home',
      name: 'HomeList',
      component: HomeList
    },
    {
      path: '/detail',
      name: 'GoodsDetail',
      component: GoodsDetail
    }
  ]
})
