import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Basic from '@/components/Basic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    }
  ]
})
