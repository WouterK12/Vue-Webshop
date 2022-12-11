<template>
  <v-container>
    <div class="pt-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Success</h2>
          <p>Your order has been registered! <br>You will receive an email from PayPal shortly.</p>
          <p style="font-weight:bold;">This page is your order confirmation. <br>It can only be viewed once.</p>
        </div>
      </div>
    </div>

    <div class="pt-90">
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
    if(!this.cart.length){
      this.$router.push({ name: 'products'});
    }

    localStorage.removeItem("cart");
  },
  components: { CartProducts }
};
</script>
