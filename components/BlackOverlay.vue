<template>
  <div class="overlay">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BlackOverlay",
};
</script>
<style lang="scss" scoped>
.close {
  position: fixed;
  top: 2%;
  right: 2%;
}
.overlay {
  background: rgba(0, 0, 0, 0.7);
  min-height: 100%;
  z-index: 4;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>