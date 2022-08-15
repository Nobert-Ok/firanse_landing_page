<template>
  <div style="overflow-x: auto" class="pa-4">
    <table>
      <thead>
        <slot name="head" />
      </thead>
      <tbody v-if="$slots.body">
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>
<script>
import { formatCurrency } from "~/static/utils";
export default {
  name: "baseTable",
  data() {
    return {}
  },
  methods: {
    formattedCurrency(amount) {
      return formatCurrency(amount);
    },
  }
}
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  text-align: left;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>