/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/extensions
import router from './routes.js';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
