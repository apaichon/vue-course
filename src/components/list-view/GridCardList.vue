<template>
  <div>
    <div class="ui link cards">
      <div class="card">
        <div class="image">
          <img src="static/images/art-cultural.png">
        </div>
        <div class="content">
          <div class="header">Matt Giampietro</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div class="extra content">
          <a class="ui blue ribbon label">Art / Cultural </a>
          <span class="right floated">
            <button class="ui blue button">More Detail</button>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="static/images/molly.png">
        </div>
        <div class="content">
          <div class="header">Molly</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">
            Molly is a personal assistant living in Paris.
          </div>
        </div>
        <div class="extra content">
           <a class="ui orange ribbon label">Education</a>
          <span class="right floated">
          <button class="ui orange button">More Detail</button>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="static/images/elyse.png">
        </div>
        <div class="content">
          <div class="header">Elyse</div>
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">
            Elyse is a copywriter working in New York.
          </div>
        </div>
        <div class="extra content">
           <a class="ui pink ribbon label">Social</a>
          <span class="right floated">
          <button class="ui pink button">More Detail</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridCardList',
  data () {
    return {
      msg: 'Grid Card List'
    }
  }
}
</script>
