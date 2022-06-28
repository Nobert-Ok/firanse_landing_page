<template>
  <div>
    <pdf src="'~/static/terms'"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'index',
  components: {
    pdf,
  },
}
</script>