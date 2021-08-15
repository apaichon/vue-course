<template>
  <div>
    <div class="ui form">
        <div class="fields">
          <div class="six wide field">
              <sui-dropdown
                fluid
                multiple
                :max-selections="3"
                :options="dataItems"
                :placeholder="placeholder"
                selection
                v-model="selectedItem"
              />
          </div>
            <div class="ten wide field">
            <div class="ui icon input">
              <input type="text" v-model="textSearch" placeholder="Search...">
              <i class="inverted circular search link icon" @click="onSearchClick"></i>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchDataCategory',
  props: {
    dataItems: Array,
    placeholder: String
  },
  data () {
    return {
      selectedItem: null,
      textSearch: ''
    }
  },
  methods: {
    onSearchClick () {
      const items = {}
      items.textSearch = this.textSearch
      items.selectedItem = this.getSelectedItems()
      this.$emit('onSearchClick', items)
    },
    getSelectedItems () {
      return this.selectedItem
    }
  }
}
</script>
