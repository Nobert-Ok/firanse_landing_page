<template>
  <div class="body">
    <Nav />
    <v-row dense no-gutters align="center" justify="space-around">
      <v-col cols="11" md="5" class="first-head ml-sm-7 ml-sm-8" justify="center">
        <p class="black--text send text-left">
          Spreading Love anywhere, anytime with Food.
        </p>
        <!-- <p class="share">
          Satisfy the food of your loved ones, anytime and anywhere.
        </p> -->
        <p class="share text-left">
          Enter your friend's <span class="cravetag">firanse_cravetag</span>
          to view their food cravings.
        </p>
        <div class="custom-search">
          <input type="text" class="custom-search-input" placeholder="Enter Firanse Tag or Phone Number"
            v-model="cravetag" @keyup.enter="getvalue" />
          <button class="custom-search-botton" type="submit" @click="getvalue">
            <v-icon large color="white">mdi-arrow-right</v-icon>
          </button>
        </div>
        <p class="error--text" v-if="nonexistent">This user does not exist!</p>
        <v-row class="mt-2">
          <v-col cols="6" align="center">
            <Applebutton class="header-button" />
          </v-col>
          <v-col cols="6" align="center">
            <Googlebutton class="header-button" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5" class="my-8" align="center">
        <img class="maindish" src="~assets/images/phone.png" alt="" />
      </v-col>
    </v-row>
    <!-------------------------------------- How it works -------------------------------------------->
    <v-row dense no-gutters align="center" justify="center" class="process px-sm-10 py-11">
      <v-col cols="12" md="6" align="center">
        <img class="girl-image" align="center" src="~assets/images/girlimage.png" alt="" />
      </v-col>
      <v-col cols="12" md="6" align="center">
        <p class="white--text send mt-10 mb-10">How it works</p>
        <HowitworksVue/>
      </v-col>
    </v-row>

    <!-------------------------------------- About Us -------------------------------------------->
    <div class="aboutus">
      <v-row dense no-gutters align="center" justify="center">
        <v-col cols="12" sm="6" justify="center">
          <p class="black--text commitment text-md-h4">
            <span class="font-weight-black text-h3">“</span>Our commitment is to the love we share and the food you eat.
          </p>
          <p class="black--text pro-commitment" v-if="!readMore">
            {{ this.text.substring(0, 170) + '...' }}

          </p>
          <p class="black--text pro-commitment" v-if="readMore">
            {{ this.text }}
          </p>
          

          <v-btn @click="showMore" outlined v-if="!readMore" color="#FFA800" large class="aboutus-button px-7 py-7 mb-10">
            View More</v-btn>
          <v-btn @click="showLess" outlined v-if="readMore" color="#FFA800" large class="aboutus-button px-7 py-7 mb-10">
            View Less</v-btn>
        </v-col>
        <v-col cols="12" sm="6" order="first" order-sm="last">
          <img class="aboutus-image my-6" src="~assets/images/about.png" alt="" />
        </v-col>
      </v-row>
    </div>

    <!-------------------------------------- Partners -------------------------------------------->
    <v-row dense no-gutters align="center" justify="space-around" class="partners">
      <v-col cols="12">
        <p class="white--text text-center favorite">
          These and many more are now closer to you!
        </p>
      </v-col>
      <v-row justify="center">
        <v-col cols="3" align="center">
          <img class="grid-image2" src="~assets/images/Dominos.png" alt="" />
        </v-col>
        <v-col cols="3" align="center">
          <img class="grid-image2" src="~assets/images/burgerking.png" alt="" />
        </v-col>

        <v-col cols="3" align="center">
          <img class="grid-image2" src="~assets/images/pizzahut.png" alt="" />
        </v-col>

        <v-col cols="3" align="center">
          <img class="grid-image2" src="~assets/images/kfc.png" alt="" />
        </v-col>
      </v-row>
    </v-row>
    <!----------------------------------Download card--------------------------------------------------------------->
    <Downloadcard />
    <!-----------------------------------Subcribe Card ----------------------------------------------------->
    <div class="subscribe-card-container">
      <v-card elevation="4" class="mx-auto subscribe-card">
        <v-card-text align="center">
          <v-row dense no-gutters align="center" justify="center">
            <v-col cols="12">
              <v-card-text>
                <p class="white--text subcribe-newsletter">
                  Subscribe to Our Newsletter
                </p>
                <p class="black--text subscribe-text">
                  To get more information about FiranseFood, enter your email
                  to subscribe to our newsletter.
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="12" align="center">
              <div class="custom-search">
                <input type="text" class="custom-search-input" placeholder="Enter your email" />
                <button class="custom-search-botton" type="submit">
                  <v-icon large color="white">mdi-arrow-right</v-icon>
                </button>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    <Footer/>
    <v-row>
      <v-col cols="12" class="endfooter">
        <div class="text-center black--text">FiranseFood. &copy;2022</div>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import Applebutton from '~/components/Applebutton.vue'
