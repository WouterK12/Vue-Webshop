<template>
  <v-container>
    <v-card v-if="book && book.img" max-width="1554" class="mx-auto">
      <v-layout row class="py-4">
        <v-flex class="xs12 sm6 md4">
          <v-img class="mx-auto" max-height="500" max-width="300" :src="book.img"></v-img>
        </v-flex>
        <v-card-text v-if="!$vuetify.breakpoint.smAndUp">
          <v-flex class="text-center xs12 sm6">
            <h2>{{book.title}}</h2>
            <p class="mt-8">{{book.description}}</p>
          </v-flex>
        </v-card-text>
        <v-flex v-else class="text-center xs12 sm6">
          <h2>{{book.title}}</h2>
          <p class="mt-8">{{book.description}}</p>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card v-else>
      <v-card-title>Something went wrong</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getBookById']),
    book() {
      return this.getBookById(this.$route.params.bookId);
    }
  }
};
</script>

<style>
</style>
