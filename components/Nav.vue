<template>
  <fixed-header>
    <div class="nav">
      <header class="d-flex justify-space-between align-center mx-auto">
        <div class="d-flex my-3 ml-sm-10">
          <nuxt-link to="/">
            <img src="~/assets/images/firansee.png" class="logo" />
          </nuxt-link>
        </div>
        <div class="d-md-flex mr-4">
          <nav class="d-none d-md-block">
            <ul class="d-flex align-center">
              <li class="mx-8">
                <nuxt-link to="/" exact class="nuxtlink"> Home </nuxt-link>
              </li>
              <li class="mx-8">
                <nuxt-link to="/about" exact class="nuxtlink"> About </nuxt-link>
              </li>
              <li class="mx-8">
                <nuxt-link to="/blog" exact class="nuxtlink"> Blog </nuxt-link>
              </li>
              <li class="mx-8">
                <nuxt-link to="/contact" exact class="nuxtlink">
                  Contact
                </nuxt-link>
              </li>
              <li class="mx-6">
                <a href="https://dashboard.firansefood.com/auth/login">
                  <v-btn color="#FFA800" outlined class="text-none px-7" target="blank">
                  Login 
                  </v-btn>
                </a>
                
              </li>
              <li class="mx-10">
                <a href="https://dashboard.firansefood.com">
                  <v-btn color="#FFA800" class="white--text text-none" target="blank">
                  Create Resturant</v-btn>
                </a>
              </li>
            </ul>
          </nav>
          <v-btn class="ml-2 text-none d-md-none" color="primary" icon @click="drawer = true">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </header>
      <!-- <v-row dense no-gutters align="center" justify="space-around"> -->
      <v-navigation-drawer v-model="drawer" absolute temporary width="100%">
        <v-btn color="#FFA800" icon class="float-right" @click="drawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="d-flex flex-column justify-center align-center full">
          <div>
            <nuxt-link to="/" class="nuxtlink">
              <v-btn class="mb-10 text-none" plain color="#FFA800">Home</v-btn>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/about" class="nuxtlink">
              <v-btn class="mb-10 text-none" plain color="#FFA800">About</v-btn>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/blog" class="nuxtlink">
              <v-btn class="mb-10 text-none" plain color="#FFA800">Blog</v-btn>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/contact" class="nuxtlink">
              <v-btn class="mb-10 text-none" plain color="#FFA800">Contact</v-btn>
            </nuxt-link>
          </div>
          <div class="mb-10">
            <a href="https://dashboard.firansefood.com/auth/login" class="text-decoration-none">
              <v-btn color="#FFA800" outlined class="text-none px-7 restaurant-button" target="blank">
              Login 
              </v-btn>
            </a>
          </div>
          <div>              
            <a href="https://dashboard.firansefood.com">
              <v-btn color="#FFA800" class="white--text text-none restaurant-button" target="blank">
              Create Resturant</v-btn>
            </a>
          </div>
        </div>
      </v-navigation-drawer>
    </div>
  </fixed-header>
</template>
<script>
import Applebutton from '~/components/Applebutton.vue'
import Googlebutton from '~/components/Googlebutton.vue'
import Nav from '~/components/Nav.vue'
import FixedHeader from 'vue-fixed-header'

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
    FixedHeader,
    Nav,
  },

  methods: {
    gotoDashboard() {
      window.open('https://dashboard.firansefood.com')
    },
  },
}
</script>


<style lang="scss" scoped>
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}

.nav {
  margin: 0 auto;
  margin-bottom: 6%;
}

header{
    position: fixed;
      background-color: white !important;
  // position: relative;
  z-index: 1;
}

.logo {
  width: 75%;
  /* height: 100%; */
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

    .nuxtlink,a {
      color: #000;
      text-decoration: none !important;
    }
  }
}

.nuxtlink:hover {
  color: $primary;
}

.nuxt-link-exact-active {
  color: $primary  !important;
}

.nuxtlink {
  font-family: 'Poppins' !important;
  text-decoration: none;
}

.restaurant-button {
  font-family: 'Poppins' !important;
}

@media only screen and (min-width: 300px) and (max-width: 960px) {
  .logo{
    margin-left: 1rem;
  }
  .nav {
  margin-bottom: 20%;
  }

}

@media only screen and (max-width: 960px) {
  .nav {
  margin-bottom: 12%;
  }
}

@media only screen and (max-width: 500px) {
  .nav {
  margin-bottom: 18%;
  }
}
</style>
