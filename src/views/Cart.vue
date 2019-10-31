<template>
  <v-container>
    <div class="ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Your Shopping Cart</h2>
        </div>
      </div>
    </div>
    <div
      class="mx-auto"
      :style="$vuetify.breakpoint.lgAndDown ? 'max-width:900px' : 'max-width: 1500px'"
      v-for="(item, i) in cart"
      v-bind:key="i"
    >
      <v-divider></v-divider>

      <v-row>
        <v-flex lg2 md3 xl2 sm3 xs12>
          <v-card
            class="pt-4 pb-2"
            flat
            style="max-width: 450px; margin: 0 auto; border-radius: 0px;"
          >
            <v-img :src="pic" style="width: 90%; border-radius: 0px; margin: 0 auto;"></v-img>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md7>
          <v-row>
            <v-col md="5" sm="10" cols="12">
              <v-card flat>
                <div class="item-details">
                  <router-link :to="'/product/'+item.id">
                    <h1 style="font-size: 30px;">{{item.name}}</h1>
                  </router-link>
                  <h4 class="font-size: 20px; mt-4">€ {{item.price}}</h4>
                  <div class="mt-5">
                    <p>Quantity: {{item.quantity}}</p>
                    <p v-if="item.size">Size: {{item.size}}</p>
                    <p v-if="item.color">
                      Color:
                      <v-chip small class="ma-2" :class="`product-${item.color}-selected`"></v-chip>
                    </p>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col>
              <v-layout align-center fill-height>
                <v-flex>
                  <v-card flat>
                    <v-card-actions class="justify-center">
                      <a class="btn-light remove-btn" @click="removeItem(item)">remove</a>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-col>
          </v-row>
        </v-flex>
      </v-row>
    </div>

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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCartItems', 'getCartItemPic', 'getCartTotal']),
    cart() {
      return this.getCartItems();
    },
    pic() {
      return this.getCartItemPic();
    },
    total() {
      return this.getCartTotal();
    }
  },
  methods: {
    removeItem(item) {
      this.$store.commit('REMOVE_FROM_CART', item);
    },
    checkOut() {
      this.$store.commit('CHECK_OUT');
    }
  }
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
