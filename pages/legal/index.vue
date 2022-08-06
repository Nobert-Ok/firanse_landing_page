<template>
  <div>
    <div class="d-flex justify-end grey">
      <v-btn large icon @click="$router.go(-1)">
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
    </div>
    <v-row no-gutters dense justify="center">
      <v-col cols="12" md="8" lg="8">
        <pdf v-for="i in 10" :key="i" :page="i" :src="'/terms.pdf'"></pdf>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import pdf from 'vue-pdf'
export default {
  name: 'index',
  // layout: 'fullscreen',
  components: {
    pdf,
  },
}
</script>