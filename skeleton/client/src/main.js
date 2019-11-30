import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap.css'
import './assets/css/grails.css'
import './assets/css/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
