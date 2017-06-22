<template>
<div class="ui teal center aligned segment">
  <div class="ui fluid action input">
    <a class="ui teal ribbon label"><h4>Contacts</h4></a>
  <input type="text" placeholder="Search...">
  <div class="ui button">Search</div>
  <div class="ui orange button"> <i class="plus icon"></i>Add</div>
</div>
</div>
</template>

<script>
export default {
  name: 'searchpanel',
  data () {
    return {
      msg: 'Welcome to Search Panel'
    }
  }
}
</script>
