<template>
  <v-container class="mt-12 mb-12" grid-list-xl style="max-width: 1200px;">
    <v-layout wrap>
      <v-flex v-for="book in books" :key="book.id">
        <v-hover class="mx-auto">
          <template v-slot="{ hover }">
            <v-card
              @click="goToDetail(book.id)"
              :elevation="hover ? 24 : 8"
              class="book"
              min-width="150px"
              max-width="250px"
            >
              <v-img v-bind:src="book.img" max-height="320px"></v-img>
              <v-card-text
                class="cyan--text text--darken-1 font-weight-light text-center"
              >{{ book.title }}</v-card-text>
            </v-card>
          </template>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({}),
  computed: {
    ...mapState(['books'])
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'bookDetail', params: { bookId: id } });
    }
  }
};
</script>

<style>
.book {
  cursor: pointer;
}
</style>
