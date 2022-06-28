<template>
    <footer class="mt-10 p-10">
      <v-row justify="center" dense no-gutters>
        <v-col cols="12" md="10">
          <v-row no-gutters dense class="mx-4 px-md-15 py-md-15">
            <v-col cols="6" sm="3" class="my-4">
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
            <v-col cols="6" sm="3" class="my-4">
              <h6>Follow us</h6>
              <ul>
                <li><a href="https://www.facebook.com/firansefood" class="nuxtlink">Facebook</a></li>
                <li><a href="https://www.twitter.com/firansefood" class="nuxtlink">Twitter</a></li>
                <li><a href="https://www.instagram.com/firansefood/" class="nuxtlink">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/firansefoodapp/" class="nuxtlink">LinkedIn</a></li>
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
  margin: 10px 0;
  font-size: 23px;
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
    a,.nuxtlink {
      color: white;
      text-decoration: none;
    }
  }
}

.header-button {
  width: 103% !important;
  // background-color: white !important;
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