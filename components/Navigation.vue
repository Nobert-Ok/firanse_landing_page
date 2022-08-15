<template>
  <div class="navWrapper">
    <div class="d-flex align-center justify-space-between container-wrapper">
      <img @click="$router.push('/')" src="~/assets/images/logo-with-name.png" class="logo" />
      <div class="d-none d-md-block">
        <nav>
          <ul v-for="{ link, title, name, i } in links" :key="i">
            <li>
              <a :class="{ 'link--active': isRoute(name) }" class="link" :href="link">{{ title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="d-none d-md-block">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div class="align-center business d-md-flex" v-if="businessDto">
        <v-btn icon class="mr-2">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <img :src="businessDto.image.location" class="business__image" />
        <span class="mx-4">{{ businessDto.name }}</span>
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon class="ml-n2" v-bind="attrs" v-on="on">
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <div class="white pa-4">
            <ul>
              <li class="d-block mb-2 pointer" v-for="(business, index) in businesses" :key="index"
                @click="updateBusinessDto(business)">
                {{ business.name + ' @' + business.tag }}
              </li>
              <v-divider class=" my-4">
              </v-divider>
              <li>
                <base-link class="a--sm" @click="$router.push('/resturant/new')" :prependIcon="'plus'"
                  :name="'Create new resturant'" />
              </li>
              <v-divider class=" my-4">
              </v-divider>
            </ul>
            <div class="mt-2 py-2 pointer" @click="showLogout()">
              <span class="red--text">
                Logout
              </span>
              <v-icon small color="red">mdi-logout</v-icon>
            </div>
          </div>
        </v-menu>
      </div>
      <div class="d-md-none">
        <v-btn icon @click="$emit('toggleDrawer')">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>
    <v-dialog v-model="logoutDialog" max-width="500" persistent>
      <form-modal @closeModal="logoutDialog = false">
        <template #title>
          <div>
            <h1 class="__sub-title">Log out?</h1>
          </div>
        </template>
        <template #description>
          <div class="my-8 text__base">
            <p>Are you sure you want to proceed with deleting the food? You will lose all details and they are not
              recoverable.</p>
          </div>
        </template>
        <template #action>
          <base-button class="mr-2 btn--tile btn--outlined" :name="'Cancel'" @click="logoutDialog = false">
          </base-button>
          <base-button class="btn--danger btn--tile" :name="'Log out'" @click="logoutUser"></base-button>
        </template>
      </form-modal>
    </v-dialog>

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { resetRouter } from "~/plugins/router-util";
export default {
  name: "Navigation",
  computed: {
    ...mapGetters({
      userDto: "getUserDto",
      businessDto: "getBusinessDto",
      businesses: "getBusinesses",
      getCurrentPage: "nav/getCurrentPage",
    }),
  },
  methods: {
    isRoute(name) {
      return this.$route.name == name;
    },
    showLogout() {
      this.logoutDialog = true;
    },
    updateBusinessDto(business) {
      this.$store.dispatch("updateBusinessDto", business);
      this.$router.go(0);
    },
    logoutUser() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/auth/login");
        resetRouter();
      });
    },
  },
  data() {
    return {
      logoutDialog: false,
      links: [
        { name: "index", title: "Home", icon: "mdi-food", link: "/" },
        { name: "food", title: "Manage Food", icon: "mdi-food", link: "/food" },
        {
          name: "orders",
          title: "Orders",
          icon: "mdi-checkbook",
          link: "/orders",
        },
        {
          name: "wallet",
          title: "Wallet",
          icon: "mdi-cash",
          link: "/wallet",
        },
        {
          name: "settings",
          title: "Settings",
          icon: "mdi-cog",
          link: "/settings",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.logo {
  width: 200px;
  cursor: pointer;

  @media only screen and (min-width: 950px) {
    width: 200px;
  }

  @media only screen and (min-width: 1264px) {
    width: 200px;
  }
}


.link {
  text-decoration: none;
  color: black;

  &--active {
    color: #ffa800;
  }

  &:hover {
    color: #ffa800;
  }
}

ul {
  list-style: none;
  display: inline;
  margin: 0 0px;

  li {
    display: inline-block;
    margin: 0 0px;
    color: $secondary;

    .v-btn {
      &:hover {
        color: #ffa800;
      }
    }

    &:hover {
      color: #ffa800;
    }

    @media only screen and (min-width: 1264px) {
      margin: 0 0px;
    }
  }
}

.business {
  display: none;

  &__image {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    @media only screen and (min-width: 950px) {
      display: none;
    }

    @media only screen and (min-width: 1264px) {
      display: block;
    }
  }
}

.navWrapper {
  position: fixed;
  width: 100vw;
  top: 0;
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0px 1px 3px #888888;
  padding: 10px 20px;
  z-index: 5;
  background-color: white;

  @media only screen and (min-width: 650px) {
    padding: 0px 10px;
  }
}
</style>
