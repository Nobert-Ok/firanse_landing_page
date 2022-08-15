<template>
  <div class="d-flex justify-center flex-column align-center outlined __hold">
    <div>
      <slot name="image"></slot>
    </div>
    <div class="mt-4">
      <slot name="title"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "no-data",
};
</script>

<style lang="scss" scoped>
.__hold {
  height: 300px;
}
</style>
