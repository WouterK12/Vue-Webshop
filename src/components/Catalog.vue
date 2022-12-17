<template>
  <v-container v-if="products.length" class="pt-8 pb-0">
    <v-row no-gutters class="row-portfolio portfolio-style-2">
      <v-flex md4 sm6 xs12 class="portfolio-item" v-for="product in products" v-bind:key="product.name">
        <div class="portfolio-wrapper" @click="goToDetail(product._id, product.name)">
          <div class="portfolio-thumb">
            <img v-bind:src="product.banner" alt />
            <div class="ml-6 mr-6">
              <v-row>
                <h2 style="font-size:20px;">{{product.name}}</h2>
                <v-spacer></v-spacer>
                <h5 style="font-size: 15px;">{{config.currency_symbol}} {{product.price}}</h5>
              </v-row>
            </div>
          </div>
          <div class="portfolio-caption text-left">
            <div class="work-tag">
              <p>{{product.name}}</p>
            </div>
            <h6>
              <font color="white">{{product.description}}</font>
            </h6>
          </div>
        </div>
      </v-flex>
    </v-row>
  </v-container>
  <v-container v-else>
      <v-progress-linear indeterminate color="grey"></v-progress-linear>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  Name: "Catalog",
  computed: {
    ...mapState(["config", "products"]),
  },
  methods: {
    goToDetail(id, name) {
      window.scrollTo(0, 0);
      this.$router.push({ name: "productDetail", params: { productId: id, productName: name.replace(/\s+/g, '-') } });
    }
  }
};
</script>

<style scoped>
.portfolio-wrapper {
  cursor: pointer;
}
</style>
