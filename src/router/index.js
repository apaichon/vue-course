import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/pages/Contacts'
import Login from '@/pages/Login'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!sessionStorage.getItem('loggedIn')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
