<template>
    <div>
    <!----------------------------------Download card--------------------------------------------------------------->
        <div class="card">
        <div class="drinkspill" align="right">
            <img
            class="drinkspill-img"
            src="~assets/images/drinkspill.png"
            alt=""
            />
        </div>
        <v-card elevation="7" class="mx-auto vcard">
            <v-card-text justify="center" class="pt-5">
            <v-row dense no-gutters align="center" justify="center">
                <v-col cols="12" sm="6">
                <v-card-text>
                    <p class="black--text download-text5">
                    Download the FiranseFood
                    <span class="black--text app-text hidden-sm-and-up"
                        >App!</span
                    >
                    </p>
                    <p class="black--text download-text6 d-none d-sm-flex">App!</p>
                    <p class="black--text download-text4">
                    Sign up and let your loved ones pay for your food anywhere,
                    anytime.
                    </p>
                    <!-- <p class="black--text download-text4"></p> -->
                </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" align="center" class="mt-lg-7">
                <v-row>
                    <v-col cols="6" sm="12">
                    <Applebutton class="header-button1" />
                    </v-col>
                    <v-col cols="6" sm="12">
                    <Googlebutton class="header-button1" />
                    </v-col>
                </v-row>
                </v-col>
            </v-row>
            </v-card-text>
        </v-card>
        </div>

        <div class="cheese">
        <img class="cheese-img" src="~assets/images/cheese.png" alt="" />
        </div>
    </div>
</template>

<script>
import Applebutton from '~/components/Applebutton.vue'
import Googlebutton from '~/components/Googlebutton.vue'

export default{
    components: {
    Applebutton,
    Googlebutton,
  }
}

</script>


<style lang="scss" scoped>
.logo {
  width: 180px;
  height: 100%;
  display: inline;
  border-radius: 0;
  cursor: pointer;
}
.first-head {
  margin-top: 50px;
}
header {
  width: 100%;
}

.body {
  position: relative;
  overflow: hidden;
}
.full {
  height: 100vh;
}
h1 {
  font-size: 3rem;
}
h6 {
  margin: 10px 0;
  font-size: 25px;
  text-decoration: underline;
  color: white;
}
ul {
  list-style: none;
  list-style-type: none;
  padding: 0;
  li {
    margin: 10px 0;
    color: white;
    .nuxtlink{
      color: #000;
      text-decoration: none;
    }
  }
}
.nuxtlink:hover {
  color: $primary;
}

.nuxt-link-exact-active {
    color: $primary !important;
}


p {
  line-height: 45px;
}
.maindish {
  width: 90%;
  object-fit: fill;
}
.girl-image {
  width: 90%;
}

.grid-image1 {
  width: 65% !important;
}

.grid-image2 {
  width: 90% !important;
}

.process {
  background-color: #ffe580;
}

address {
  font-style: normal;
}
.logo {
  /* width: 50%; */
  &__text {
    width: 55%;
  }
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  -webkit-appearance: none;
}
input {
  background-color: white;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  font-size: 25px;
  padding: 10px;
  color: black;
  display: inline;
  border: 1px solid black;
}

.send {
  font-family: Balsamiq Sans !important;
  font-size: 35px;
  line-height: 36px;
  font-weight: 500;
  color: #342301 !important;
}
.share {
  font-size: 17px;
  line-height: 20px;
  font-weight: none;
  color: #342301 !important;
  font-family: 'Poppins' !important;
  letter-spacing: 1px;
}
.cravetag {
  /* font-style: italic; */
  font-weight: 600;
  font-size: 17px;
  font-family: 'Poppins' !important;
  letter-spacing: 1px;
  color: #431d01;
}

.favorite {
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 1px;
  margin: 2.5% 0;
  margin-bottom: 10%;
  color: #342301 !important;
}

.love {
  width: 95px;
  margin-bottom: -40px;
}

.how-it-works {
  font-size: 25px !important;
  font-weight: 900 !important;
  color: #342301 !important;
  letter-spacing: 4px;
}

// ----------------About Us-----------------

.aboutus {
  position: relative;
  margin: 20px;
}

.aboutus-image {
  width: 100%;
  object-fit: fill;
}

.aboutus-button {
  color: white !important;
  height: 50px !important;
  width: 45%;
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 900;
  font-family: 'Poppins' !important;
  letter-spacing: 2px;
  background-color: #ffa800 !important;
}

.aboutus3 {
  color: #342301 !important;
  font-size: 30px;
  letter-spacing: 2px;
}

.commitment {
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  font-family: 'Poppins' !important;
  letter-spacing: 2px;
  color: #342301 !important;
}

.pro-commitment {
  font-size: 15px;
  line-height: 24px;
  font-family: 'Poppins' !important;
  letter-spacing: 2px;
  color: #342301 !important;
}

