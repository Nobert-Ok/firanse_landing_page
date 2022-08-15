<template>
  <div class="white pa-8">
    <div class="d-flex justify-space-between">
      <slot name="title"></slot>
      <v-btn icon @click="$emit('closeModal')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="my-8">
      <slot name="description"></slot>
    </div>
    <div class="d-flex justify-end">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormModal",
  data() {
    return {
    };
  },
  props: {},
};
</script>

<style lang="scss" scoped>
</style>