<template>
<div class="ui stackable menu inverted">
  <div class="item">
    <img src="../assets/logo.png">
  </div>
  <a class="item">Contacts</a>
  <div class="right menu">
    <div class="item">
      <i class="user icon">{{userAccount}}</i>
    </div>
    <div class="item">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'menubar',
  props: ['userAccount'],
  data () {
    return {
      msg: 'Welcome to Menu Bar'
    }
  }
}
</script>
