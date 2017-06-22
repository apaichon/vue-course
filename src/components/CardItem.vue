<template>
<div class="ui card">
  <div class="image">
    <img :src="item.imageUrl" />
  </div>
  <div class="content">
    <a class="header">{{item.firstName + ' ' + item.lastName }}</a>
    <div class="meta">
      <span class="date">Mobile : {{item.mobileNo}} </span>
    </div>
     <div class="meta">
      <span class="date">Email : {{item.email}}</span>
    </div>
    <div class="meta">
      <span class="date">Facebook : {{item.facebook}} </span>
    </div>
  </div>
  <div class="extra content">
    <button class="ui icon blue button">
  <i class="edit icon"></i>
</button>
<button class="ui icon red button">
  <i class="erase icon"></i>
</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'carditem',
  props: ['item'],
  data () {
    return {
      msg: 'Welcome to Card Item'
    }
  }
}
</script>
