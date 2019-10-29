<template>
  <v-container>test</v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCartItems']),
    cart() {
      return this.getCartItems();
    }
  }
};
</script>

<style>
</style>
