<template>
  <v-container>
    <div class="ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>{{config.metadata.title}}</h2>
          <p>{{config.metadata.description}}</p>
        </div>
      </div>
      <Catalog />
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import Catalog from '../components/Catalog.vue';

export default {
  computed: {
    ...mapState(['config']),
  },
  components: { Catalog }
};
</script>

<style scoped>
</style>
