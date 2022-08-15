<template>
  <div class="outlined mb-4" @click="showDialog = true" v-if="!deleted">
    <div class="pa-4 d-flex food">
      <div>
        <img :src="food.image.location" class="food__image" />
      </div>
      <div class="ml-4 food__description">
        <div>
          <h4 class="text__base">{{ food.name }}</h4>
          <p class="mt-2">{{ food.description.substring(0, 50) }}{{ food.description.length > 70 ? '...' : "" }} </p>
        </div>
        <div class="d-flex justify-space-between">
          <div class="d-flex align-center">
            <v-icon color="primary" small>mdi-star</v-icon>
            <span class="text__sm ml-1">
              {{ food.rating }}
            </span>
          </div>
          <base-link class="a--sm" :name="'See details'" appendIcon="arrow-right">
          </base-link>
        </div>
      </div>
    </div>
    <v-dialog v-model="showDialog" max-width="500">
      <div class="white pa-4">
        <food-card :foodNow="food" @goBack="showDialog = false" @deleteFood="deleteFood"></food-card>
      </div>
    </v-dialog>
  </div>
</template>
<script>
// import { mapGetters, mapState } from "vuex";
import { formatCurrency } from "~/static/utils";
export default {
  name: "ProductCard",
  data() {
    return {
      active: true,
      deleteFoodDialog: false,
      loading: false,
      showDialog: false,
      deleted: false
    };
  },
  props: {
    activeId: {
      type: String,
      default: undefined
    },
    food: {
      type: Object,
      required: true,
    },
  },
  watch: {
    "food.active": function (newValue, oldValue) {
      let payload = {
        food_id: this.food._id,
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
      this.$store.dispatch("deleteFood", this.food._id).then(_ => {
        this.showDialog = false;
        this.loading = false;
        this.deleted = true;
      });
    },

  },
};
</script>
<style lang="scss" scoped>
.food {
  // min-height: 150px;
  cursor: pointer;

  img {
    height: 100px;
    width: 100px;
    border-radius: 10px;
    object-fit: cover;
    display: inline;
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-items: space-between;
    justify-content: space-between;
    // justify-self: space-between;
    align-content: space-between;
    min-height: 100px;
    width: 100%;
    border-radius: 10px;

    // p {
    //   // height: 80px;
    //   // white-space: nowrap;
    //   overflow: hidden;
    //   text-overflow: ellipsis;
    // }
  }
}

.show-light {
  // border-color: $primary;
  border: 2px solid $primary;
}
</style>