<template>
  <li>
    {{todo.text}}
  </li>
</template>

<script>
 export default {
   name: 'todoitem',
   props: ['todo']
 }
</script>
