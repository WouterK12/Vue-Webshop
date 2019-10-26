<template>
  <v-app id="app">
    <v-app-bar app flat class>
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
@import "./assets/styles/style.css";
</style>