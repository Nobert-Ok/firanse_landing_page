<template>
    <div>
    <header class="d-flex justify-space-between align-center mx-auto">
      <div class="d-flex align-center my-3 ml-sm-16 ml-4">
        <img src="~/assets/images/firansee.png" class="logo" />
        <!-- <img src="~/assets/images/whitelogo.png" class="logo__text ml-2" /> -->
      </div>
      <div class="d-md-flex mr-4">
        <nav class="d-none d-md-block">
          <ul class="d-flex align-center">
            <li class="mx-10">
              <nuxt-link to="/" exact class="nuxtlink">
               Home
              </nuxt-link>
            </li>
            <li class="mx-10">
              <nuxt-link to="/about" exact class="nuxtlink">
               About
              </nuxt-link>
            </li>
            <li class="mx-10">
              <nuxt-link to="/blog" exact class="nuxtlink">
               Blog
              </nuxt-link>
            </li>
            <li class="mx-10">
              <nuxt-link to="/contact" exact  class="nuxtlink">
               Contact
              </nuxt-link>
            </li>
            <li class="mx-10">
              <v-btn
                color="#FFA800"
                elevation="4"
                class="white--text text-none"
                target="blank"
                @click="gotoDashboard"
                >Create a Resturant</v-btn
              >
            </li>
          </ul>
        </nav>
        <v-btn
          class="ml-2 text-none d-md-none"
          color="primary"
          icon
          @click="drawer = true"
          ><v-icon>mdi-menu</v-icon></v-btn
        >
      </div>
    </header>
    <v-row dense no-gutters align="center" justify="space-around">
      <v-navigation-drawer v-model="drawer" absolute temporary width="100%">
        <v-btn color="#FFA800" icon class="float-right" @click="drawer = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <div class="d-flex flex-column justify-center align-center full">
          <div>
            <nuxt-link to="/" class="nuxtlink">
                <v-btn class="mb-10 text-none" plain color="#FFA800"
                >Home</v-btn>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/about" class="nuxtlink">
                <v-btn class="mb-10 text-none" plain color="#FFA800"
                >About</v-btn>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/blog" class="nuxtlink">
                <v-btn class="mb-10 text-none" plain color="#FFA800"
                >Blog</v-btn>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/contact" class="nuxtlink">
                <v-btn class="mb-10 text-none" plain color="#FFA800"
                >Contact</v-btn>
            </nuxt-link>
          </div>
          <div>
            <v-btn
              color="#FFA800"
              elevation="4"
              class="white--text text-none"
              target="blank"
              @click="gotoDashboard"
              >Create a Resturant</v-btn
            >
          </div>
        </div>
      </v-navigation-drawer>
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

.nuxtlink{
      text-decoration: none;
    }


</style>
