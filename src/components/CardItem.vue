<template>
<div class="ui card">
  <div class="image">
    <img src="../assets/kristy.png">
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Mobile : </span>
    </div>
     <div class="meta">
      <span class="date">Email : </span>
    </div>
    <div class="meta">
      <span class="date">Facebook : </span>
    </div>
  </div>
  <div class="extra content">
    <button class="ui icon button">
  <i class="edit icon"></i>
</button>
<button class="ui icon button">
  <i class="erase icon"></i>
</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'carditem',
  data () {
    return {
      msg: 'Welcome to Card Item'
    }
  }
}
</script>
