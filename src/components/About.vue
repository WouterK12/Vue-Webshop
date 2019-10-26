<template>
  <v-layout>
    <v-card flat class="pb-8">
      <v-card-text>
        <v-layout>
          <v-img
            :class=" !$vuetify.breakpoint.smAndUp ? 'mx-auto' : ''"
            :src="require('../assets/selfie.png')"
            contain
            max-width="280"
          ></v-img>
          <div
            v-if="$vuetify.breakpoint.smAndUp"
            class="mt-5 txt ml-4 headline"
            style="font-weight: normal;"
          >
            <br />Ik ben Eline Wijns (06/02/1996) en woon in België, in de Vlaamse Ardennen met mijn ouders, broer en hond. Ik ben auteur van het boek ‘de ongewenste prinses’, mijn debuut dat uitgekomen is in december 2017 en droom er van om van schrijven mijn beroep te maken. Mijn hobby’s zijn: reizen, zwemmen, lezen en schrijven. Ik wens jullie alvast nog veel plezier met het bekijken van mijn website en lezen van mijn blog. Nog vragen? Dan kan je mij altijd contacteren via de contactpagina.
          </div>
        </v-layout>
        <div
          v-if="!$vuetify.breakpoint.smAndUp"
          class="mt-5 txt ml-4 headline"
          style="font-weight: normal;"
        >
          <br />Ik ben Eline Wijns (06/02/1996) en woon in België, in de Vlaamse Ardennen met mijn ouders, broer en hond. Ik ben auteur van het boek ‘de ongewenste prinses’, mijn debuut dat uitgekomen is in december 2017 en droom er van om van schrijven mijn beroep te maken. Mijn hobby’s zijn: reizen, zwemmen, lezen en schrijven. Ik wens jullie alvast nog veel plezier met het bekijken van mijn website en lezen van mijn blog. Nog vragen? Dan kan je mij altijd contacteren via de contactpagina.
        </div>
      </v-card-text>
      <div class="mt-5">
        <div align="center" class="socialbtns">
          <ul>
            <li>
              <a href="https://www.facebook.com/wijnseline/" class="fa fa-lg fa-facebook"></a>
            </li>
            <li>
              <a href="https://twitter.com/wijnseline" class="fa fa-lg fa-twitter"></a>
            </li>
            <li>
              <a href="https://www.instagram.com/wijnseline/" class="fa fa-lg fa-instagram"></a>
            </li>
          </ul>
        </div>
      </div>
    </v-card>
  </v-layout>
</template>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

.txt {
  font-weight: normal;
  font-size: 20px;
  color: rgb(124, 124, 124);
}

a,
a:hover {
  text-decoration: none;
}

.socialbtns,
.socialbtns ul,
.socialbtns li {
  margin: 0;
  padding: 5px;
}

.socialbtns li {
  list-style: none outside none;
  display: inline-block;
}

.socialbtns .fa {
  width: 40px;
  height: 40px;
  color: #cccccc;
  background-color: #f3f3f3;

  padding-top: 12px;
  border-radius: 22px;
  -moz-border-radius: 22px;
  -webkit-border-radius: 22px;
  -o-border-radius: 22px;
}

.socialbtns .fa:hover {
  color: #fff;
  background-color: #4dd0e1;
}
</style>