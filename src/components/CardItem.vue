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
      <button class="ui icon blue button" @click="onEditClicked" >
        <i class="edit icon"></i>
      </button>
      <button class="ui icon red button" @click="onRemoveClicked">
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
  },
  methods: {
    changeItem () {
      this.item = {
        'firstName': 'Steve2',
        'lastName': 'Jobes2',
        'mobileNo': '099-999-9999',
        'email': 'steve.j2@vuejs.com',
        'facebook': 'https://facebook.com/steve.j',
        'imageUrl': './static/images/steve.jpg'
      }
    },
    onEditClicked () {
      this.$emit('onEditClicked', this.item)
    },
    onRemoveClicked () {
      this.$emit('onRemoveClicked', this.item)
    }
  }
}
</script>
