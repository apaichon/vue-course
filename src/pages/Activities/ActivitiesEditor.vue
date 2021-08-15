<template>
  <div class="ui segment">
    <h2 class="ui header">
      <i class="settings icon"></i>
      <div class="content">
        Activity Editor
        <button class="ui basic button" @click="onAddClick"> <i class="icon plus"></i> Add</button>
      </div>
    </h2>
    <search-data-category :dataItems="categories" @onSearchClick="onSearchClick"></search-data-category>
    <table class="ui celled table">
      <thead>
        <tr><th>Id</th>
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
        <th>Detail</th>
        <th>Created At</th>
        <th>Is Active</th>
        <th>Action</th>
      </tr></thead>
      <tbody>
        <tr v-for="a in activitiesTuple" :key="a.id">
          <td data-label="Id">{{a.id}}</td>
          <td data-label="Image"><img height="50" width="50" :src="a.thumbnailUrl" /></td>
          <td data-label="Title">{{a.title}}</td>
          <td data-label="Category">{{a.category}}</td>
          <td data-label="Detail">{{a.detail}}</td>
          <td data-label="CreatedAt">{{a.createdAt}}</td>
          <td data-label="IsActive">{{a.isActive}}</td>
        </tr>
      </tbody>
    </table>
    <scrolling-modal ref="modal"> 
      <template slot="header">
        Activity Modal Editor
      </template>
      <template slot="content">Content Editorddssrwerwe</template>
    </scrolling-modal>
  </div>
</template>

<script>
import SearchDataCategory from '@/components/search/SearchDataCategory.vue'
import ScrollingModal from '@/components/common/ScrollingModal.vue'
import {mapGetters, mapActions} from 'vuex'
import data from '@/businesses/activities/data'

window.console.log('data', data)

export default {
  name: 'ActivitiesEditor',
  components: { SearchDataCategory, ScrollingModal },
  computed: {
    ...mapGetters({
      activitiesTuple: 'activities/activitiesTuple'
    })
  },
  data () {
    return {
      selectedCategory: null,
      ...data,
      modalOpen: false
    }
  },
  async mounted () {
    await this.getActivities('')
  },
  methods: {
    ...mapActions(
      {
        getActivities: 'activities/getActivities'
      }
    ),
    async onSearchClick (searchItem) {
      // window.console.log('selectedItem', searchItem)
      let searchConditions = ''
      if (searchItem.textSearch && searchItem.selectedItem.length > 0) {
        let i = -1
        searchConditions = searchItem.selectedItem.map(a => {
          i++
          return `$or[${i}][${a}][$like]=%${searchItem.textSearch}%`
        })
        // searchCondition = '?' + searchCondition.substring(0, searchCondition.length - 1)
        // window.console.log('search condition', searchConditions)
      }
      const queryString = '?' + searchConditions.join('&')
      window.console.log(queryString)
      await this.getActivities({textSearch: queryString})
    },
    onAddClick () {
      window.console.log('open Modal')
      this.$refs.modal.openModal()
    }
  }
}
</script>
