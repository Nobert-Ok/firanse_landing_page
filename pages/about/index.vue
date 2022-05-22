<template>
  <div class="body">
    <Nav/>
    <!--------------------------------------- About Us ----------------------------------------------->
    <div class="aboutus">
      <v-row dense no-gutters align="center" justify="center">
        <v-col cols="12" sm="6" justify="center">
          <p class="black--text commitment">
            It is more than food for us! 
          </p>
          <p class="black--text pro-commitment mr-5">
            At FiranseFood, it is certainly about happiness, love and satifaction from favourite meals or cravings. 
            With us, you will be able to create a closer bond with your loved ones all with their favourite food.
          </p>


          <v-btn color="#FA710D" large class="aboutus-button px-7 py-7 mb-10">
              Download Whitepaper</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" order="last">
          <img
            class="aboutus-image my-6"
            src="~assets/images/packedpics.png"
            alt=""
          />
        </v-col>
      </v-row>
    </div>
    <!-------------------------------------- Our Story -------------------------------------------->
    <div class="ourstory">
      <v-row dense no-gutters align="center" justify="center">
        <v-col cols="12" class="">
          <h3 class="aboutus3">Our Story
          </h3>
           <span>
                <img class="loveimage" src="~/assets/images/Vector.png" alt="" srcset="">
             </span>
        </v-col>
        <v-col cols="12" sm="6" justify="center">
          <p class="black--text pro-commitment storyhead">
                At FiranseFood, we crafted FiranseFood app for all
                to share food with loved ones by ordering their favourite dishes and delicacies. 
                Food is one of those certain things that brings out the happiness and best in everyone. 
                Bringing everyone closer is our mission and we do that with food.
          </p>

          <v-btn color="#FA710D" large class="aboutus-button px-7 py-7 mb-10">
            Download PDF</v-btn
          >
         
        </v-col>
        <v-col cols="12" sm="6" order="last">
          <img
            class="aboutus-image my-6"
            src="~assets/images/maindish.png"
            alt=""
          />
        </v-col>
      </v-row>


      <!-------------------------------------- Our Team -------------------------------------------->
      <!-- <v-row dense no-gutters align="center" justify="center" class="mt-10">
        <v-col cols="12">
          <h3 class="aboutus3">Our Team
          </h3>
           <span>
                <img class="loveimage" src="~/assets/images/Vector.png" alt="" srcset="">
             </span>
            <p class="black--text pro-commitment">
            Meet our eclectic team of humans dedicated to creating happiness and beautiful memories for you.
          </p>
        </v-col>
        <v-row justify="space-around">
            <v-col cols="3" align="center">
                <img class="grid-image2" src="~assets/images/team1.png" alt="" />
                <p class="mt-n2 font-weight-bold name" >Chidike Nwandu</p>
                <p class="mt-n10 role">CEO</p>
            </v-col>
            <v-col cols="3" align="center">
                <img class="grid-image2" src="~assets/images/team1.png" alt="" />
                <p class="mt-n2 font-weight-bold name" >Amarachi Eche</p>
                <p class="mt-n10 role">Product Manager</p>
            </v-col>

            <v-col cols="3" align="center">
                <img class="grid-image2" src="~assets/images/team3.png" alt="" />
                <p class="mt-n2 font-weight-bold name"> j</p>
                <p class="mt-n10 role">Product Manager</p>
            </v-col>
        </v-row>

        <v-row justify="space-around">
            <v-col cols="3" align="center">
                <img class="grid-image2" src="~assets/images/team2.png" alt="" />
                <p class="mt-n2 font-weight-bold name" >Okoye-Nobert C</p>
                <p class="mt-n10 role">Software Engineer</p>
            </v-col>
            <v-col cols="3" align="center">
                <img class="grid-image2" src="~assets/images/team4.png" alt="" />
                <p class="mt-n2 font-weight-bold name" >Kosi Uzoegwu</p>
                <p class="mt-n10 role">Comms Manager</p>
            </v-col>

            <v-col cols="3" align="center">
                <img class="grid-image2" src="~assets/images/team3.png" alt="" />
                <p class="mt-n2 font-weight-bold name"> j</p>
                <p class="mt-n10 role">Product Manager</p>
            </v-col>
        </v-row>


        <v-row justify="center">
            <v-col cols="3" align="center">
                <img class="grid-image2 mr-10" src="~assets/images/team2.png" alt="" />
                <p class="mt-n2 font-weight-bold name">Samuel Dike</p>
                <p class="mt-n10 role">Role</p>
            </v-col>
        </v-row>
        
      </v-row>-->

     <!-------------------------------------- Join our Team -------------------------------------------->
      <v-row dense no-gutters align="center" justify="center">
        <v-col cols="12">
          <h3 class="aboutus3">Join our Team
          </h3>
           <span>
                <img class="loveimage" src="~/assets/images/Vector.png" alt="" srcset="">
             </span>
            <p class="black--text pro-commitment">
            Would you love to part of our team? Check out available roles 
            <span>
                <nuxt-link to="/">
                    here
                </nuxt-link>
            </span> 
          </p>
        </v-col>
      </v-row>
    </div>

    <!-------------------------------------- E-restuarant -------------------------------------------->

    <div class="aboutus1 erestuarant">
      <v-row dense no-gutters align="center" justify="center">
        <v-col cols="12" sm="6" justify="center">
          <p class="black--text commitment">
            Own Your e-Restaurant 
          </p>
          <p class="black--text pro-commitment mr-5">
            Create a restaurant with us and sell your dishes to happy lovers, families close to you. 
            Boost your food business visibility with FiranseFood. 
            Join us to build a happy and connected society bonded by the love & happiness from delicious food.
          </p>

          <v-btn color="#FA710D" large class="aboutus-button px-7 py-7 mb-10" @click="gotoDashboard">
          Create Restaurant</v-btn
          >

        </v-col>
        <v-col cols="12" sm="6" order="first" order-sm="last">
          <img
            class="aboutus-image my-6"
            src="~assets/images/e-restuarant.png"
            alt=""
          />
        </v-col>
      </v-row>
    </div>

     <!----------------------------------Download card--------------------------------------------------------------->
    <Downloadcard/>

    <!------------------------------------ Footer ------------------------------------------>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#342301"
        fill-opacity="1"
        d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,245.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
    <footer>
      <v-row justify="center" dense no-gutters>
        <v-col cols="12" md="10">
          <v-row no-gutters dense class="mx-4">
            <v-col cols="6" sm="3" class="my-4">
              <h6>Company</h6>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </v-col>
            <v-col cols="6" sm="3" class="my-4">
              <h6>Follow us</h6>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </v-col>

            <v-col cols="12" sm="3" class="my-4">
              <h6>Other</h6>
              <ul>
                <li>FAQs</li>
                <li>Privacy Policy</li>
              </ul>
            </v-col>

            <v-col cols="8" sm="3" class="my-10">
              <Applebutton class="mb-5 header-button" />
              <Googlebutton class="header-button" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </footer>
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
import { UserController } from '@/modules/user'
import Nav from '~/components/Nav.vue'
import Downloadcard from '~/components/Downloadcard.vue'

