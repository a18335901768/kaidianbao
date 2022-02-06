import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installComponent from './plugins/installComponent'
import ElementUI from 'element-ui';
import api from './api'
import './assets/css/reset.css'

Vue.use(ElementUI);
Vue.use(installComponent);
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
