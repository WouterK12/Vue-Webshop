import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import db from './fb';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        name: 'Relatiegeschenken',
        description: 'Bags, kledij, hamamdoeken, sleutelhangers'
      },
      {
        name: 'Andere',
        description: 'Metalen doosjes, Theelichtjes, armbanden'
      },
      {
        name: 'Textiel',
        description: 'Keukenhanddoeken, keukenschorten'
      },
      {
        name: 'Bags',
        description:
          'Sportzakken , rugzakken, Toiletzakken, linnen zakken, knikkerzakken en nog veel meer'
      },
      {
        name: 'Baby & Kids',
        description:
          'Badjassen, Handdoeken , Washandjes, slabben, linnenzakken, kaphanddoeken , jumpsuits, keukenshort'
      },
      {
        name: 'Badlinnen',
        description: 'Badjassen, Handdoeken en Washandjes'
      }
    ],
    cart: [],
    whishlist: []
  },
  mutations: {
    REFRESH_POSTS(state) {
      state.posts = [];
      db.collection('posts')
        .orderBy('Timestamp', 'desc')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const post = {
              ...doc.data(),
              id: doc.id
            };
            const time = new Date(post.Timestamp.seconds * 1000);
            post.Timestamp = moment(time)
              .locale('nl')
              .format('llll');
            state.posts.push(post);
          });
        });
    }
  },
  getters: {
    getBookById: state => (id) => {
      // eslint-disable-next-line no-param-reassign
      id = parseInt(id, 0); // id from route is string && not int
      return state.books.find(book => book.id === id);
    },
    getProductById: state => (id) => {
      // eslint-disable-next-line no-param-reassign
      state.items.find(item => item.name === id);
    }
  }
});
