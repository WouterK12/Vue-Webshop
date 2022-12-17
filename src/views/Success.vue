<template>
  <v-container>
    <div class="pt-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Success</h2>
          <p>Your order has been registered! <br>You will receive an email from PayPal shortly.</p>
          <p v-if="cart.length" style="font-weight:bold;">This page is your order confirmation. <br>It can only be viewed once.</p>
        </div>
      </div>
    </div>

    <div v-if="cart.length" class="pt-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Your ordered products</h2>
        </div>
      </div>
    </div>
    
    <CartProducts />

  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import CartProducts from '../components/CartProducts.vue';

export default {
  computed: {
    ...mapState(['cart']),
  },
  mounted() {
    window.onbeforeunload = () => localStorage.removeItem("cart");
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('CLEAR_CART');
    window.onbeforeunload = null;
    next();
  },
  components: { CartProducts }
};
</script>
