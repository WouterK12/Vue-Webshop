<template>
  <v-container>
    <div class="ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>{{page.name}}</h2>
          <p>{{page.description}}</p>
        </div>
      </div>
      <Catalog />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import Catalog from '../components/Catalog.vue';

export default {
  computed: {
    ...mapGetters(['getPageInfoByName']),
    page() {
      return this.getPageInfoByName(this.$route.name);
    }
  },
  components: { Catalog }
};
</script>

<style scoped>
</style>
