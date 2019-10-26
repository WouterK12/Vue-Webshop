<template>
  <v-app id="app" max-with="700px">
    <v-app-bar app dark flat class="cyan lighten-3">
      <v-toolbar-title>Eline Wijns</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/blog">Blog</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data: () => ({})
};
</script>

<style>
#app {
  max-width: 2000px;
}
</style>