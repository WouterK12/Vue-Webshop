import Vue from 'vue';
import Autocomplete from '@trevoreyre/autocomplete-vue';
import '@trevoreyre/autocomplete-vue/dist/style.css';

import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import 'buefy/dist/buefy.css';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Autocomplete);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
