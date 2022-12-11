<template>
  <v-container>
    <div class="ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Your Shopping Cart</h2>
        </div>
      </div>
    </div>

    <CartProducts interactive="true" />

    <v-row v-if="cart.length">
      <div
        class="mx-auto mtb-90"
        :style="$vuetify.breakpoint.mdAndDown ? 'width:70%' : 'width: 40%'"
      >
        <v-row align="center" justify="center">
          <v-col>
            <h3 style="font-size: 20px;">
              Total:
              <span style="font-weight: 600; margin-left: 15px;">€ {{total}}</span>
            </h3>
          </v-col>
          <v-col>
            <a class="btn checkout-btn" @click="checkOut()">
              Check out
              <i style="font-size: 15px; margin-left: 15px;" class="ion-ios-arrow-forward"></i>
            </a>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <div v-else class="text-center justify-center mtb-100">
      <h3 style="font-size: 20px;">Your cart is empty!</h3>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CartProducts from '../components/CartProducts.vue';

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['getCartTotal']),
    total() {
      return this.getCartTotal();
    }
  },
  methods: {
    checkOut() {
      this.$store.commit('CHECK_OUT');
    }
  },
  components: { CartProducts }
};
</script>

<style>
.item-details {
  padding: 30px 10px 10px 50px;
}
.remove-btn {
  padding: 13px 40px !important;
}
.checkout-btn {
  padding: 13px 30px !important;
}
</style>
