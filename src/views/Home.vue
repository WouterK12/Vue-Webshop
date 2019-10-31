<template>
  <div>
    <div class="header-img">
      <div class="basic-slider ptb-200">
        <div class="container">
          <div class="hero-caption pt-30">
            <div class="slider-content hero-text">
              <h2>
                This webshop was made
                <br />with Vuejs.
              </h2>
              <a class="btn">Shop</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-col>
   
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.header-img {
  background-image: url("../assets/img/white.jpg");
  width: 100% !important;
  min-width: 100% !important;
  max-width: 100% !important;
  background-size: cover;
  background-position: center;
}
.hero-caption {
  display: table;
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 80%;
  z-index: 2;
}
.hero-text {
  display: table-cell;
  height: 100%;
  position: relative;
  vertical-align: middle;
}
.basic-slider {
  position: relative;
}
.slider-content h2 {
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 20px;
}
</style>
