<template>
  <v-container>
    <div class="related-post-area ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Related Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
        </div>
      </div>
      <div id="related-active">
        <div class="portfolio-item">
          <div class="portfolio-wrapper">
            <div class="portfolio-thumb">
              <img src="assets/img/6.jpg" alt />
              <div class="view-icon">
                <a href="portfolio-single.html">
                  <i class="ion-arrow-right-c"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-caption text-left">
              <div class="work-tag">
                <p>Web Design</p>
              </div>
              <h4>
                <a href="portfolio-single.html">Brand Redesign Works</a>
              </h4>
            </div>
          </div>
        </div>
        <div class="portfolio-item">
          <div class="portfolio-wrapper">
            <div class="portfolio-thumb">
              <img src="assets/img/6.jpg" alt />
              <div class="view-icon">
                <a href="portfolio-single.html">
                  <i class="ion-arrow-right-c"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-caption text-left">
              <div class="work-tag">
                <p>Web Design</p>
              </div>
              <h4>
                <a href="portfolio-single.html">Brand Redesign Works</a>
              </h4>
            </div>
          </div>
        </div>
          <div class="portfolio-wrapper">
            <div class="portfolio-thumb">
              <img src="img/portfolio/related/2.jpg" alt />
              <div class="view-icon">
                <a href="portfolio-single.html">
                  <i class="ion-arrow-right-c"></i>
                </a>
              </div>
            </div>
            <div class="portfolio-caption text-left">
              <div class="work-tag">
                <p>Web Design</p>
              </div>
              <h4>
                <a href="portfolio-single.html">Brand Redesign Works</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
const { db } = require("../fb");
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {},
  created() {
    //this.$store.commit("REFRESH_POSTS");
  }
};
</script>

<style scoped>
</style>