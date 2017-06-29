<template>
<div class="ui center aligned segment">
  <searchpanel @onClickedAdd="openContactEditor('Add')" @onSearchClicked="onSearchClicked"></searchpanel>
  <datapager :currentPage="getCurrentPage" @onFirstClicked="onFirstClicked" @onPrevClicked="onPrevClicked" @onNextClicked="onNextClicked" @onLastClicked="onLastClicked"></datapager>
  <div class ="ui center aligned segment"> 
    <cardlist :items="getContactList" @onEditClicked="onEditClicked" @onRemoveClicked="onRemoveClicked"></cardlist>
    <contactEditor modalId="contactModal" :contact="contact" :mode="mode" @onSaveClicked="validateContact"></contactEditor>
  </div>
  <modalmessage modalId="modalMessage" :headerTitle="headerTitle" :message="message"></modalMessage>
  <confirm-modal id="confirmModal" header="Deleting" :message="msgDelete" @onOKClicked="onOKClicked" ></confirm-modal>
</div>
</template>
<script>
import searchpanel from '@/components/SearchPanel'
import datapager from '@/components/DataPager'
import cardlist from '@/components/CardList'
import contactEditor from '@/components/ContactEditor'
import contactsStore from '@/stores/Contacts'
import $ from 'jquery'
import contactsApi from '@/api/Contacts'
import modalmessage from '@/components/ModalMessage'
import ConfirmModal from '@/components/ConfirmModal'

export default {
  name: 'contacts',
  components: {searchpanel, datapager, cardlist, contactEditor, modalmessage, ConfirmModal},
  mounted () {
    this.getContact({condition: {}})
  },
  computed: {
    getCurrentPage () {
      return contactsStore.getters.currentPage
    },
    getContactList () {
      return contactsStore.getters.contacts
    }
  },
  data () {
    return {
      items: [],
      currentPage: 1,
      contact: {},
      mode: 'Add',
      headerTitle: '',
      message: '',
      textSearch: '',
      msgDelete: '',
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
          $('#contactModal').modal('hide')
        }
      }
    }
  },
  methods: {
    addContact () {
      contactsApi.add(this.contact)
      .then((result) => {
        if (result.status === 200 && result.data.ok === 1) {
          this.showMessage('Insert', 'Success')
          this.getContact({condition: {}})
        } else {
          this.showMessage('Insert', 'Error', result.statusText)
        }
      }).catch((result) => {
        this.showMessage('Insert', 'Error', JSON.stringify(result))
      })
    },
    editContact () {
      var data = this.contact
      delete data['_id']
      var condition = {'criteria': {'_id': this.contact['_id']}, 'data': {'$set': data}}
      contactsApi.update(condition)
      .then((result) => {
        if (result.status === 200 && result.data.ok === 1) {
          this.showMessage('Update', 'Success')
          this.getContact({condition: {}})
          contactsStore.dispatch('setCurrentPage', 1)
        } else {
          this.showMessage('Update', 'Error', result.statusText)
        }
      }).catch((result) => {
        this.showMessage('Update', 'Error', JSON.stringify(result))
      })
    },
    getContact (condition) {
      contactsApi.get(condition)
      .then((result) => {
        if (result.status === 200) {
          contactsStore.dispatch('setContacts', result.data.result)
          contactsStore.dispatch('setTotalPages', result.data.totalPages)
        }
      })
    },
    getSearchCondition () {
      var condition = {condition: {}}
      if (this.textSearch.length > 0) {
        condition.condition = {'$or': [
            {'id': {'$regex': `.*${this.textSearch}.*`}},
            {'firstName': {'$regex': `.*${this.textSearch}.*`}},
            {'lastName': {'$regex': `.*${this.textSearch}.*`}}
        ]
        }
      }
      return condition
    },
    onEditClicked (item) {
      this.contact = item
      this.openContactEditor('Edit')
    },
    onFirstClicked () {
      contactsStore.dispatch('setCurrentPage', 1)
    },
    onPrevClicked () {
      contactsStore.dispatch('setCurrentPage', contactsStore.getters.currentPage - 1)
    },
    onNextClicked () {
      contactsStore.dispatch('setCurrentPage', contactsStore.getters.currentPage + 1)
    },
    onLastClicked () {
      contactsStore.dispatch('setCurrentPage', contactsStore.getters.totalPages)
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
      $('#contactModal').modal('show')
    },
    onRemoveClicked (item) {
      this.contact = item
      this.msgDelete = `Are you sure to delete contact of ${this.contact.firstName + ' ' + this.contact.lastName} [y/n] ?`
      $('#confirmModal').modal('show')
    },
    onSearchClicked (textSearch) {
      this.textSearch = textSearch
      var condition = this.getSearchCondition()
      this.getContact(condition)
    },
    onOKClicked () {
      var condition = {'id': this.contact.id}
      $('#confirmModal').modal('hide')
      contactsApi.remove(condition)
      .then((result) => {
        if (result.status === 200 && result.data.ok === 1) {
          this.showMessage('Delete', 'Success')
          this.contact = {}
          contactsStore.dispatch('setCurrentPage', 1)
          this.getContact({condition: {}})
        } else {
          this.showMessage('Delete', 'Error', result.statusText)
        }
      }).catch((result) => {
        this.showMessage('Delete', 'Error', JSON.stringify(result))
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
    showMessage (action, status, unhandleMsg) {
      let MODAL_MESSAGE_ID = '#modalMessage'
      this.headerTitle = status
      switch (status) {
        case 'Success':
          $(MODAL_MESSAGE_ID).removeClass('error message')
          $(MODAL_MESSAGE_ID).addClass('success message')
          this.message = `${action} successfully.`
          break
        case 'Error':
          $(MODAL_MESSAGE_ID).removeClass('success message')
          $(MODAL_MESSAGE_ID).addClass('error message')
          this.message = `${action} ${unhandleMsg}`
          break
      }
      $('#modalMessage').modal('show')
    },
    validateContact () {
      $('.ui.form').form(this.validateRule)
    }
  },
  watch: {
    getCurrentPage: function (val) {
      var condition = this.getSearchCondition()
      condition.currentPage = (val < 1 ? 1 : val)
      console.log('watch', condition, val)
      this.getContact(condition)
    }
  }
}
</script>
