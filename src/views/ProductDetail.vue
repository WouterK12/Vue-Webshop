<template>
  <div
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
          <v-carousel-item v-for="(pic, i) in pics" :key="i">
            <img v-bind:src="pic.src" />
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex lg7>
        <v-card class="mh" flat height="100%" style="border-radius:0px">
          <div class="breadcrumbs">
            Product /
            <span class="crumb-item grey--text text--lighten-1">bag</span>
          </div>
          <v-container>
            <v-layout row wrap align-center>
              <v-flex class="detail-container">
                <h1>Bag</h1>
                <br />
                <h4>€ 50.00</h4>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container class="size-buttons">
            <v-layout row wrap align-center>
              <v-flex class="text-center">
                <p style="margin-left: 30px;" class="text-left">Select Size</p>
                <div id="sizes">
                  <a id="xs" class="size-btn" v-on:click="selectSize('xs')">xs</a>
                  <a id="s" class="size-btn" v-on:click="selectSize('s')">s</a>
                  <a id="m" class="size-btn" v-on:click="selectSize('m')">m</a>
                  <a id="l" class="size-btn" v-on:click="selectSize('l')">l</a>
                  <a id="xl" class="size-btn" v-on:click="selectSize('xl')">xl</a>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container class="action-buttons">
            <v-layout row wrap align-center>
              <v-flex class="text-center">
                <a class="btn">
                  Add To Card
                  <i class="ml-3 ion-ios-cart-outline icons"></i>
                </a>
                <a class="btn-light ml-5">
                  whishlist
                  <i class="ml-5 ion-ios-heart-outline icons"></i>
                </a>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container class="product-description">
            <h4 class="grey--text text--lighten-1">Product Details</h4>
            <div style="max-width: 460px;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </v-container>
        </v-card>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // computed: {
  //   ...mapGetters(["getProductById"]),
  //   item() {
  //     return this.getProductById(this.$route.params.productId);
  //   }
  // }
  data: () => ({
    model: 0,
    pics: [
      { src: require('../assets/img/5.jpg') },
      { src: require('../assets/img/5.jpg') },
      { src: require('../assets/img/6.jpg') }
    ]
  }),
  methods: {
    resetSelected() {
      const childs = document.getElementById('sizes').childNodes;
      childs.forEach(el => el.classList.remove('size-selected'));
    },
    selectSize(size) {
      this.resetSelected();
      document.getElementById(size).classList.add('size-selected');
    }
  },
  mounted() {
    this.selectSize('xs');
  }
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
    padding: 10px 0px 10px 50px;
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
</style>
