import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

import slideTop from "@/components/UI/slideTop";

Vue.component('slide-top', slideTop)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
