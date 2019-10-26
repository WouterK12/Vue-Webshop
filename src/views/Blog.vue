<template>
  <v-container>
    <v-card class="mx-auto mt-5" max-width="600" v-for="post in posts" :key="post.id">
      <v-img class="white--text" height="200px" src="../assets/wall_full.jpg">
        <v-card-title class="align-end fill-height">{{post.Title}}</v-card-title>
      </v-img>
      <v-card-text>
        <span>{{post.Timestamp}}</span>
        <br />
        <br />
        <span color="black" v-html="post.Content"></span>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
const { db, auth } = require("../fb");
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["posts"])
  },
  created() {
    this.$store.commit("REFRESH_POSTS");
  }
};
</script>

<style scoped>
</style>