<template>
  <div>
    <!----------------------------------Download card--------------------------------------------------------------->
    <div class="card">
      <div class="drinkspill" align="right">
        <img class="drinkspill-img" src="~assets/images/drinkspill.png" alt="" />
      </div>
      <v-card elevation="7" class="mx-auto vcard">
        <v-card-text justify="center" class="pt-5">
          <v-row dense no-gutters align="center" justify="center">
            <v-col cols="12" sm="6">
              <v-card-text>
                <p class="black--text download-text5">
                  Download the FiranseFood
                  <span class="black--text app-text hidden-sm-and-up">App!</span>
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

export default {
  components: {
    Applebutton,
    Googlebutton,
  }
}

</script>


<style lang="scss" scoped>
// ----------------Download Card-----------------

.vcard {
  max-width: 90%;
  height: 300px !important;
  margin-top: -25%;
  border-radius: 20px !important;
}
.download-text5,
.app-text {
  font-size: 27px;
  font-weight: 600;
  line-height: 35px;
  font-family: 'Poppins' !important;
  color: #000 !important;
  letter-spacing: 2px;
}

.download-text6 {
  font-size: 29px;
  font-weight: 600;
  line-height: 6px;
  margin-bottom: 50px;
  font-family: 'Poppins' !important;
  color: #000 !important;
  letter-spacing: 2px;
}

.download-text4 {
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  font-family: 'Poppins' !important;
}

.cheese {
  margin-top: -35px;
  z-index: -1;
}

.cheese-img {
  position: relative;
  width: 40%;
}

.drinkspill-img {
  width: 40%;
  margin-top: -50px;
}

.header-button1 {
  width: 100% !important;
}

@media only screen and (max-width: 370px) {

  .download-text5,.app-text{
    font-size: 20px;
  }

  .download-text4{
    font-size: 14px;
  }
  
}

/*sm*/
@media only screen and (min-width: 600px) and (max-width: 960px) {


  .download {
    background-color: black;
    border-radius: 10px;
    width: 250px;
  }


  .vcard {
    max-width: 80%;
    margin-top: -25%;
    margin-bottom: 20%;
  }

  .download-text5 {
    font-size: 22px;
    margin-top: 30px;
  }

  .download-text6 {
    font-size: 22px;
  }

  .download-text4 {
    font-size: 15px;
    font-weight: 400;
  }


  .cheese-img {
    width: 33% !important;
    margin-top: -250px;
  }

  .drinkspill-img {
    width: 35%;
  }
  .header-button1 {
    width: 70% !important;
  }
}

/*md*/
@media only screen and (min-width: 960px) and (max-width: 1264px) {

  .button {
    padding: 40px 20px;
    margin-left: -22%;
    width: 95px;
  }

 
  .download {
    width: 200px;
  }

  .vcard {
    max-width: 75%;
    height: 350px !important;
    margin-top: -25%;
  }


  .download-text5 {
    font-size: 40px;
    margin-top: 30px;
    line-height: 45px;
  }

  .download-text6 {
    font-size: 45px;
  }

  .download-text4 {
    font-size: 17px;
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

  .grid-image2 {
    width: 45% !important;
  }

  .cheese-img {
    width: 27% !important;
    margin-top: -55px;
  }

  .drinkspill-img {
    width: 30%;
    margin-top: -5%;
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


  .mt-n7 {
    margin-top: -15px !important;
  }

  .vcard {
    max-width: 65%;
    height: 400px !important;
    margin-top: -200px;
  }

  .subscribe-card {
    max-width: 55%;
    padding: 50px;
  }

  .cheese-img {
    width: 25% !important;
    margin-top: -70px;
  }

  .drinkspill-img {
    width: 25%;
  }

  .download-text5 {
    font-size: 45px;
    line-height: 50px;
    margin-top: 30px;
  }

  .download-text6 {
    font-size: 45px;
    margin-bottom: 50px;
  }

  .download-text4 {
    font-size: 25px;
    line-height: 35px;
  }

  .header-button1 {
    width: 70% !important;
  }
}

@media only screen and (min-width: 1904px) {
  .vcard {
    max-width: 65%;
    height: 500px !important;
    margin-top: -200px;
  }

  .subscribe-card {
    max-width: 55%;
    padding: 50px;
  }

  .cheese-img {
    width: 20% !important;
    margin-top: -50px;
  }

  .drinkspill-img {
    width: 20%;
  }

  .download-text5 {
    font-size: 49px;
    line-height: 65px;
    margin-top: 30px;
  }

  .download-text6 {
    font-size: 49px;
    margin-bottom: 60px;
  }

  .download-text4 {
    font-size: 35px;
    font-weight: 400;
    line-height: 40px;
  }

  .header-button1 {
    width: 60% !important;
  }
}
</style>
