<template>
  <div id="app">
    <!--<menubar :userAccount="setUserAccount()"> </menubar> -->
    <menubar :userAccount="setUserAccount()"> </menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import menubar from './components/common/MenuBar'
import semantic from '../node_modules/semantic-ui-css'

export default {
  name: 'app',
  components: { menubar, semantic },
  methods: {
    setUserAccount () {
      if (sessionStorage.getItem('loggedIn')) {
        let userAccount = JSON.parse(sessionStorage.getItem('loggedIn')).user
        return userAccount
      }
    }
  }
}
</script>

