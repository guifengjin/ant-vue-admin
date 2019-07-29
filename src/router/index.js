import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: 'user',
      redirect: '/user',
      children: [{
        path: '/',
        component: () => import('@/views/user')
      },{
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/login')
      },{
        path: 'register',
        name: 'register',
        component: () => import('@/views/user/register')
      }]
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home') // 懒加载
    }
  ]
})