import Googlebutton from '~/components/Googlebutton.vue'
import Nav from '~/components/Nav.vue'
import { UserController } from '@/modules/user'
import Downloadcard from '~/components/Downloadcard.vue'
import Footer from '~/components/Footer.vue'
import HowitworksVue from '~/components/Howitworks.vue'
export default {
  name: 'index',
  data() {
    return {
      drawer: false,
      cravetag: this.value,
      nonexistent: false,
      text:
        "At FiranseFood, we are commited to spreading love and happiness." +
        "Gift food to your loved ones and have access to your favourite meal, dishes, snacks or dessert all the time." +
        "These are ways we can spread love and put a smile on someone\’s face. Use FiranseFood today!",

      readMore: false,
    }
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  watch: {
    model(currentValue) {
      this.$emit('input', currentValue)
    },
  },

  components: {
    Applebutton,
    Googlebutton,
    Nav,
    Downloadcard,
    Downloadcard,
    Footer,
    HowitworksVue
  },

  methods: {
    getvalue() {
      this.cravetag = this.cravetag.toLowerCase()
      UserController.getUserByTagPhone({ search: this.cravetag })
        .then((data) => {
          if (!data) {
            this.nonexistent = true
            return
          }
          this.nonexistent = false
          this.$router.push('/user/' + data.user.firanse_tag)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    gotoDashboard() {
      window.open('https://dashboard.firansefood.com')
    },
    showMore() {
      this.readMore = true
    },
    showLess() {
      this.readMore = false
    },
  },
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
  margin-top: 5px;
}

header {
  width: 100%;
}

.body {
  position: relative;
  overflow: hidden;
  font-family: 'Poppins' !important;
}

.full {
  height: 100vh;
}

h1 {
  font-size: 3rem;
}

h6 {
  font-family: 'Poppins' !important;
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
    font-family: 'Poppins' !important;
    margin: 10px 0;
    color: white;

    .nuxtlink {
      color: #000;
      text-decoration: none;
    }
  }
}

.nuxtlink:hover {
  color: $primary;
}

.nuxt-link-exact-active {
  color: $primary  !important;
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
  background-color: #FFF6E5;
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
  font-family: 'Poppins' !important;
  font-size: 30px;
  line-height: 36px;
  font-weight: 500;
  color: #000 !important;
}

.share {
  font-size: 15px;
  line-height: 20px;
  font-weight: none;
  color: #000 !important;
  font-family: 'Poppins' !important;
  letter-spacing: 1px;
}

.cravetag {
  /* font-style: italic; */
  font-weight: 600;
  font-size: 15px;
  font-family: 'Poppins' !important;
  letter-spacing: 1px;
  color: #000;
}

.favorite {
  font-family: 'Poppins' !important;
  font-size: 20px;
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
  font-family: 'Poppins' !important;
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
  height: 50px !important;
  width: 45%;
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 900;
  font-family: 'Poppins' !important;
  letter-spacing: 2px;
}

.aboutus3 {
  font-family: 'Poppins' !important;
  color: #342301 !important;
  font-size: 30px;
  letter-spacing: 2px;
}

.commitment {
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
  font-family: 'Poppins' !important;
  letter-spacing: 2px;
  color: #342301 !important;
}

.pro-commitment {
  font-size: 12px;
  line-height: 24px;
  font-family: 'Poppins' !important;
  letter-spacing: 2px;
  color: #342301 !important;
}

// -------------------------------------------------------------------

.partners {
  background-color: #FFF6E5;
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
  background-color: #FFF7E6 !important;
  border-radius: 20px !important;
  padding: 15px;
  margin-top: 5%;
  margin-bottom: 7%;
}

.subcribe-newsletter {
  font-family: 'Poppins' !important;
  color: #342301 !important;
  font-size: 26px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 2px;
}

.subscribe-text {
  font-size: 14.5px;
  line-height: 18px;
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
  font-family: 'Poppins' !important;
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
  font-family: 'Poppins' !important;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 1;
  outline: none;
  font-size: 12px;
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
  width: 59px;
  height: 45px;
}

.header-button {
  width: 103% !important;
  // background-color: white !important;
}

.header-button1 {
  width: 100% !important;
}

@media only screen and (max-width: 350px) {
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
    font-size: 45px;
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
    margin: 30px;
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
    font-family: 'Poppins' !important;
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
    font-size: 40px;
    line-height: 50px;
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
    width: 80px;
    height: 45px;
    right: 10px;
    top: 15px;
    bottom: 3px;
  }

  .custom-search-input {
    height: 75px;
    font-size: 15px;
  }

  .aboutus {
    margin: 40px 70px;
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


  .girl-image{
    width: 75%;
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
    margin: 120px 180px;
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
