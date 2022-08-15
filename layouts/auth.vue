<template>
  <v-app light>
    <div class="d-flex">
      <v-main>
        <div class="one">
          <img src="~/assets/images/logo-with-name.png" />
        </div>
        <div class="two">
          <img src="~/assets/images/logo-with-name.png" class="d-md-none" />
          <div class="two__form">
            <nuxt />
          </div>
        </div>
      </v-main>
    </div>
    <Snackbar></Snackbar>
  </v-app>
</template>


<script>
export default {
  name: "auth",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.one {
  background-color: #FFF3DB;
  position: fixed;
  height: 100vh;
  display: none;


  @media only screen and (min-width: 950px) {
    display: block;
    width: 40vw;
  }

  @media only screen and (min-width: 1264px) {
    width: 50vw;
  }

  img {
    position: absolute;
    bottom: 10px;
    width: 300px;
    bottom: 10%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}

.two {
  width: 100vw;
  position: relative;
  min-height: 100vh;
  padding: 0px 10%;

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    min-height: 70vh;

    @media only screen and (min-width: 950px) {
      min-height: 100vh;
    }
  }

  img {
    margin-top: 30px;
    width: 200px;
  }

  @media only screen and (min-width: 600px) {
    padding: 0px 20%;
  }

  @media only screen and (min-width: 950px) {
    padding: 0px 100px;
    left: 40vw;
    width: 60vw;
  }

  @media only screen and (min-width: 1264px) {
    left: 50vw;
    width: 50vw;
  }
}
</style>