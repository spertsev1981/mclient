import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('@/views/Card')
    },
    {
      path: '/document/:id',
      name: 'documents',
      component: () => import('@/views/Documents')
    }
  ]
})

export default router
