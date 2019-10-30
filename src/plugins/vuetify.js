import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    primary: '#444444',
    product_red: '#444444',
    product_green: '#b0bec5',
    product_blue: 'hsl(204, 86%, 53%)',
    product_black: 'hsl(0, 0%, 21%)'
  }
});
