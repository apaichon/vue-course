<template>
<div class="ui four stackable cards">
    <carditem v-for="a in items" :item="a" > </carditem>
</div>
</template>

<script>
import carditem from '@/components/CardItem'

export default {
  name: 'cardlist',
  components: {carditem},
  data () {
    return {
      msg: 'Welcome to Card List',
      items: [
        {
          'firstName': 'Kristy',
          'lastName': 'Chung',
          'mobileNo': '099-000-1234',
          'email': 'kristy@vuejs.com',
          'facebook': 'https://facebook.com/kristy',
          'imageUrl': './static/images/kristy.png'
        },
        {
          'firstName': 'Matt',
          'lastName': 'Giampietro',
          'mobileNo': '099-000-4567',
          'email': 'matt.g@vuejs.com',
          'facebook': 'https://facebook.com/matt.g',
          'imageUrl': './static/images/matthew.png'
        },
        {
          'firstName': 'Molly',
          'lastName': '',
          'mobileNo': '099-123-4567',
          'email': 'molly@vuejs.com',
          'facebook': 'https://facebook.com/molly',
          'imageUrl': './static/images/molly.png'
        },
        {
          'firstName': 'Elyse',
          'lastName': '',
          'mobileNo': '099-777-1111',
          'email': 'elyse@vuejs.com',
          'facebook': 'https://facebook.com/elyse',
          'imageUrl': './static/images/elyse.png'
        },
        {
          'firstName': 'Jenny',
          'lastName': 'Hess',
          'mobileNo': '099-111-9999',
          'email': 'jenny.h@vuejs.com',
          'facebook': 'https://facebook.com/jenny.h',
          'imageUrl': './static/images/jenny.jpg'
        },
        {
          'firstName': 'Team',
          'lastName': 'Fu',
          'mobileNo': '099-000-4567',
          'email': 'team.f@vuejs.com',
          'facebook': 'https://facebook.com/matt.g',
          'imageUrl': './static/images/elliot.jpg'
        },
        {
          'firstName': 'Steve',
          'lastName': 'Jobes',
          'mobileNo': '099-999-9999',
          'email': 'steve.j@vuejs.com',
          'facebook': 'https://facebook.com/matt.g',
          'imageUrl': './static/images/steve.jpg'
        },
        {
          'firstName': 'Daniel',
          'lastName': 'Louise',
          'mobileNo': '099-245-1264',
          'email': 'daniel.l@vuejs.com',
          'facebook': 'https://facebook.com/daniel.l',
          'imageUrl': './static/images/daniel.jpg'
        },
        {
          'firstName': 'Helen',
          'lastName': 'Troy',
          'mobileNo': '099-444-5555',
          'email': 'helen.t@vuejs.com',
          'facebook': 'https://facebook.com/helen.t',
          'imageUrl': './static/images/helen.jpg'
        }
      ]
    }
  }
}
</script>
