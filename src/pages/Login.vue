<template>
<div class="ui two column grid centered row">
  <div class="column">
    <div class="ui segment">
        <div class="ui teal center aligned segment">
            <div class="ui fluid action input">
                <a class="ui teal ribbon label"><h4>Login</h4></a>
            </div>
        </div>
        <form class="ui form" v-on:submit.prevent>
        <div class="field">
            <label>User Account</label>
            <input type="text" name="useraccount" v-model="userAccount" placeholder="User Account">
        </div>
        <div class="field">
            <label>Password</label>
            <input type="password" name="password" v-model="password" placeholder="Password">
        </div>
        <button class="ui button" type="submit" @click="onLoginClicked">Login</button>
        </form>
        </div>
    </div>
    <ModalMessage modalId="modalMessage" :headerTitle="headerTitle" :message="message"></ModalMessage>
    </div>
</template>
<script>
import loginApi from '@/api/Login'
import ModalMessage from '@/components/ModalMessage'
import $ from 'jquery'

export default {
  name: 'login',
  components: {ModalMessage},
  data () {
    return {
      userAccount: '',
      password: '',
      headerTitle: 'Login Status',
      message: ''
    }
  },
  methods: {
    onLoginClicked () {
      var user = {'user': this.userAccount, 'password': this.password}
      loginApi.login(user)
      .then((result) => {
        console.log('Login Result', result)
        if (result.data.statusCode === 200) {
          this.createLoggedInSession(result.data)
          this.message = 'LoggedIn is successfully.'
          $('#modalMessage').removeClass('error message')
          $('#modalMessage').addClass('success message')
          setTimeout(() => {
            this.$router.replace(this.$route.query.redirect || '/Contacts')
          }, 3000)
          // this.$router.replace(this.$route.query.redirect || '/Contacts')
        } else {
          this.message = JSON.stringify(result)
          $('#modalMessage').removeClass('success message')
          $('#modalMessage').addClass('error message')
        }
      })
      $('#modalMessage').modal('show')
      /* $('#modalMessage').modal({
        onDeny: function () {
          if (sessionStorage.getItem('loggedIn')) {
            this.$router.replace(this.$route.query.redirect || '/Contacts')
          }
        }
      }).modal('show') */
      /* $('#modalMessage').modal('hide all', function () {
        if (sessionStorage.getItem('loggedIn')) {
          this.$router.replace(this.$route.query.redirect || '/Contacts')
        }
      }).modal('show') */
      this.$emit('onLoginClicked', user)
    },
    createLoggedInSession (user) {
      var now = new Date()
      var expires = new Date(now)
      expires.setMinutes(now.getMinutes() + 10)
      user.expires = expires.getTime()
      sessionStorage.setItem('loggedIn', JSON.stringify(user))
    }
  }
}
</script>

