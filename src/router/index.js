import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      component: () => import('@/components/layouts/userLayout'), //{render: h => h('router-view')},
      children: [{
        path: '/',
        name: 'user',
        redirect: '/user/login'
      }, {
        path: '/user/login',
        name: 'login',
        component: () => import('@/views/user/login')
      }, {
        path: '/user/register',
        name: 'register',
        component: () => import('@/views/user/register')
      }]
    }, {
      path: '/',
      component: () => import('@/components/layouts/baseLayout'), // 异步加载路由
      children: [{
        path: '/',
        redirect: '/dashboard/analysis'
      }, {
        path: '/dashboard',
        name: 'dashboard',
        component: { render: h => h("router-view") },
        children: [{
          path: '/dashboard/analysis',
          name: 'analysis',
          component: () => import('../views/dashboard/analysis.vue')//import('@view/doshboard/analysis')
        }]
      }, {
        path: 'form',
        component: { render: h => h("router-view") },
        children: [{
          path: '/',
          redirect: '/form/basicForm',
        }, {
          path: '/form/basicForm',
          name: 'basicForm',
          component: () => import('@/views/form/basicForm')
        }, {
          path: '/form/stepForm',
          name: 'stepForm',
          component: () => import('@/views/form/stepForm')
        }]
      }]
    },
  ]
})
