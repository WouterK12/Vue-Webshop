<template>
  <v-app id="app">
    <v-card flat class="mx-auto overflow-hidden" width="100%" height="100%">
      <v-app-bar app flat>
        <div>
          <i style="font-size: 30px;" class="ion-ios-search"></i>
        </div>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <router-link to="/">
            <h3>Calin</h3>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <nav v-if="$vuetify.breakpoint.mdAndUp">
          <ul class="basic-menu clearfix">
            <li v-for="link in links" v-bind:key="link.name">
              <router-link :to="link.location">{{link.name}}</router-link>
            </li>
            <li>
              <a style="margin-top: 25px; padding: 0;">
                <i style="font-size: 20px;" class="ion-ios-cart icons"></i>
              </a>
            </li>
          </ul>
        </nav>
        <nav v-else>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </nav>
      </v-app-bar>
      <v-navigation-drawer v-if="$vuetify.breakpoint.mdAndDown" app v-model="drawer" bottom>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <ul class="basic-menu-mobile clearfix">
              <li v-for="link in links" v-bind:key="link.name">
                <router-link :to="link.location">{{link.name}}</router-link>
              </li>
              <li>
                <a style="margin-top: 25px; padding: 0;">
                  <i style="font-size: 30px;" class="ion-ios-cart icons"></i>
                </a>
              </li>
            </ul>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
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
import { mapState } from 'vuex';

import Footer from './components/Footer.vue';

export default {
  name: 'App',
  data: () => ({
    fab: false,
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
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
  computed: {
    ...mapState(['links'])
  },
  components: { Footer }
};
</script>

<style>
@import "./assets/styles/style.css";
@import "./assets/styles/global.css";
</style>
