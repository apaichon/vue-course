<template>
  <div class="ui fluid three item menu">
    <div class="item">
      <img src="../../assets/logo.png" />
      <span>The Vote </span>
    </div>
    <div class="menu">
      <a class="item" v-for="menu in menuItems" :key="menu.id" :href="menu.url">{{menu.name}}</a>
    </div>
    <div class="right menu">
      <div class="item">
        <button class="ui labeled icon button">
          <i class="user icon"></i>
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'menubar',
  props: {
    menuItems: {
      type: Array
    }
  }
}
</script>
