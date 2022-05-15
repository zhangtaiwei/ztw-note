import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('src/pages/home'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/list',
      name: 'list',
      component: ()=> import('src/pages/list'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: ()=> import('src/pages/detail'),
    }
  ]
})
