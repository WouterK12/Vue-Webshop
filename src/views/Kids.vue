<template>
  <v-container>
    <div class="ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Related Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.
          </p>
        </div>
      </div>
      <Catalog />
    </div>
  </v-container>
</template>

<script>
import Catalog from '../components/Catalog.vue';

export default {
  data() {
    return {};
  },
  components: { Catalog }
};
</script>

<style scoped>
</style>
