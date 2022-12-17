import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import config from "../../config.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: config,
    products: [],
    cart: [],
  },
  mutations: { ...mutations },
  getters: { ...getters },
  actions: {
    async initialize({ commit }) {
      const products = await this.getters.getProducts();
      const cart = this.getters.getCartProducts(products);

      commit("INITIALIZE", { products, cart });
    },
  },
});
