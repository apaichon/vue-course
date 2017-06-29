<template>
    <div :id="id" class="ui modal">
        <div class="header">{{header}}</div>
        <div class="content">
            <p> <i :class="icon"></i> {{message}}</p>
        </div>
        <div class="actions">
            <div class="ui youtube button" @click="onOKClicked">OK</div>
            <div class="ui cancel button" @click="onCancelClicked">Cancel</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'confirmmodal',
  props: ['header', 'message', 'icon', 'id'],
  methods: {
    onOKClicked: function () {
      this.$emit('onOKClicked', this)
    },
    onCancelClicked: function () {
      this.$emit('onCancelClicked', this)
    }
  }
}
</script>
