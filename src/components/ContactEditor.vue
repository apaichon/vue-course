<template>
  <div :id="modalId" class="ui modal">
    <div class="header">Contact
      <div class="ui teal horizontal label">{{mode}}</div>
    </div>
    <div class="content">
      <form class="ui form" v-on:submit.prevent>
            <div class="field required">
                <label>Contact ID</label>
                <input id="contactId" type="text" v-model="contact.id" placeholder="Contact ID">
            </div>
            <div class="field required">
                <label>First Name</label>
                <input id="firstName" type="text" v-model="contact.firstName" placeholder="First Name">
            </div>
            <div class="field required">
                <label>Last Name</label>
                <input id="lastName" type="text" v-model="contact.lastName" placeholder="Last Name">
            </div>
            <div class="field required">
                <label>Mobile No</label>
                <input id="mobileNo" type="text" v-model="contact.mobileNo" placeholder="Mobile No">
            </div>
            <div class="field">
                <label>Email</label>
                <input id="email" type="email" v-model="contact.email" placeholder="Email">
            </div>
            <div class="field">
                <label>Facebook</label>
                <input id="facebook" type="text" v-model="contact.facebook" placeholder="Facebook">
            </div>
            <div class="field">
                <label>Image Url</label>
                <input id="imageUrl" type="text" v-model="contact.imageUrl" placeholder="Image Url">
            </div>         
             <div class="ui buttons center aligned container">
                <button class="ui primary basic button" @click="onSaveClicked"><i class="save icon"></i>Save</button>
                <button class="ui primary basic button" @click="onCloseClicked"><i class="close red icon"></i>Close</button>
            </div>
            <div class="ui error message transition hidden">
            </div>
        </form>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'contactEditor',
  props: ['modalId', 'mode', 'contact'],
  methods: {
    onSaveClicked (e) {
      this.$emit('onSaveClicked')
    },
    onCloseClicked () {
      $('#' + this.modalId).modal('hide')
    }
  }
}
</script>
