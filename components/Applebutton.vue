<template>
  <v-btn color="black" large class="px-7 py-7 download-button">
    <v-icon color="white" class="download-icon mr-4">mdi-apple</v-icon>
    <span class="d-inline-block download-text1 white--text">
      <small class="font-weight-light d-block white--text font-weight-bold">Download on</small>
      App Store
    </span>
  </v-btn>
</template>


<style scoped>
.download-button {
  width: 150px;
}

.download-text1 {
  font-family: 'Poppins' !important;
  font-size: 12px;
  font-weight: 900;
}

.download-icon {
  font-size: 27px;
  margin-right: 10px !important;
}

@media only screen and (max-width: 370px) {
  .download-icon {
    font-size: 25px !important;
    /* margin-left: 5px; */
  }

  .download-text1 {
    font-size: 9px;
  }
}

@media only screen and (min-width: 1264px) and (max-width:1904px) {
  .download-button {
    width: 100px;
    height: 65px !important;
  }

  .download-icon {
    font-size: 35px !important;
    /* margin-left: 5px; */
  }

  .download-text1 {
    font-size: 15px;
  }
}


@media only screen and (min-width: 1904px) {
  .download-button {
    width: 150px;
    height: 70px !important;
  }

  .download-icon {
    font-size: 40px !important;
    /* margin-left: 5px; */
  }

  .download-text1 {
    font-size: 19px;
  }
}
</style>