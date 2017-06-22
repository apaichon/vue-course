import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/pages/Contacts'
import Basic from '@/components/Basic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    }
  ]
})
