<template>
  <div id="app">
    <menubar> </menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import menubar from './components/MenuBar'

export default {
  name: 'app',
  components: { menubar }
}
</script>

