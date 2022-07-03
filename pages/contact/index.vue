<template>
  <div class="body">
    <Nav />
    <v-row dense no-gutters align="center" justify="space-around">

      <v-col cols="11" md="5" class="first-head ml-sm-7 ml-sm-8" justify="center">
        <p class="black--text send">
          Contact
          coming soon 🥘.
        </p>

      </v-col>
      <v-col cols="12" md="5" class="my-8" align="center">
        <img class="maindish" src="~assets/images/maindish.png" alt="" />
      </v-col>
    </v-row>

    <!------------------------------------ Footer ------------------------------------------>
    <Footer />
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
export default {
  name: 'index',
  data() {
    return {
      drawer: false,
      cravetag: this.value,
      nonexistent: false,
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

// .navbar-nav>.active>a {
//   background-color: #C0C0C0;
//   color: green;
// }
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


  .send {
    font-size: 65px;
    line-height: 62px;
  }



}

/*md*/
@media only screen and (min-width: 960px) and (max-width: 1264px) {

  .send {
    font-size: 45px;
    line-height: 50px;
    font-weight: 500;
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
}
</style>
