<template>
  <v-flex>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/wall.png')" max-height="750px"></v-img>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-card
        flat
        class="text-center cyan lighten-3 white--text"
        style="border-radius: 0; width:100%"
      >
        <v-card-text class="white--text pa-12">
          <p class="display-2">~ Welkom ~</p>
          <div class="headline pt-8">
            Welkom op mijn website. Na mijn eigen boek, mijn eigen website. Mijn eigen plekje op het wereldwijde web. Hier vertel ik jullie niet alleen meer over mezelf en mijn werk maar biedt ik jullie ook een kijkje achter de schermen. Kijk gerust eens rond, ontdek mijn blog en kom meer te weten over de werelden en personages van mijn boeken. Alvast veel leesplezier gewenst !
            <br />
            <br />Liefs,
            <br />
            <br />Eline
          </div>
        </v-card-text>
      </v-card>
    </v-layout>
    <v-flex>
      <About />
    </v-flex>
    <v-flex>
      <Books />
    </v-flex>
    <v-flex class="cyan lighten-2 pt-12 pb-12">
      <Contact />
    </v-flex>
  </v-flex>
</template>

<script>
import About from "../components/About";
import Contact from "../components/Contact";
import Books from "../components/Books";

export default {
  data: () => ({}),
  components: {
    About,
    Contact,
    Books
  }
};
</script>

<style scoped>
</style>