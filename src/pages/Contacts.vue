<template>
<div class="ui center aligned segment">
  <searchpanel @onClickedAdd="openContactEditor('Add')"></searchpanel>
  <datapager></datapager>
  <div class ="ui center aligned segment"> 
    <cardlist :items="items" @onEditClicked="onEditClicked" @onRemoveClicked="onRemoveClicked"></cardlist>
    <contactEditor modalId="contactModal" :contact="contact" :mode="mode" @onSaveClicked="validateContact"></contactEditor>
  </div>
</div>
</template>
<script>
import searchpanel from '@/components/SearchPanel'
import datapager from '@/components/DataPager'
import cardlist from '@/components/CardList'
import contactEditor from '@/components/ContactEditor'
import contactsStore from '@/stores/Contacts'
import $ from 'jquery'

export default {
  name: 'contacts',
  components: {searchpanel, datapager, cardlist, contactEditor},
  mounted () {
    this.items = contactsStore.getters.contacts
  },
  data () {
    return {
      items: [],
      contact: {},
      mode: 'Add',
      validateRule: {
        fields: {
          contactId: {
            identifier: 'contactId',
            rules: [{
              type: 'empty',
              prompt: 'Please enter Contact ID!'
            }]
          },
          firstName: {
            identifier: 'firstName',
            rules: [{
              type: 'empty',
              prompt: 'Please enter First Name!'
            }]
          },
          lastName: {
            identifier: 'lastName',
            rules: [{
              type: 'empty',
              prompt: 'Please enter Last Name!'
            }]
          },
          mobileNo: {
            identifier: 'mobileNo',
            rules: [{
              type: 'empty',
              prompt: 'Please enter Mobile No!'
            }]
          }
        },
        onFailure: (formErrors, fields) => {
          $('.ui.error.message').transition('show')
        },
        onSuccess: () => {
          this.saveContact(this.mode)
          $('.ui.modal').modal('hide')
        }
      }
    }
  },
  methods: {
    addContact () {
      contactsStore.dispatch('addContact', this.contact)
      .then(() => {
        this.contacts = contactsStore.getters.contacts
      })
    },
    editContact () {
      contactsStore.dispatch('updateContact', this.contact)
       .then(() => {
         this.contacts = contactsStore.getters.contacts
       })
    },
    onEditClicked (item) {
      this.contact = item
      this.openContactEditor('Edit')
    },
    openContactEditor (mode) {
      this.mode = mode
      switch (mode) {
        case 'Add':
          this.contact = {}
          $('#contactId').attr('disabled', false)
          break
        case 'Edit':
          $('#contactId').attr('disabled', true)
          break
      }
      $('.ui.error.message').transition('hide')
      $('.ui.modal').modal('show')
    },
    onRemoveClicked (item) {
      console.log('remove clicked')
      contactsStore.dispatch('removeContact', item)
       .then(() => {
         this.contacts = contactsStore.getters.contacts
         console.log(this.contacts)
       })
    },
    saveContact (mode) {
      switch (mode) {
        case 'Add':
          this.addContact()
          break
        case 'Edit':
          this.editContact()
          break
      }
    },
    validateContact () {
      $('.ui.form').form(this.validateRule)
    }
  }
}
</script>