// -------------------------------------------------------------------

.partners {
  background-color: #ffe580;
  padding: 30px;
}
.card {
  padding: 50px 0;
  // height: 600px !important;
}

.vcard {
  max-width: 90%;
  height: 300px !important;
  margin-top: -35%;
  border-radius: 20px !important;
}

.subscribe-card {
  max-width: 90%;
  background-color: #ffe580 !important;
  border-radius: 20px !important;
  padding: 15px;
  margin-top: 10%;
}

.subcribe-newsletter {
  font-family: Balsamiq Sans !important;
  color: #342301 !important;
  font-size: 26px;
  line-height: 35px;
  font-weight: 400;
  letter-spacing: 3px;
}

.subscribe-text {
  font-size: 14.5px;
  line-height: 15px;
  font-family: 'Poppins' !important;
}

// ----------------Download Card-----------------

.download-button-card {
  width: 100% !important;
}

.download-text5,
.app-text {
  font-size: 27px;
  font-weight: 600;
  line-height: 35px;
  font-family: 'Poppins' !important;
  color: #431d01 !important;
  letter-spacing: 2px;
}

.download-text6 {
  font-size: 29px;
  font-weight: 600;
  line-height: 6px;
  margin-bottom: 50px;
  font-family: 'Poppins' !important;
  color: #431d01 !important;
  letter-spacing: 2px;
}

.download-text4 {
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  font-family: 'Poppins' !important;
}

.cheese {
  margin-top: -75px;
  z-index: -1;
}

.cheese-img {
  position: relative;
  width: 40%;
}

.drinkspill-img {
  width: 50%;
  margin-top: -120px;
}

footer {
  background: #342301;
}

.endfooter {
  background-color: white;
  margin: 0.1% !important;
}

svg {
  margin-bottom: -3% !important;
}

// ----------------Search Button-----------------
.custom-search {
  position: relative;
  width: 100%;
}

.custom-search-input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 1;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
}

.custom-search-botton {
  position: absolute;
  right: 9px;
  top: 7px;
  bottom: 3px;
  border: 0;
  background: #ffa800;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 10px;
  z-index: 2;
  width: 59px;
  height: 45px;
  box-shadow: 5px 5px 7px #a4a4a4;
}

.header-button {
  width: 103% !important;
}

.header-button1 {
  width: 100% !important;
}

@media only screen and (max-width: 350px) {
  .vcard {
    /* height: 335px !important; */
  }
  .subcribe-newsletter {
    font-size: 24px;
  }
  .download-icon {
    font-size: 25px !important;
    margin-left: 2px !important;
  }
  .mdi-36px {
    font-size: 15px !important;
  }
}

