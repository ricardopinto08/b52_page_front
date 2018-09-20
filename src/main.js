// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
const VueValidationEs = require('vee-validate/dist/locale/es');
Vue.use(VueResource)
Vue.use(VeeValidate, {
    locale: 'es',
    dictionary: {
      es: VueValidationEs
    }
});
Vue.config.productionTip = false
Vue.http.options.root = 'http://18.222.159.10:8080/'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Accept-Language'] = 'en'
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
// Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Authentication, Accept-Language', 'Access-Control-Allow-Origin', 'X-Device-ID'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With, X-Prototype-Version, Token, Auth-Token, Email, X-Device-ID, Authorization'
Vue.http.headers['Access-Control-Max-Age'] = '1728000'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
