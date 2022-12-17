<template>
  <div>
    <v-app-bar app flat>
      <v-row no-gutters align="center" justify="space-between">
        <v-col>
          <autocomplete
            :search="search"
            :placeholder="searchActive? 'Search for a product' : ''"
            aria-label="Search for a product"
            :get-result-value="getResultValue"
            @submit="handleSubmit"
            @click="searchActive = !searchActive"
          >
            <template v-slot:result="{ result, props }">
              <li v-bind="props" class="autocomplete-result">
                <div>{{ result.name }}</div>
              </li>
            </template>
          </autocomplete>
        </v-col>

        <v-col>
          <v-toolbar-title>
            <router-link to="/">
              <h3 class="text-center">{{config.shopname}}</h3>
            </router-link>
          </v-toolbar-title>
        </v-col>
        <v-col class="d-flex justify-end">
          <nav >
            <ul class="basic-menu">
              <li>
                <router-link to="/cart">
                  <v-badge left overlap color="#444">
                    <template v-slot:badge>
                      <span v-if="cart && cart.length > 0">{{ totalAmountInCart }}</span>
                    </template>
                    <i style="font-size: 25px;" class="ion-ios-cart icons"></i>
                  </v-badge>
                </router-link>
              </li>
            </ul>
          </nav>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    drawer: false,
    group: null,
    hamburger: false,
    searchActive: false
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  computed: {
    ...mapState(['config', 'cart', 'products']),
    totalAmountInCart(){
      return this.cart.map((i) => i.quantity).reduce((a, b) => a + b, 0);
    }
  },
  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.products.filter(el => el.name.toLowerCase().includes(input.toLowerCase()));
    },
    handleSubmit(result) {
      if (result && this.$route.params.productId !== result.id) {
        this.$router.push({
          name: 'productDetail',
          params: { productId: result.id }
        });
        this.searchActive = false;
      }
    },
    getResultValue(result) {
      return ' ';
      // return result.name;
    }
  }
};
</script>

<style lang="scss">
.autocomplete-input {
  background-color: inherit;
  border: none;
}

.v-badge__badge {
  padding: 0px !important;
  border-radius: 11px !important;
  height: 15px !important;
  font-size: 10px !important;
  min-width: 15px !important;
}
.hamburger {
  padding: 0px !important;
}

$hamburger-layer-width: 30px;
$hamburger-layer-height: 2px;
$hamburger-layer-spacing: 6px;
$hamburger-layer-color: #444;
$hamburger-hover-opacity: 0.4;

@import "./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
</style>
