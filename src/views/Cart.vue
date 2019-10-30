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
          <v-card flat>
            <div class="item-details">
              <h1 style="font-size: 30px;">Bag</h1>
              <div>
                <h4 class="font-size: 20px; mt-4">€ 50.00</h4>
                <div class="mt-5">
                  <p>Quantity: 1</p>
                  <p>
                    Color:
                    <span class="product_green">a</span>
                  </p>
                </div>
              </div>
            </div>
            <v-card-actions mx-auto class="mx-auto justify-center">
              <a class="btn-light remove-btn" @click="removeItem()">remove</a>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-row>

      <v-divider></v-divider>
    </div>
    <v-row>
      <div class="mx-auto">
        <v-container>
          <a class="btn checkout-btn">
            Check out
            <i style="font-size: 15px; margin-left: 15px;" class="ion-ios-arrow-forward"></i>
          </a>
        </v-container>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCartItems", "getCartItemPic"]),
    cart() {
      return this.getCartItems();
    },
    pic() {
      return this.getCartItemPic();
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
