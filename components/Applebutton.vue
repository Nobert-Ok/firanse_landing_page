<template>
          <v-btn
            color="#FFA800"
            large
            class="px-7 py-7 download-button"
            elevation="5"
          >
            <v-icon color="white" class="download-icon mr-4"
              >mdi-apple</v-icon
            >
            <span
              class="d-inline-block download-text1 white--text">
              <small class="font-weight-light d-block white--text">Download on</small>
              App Store
            </span>
          </v-btn>
</template>


<style scoped>

.download-button{
    width: 150px;
}

.download-text1{
<<<<<<< HEAD
=======
    font-family: 'Poppins' !important;
>>>>>>> 93071bddf133f68efc78a3b7ab25ae1bf99eea6d
    font-size: 12px;
    font-weight: 900;
}


.download-icon{
    font-size: 27px;
    margin-right: 10px !important;
}

@media only screen and (max-width: 370px) {
  .download-icon{
    font-size: 25px !important;
    /* margin-left: 5px; */
  }

  .download-text1{
    font-size: 9px;
  }
}


</style>