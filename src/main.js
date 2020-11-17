import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
