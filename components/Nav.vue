<template>
  <div class="nav">
    <header>
      <nav class="d-md-flex py-2 py-md-2 justify-space-between align-center">
        <div class="d-flex my-3 ml-sm-10 ml-5 align-center justify-space-between">
          <div class="d-flex">
            <nuxt-link to="/">
              <img src="~/assets/images/firansee.png" class="logo" />
            </nuxt-link>
          </div>
          <v-btn class="mr-4 text-none d-inline d-md-none" color="primary" icon @click="drawer = true">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
        <div class="d-md-flex mr-4 d-none">
          <ul class="d-flex align-center">
            <li class="mx-8">
              <nuxt-link to="/" exact class="nuxtlink">
                <span>Home</span>
              </nuxt-link>
            </li>
            <li class="mx-8">
              <nuxt-link to="/about" exact class="nuxtlink">
                <span>About Us</span>
              </nuxt-link>
            </li>
            <li class="mx-8">
              <nuxt-link to="/blog" exact class="nuxtlink">
                <span>Blog</span>
              </nuxt-link>
            </li>
            <li class="mx-8">
              <nuxt-link to="/contact" exact class="nuxtlink">
                <span>Contact Us</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="d-md-flex d-none">
          <div class="ml-16 mr-10 ml-md-10">
            <a href="https://dashboard.firansefood.com/auth/login" target="blank">
              <div class="btn btn--white">
                Login
              </div>
            </a>

          </div>
          <div class="mx-10">
            <a href="https://dashboard.firansefood.com" target="blank">
              <div class="btn">
                Create Restaurant
              </div>
            </a>
            <!-- <a href="/create-business" class="d-none" target="blank">
              <div class="btn">
                Create Restaurant
              </div>
            </a> -->
          </div>
        </div>
      </nav>
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
            <!-- <span>Home</span> -->
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
</template>
<script>
import Applebutton from '~/components/Applebutton.vue'
import Googlebutton from '~/components/Googlebutton.vue'
import Nav from '~/components/Nav.vue'
import FixedHeader from 'vue-fixed-header'
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
.btn {
  background-color: #FFA800;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;

  &--white {
    background-color: white;
    padding: 8px 20px;
    border-radius: 10px;
    border: 2px solid #FFA800;
    color: #FFA800;
    text-decoration: none;
  }
}

a {
  text-decoration: none !important;
}


.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}

.nav {
  margin: 0 auto;
  margin-bottom: 20% !important;
}

header {
  width: 100%;
  padding: 2px 0;
  position: fixed;
  background-color: white !important;
  box-shadow: 0px 1px 3px #eaeaea;
  z-index: 1;
}

.logo {
  width: 75%;
  display: inline;
  cursor: pointer;
  vertical-align: text-bottom !important;
}


.first-head {
  margin-top: 50px;
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

    .nuxtlink,
    a {
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

@media only screen and (max-width: 450px) {
  .logo {
    width: 90% !important;
  }
}

@media only screen and (min-width: 450px) and (max-width: 600px) {
  .logo {
    margin-left: 1rem;
    width: 100% !important;

  }

  .nav {
    margin-bottom: 15% !important;
  }

  ul {
    li {

      .nuxtlink,
      a {
        font-size: 22px;
      }
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 960px) {
  .logo {
    width: 100% !important;
  }

  .nav {
    margin-bottom: 10% !important;
  }
}

@media only screen and (min-width: 960px) and (max-width: 1264px) {
  .logo {
    width: 100% !important;
  }

  .nav {
    margin-bottom: 6% !important;
  }

  ul {
    li {

      .nuxtlink,
      a,
      .button-font {
        font-size: 18px;
      }
    }
  }
}

@media only screen and (min-width: 1264px) and (max-width: 1904px) {
  .logo {
    width: 100% !important;
  }

  .nav {
    margin-bottom: 10% !important;
  }

  ul {
    li {

      .nuxtlink,
      a,
      .button-font {
        font-size: 20px;
      }
    }
  }
}

@media only screen and (min-width: 1904px) {
  .nav {
    margin-bottom: 9% !important;
  }

  .logo {
    width: 110% !important;
  }

  ul {
    li {

      .nuxtlink,
      a,
      .button-font {
        font-size: 22px;
      }
    }
  }
}
</style>
