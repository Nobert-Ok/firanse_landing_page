<template>
    <footer class="mt-10 p-10">
      <v-row justify="center" dense no-gutters>
        <v-col cols="12" md="10">
          <v-row no-gutters dense class="mx-4 px-md-15 py-md-15">
            <v-col cols="4" sm="3" class="my-4">
              <h6>Company</h6>
              <ul>
                <li>
                   <nuxt-link to="/about" class="nuxtlink">About</nuxt-link>
                </li>
                <li><a href="http://www.medium.com/@firansefood" class="nuxtlink">Blog</a></li>
                <li><nuxt-link to="/about" class="nuxtlink">Careers</nuxt-link></li>
                <li><nuxt-link to="/contact" class="nuxtlink">Contact Us</nuxt-link></li>
              </ul>
            </v-col>
            <v-col cols="4" sm="3" class="my-4">
              <h6 class="text-weight-black">Follow us</h6>
              <ul>
                <li><a href="https://www.facebook.com/firansefood" class="nuxtlink">Facebook</a></li>
                <li><a href="https://www.twitter.com/firansefood" class="nuxtlink">Twitter</a></li>
                <li><a href="https://www.instagram.com/firansefood/" class="nuxtlink">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/firansefoodapp/" class="nuxtlink">LinkedIn</a></li>
              </ul>
            </v-col>

            <v-col cols="4" sm="3" class="my-4">
              <h6>Other</h6>
              <ul>
                <li><a onclick="window.open('https://drive.google.com/file/d/1z4ZVxNd-DuMN8fL97E_mbH8cLwjsOPdg/view?usp=sharing')">Terms of Use</a></li>
                <li><a onclick="window.open('https://drive.google.com/file/d/1I-SpQjnfDqQgAtgO0ymXrUSi9dDK_YlR/view?usp=sharing')">Privacy Policy</a></li>
              </ul>
            </v-col>

            <v-col cols="8" sm="3" class="my-10">
              <Applebutton class="mb-5 header-button"  />
              <Googlebutton class="header-button" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </footer>
</template>

<script>
import Applebutton from '~/components/Applebutton.vue'
import Googlebutton from '~/components/Googlebutton.vue'
export default {
  name: 'index',

  components: {
    Applebutton,
    Googlebutton,
  },
}
</script>


<style lang="scss" scoped>
h6 {
  font-family: 'Poppins' !important;
  margin: 15px 0;
  font-size: 18px;
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
    font-size: 14px;
    a,.nuxtlink {
      color: white;
      text-decoration: none;
      font-size: 14px;
    }
  }
}

.header-button {
  width: 103% !important;
  // background-color: white !important;
}

footer{
  background-color: #242220 !important;
}


/*md*/
@media only screen and (min-width: 960px) and (max-width: 1264px) {
  .header-button {
    width: 90% !important;
  }
}
/*lg*/
@media only screen and (min-width: 1264px) and (max-width: 1904px) {

  .header-button {
    width: 100% !important;
  }
}
</style>