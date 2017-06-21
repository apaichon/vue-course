<template>
  <div id="app">
    <img src="./assets/logo.png">
    <menubar> </menubar>
    <searchpanel> </searchpanel>
    <datapager></datapager>
    <carditem></carditem>
    <cardlist></cardlist>
    <router-view></router-view>
  </div>
</template>

<script>
import menubar from './components/MenuBar'
import searchpanel from './components/SearchPanel'
import datapager from './components/DataPager'
import carditem from './components/CardItem'
import cardlist from './components/CardList'

export default {
  name: 'app',
  components: { menubar, datapager, carditem, cardlist, searchpanel }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
