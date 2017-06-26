<template>
  <div id="app">
    <menubar> </menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import menubar from './components/MenuBar'
import semantic from '../node_modules/semantic-ui-css'

export default {
  name: 'app',
  components: { menubar, semantic }
}
</script>

