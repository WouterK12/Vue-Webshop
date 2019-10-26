<template>
  <v-container>
    <v-row justify="center">
      <div class="front">
        <a id="flipbuttxt" @click="toggleFlip" class="btn btn-white flip pa-5">Contacteer mij</a>
      </div>

      <v-dialog v-model="dialog" :max-width="$vuetify.breakpoint.mdAndUp ? '40%' :  '90%'">
        <div class="cont-contactBtn">
          <div class="cont-flip flipped">
            <div class="back">
              <i href="#" @click="toggleFlip" class="flip close material-icons">close</i>
              <form
                class="contact-form"
                action="https://formspree.io/wijnseline@gmail.com"
                method="POST"
              >
                <input class="gutter" type="text" name="naam" placeholder="Naam" />
                <input type="text" placeholder="Email" name="email" />
                <textarea name="message" id placeholder="Leave a message"></textarea>
                <input type="submit" value="Versturen" />
              </form>
            </div>
          </div>
        </div>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    toggleFlip() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

#flipbuttxt,
p {
  font-family: "Raleway", sans-serif;
}

.cont-contactBtn {
  height: 350px;
  margin: 0px auto;
  width: auto;
  position: relative;
}
.cont-contactBtn .cont-flip {
  position: absolute;
  -webkit-transition: -webkit-transform 0.5s;
  -moz-transition: -moz-transform 0.5s;
  -o-transition: -o-transform 0.5s;
  transition: transform 0.5s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
}
.cont-contactBtn .cont-flip .front,
.cont-contactBtn .cont-flip .back {
  display: block;
  margin: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.cont-contactBtn .cont-flip .back {
  background-color: #fff;
  -webkit-transform: rotateX(180deg);
  -moz-transform: rotateX(180deg);
  -o-transform: rotateX(180deg);
  transform: rotateX(180deg);
}
.cont-contactBtn .btn {
  margin-top: 155px;
}
.cont-contactBtn .cont-flip.flipped {
  -webkit-transform: rotateX(180deg);
  -moz-transform: rotateX(180deg);
  -o-transform: rotateX(180deg);
  transform: rotateX(180deg);
}

.cont-contactBtn .contact-form {
  padding: 0 10%;
  margin-top: 50px;
  width: 80%;
}
.cont-contactBtn .contact-form input,
.cont-contactBtn .contact-form textarea {
  border: 1px solid #808080;
  font-size: 18px;
  padding: 10px 0;
}

.contact-form {
  width: 100% !important;
}

.cont-contactBtn .contact-form input[type="text"] {
  margin-bottom: 8px;
  padding-left: 3%;
  width: 48.44%;
}
.cont-contactBtn .contact-form .gutter {
  margin-right: 2.8%;
}
.cont-contactBtn .contact-form textarea {
  height: 126px;
  padding-left: 3%;
  margin-bottom: 22px;
  width: 100%;
}
.cont-contactBtn .contact-form input[type="submit"] {
  background-color: #4dd0e1;
  border: none;
  color: #fff;
  height: 45px;
  width: 100%;
  max-width: 93px;
  text-align: center;
  cursor: pointer;
}
.cont-contactBtn .close {
  display: block;
  height: 19px;
  width: 19px;
  color: #4dd0e1;
  position: absolute;
  top: 15px;
  right: 3%;
  cursor: pointer;
}

.btn {
  border: 3px #fff solid;
  color: #fff;
  display: block;
  font-size: 15px;
  font-weight: normal;
  margin: -10px auto auto auto;
  max-width: 280px;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  width: 100%;
}
</style>

