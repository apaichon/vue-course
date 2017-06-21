<template>
  <div>
    <h1>{{ title }}</h1>
    <span :title="title" v-if="isShow">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
  <input type="text" v-model="title"/>
  <ul>
  <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id"></TodoItem>
  </ul>
  </div>
</template>
<script>
  import TodoItem from '@/components/TodoItem'
  export default {
    name: 'binding',
    components: {TodoItem},
    data () {
      return {
        title: 'Hello Vue JS!',
        isShow: true,
        todos: [
          {id: 1, text: 'JavaScript'},
          {id: 2, text: 'VueJS'},
          {id: 3, text: 'Webpack'}
        ]
      }
    }
  }
</script>
