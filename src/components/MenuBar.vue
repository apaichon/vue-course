<template>
<div class="ui stackable menu inverted">
  <div class="item">
    <img src="../assets/logo.png">
  </div>
  <a class="item">Contacts</a>
  <div class="right menu">
    <div class="item">
        <div class="ui primary button">Login</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'menubar',
  data () {
    return {
      msg: 'Welcome to Menu Bar'
    }
  }
}
</script>
