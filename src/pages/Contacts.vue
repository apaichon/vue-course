<template>
<div class="ui center aligned segment">
  <searchpanel></searchpanel>
  <datapager></datapager>
  <div class ="ui center aligned segment"> 
  <cardlist></cardlist>
  </div>
</div>
</template>
<script>
import searchpanel from '@/components/SearchPanel'
import datapager from '@/components/DataPager'
import cardlist from '@/components/CardList'

export default {
  name: 'contacts',
  components: {searchpanel, datapager, cardlist}
}
</script>
