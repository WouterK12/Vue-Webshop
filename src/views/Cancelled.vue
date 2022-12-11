<template>
  <v-container>
    <div class="ptb-90">
      <div class="container">
        <div class="area-title text-center">
          <h2>Cancelled</h2>
          <p>You have cancelled the order.</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
  },
  mounted() {
    if(!this.cart.length){
      this.$router.push({ name: 'products'});
    }
  }
};
</script>
