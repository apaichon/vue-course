<template>
  <div id="app">
    <!--<menubar :userAccount="setUserAccount()"> </menubar> -->

    <!--header -->
    <!--content -->
    <menubar :menuItems="menuItems"> </menubar>
    <router-view></router-view>
    <!--footer -->
  </div>
</template>

<script>

// import semantic from '../node_modules/semantic-ui-css'
import menubar from './components/common/MenuBar'
import menuItems from './components/data/menuItems.json'

export default {
  name: 'app',
  components: { menubar },
  data () {
    return {
      menuItems
    }
  },
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

