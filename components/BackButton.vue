<template>
  <div>
    <v-btn icon tile class="mr-4" @click="handleClick">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </div>
</template>
<script>

export default {
  name: "BackButton",
  props: {
    onClick: {
      type: Function,
      required: false
    }
  },
  methods: {
    handleClick(e) {
      if (this.onClick) {
        this.onClick(e)
      } else {
        this.$router.go(-1)
      }
    },
  }
}
</script>
