import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';

import { store } from './store/index';
import * as VueGoogleMaps from 'vue2-google-maps';

// CSS
import './css/shared/base.scss';
import './css/shared/module.scss';
import './css/pages/main.scss';

Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA6yNYnL5f-q3o-8ZdImtEsiYMYHwWfifY',
    v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
