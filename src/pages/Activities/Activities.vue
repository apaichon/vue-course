<template>
  <div>
    <sui-embed
      aspect-ratio="4:3"
      id="HTZudKi36bo"
      placeholder="static/images/extras/image-4by3.jpg"
      source="youtube"
    />
    <search-data-category></search-data-category>
    <div style="margin:20px"> <grid-card-list> </grid-card-list> </div>
  </div>
</template>
<script>
import GridCardList from '@/components/list-view/GridCardList.vue'
import SearchDataCategory from '@/components/search/SearchDataCategory.vue'

export default {
  name: 'ActivitiesPage',
  components: {
    GridCardList,
    SearchDataCategory
  }
}
</script>
