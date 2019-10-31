import mutations from '../../src/store/mutations';
import getters from '../../src/store/getters';
import items from './items';

export default {
  state: {
    cart: [],
    items: [...items]
  },
  mutations,
  getters
};
