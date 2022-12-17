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
        :style="$vuetify.breakpoint.mdAndDown ? 'width:70%' : 'width:40%'"
      >
        <div class="d-flex align-center justify-center" :style="$vuetify.breakpoint.mdAndDown ? 'flex-direction: column' : ''">
          <v-col>
            <v-row v-if="config.shipping_costs > 0">
              <v-col class="pb-0 d-flex justify-end">
                <h3 style="font-size: 20px;">
                Shipping:
                </h3>
              </v-col>
              <v-col class="pb-0 d-flex justify-start">
                <span style="font-weight: 600; margin-left: 15px;">{{config.currency_symbol}} {{config.shipping_costs}}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-end">
                <h3 style="font-size: 20px;">
                  Total:
                </h3>
              </v-col>
              <v-col class="d-flex justify-start">
                <span style="font-weight: 600; margin-left: 15px;">{{config.currency_symbol}} {{total}}</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="d-flex justify-center">
            <a class="btn checkout-btn" @click="checkOut()">
              Check out
              <i style="font-size: 15px; margin-left: 15px;" class="ion-ios-arrow-forward"></i>
            </a>
          </v-col>
        </div>
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
    ...mapState(['config', 'cart']),
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
