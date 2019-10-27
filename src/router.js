import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kids',
      name: 'kids',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Kids.vue')
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/books/:bookId',
      name: 'bookDetail',
      component: () => import(/* webpackChunkName: "bookDetail" */ './views/BookDetail.vue')
    },
    {
      path: '/product/:productId',
      name: 'productDetail',
      component: () => import(/* webpackChunkName: "bookDetail" */ './views/ProductDetail.vue')
    }
  ]
});

export default router;
