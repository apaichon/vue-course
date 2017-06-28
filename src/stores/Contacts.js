import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contact: {},
    pager: {
      pageSize: 2,
      currentPage: 1,
      totalPages: 0
    },
    contacts: [
      {
        'id': 'c1',
        'firstName': 'Kristy',
        'lastName': 'Chung',
        'mobileNo': '099-000-1234',
        'email': 'kristy@vuejs.com',
        'facebook': 'https://facebook.com/kristy',
        'imageUrl': './static/images/kristy.png'
      },
      {
        'id': 'c2',
        'firstName': 'Matt',
        'lastName': 'Giampietro',
        'mobileNo': '099-000-4567',
        'email': 'matt.g@vuejs.com',
        'facebook': 'https://facebook.com/matt.g',
        'imageUrl': './static/images/matthew.png'
      },
      {
        'id': 'c3',
        'firstName': 'Molly',
        'lastName': '',
        'mobileNo': '099-123-4567',
        'email': 'molly@vuejs.com',
        'facebook': 'https://facebook.com/molly',
        'imageUrl': './static/images/molly.png'
      },
      {
        'id': 'c4',
        'firstName': 'Elyse',
        'lastName': '',
        'mobileNo': '099-777-1111',
        'email': 'elyse@vuejs.com',
        'facebook': 'https://facebook.com/elyse',
        'imageUrl': './static/images/elyse.png'
      },
      {
        'id': 'c5',
        'firstName': 'Jenny',
        'lastName': 'Hess',
        'mobileNo': '099-111-9999',
        'email': 'jenny.h@vuejs.com',
        'facebook': 'https://facebook.com/jenny.h',
        'imageUrl': './static/images/jenny.jpg'
      },
      {
        'id': 'c6',
        'firstName': 'Team',
        'lastName': 'Fu',
        'mobileNo': '099-000-4567',
        'email': 'team.f@vuejs.com',
        'facebook': 'https://facebook.com/matt.g',
        'imageUrl': './static/images/elliot.jpg'
      },
      {
        'id': 'c7',
        'firstName': 'Steve',
        'lastName': 'Jobes',
        'mobileNo': '099-999-9999',
        'email': 'steve.j@vuejs.com',
        'facebook': 'https://facebook.com/matt.g',
        'imageUrl': './static/images/steve.jpg'
      },
      {
        'id': 'c8',
        'firstName': 'Daniel',
        'lastName': 'Louise',
        'mobileNo': '099-245-1264',
        'email': 'daniel.l@vuejs.com',
        'facebook': 'https://facebook.com/daniel.l',
        'imageUrl': './static/images/daniel.jpg'
      },
      {
        'id': 'c9',
        'firstName': 'Helen',
        'lastName': 'Troy',
        'mobileNo': '099-444-5555',
        'email': 'helen.t@vuejs.com',
        'facebook': 'https://facebook.com/helen.t',
        'imageUrl': './static/images/helen.jpg'
      }
    ]
  },
  getters: {
    contacts: state => state.contacts,
    currentPage: state => state.pager.currentPage,
    totalPages: state => state.pager.totalPages
  },
  mutations: {
    ADD_CONTACT (state, contact) {
      state.contacts.push(contact)
    },
    UPDATE_CONTACT (state, contact) {
      let contacts = state.contacts.filter((contact) => {
        return contact.id === contact.id
      })
      state[state.contacts.indexOf(contacts[0])] = contact
    },
    REMOVE_CONTACT (state, contact) {
      state.contacts.splice(state.contacts.indexOf(contact), 1)
    },
    SET_CONTACTS (state, contacts) {
      state.contacts = contacts
    },
    SET_CURRENT_PAGE (state, page) {
      if (page > state.pager.totalPages) {
        state.pager.currentPage = state.pager.totalPages
      } else if (page <= 0) {
        state.pager.currentPage = 1
      } else {
        state.pager.currentPage = page
      }
    },
    SET_TOTAL_PAGES (state, total) {
      state.pager.totalPages = total
    }
  },
  actions: {
    addContact ({commit}, contact) {
      commit('ADD_CONTACT', contact)
    },
    updateContact ({commit}, contact) {
      commit('UPDATE_CONTACT', contact)
    },
    removeContact ({commit}, contact) {
      commit('REMOVE_CONTACT', contact)
    },
    setContacts ({commit}, contacts) {
      commit('SET_CONTACTS', contacts)
    },
    setCurrentPage ({commit}, page) {
      commit('SET_CURRENT_PAGE', page)
    },
    setTotalPages ({commit}, total) {
      commit('SET_TOTAL_PAGES', total)
    }
  }
})
