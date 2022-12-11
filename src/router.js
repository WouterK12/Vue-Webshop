import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "products",
      component: () => import(/* webpackChunkName: "products" */ "./views/Products.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import(/* webpackChunkName: "cart" */ "./views/Cart.vue"),
    },
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/product/:productId",
      name: "productDetail",
      component: () => import(/* webpackChunkName: "productDetail" */ "./views/ProductDetail.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import(/* webpackChunkName: "success" */ "./views/Success.vue"),
    },
    {
      path: "/cancelled",
      name: "cancelled",
      component: () => import(/* webpackChunkName: "cancelled" */ "./views/Cancelled.vue"),
    },
  ],
});

export default router;
