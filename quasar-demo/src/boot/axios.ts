// import axios, { AxiosInstance } from 'axios';
// import { boot } from 'quasar/wrappers';

// declare module 'vue/types/vue' {
//   interface Vue {
//     $axios: AxiosInstance;
//   }
// }

// export default boot(({ Vue }) => {
//   Vue.prototype.$axios = axios.create({
//     baseURL: 'http://spa.test/api/',
//     withCredentials: true
//     // timeout: 1000,
//     // headers: {
//     //   'header': 'value'
//     // }
//   });
// });


import Vue from 'vue'
import axios from 'axios'

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosInstance = axios.create({
  baseURL: 'http://spa.test/api/',
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
});

// for use inside Vue files through this.$axios
Vue.prototype.$axios = axiosInstance

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance }
