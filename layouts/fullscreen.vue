<template>
  <v-app light>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { resetRouter } from "~/plugins/router-util";
export default {
  name: "fullscreen",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      businessDto: "getBusinessDto",
      businesses: "getBusinesses",
    }),
  },
  mounted() {
    this.$store.dispatch("getCurrent");
  },
  methods: {
    logout() {
      this.$router.push("/auth/login");
      this.$store.dispatch("logout");
      resetRouter();
    },
  },
  head() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_API_KEY}&libraries=places`,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.logo {
  &__text {
    width: 150px;
  }
}

img {
  display: inline;
}

.m-header {
  width: 100%;
  background-color: white;
  z-index: 2;
  margin-bottom: 50px;
  padding: 10px 8% 0 8%;

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
}
</style>