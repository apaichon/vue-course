<template>
  <div class="ui segment">
    <h4 class="ui header">Activities Editor</h4>
    <search-data-category></search-data-category>
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
    <tr v-for="a in items" :key="a.id">
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
import activitiesService from '@/businesses/activities/services/activitiesService'

export default {
  name: 'ActivitiesEditor',
  components: { SearchDataCategory },
  computed: {
    getItems () {
      return this.items
    }
  },
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    const result = await activitiesService.getActivities('')
    // window.console.log('result', result)
    this.items = result.data.data
  }
}
</script>
