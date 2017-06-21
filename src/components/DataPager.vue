<template>
<div class="ui center aligned segment">
      <button class="ui basic button">
        <i class="angle double left icon"></i> First
      </button>
      <button class="ui basic button">
        <i class="angle left icon"></i> Previous
      </button>
      <div class="ui input">
        <input type="number" class="ui center aligned segment"></input>
      </div>
      <button class="ui basic button"> Next
        <i class="angle right icon"></i>
      </button>
      <button class="ui basic button"> Last
        <i class="angle double right icon"></i>
      </button>
    </div>
</template>

<script>
export default {
  name: 'datapager',
  data () {
    return {
      msg: 'Welcome to Data Pager'
    }
  }
}
</script>
