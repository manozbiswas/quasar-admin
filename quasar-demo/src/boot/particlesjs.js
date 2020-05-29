import { boot } from 'quasar/wrappers';
import VueParticles from 'vue-particles';


export default boot(({ Vue }) => {
  Vue.use(VueParticles);
});
