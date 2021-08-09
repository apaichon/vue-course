<template>
  <div>
    <div class="ui form">
        <div class="fields">
          <div class="six wide field">
            <div class="ui selection dropdown">
                <input type="hidden" name="gender">
                <i class="dropdown icon"></i>
                <div class="default text">Search Category</div>
                <div class="menu">
                    <div class="item" data-value="1">Male</div>
                    <div class="item" data-value="0">Female</div>
                </div>
            </div>
          </div>
            <div class="ten wide field">
            <div class="ui icon input">
              <input type="text" placeholder="Search...">
              <i class="inverted circular search link icon"></i>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'SearchDataCategory',
  mounted () {
    $('.selection.dropdown').dropdown()
  }
}
</script>
