<template>
  <div class="my-4">
    <div class="mb-4">
      <h1 class="__sub-title">{{ title }}</h1>
    </div>
    <v-row no-gutters dense>
      <v-col cols="12" md="6" lg="4" v-for="(food, i) in foods" :key="i">
        <div class="mr-md-2">
          <ProductCard :activeId="activeId" :food="food" @spliceIndex="$emit('spliceIndex', i)" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ProductList",
  props: {
    title: {
      required: true,
      default: "",
    },
    foods: {
      required: true,
      default: true,
    },
    activeId: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
    }
  },
  methods: {},
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
</style>