export default {
  name: 'index',
  data() {
    return {
      drawer: false,
      cravetag: this.value,
      nonexistent: false,
      text: "At Firanshe foods,we are commited to spreading love around the world"+
            " and the way we see it, gifting food to our loved ones is one of the"+
            " ways to do so. At Firanshefoods,we are commited to spreading love"+
            " around the world and the way we see it, gifting food to our loved"+
            " ones is one of the ways to do so.",
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
    Downloadcard
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
        this.readMore = true;
    },
    showLess() {
        this.readMore = false;
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
  margin-top: 50px;
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




// ----------------About Us-----------------

.aboutus {
  position: relative;
  margin: 20px;
  background-image: url("~/assets/images/emojis.png");
  background-size: cover;
}

.aboutus1 {
  padding: 20px;
}

.aboutus-image {
  width: 100%;
  object-fit: fill;
}

.aboutus-button {
  color: white !important;
  height: 50px !important;
  width: 65%;
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 900;
  font-family: 'Poppins' !important;
  letter-spacing: 2px;
  background-color: #ffa800 !important;
}

.aboutus3 {
  font-family: 'Poppins' !important;
  color: #342301 !important;
  font-size: 30px;
  letter-spacing: 2px;
  background-image: url("~/assets/images/emojis.png");
  position: relative;
}

.commitment {
  font-size: 20px;
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
.ourstory {
  padding: 20px;
  background-image: url("~/assets/images/backgroundframe1.png");
  background-size: cover;
}

.loveimage{
    width: 20%;
    z-index: -1;
    margin-top: -1000px;
    margin-left: 100px;
}
// -------------------------------------------------------------------
.grid-image2 {
  width: 110% !important;
}

.name{
    font-size: 7px;
    margin-top: -20% !important;
}

.role{
    font-size: 7px;
    margin-top: -45% !important;
}

// -----------------------------------
.erestuarant{
  background-image: url("~/assets/images/backgroundframe2.png");

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
  font-family: Balsamiq Sans !important;
  color: #431d01 !important;
  letter-spacing: 2px;
}

.download-text6 {
  font-size: 29px;
  font-weight: 600;
  line-height: 6px;
  margin-bottom: 50px;
  font-family: Balsamiq Sans !important;
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
@media only screen and (max-width: 416px) {
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
    .grid-image2 {
    width: 100% !important;
  }

  //   ---------------------------------
  .grid-image2 {
    width: 100% !important;
  }
  .name{
    font-size: 0.5rem;
    margin-top: -30% !important;
}

  .role{
    font-size: 0.5rem;
    margin-top: -65% !important;
}
//   ---------------------------------
}
@media only screen and (max-width: 390px) {
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
    .grid-image2 {
    width: 100% !important;
  }

  //   ---------------------------------
  .grid-image2 {
    width: 100% !important;
  }
  .name{
    font-size: 0.4rem;
    margin-top: -30% !important;
}

  .role{
    font-size: 0.4rem;
    margin-top: -75% !important;
}
//   ---------------------------------
}

/*sm*/
@media only screen and (min-width: 600px) and (max-width: 960px) {
  header {
    margin-bottom: 8%;
  }
  .button {
    padding: 35px 20px;
    margin-left: -15%;
    width: 75px;
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
  .aboutus1 {
    margin: 40px;
  }
  .aboutus3 {
    font-size: 40px;
    margin-right: 25px;
  }

  .ourstory{
    padding: 40px;
  }

  .loveimage{
    width: 10%;
    z-index: -1;
    margin-top: -1000px;
    margin-left: 130px;
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
  //   ---------------------------------
  .grid-image2 {
    width: 100% !important;
  }
  .name{
    font-size: 12px;
    margin-top: -8% !important;
}

  .role{
    font-size: 12px;
    margin-top: -20% !important;
}
//   ---------------------------------

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
  header {
    background-color: white;
  }

//   ---------------------------------
  .grid-image2 {
    width: 100% !important;
  }
  .name{
    font-size: 15px;
    margin-top: -4% !important;
}

  .role{
    font-size: 15px;
    margin-top: -17% !important;
}
//   ---------------------------------

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

   .aboutus1 {
    padding: 50px 80px;
  }

  .aboutus3 {
    font-size: 40px;
    margin-right: 25px;
  }

  .ourstory{
    padding: 50px 80px;
  }
  .loveimage{
    width: 10%;
    z-index: -1;
    margin-top: -1000px;
    margin-left: 130px;
}

    .cheese-img {
    width: 27% !important;
    margin-top: -40px;
  }

  .drinkspill-img {
    width: 33%;
    margin-top: -13%;
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

//   ---------------------------------
  .grid-image2 {
    width: 100% !important;
  }
  .name{
    font-size: 15px;
    margin-top: -4% !important;
}

  .role{
    font-size: 15px;
    margin-top: -17% !important;
}
//   ---------------------------------

  .col-3{
    margin-right: 5% !important;

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
    padding: 100px 200px;
  }

  .aboutus1 {
    padding: 100px 200px;
  }
  
  .ourstory{
    padding: 100px 200px;
  }
  .erestuarant{
    padding: 15%;
  }
  .aboutus3 {
    font-size: 40px;
    margin-right: 25px;
  }

  .commitment {
    font-size: 35px;
    line-height: 45px;
    margin-right: 23px;
    margin-top: -10%;
  }

  .pro-commitment {
    font-size: 17px;
  }

  .storyhead{
    margin-top: -40%;
  }

  .aboutus-image {
    width: 100%;
    margin-top: -20% !important;
  }

  .aboutus-button {
  width: 45%;
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

  .loveimage{
    width: 10%;
    margin-top: -1000px;
    margin-left: 120px;
}
}
</style>
