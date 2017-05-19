import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';

import { store } from './store/index';
// CSS
import './css/shared/base.scss';
import './css/shared/module.scss';
import './css/pages/main.scss';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
