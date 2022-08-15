<template>
  <div>
    <div class="mb-4 relative">
      <div class="d-flex align-center justify-end">
        <v-btn icon small tile class="" @click="$emit('goBack')">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </div>
      <img :src="foodNow.image.location" alt="food image">
      <h4 class="mb-2">{{ foodNow.name }}</h4>
      <p class="text__md">{{ foodNow.description }}</p>

      <div class="mb-2">
        <span class="mb-2 primary--text">Price Tags</span>
        <ul>
          <li class="text__md" v-for=" (item, i) in foodNow.price_tags" :key="i"> {{ item.name }} - {{
              formattedCurrency(item.price)
          }}
          </li>
        </ul>
      </div>
      <div v-if="foodNow.extra_tags.length > 0" class="mb-2">
        <span class="mb-4 primary--text">Extra Tags</span>
        <ul>
          <li class="text__md" v-for="(item, i) in foodNow.extra_tags" :key="i">
            {{ item.name }} - {{ formattedCurrency(item.price) }}
          </li>
        </ul>
      </div>
      <div>
        <span class="mb-4 primary--text">Reviews</span>
        <p>
          <v-icon small color="primary">mdi-star</v-icon> {{ foodNow.rating }}
        </p>
      </div>
      <div class="d-flex align-center">
        <v-switch v-model="foodNow.active" inset>
        </v-switch>
        <span class="text__md">
          {{ foodNow.active ? 'Availabe today' : 'Not available today' }}
        </span>
      </div>
      <div class="d-flex mt-4" v-if="$route.name != 'index'">
        <base-button :appendIcon="'pencil'" :name="'Edit'" class="btn--tile mr-2 btn--sm"
          @click="$router.push(`/food/edit-food/${foodNow._id}`)" />
        <base-button class="btn--danger btn--sm btn--tile" :appendIcon="'delete'" :name="'Delete'"
          @click="showDialog = true" />
      </div>
    </div>

    <v-dialog v-model="showDialog" max-width="500" persistent>
      <form-modal @closeModal="showDialog = false">
        <template #title>
          <div>
            <h1 class="__sub-title">Delete {{ foodNow.name }}</h1>
          </div>
        </template>
        <template #description>
          <div class="my-8 text__base">
            <p>Are you sure you want to proceed with deleting the food? You will lose all details and they are not
              recoverable.</p>
          </div>
        </template>
        <template #action>
          <base-button class="mr-2 btn--tile btn--outlined" :name="'Cancel'" @click="showDialog = false"></base-button>
          <base-button class="btn--danger btn--tile" :name="'Delete Food'" @click="deleteFood"></base-button>
        </template>
      </form-modal>
    </v-dialog>

  </div>
</template>
<script>
import { formatCurrency } from "~/static/utils";
export default {
  name: "FoodCard",
  data() {
    return {
      showDialog: false,
      active: this.foodNow.active,
      loading: false
    }
  },
  props: {
    foodNow: {
      type: Object,
      required: true
    }
  },
  watch: {
    active: function (newValue) {
      const payload = {
        food_id: this.foodNow._id,
        is_active: newValue,
      };
      this.$store.dispatch("toggleFoodActive", payload);
    },

  },
  methods: {
    formattedCurrency(amount) {
      return formatCurrency(amount);
    },
    deleteFood() {
      this.loading = true;
      // this.$store.dispatch("deleteFood", this.foodNow._id).then(_ => {
      //   this.showDialog = false;
      //   this.loading = false;
      // });
      this.$emit("deleteFood", { index: this.foodNow.index, id: this.foodNow._id });
    },
  }
}
</script>
<style lang="scss" scoped>
.top-close {
  position: absolute;
  top: 0;
  right: 0
}

img {
  width: 100%;
  max-height: 300px;
  padding: 10px 0;
}

ul {
  padding: 0px;
  margin: 0px;
  display: inline;
  list-style: none;
  list-style-type: none;
}
</style>