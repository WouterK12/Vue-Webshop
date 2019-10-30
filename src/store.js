/* eslint-disable global-require */
import Vue from 'vue';
import Vuex from 'vuex';
import { ToastProgrammatic as Toast } from 'buefy';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        name: 'home',
        location: '/'
      },
      {
        name: 'clothes',
        location: '/clothes',
        description: 'Here you can find awesome clothes'
      },

      {
        name: 'misc',
        location: '/misc',
        description: 'Here you can find awesome items'
      }
    ],
    pics: [
      { src: require('./assets/img/5.jpg') },
      { src: require('./assets/img/5.jpg') },
      { src: require('./assets/img/6.jpg') }
    ],
    items: [
      {
        name: 'Ball',
        description: 'The greatest ball ever',
        price: '10.99',
        id: 1,
        category: 'misc'
      },
      {
        name: 'Bag',
        id: 2,
        description: 'The greatest bag ever',
        price: '24.99',
        category: 'misc',
        versions: {
          colors: ['green', 'blue', 'red', 'black']
        }
      },
      {
        name: 'T-shirt',
        id: 3,
        description: 'The most awesome T-shirt ever made',
        price: '15.99',
        category: 'clothes',
        versions: {
          sizes: ['xs', 's', 'm', 'l', 'xl'],
          colors: ['green', 'blue', 'red', 'black']
        }
      },
      {
        name: 'Black Sweater',
        id: 4,
        description: 'Supersoft sweater that is just amazing, only available in black',
        price: '59.99',
        category: 'clothes',
        versions: {
          sizes: ['s', 'm', 'l', 'xl', 'xxl']
        }
      },
      {
        name: 'Watch',
        id: 5,
        description: 'The nicest watch you wish your grandfater gave you',
        price: '99.99',
        category: 'misc'
      },
      {
        name: 'Mug',
        id: 6,
        description: 'Best. Mug. Ever',
        price: '5.99',
        category: 'misc'
      },
      {
        name: 'Cool Sticker',
        id: 7,
        description: 'Just a cool sticker, nothing more to tell you about it',
        price: '3.99',
        category: 'misc'
      },
      {
        name: 'Cooler Sticker',
        id: 8,
        description: "This ones' cooler than the other one",
        price: '4.99',
        category: 'misc'
      },
      {
        name: 'Coaster',
        id: 9,
        description: 'Everybody knows what a coaster is I guess',
        price: '2.99',
        category: 'misc'
      }
    ],
    cart: [],
    whishlist: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const item = state.cart.find(
        el => el.id === payload.id && el.color === payload.color && el.size === payload.size
      );
      if (item) {
        item.quantity += 1;
        item.price = payload.price * item.quantity;
      } else {
        state.cart.push({ ...payload, quantity: 1, cart_id: Math.floor(Math.random() * 10000) });
      }

      Toast.open({
        message: 'Item added successfully!',
        type: 'is-success'
      });
    },
    REMOVE_FROM_CART(state, payload) {
      state.cart = state.cart.filter(el => el.cart_id !== payload.cart_id);
      Toast.open({
        message: 'Item removed successfully!',
        type: 'is-success'
      });
    }
  },
  getters: {
    getProductById: state => id => state.items.find(item => item.id === Number(id)),
    getPageInfoByName: state => name => state.links.find(link => link.name === name),
    getProductPictures: state => () => state.pics, // some functions to fetch the products pictures
    getCartItems: state => () => state.cart,
    getCartItemPic: state => () => state.pics[0]
  }
});