/*sm*/
@media only screen and (min-width: 600px) and (max-width: 960px) {
  header {
    margin-bottom: 8%;
  }
  input {
    width: 70%;
    height: 85px;
    font-size: 25px;
  }
  .button {
    padding: 35px 20px;
    margin-left: -15%;
    width: 75px;
  }

  .subscribe-card {
    max-width: 65%;
  }

  .subcribe-newsletter {
    font-size: 25px;
  }

  .download {
    background-color: black;
    border-radius: 10px;
    width: 250px;
  }
  .grid-image {
    height: 250px;
  }
  .send {
    font-size: 65px;
    line-height: 62px;
  }
  .share {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
  }
  .cravetag {
    font-size: 20px;
  }

  .vcard {
    max-width: 80%;
    margin-top: -25%;
    margin-bottom: 20%;
  }
  .download-text3 {
    font-size: 11px;
  }

  .download-text5 {
    font-size: 30px;
    margin-top: 30px;
  }

  .download-text6 {
    font-size: 30px;
  }

  .download-text4 {
    font-size: 15px;
    font-weight: 400;
  }

  .download-icon {
    font-size: 30px;
  }

  .custom-search-botton {
    width: 90px;
    height: 50px;
    right: 9px;
    top: 10px;
    bottom: 3px;
  }
  .custom-search-input {
    height: 70px;
    font-size: 15px;
  }

  .aboutus {
    margin: 40px;
  }

  .aboutus3 {
    font-size: 40px;
    margin-right: 25px;
  }

  .commitment {
    font-size: 14px;
    line-height: 19px;
    margin-right: 19px;
  }

  .pro-commitment {
    font-size: 12px;
    margin-right: 30px;
    line-height: 16px;
  }

  .favorite {
    font-size: 30px;
    margin: 3% 0;
    margin-bottom: 5%;
    letter-spacing: 1px;
  }
  .grid-image2 {
    width: 40% !important;
  }

  .cheese-img {
    width: 33% !important;
    margin-top: -250px;
  }

  .drinkspill-img {
    width: 35%;
  }
  //  .header-button{
  //   width: 100% !important;
  // }
  .header-button1 {
    width: 70% !important;
  }
}
/*md*/
@media only screen and (min-width: 960px) and (max-width: 1264px) {
  header {
    background-color: white;
  }
  input {
    height: 90px;
    width: 600px;
    font-size: 25px;
  }
  .button {
    padding: 40px 20px;
    margin-left: -22%;
    width: 95px;
  }
  .subcribe-newsletter {
    font-size: 35px;
  }

  .download {
    width: 200px;
  }

  .send {
    font-size: 45px;
    line-height: 50px;
    font-weight: 500;
  }

  .share {
    font-size: 18px;
    line-height: 32px;
    font-weight: 500;
  }
  .cravetag {
    font-size: 20px;
  }
  .vcard {
    max-width: 75%;
    margin-top: -30%;
  }

  .subscribe-card {
    max-width: 50%;
  }
  .download-text3 {
    font-size: 12px;
  }
  .download-text5 {
    font-size: 45px;
    margin-top: 30px;
    line-height: 45px;
  }

  .download-text6 {
    font-size: 45px;
  }

  .download-text4 {
    font-size: 17px;
  }

  .download-icon {
    font-size: 40px;
  }
  .custom-search-botton {
    width: 100px;
    height: 55px;
    right: 9px;
    top: 10px;
    bottom: 3px;
  }
  .custom-search-input {
    height: 75px;
    font-size: 20px;
  }

  .aboutus {
    margin: 50px 80px;
  }

  .aboutus3 {
    font-size: 40px;
    margin-right: 25px;
  }

  .commitment {
    font-size: 19px;
    line-height: 35px;
    margin-right: 23px;
  }

  .pro-commitment {
    font-size: 15px;
    margin-right: 39px;
  }

  .favorite {
    font-size: 40px;
    margin: 4% 0;
    letter-spacing: 1px;
    margin-bottom: 5%;
  }

  .grid-image2 {
    width: 45% !important;
  }

  .cheese-img {
    width: 27% !important;
    margin-top: -40px;
  }

  .drinkspill-img {
    width: 33%;
    margin-top: -13%;
  }

  .header-button {
    width: 90% !important;
  }
  .header-button1 {
    width: 60% !important;
  }
}
/*lg*/
@media only screen and (min-width: 1264px) and (max-width: 1904px) {
  header {
    background-color: white;
  }
  .grid-image {
    width: 100%;
    border-radius: 10px;
    width: 250px;
    height: 200px;
    margin: 5px;
  }
  .grid-image2 {
    width: 50% !important;
  }

  .first-head {
    margin-top: -160px;
  }

  .love {
    width: 150px;
    margin-bottom: -60px;
  }
  .subcribe-newsletter {
    font-size: 35px;
  }
  .download {
    background-color: black;
    border-radius: 10px;
    width: 250px;
  }
  .send {
    font-size: 60px;
    line-height: 64px;
    font-weight: 500;
  }

  .share {
    font-size: 1.8rem;
    line-height: 30px;
  }

  .favorite {
    font-size: 45px;
    margin: 2% 0;
    letter-spacing: 1px;
    margin-bottom: 5%;
  }

  .cravetag {
    font-size: 27px;
  }
  .breaker {
    margin-top: 20px !important;
  }
  .mt-n7 {
    margin-top: -15px !important;
  }
  .vcard {
    max-width: 75%;
    height: 400px !important;
    margin-top: -400px;
  }
  .subscribe-card {
    max-width: 55%;
    padding: 50px;
  }

  .custom-search-botton {
    width: 90px;
    height: 50px;
    right: 9px;
    top: 10px;
    bottom: 3px;
  }
  .custom-search-input {
    height: 70px;
    font-size: 20px;
    padding-left: 30px;
  }

  .aboutus {
    margin: 100px 200px;
  }

  .aboutus3 {
    font-size: 40px;
    margin-right: 25px;
  }

  .commitment {
    font-size: 25px;
    line-height: 35px;
    margin-right: 29px;
  }

  .pro-commitment {
    font-size: 17px;
    margin-right: 45px;
  }

  .aboutus-image {
    width: 100%;
  }

  .cheese-img {
    width: 30% !important;
    margin-top: -120px;
  }

  .drinkspill-img {
    width: 30%;
  }

  .download-text5 {
    font-size: 49px;
    line-height: 50px;
    margin-top: 30px;
  }

  .download-text6 {
    font-size: 39px;
    margin-bottom: 50px;
  }

  .download-text4 {
    font-size: 23px;
    font-weight: 400;
    line-height: 24px;
  }

  .header-button {
    width: 100% !important;
  }

  .header-button1 {
    width: 60% !important;
  }
}
</style>
