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
        name: "home",
        location: "/",
      },
      {
        name: "products",
        location: "/products",
        description: "Here you can find awesome products",
      },
    ],
    items: [
      {
        id: 3,
        name: "T-shirt",
        description: "The most awesome T-shirt ever made",
        banner: require("../assets/img/5.jpg"),
        pics: [
          require("../assets/img/5.jpg"),
          require("../assets/img/6.jpg"),
        ],
        price: 15.99,
        category: "products",
        versions: {
          sizes: ["xs", "s", "m", "l", "xl"],
          colors: ["green", "blue", "red", "black"],
        },
      },
      {
        id: 4,
        name: "Black Sweater",
        description: "Supersoft sweater that is just amazing, only available in black",
        banner: require("../assets/img/5.jpg"),
        pics: [
          require("../assets/img/5.jpg"),
          require("../assets/img/6.jpg"),
        ],
        price: 59.99,
        category: "products",
        versions: {
          sizes: ["s", "m", "l", "xl", "xxl"],
        },
      },
      {
        id: 5,
        name: "Watch",
        description: "The nicest watch you wish your grandfater gave you",
        banner: require("../assets/img/5.jpg"),
        pics: [
          require("../assets/img/5.jpg"),
          require("../assets/img/6.jpg"),
        ],
        price: 99.99,
        category: "products",
      },
      {
        id: 6,
        name: "Mug",
        description: "Best. Mug. Ever",
        banner: require("../assets/img/5.jpg"),
        pics: [
          require("../assets/img/5.jpg"),
          require("../assets/img/6.jpg"),
        ],
        price: 5.99,
        category: "products",
      },
      {
        id: 7,
        name: "Cool Sticker",
        description: "Just a cool sticker, nothing more to tell you about it",
        banner: require("../assets/img/5.jpg"),
        pics: [
          require("../assets/img/5.jpg"),
          require("../assets/img/6.jpg"),
        ],
        price: 3.99,
        category: "products",
      },
      {
        id: 8,
        name: "Cooler Sticker",
        description: "This ones' cooler than the other one",
        banner: require("../assets/img/5.jpg"),
        pics: [
          require("../assets/img/5.jpg"),
          require("../assets/img/6.jpg"),
        ],
        price: 4.99,
        category: "products",
      },
      {
        id: 9,
        name: "Coaster",
        description: "Everybody knows what a coaster is I guess",
        banner: require("../assets/img/5.jpg"),
        pics: [
          require("../assets/img/5.jpg"),
          require("../assets/img/6.jpg"),
        ],
        price: 2.99,
        category: "products",
      },
    ],
    cart: [],
    whishlist: [],
  },
  mutations: { ...mutations },
  getters: { ...getters },
});
