<template>
<div class="ui teal center aligned segment">
  <div class="ui fluid action input">
    <a class="ui teal ribbon label"><h4>Contacts</h4></a>
  <input type="text" v-model="textSearch" placeholder="Search...">
  <div class="ui button" @click="onSearchClicked">Search</div>
  <div class="ui orange button" @click="onClickedAdd"> <i class="plus icon"></i>Add</div>
</div>
</div>
</template>

<script>
export default {
  name: 'searchpanel',
  data () {
    return {
      textSearch: ''
    }
  },
  methods: {
    onClickedAdd () {
      this.$emit('onClickedAdd')
    },
    onSearchClicked () {
      this.$emit('onSearchClicked', this.textSearch)
    }
  }
}
</script>
