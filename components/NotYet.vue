<template>
  <div class="d-flex justify-center flex-column align-center a">
    <v-avatar tile size="150">
      <img src="~/assets/svg/void.svg" alt="" />
    </v-avatar>
    <div class="mt-4 font-weight-light grey--text">{{ title }}</div>
  </div>
</template>
<script>
  export default {
    name: "not-yet",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>
<style lang="scss" scoped>
  .a {
    height: 300px;
  }
</style>
