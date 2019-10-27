<template>
  <v-app id="app">
    <v-app-bar app flat>
      <v-toolbar-title>Calin</v-toolbar-title>
      <v-spacer></v-spacer>
      <nav>
        <ul class="basic-menu clearfix">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/kids">Kids</a>
          </li>
          <li>
            <a href="/blog">Men</a>
          </li>
          <li>
            <a href="/blog">Women</a>
          </li>
        </ul>
      </nav>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
    <v-btn small fab v-scroll="onScroll" v-show="fab" dark fixed bottom right @click="toTop">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
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
  components: { Footer }
};
</script>

<style>
@import "./assets/styles/style.css";
@import "./assets/styles/global.css";
</style>
