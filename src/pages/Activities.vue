<template>
  <div>
    <div class="ui embed" data-url="https://www.youtube.com/embed/O6Xo21L0ybE?autoplay=1">
    </div>
    <search-data-category></search-data-category>
    <div style="margin:20px"> <grid-card-list> </grid-card-list> </div>
  </div>
</template>
<script>
import GridCardList from '@/components/list-view/GridCardList.vue'
import SearchDataCategory from '@/components/search/SearchDataCategory.vue'
import $ from 'jquery'

export default {
  name: 'ActivitiesPage',
  components: {
    GridCardList,
    SearchDataCategory
  },
  mounted () {
    $('.ui.embed').embed()
  }
}
</script>
