import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import db from '@/fb'

const imgBook1 = require('./assets/book1.jpg')
const imgBook2 = require('./assets/book2.jpg')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    books: [
      {
        id: 1,
        title: 'Reis van het einde naar het begin',
        img: imgBook1,
        description:
          'Ooit al eens een wereldreis willen maken? Dit kan! In deze dichtbundel word je meegenomen op een wel heel bijzondere reis… Een reis die je meeneemt doorheen de vier elementen: water, wind, aarde en lucht. Doorheen deze reis zal je heel wat herkenbare gevoelens, gedachten tegen komen. Misschien kunnen die je hoop, steun en troost bieden. Als deze dichtbundel je kan inspireren, kracht kan geven en een andere kijk op het leven kan bieden, is Eline Wijns’ doel zeker geslaagd',
      },
      {
        id: 2,
        title: 'De ongewenste Princess',
        img: imgBook2,
        description:
          'Sinds het uitbreken van de Vierde Wereldoorlog is het ieder land voor zich geworden en heeft bijna elk land weer een koningshuis. Zo is het ook in Ierland. Net als in de meeste landen is de ongelijkheid in de samenleving hier meer dan ooit voelbaar. Het is waar de achttienjarige Daphne woont en leeft. En wel aan de rand van die samenleving vanwege het huwelijk van haar ouders. Door de schrijnende ongelijkheid tussen rijk en arm is de monarchie beslist niet haar beste vriend. Desalniettemin brengt het lot haar in contact met iemand die bereid is haar te helpen: de prins.',
      },
      {
        id: 3,
        title: 'De qsdfqsdfqsdf ',
        img: imgBook1,
        description: 'interessante uitleg',
      },
    ],
  },
  mutations: {
    REFRESH_POSTS(state) {
      state.posts = []
      db.collection('posts')
        .orderBy('Timestamp', 'desc')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const post = {
              ...doc.data(),
              id: doc.id,
            }
            const time = new Date(post.Timestamp.seconds * 1000)
            post.Timestamp = moment(time)
              .locale('nl')
              .format('llll')
            state.posts.push(post)
          })
        })
    },
  },
  getters: {
    getBookById: state => (id) => {
      // eslint-disable-next-line no-param-reassign
      id = parseInt(id) // id from route is string && not int
      return state.books.find(book => book.id === id)
    },
  },
})
