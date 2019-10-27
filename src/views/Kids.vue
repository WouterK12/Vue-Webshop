<template>
  <v-container>
    <div class="ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Related Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.
          </p>
        </div>
      </div>
      <v-container class="gray-bg pt-8 pb-0">
        <v-row no-gutters class="row-portfolio portfolio-style-2">
          <v-flex md4 sm6 xs12 class="portfolio-item" v-for="item in items" v-bind:key="item.name">
            <div class="portfolio-wrapper" @click="goToDetail(item.name)">
              <div class="portfolio-thumb">
                <img src="../assets/img/5.jpg" alt />
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
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

const { db } = require('../fb');

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['items'])
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'productDetail', params: { productId: id } });
    }
  },
  created() {
    // this.$store.commit("REFRESH_POSTS");
  }
};
</script>

<style scoped>
.portfolio-wrapper {
  cursor: pointer;
}
</style>
