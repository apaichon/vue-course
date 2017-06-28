<template>
<div class="ui center aligned segment">
      <button class="ui basic button" @click="onFirstClicked">
        <i class="angle double left icon"></i> First
      </button>
      <button class="ui basic button" @click="onPrevClicked">
        <i class="angle left icon"></i> Previous
      </button>
      <div class="ui input">
        <input type="number" v-model="currentPage" class="ui center aligned segment" readonly></input>
      </div>
      <button class="ui basic button" @click="onNextClicked"> Next
        <i class="angle right icon"></i>
      </button>
      <button class="ui basic button" @click="onLastClicked"> Last
        <i class="angle double right icon"></i>
      </button>
    </div>
</template>

<script>

export default {
  name: 'datapager',
  props: ['currentPage'],
  data () {
    return {
      msg: 'Welcome to Data Pager'
    }
  },
  methods: {
    onFirstClicked () {
      this.$emit('onFirstClicked')
    },
    onPrevClicked () {
      this.$emit('onPrevClicked')
    },
    onNextClicked () {
      this.$emit('onNextClicked')
    },
    onLastClicked () {
      this.$emit('onLastClicked')
    }
  }
}
</script>
