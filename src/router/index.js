import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/page/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/page/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/page/detail/Detail')
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
