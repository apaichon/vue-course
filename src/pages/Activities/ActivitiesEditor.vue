<template>
  <div class="ui segment">
    <h4 class="ui header">Activities Editor</h4>
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
  </div>
</template>

<script>
import SearchDataCategory from '@/components/search/SearchDataCategory.vue'
import {mapGetters, mapActions} from 'vuex'
import data from '@/businesses/activities/data'

window.console.log('data', data)

export default {
  name: 'ActivitiesEditor',
  components: { SearchDataCategory },
  computed: {
    ...mapGetters({
      activitiesTuple: 'activities/activitiesTuple'
    })
  },
  data () {
    return {
      selectedCategory: null,
      ...data
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
        searchConditions = searchItem.selectedItem.map(a => {
          return a + `[$like]=%${searchItem.textSearch}%`
        })
        // searchCondition = '?' + searchCondition.substring(0, searchCondition.length - 1)
        // window.console.log('search condition', searchCondition)
      }
      const queryString = '?' + searchConditions.join('&')
      window.console.log(queryString)
      await this.getActivities({textSearch: queryString})
    }
  }
}
</script>
