<template>
  <div>
    <sui-modal v-model="open">
      <sui-modal-header><slot name="header"> Header </slot></sui-modal-header>
      <sui-modal-content scrolling image>
        <sui-modal-description>
          <slot name="content"> Content </slot>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
       <slot name="action"> Action </slot>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name: 'ScrollingModal',
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    openModal () {
      this.open = true
    }
  }
}
</script>
