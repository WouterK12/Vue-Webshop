<template>
  <div>
    <div
      v-if="product"
      class="mx-auto"
      :class="$vuetify.breakpoint.mdAndUp ? 'ptb-90' : 'pt-5 gray-bg'"
      :style="$vuetify.breakpoint.lgAndDown ? 'max-width:900px' : 'max-width: 1500px'"
    >
      <v-row>
        <v-flex lg5 md6 sm6 xs10 xl4 mx-auto>
          <v-carousel
            height="auto"
            :continuous="false"
            cycle
            show-arrows
            hide-delimiter-background
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
            class="caroussel"
          >
            <v-carousel-item v-for="(pic, i) in product.pics" :key="i">
              <img v-bind:src="pic" />
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex lg7>
          <v-card class="mh" flat height="100%" style="border-radius:0px">
            <div class="breadcrumbs">
              <router-link :to="'/'">
                <h4 class>
                  {{`home / `}}
                  <span
                    class="crumb-product grey--text text--lighten-1"
                  >{{product.name}}</span>
                </h4>
              </router-link>
            </div>
            <v-container>
              <v-layout row wrap align-center>
                <v-flex class="detail-container">
                  <h1 style="font-size: 30px;">{{product.name}}</h1>
                  <br />
                  <h4 v-if="product.canAddToCart" style="font-size: 20px;">{{config.currency_symbol}} {{product.price}}</h4>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container v-if="product.canAddToCart" class="action-buttons">
              <v-layout row wrap align-center>
                <v-flex class="text-center">
                  <a class="btn" v-on:click="addToCart()">
                    Add To Card
                    <i class="ml-3 ion-ios-cart-outline icons"></i>
                  </a>
                </v-flex>
              </v-layout>
            </v-container>
            <!-- <v-container v-else class="product-description">
              <h1 style="color:tomato">Out of stock!</h1>
            </v-container> -->
            <v-container class="product-description">
              <!-- <h4 class="grey--text text--lighten-1">Product Details</h4> -->
              <div style="max-width: 460px;">{{product.description}}</div>
            </v-container>
          </v-card>
        </v-flex>
      </v-row>
    </div>
    <v-container v-else>
      <v-progress-linear indeterminate color="grey"></v-progress-linear>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['config']),
    ...mapGetters(['getProductById']),
    product() {
      return this.getProductById(this.$route.params.productId);
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', this.product);
    }
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .detail-container {
    padding: 30px 0px 10px 40px;
  }
  .size-buttons a {
    padding: 7px 20px 7px 20px;
  }
  .color-btn {
    padding: 5px 13px 5px 13px !important;
  }
  .action-buttons {
    padding-top: 20px;
  }
  .btn,
  .btn-light {
    font-size: 14px;
    padding: 12px;
  }
  .icons {
    font-size: 15px;
  }
  .product-description {
    padding: 30px 0px 40px 20px;
  }
}
@media only screen and (min-width: 700px) {
  .product-description {
    padding: 30px 0px 40px 60px;
  }
  .mh {
    height: 100%;
  }
  .detail-container {
    padding: 30px 0px 30px 50px;
  }
  .action-buttons {
    padding: 10px 0px 0px 100px;
    margin-top: 30px;
  }
  .icons {
    font-size: 20px;
  }
  .size-buttons {
    padding-left: 70px;
  }
  .size-buttons p {
    text-align: center !important;
  }
}
@media only screen and (min-width: 1200px) {
  .product-description {
    padding: 30px 0px 0px 60px;
  }
  .detail-container {
    padding: 30px 0px 10px 50px;
  }
  .action-buttons {
    padding: 0px 0px 0px 100px;
    margin-top: 30px;
  }
  .icons {
    font-size: 20px;
  }
  .size-buttons {
    padding-left: 60px;
    padding-top: 10px;
    padding-bottom: 0px;
  }
}
.action-buttons a {
  font-weight: 400;
}
.size-buttons a {
  margin: 5px;
}
.size-btn {
  user-select: none;
  -moz-user-select: none;
  background: #fff none repeat scroll 0 0;
  border: 1px solid transparent;
  border-radius: 2px;
  border-color: rgb(214, 214, 214);
  color: rgb(214, 214, 214) !important;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.42857;
  margin-bottom: 0;
  padding: 10px 30px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
}

.size-selected {
  border-color: #444;
  color: #444 !important;
}

.color-btn {
  user-select: none;
  -moz-user-select: none;
  background: #fff none repeat scroll 0 0;
  border: 1px solid transparent;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.42857;
  margin-bottom: 0;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  vertical-align: middle;
}
</style>
