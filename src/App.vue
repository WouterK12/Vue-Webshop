<template>
  <v-app id="app">
    <title>{{shopname}}</title>
    <v-card flat class="mx-auto overflow-hidden" width="100%" height="100%">
      <Navbar />
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-btn small fab v-scroll="onScroll" v-show="fab" dark fixed bottom right @click="toTop">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-card>
    <Footer />
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  computed: {
    ...mapState(['shopname']),
    ...mapGetters(['getCartItems']),
  },
  created() {
    this.$store.commit('INITIALIZE_CART', this.getCartItems());
  },
  data: () => ({
    fab: false
  }),
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },
  components: { Footer, Navbar }
};
</script>

<style>
@import "./assets/styles/style.css";
@import "./assets/styles/global.css";
@import "./assets/styles/colors.css";
</style>
