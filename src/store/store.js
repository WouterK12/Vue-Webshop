/* eslint-disable global-require */
import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        name: "products",
        location: "/products",
        description: "Here you can find awesome products",
      },
    ],
    items: [
      {
        id: 1,
        name: "Product 1",
        description: "Very nice product",
        banner: require("../assets/img/5.jpg"),
        pics: [require("../assets/img/5.jpg"), require("../assets/img/6.jpg")],
        price: 24.99,
        category: "products",
        // TODO: add stock and update products in db
      },
      // {
      //   id: 3,
      //   name: "T-shirt",
      //   description: "The most awesome T-shirt ever made",
      //   banner: require("../assets/img/5.jpg"),
      //   pics: [
      //     require("../assets/img/5.jpg"),
      //     require("../assets/img/6.jpg"),
      //   ],
      //   price: 15.99,
      //   category: "products",
      //   versions: {
      //     sizes: ["xs", "s", "m", "l", "xl"],
      //     colors: ["green", "blue", "red", "black"],
      //   },
      // },
    ],
    cart: [],
  },
  mutations: { ...mutations },
  getters: { ...getters },
});
