<template>
  <v-btn color="black" large class="px-7 py-7 download-button" elevation="5">
    <v-icon color="white" class="download-icon text--center">mdi-google-play</v-icon>
    <span class="d-inline-block download-text1 text--center">
      <small class="font-weight-light d-block text--center">Get it on</small>
      Google Play
    </span>
  </v-btn>
</template>


<style scoped>
.download-button {
  width: 150px;
}

span,
small {
  color: white;
}

.download-text1 {
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
</style>