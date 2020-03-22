import Vue from 'vue'
import App from './App.vue'
import {store} from './Store/store'
import { Player } from './Store/player'

Vue.config.productionTip = false

new Vue({
  store,
  Player,
  render: h => h(App),
}).$mount('#app')
