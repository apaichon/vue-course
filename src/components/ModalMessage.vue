<template>
    <div :id="modalId" class="ui modal success message">
    <i class="close icon"></i>
    <div>
        <h3>{{headerTitle}} </h3>
    </div>
    <p >{{message}} </p>
    </div>
</template>
<script>
export default {
  name: 'modalmessage',
  props: ['modalId', 'headerTitle', 'message']
}
</script>
