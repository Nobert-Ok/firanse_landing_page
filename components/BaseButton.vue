<template>
  <v-btn color="#FFA800" large class="px-7 py-7 download-button text-none white--text" elevation="5"
    @click="$emit('click')">
    {{ text }}
  </v-btn>
</template>


<script>
export default {
  name: 'index',
  data() {
    return {
      drawer: false,
      jobs: null,
      cravetag: this.value,
      // userdetail: '',
    }
  },
  props: {
    text: {
      type: String,
    },
  },
}
</script>


<style scoped>
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