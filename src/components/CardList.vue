<template>
<div class="ui four stackable cards">
    <carditem v-for="a in items" :item="a" :key="a.id" @onEditClicked="onEditClicked" @onRemoveClicked="onRemoveClicked"  > </carditem>
</div>
</template>

<script>
import carditem from '@/components/CardItem'

export default {
  name: 'cardlist',
  components: {carditem},
  props: ['items'],
  data () {
    return {
      msg: 'Welcome to Card List'
    }
  },
  methods: {
    onEditClicked (item) {
      this.$emit('onEditClicked', item)
    },
    onRemoveClicked (item) {
      this.$emit('onRemoveClicked', item)
    }
  }
}
</script>
