import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import VueSweetalert2 from 'vue-sweetalert2'

require('../css/style.css')
require('../vendors/iconfonts/mdi/css/materialdesignicons.min.css')
require('../vendors/css/vendor.bundle.base.css')
require('../css/style.css')
require('../vendors/iconfonts/mdi/css/materialdesignicons.min.css')
require('../images/favicon.png')
require('../css/style.css')
require('../vendors/css/vendor.bundle.base.css')

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCfmiCCSrvbe9FyGh4BBJ4FriUx-c15egg',
      authDomain: 'pruebas123-feac4.firebaseapp.com',
      databaseURL: 'https://pruebas123-feac4.firebaseio.com',
      projectId: 'pruebas123-feac4',
      storageBucket: 'pruebas123-feac4.appspot.com',
      messagingSenderId: '275988567842'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
