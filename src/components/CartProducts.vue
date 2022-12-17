<template>
  <v-container>
  <div
      class="mx-auto"
      :style="$vuetify.breakpoint.lgAndDown ? 'max-width:900px' : 'max-width: 1500px'"
      v-for="(product, i) in cart"
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
            <v-img :src="product.banner" style="width: 90%; border-radius: 0px; margin: 0 auto;"></v-img>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md7>
          <v-row>
            <v-col md="5" sm="10" cols="12">
              <v-card flat>
                <div class="product-details">
                  <router-link :to="'/product/'+product.id">
                    <h1 style="font-size: 30px;">{{product.name}}</h1>
                  </router-link>
                  <h4 class="font-size: 20px; mt-4">{{config.currency_symbol}} {{product.totalPrice}}</h4>
                  <div class="mt-5">
                    <p>Quantity: {{product.quantity}}</p>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col v-if="interactive">
              <v-layout align-center fill-height>
                <v-flex>
                  <v-card flat>
                    <v-card-actions class="justify-center">
                      <a class="btn-light remove-btn" @click="removeProduct(product)">remove</a>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-col>
          </v-row>
        </v-flex>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['interactive'],
  computed: {
    ...mapState(['config', 'cart']),
  },
  methods: {
    removeProduct(product) {
      this.$store.commit('REMOVE_FROM_CART', product);
    }
  }
};
</script>