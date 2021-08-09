import Vue from 'vue'
import Router from 'vue-router'
import Activities from '@/pages/Activities'
import Vote from '@/pages/Vote'
import Sponsor from '@/pages/Sponsor'
import Lotto from '@/pages/Lotto'
import Rewards from '@/pages/Rewards'
import BuyCoin from '@/pages/BuyCoin'
// import Contacts from '@/pages/Contacts'
// import Login from '@/pages/Login'

Vue.use(Router)

/* function requireAuth (to, from, next) {
  if (!sessionStorage.getItem('loggedIn')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
} */

export default new Router({
  mode: 'history',
  routes: [
    /* {
      path: '/',
      name: 'Contacts',
      component: Contacts,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    } */
    {
      path: '/',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/vote',
      name: 'Vote',
      component: Vote
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Sponsor
    },
    {
      path: '/lotto',
      name: 'Lotto',
      component: Lotto
    },
    {
      path: '/rewards',
      name: 'Rewards',
      component: Rewards
    },
    {
      path: '/buycoin',
      name: 'BuyCoin',
      component: BuyCoin
    }
  ]
})
