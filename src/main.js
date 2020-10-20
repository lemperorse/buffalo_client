import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js' 
Vue.use(Chartkick.use(Chart))

import VueModality from 'vue-modality'
Vue.use(VueModality)

import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
Vue.use(VueIziToast); 

Vue.config.productionTip = false;

import Notifications from 'vue-notification' 
Vue.use(Notifications)

import VueGeolocation from 'vue-browser-geolocation' 

Vue.use(VueGeolocation) 
// key:'AIzaSyA6tCMNLaeTHyjiwtdPmH1ilJesXelH68U' 
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA6tCMNLaeTHyjiwtdPmH1ilJesXelH68U',
  },
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
