import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import Login from '@/views/login'
import Mycustomers from '@/views/mycustomers' // 我的客户

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      name: 'main.cus_my',
      path: 'cus_my',
      component: Mycustomers
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})

router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem('userInfo'), 'userInfo')
  if (!sessionStorage.getItem('userInfo')) {
    if (to.name === 'Login') {
      next()
    }
    next('/login')
  } else {
    next()
  }
})

export default router
