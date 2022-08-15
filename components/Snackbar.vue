<template>
  <div>
    <v-snackbar v-model="show" :color="color">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn icon color="white" text v-bind="attrs" @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template >

  <script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "",
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "snackbar/showMessage") {
        this.message = state.snackbar.content;
        this.color = state.snackbar.color;
        this.show = true;
      }
    });
  },
};
</script>