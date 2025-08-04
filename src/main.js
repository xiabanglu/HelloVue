import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/HmButton.vue'
import CodeButton from './components/CodeButton.vue'

Vue.config.productionTip = false

Vue.component('HmButton', HmButton)
Vue.component('CodeButton', CodeButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
