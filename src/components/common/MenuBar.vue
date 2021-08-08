<template>
  <div class="ui fluid three item menu">
    <div class="item">
      <img src="../../assets/logo.png" />
      <span>The Vote </span>
    </div>
    <div class="menu">
      <a class="item">Activites</a>
      <a class="item">Vote</a>
      <a class="item">Sponsor</a>
      <a class="item">Lotto</a>
      <a class="item">Rewards</a>
      <a class="item">Buy Coin</a>
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
  props: ['userAccount'],
  data () {
    return {
      msg: 'Welcome to Menu Bar'
    }
  }
}
</script>
