<template>
  <v-container class="pt-8 pb-0">
    <v-row no-gutters class="row-portfolio portfolio-style-2">
      <v-flex md4 sm6 xs12 class="portfolio-item" v-for="item in items" v-bind:key="item.name">
        <div class="portfolio-wrapper" @click="goToDetail(item.id)">
          <div class="portfolio-thumb">
            <img src="../assets/img/5.jpg" alt />
            <div class="ml-6 mr-6">
              <v-row>
                <h2 style="font-size:20px;">{{item.name}}</h2>
                <v-spacer></v-spacer>
                <h5 style="font-size: 15px;">€ {{item.price}}</h5>
              </v-row>
            </div>
          </div>
          <div class="portfolio-caption text-left">
            <div class="work-tag">
              <p>{{item.name}}</p>
            </div>
            <h6>
              <font color="white">{{item.description}}</font>
            </h6>
          </div>
        </div>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  Name: "Catalog",
  computed: {
    ...mapState(["items"])
  },
  methods: {
    goToDetail(id) {
      window.scrollTo(0, 0);
      this.$router.push({ name: "productDetail", params: { productId: id } });
    }
  }
};
</script>

<style scoped>
.portfolio-wrapper {
  cursor: pointer;
}
</style>
