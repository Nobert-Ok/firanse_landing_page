<template>
  <div>
    <pdf
      v-for="i in 10"
      :key="i"
      :page="i"
      :src="'privacy.pdf'"
      style="height: 100%"
    ></pdf>
  </div>
</template>


<script>
import pdf from 'vue-pdf'
export default {
  name: 'privacy',
  components: {
    pdf,
  },
}
</script>