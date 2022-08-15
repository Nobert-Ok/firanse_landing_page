<template>
  <div>
    <div class="px-2">
      <div class="d-flex">
        <back-button />
        <h4 class="__title">{{ title }}</h4>
      </div>
      <p class="__title__sub">Please ensure to fill in all the details needed.</p>
    </div>
    <v-row dense no-gutters justify="space-between">
      <v-col cols="12">
        <form @submit.prevent="foodDto ? updateFood() : saveFood()">
          <v-row dense no-gutters justify="space-between">
            <v-col cols="12" md="6">
              <div class="my-4">
                <base-input v-model="name" :label="'Food name'" :placeholder="'Enter a food name'" type="text"
                  @blur="isFieldValidated('name')" />
                <error-text :message="err.name" />
              </div>
              <div class="my-4">
                <base-text-area v-model="description" :label="'Food description'"
                  :placeholder="'Enter a food description'" type="text" @blur="isFieldValidated('description')" />
                <error-text :message="err.description" />
              </div>
              <div class="my-4">
                <base-input v-model="time_to_make" :label="'Prepare time (hours)'" :placeholder="'Enter a food time'"
                  type="number" @blur="isFieldValidated('time_to_make')" />
                <error-text :message="err.time_to_make" />
                <error-text v-if="time_to_make > 72 || time_to_make < 1"
                  :message="'Food time should be at least 1 hour and 72 at most'" />
              </div>
              <div class="my-4">
                <base-select v-model="type_of_meal" :label="'Food type'" :placeholder="'Select a food type'"
                  @input-change="isFieldValidated('type_of_meal')">
                  <option :value="name" v-for="(name, i) in meal_type" :key="i">{{ name }}</option>
                </base-select>
                <error-text :message="err.type_of_meal" />
              </div>
              <!-- Add Price Tags -->
              <div class="my-8">
                <h4 class="__sub-title">Add Price Tag</h4>
                <p class="__sub-title__sub">
                  E.g.
                  Medium Pizza - N2,000,
                  Small Pizza - N1,000,
                  Large Pizza - N5,000
                </p>
                <div class="px-2">
                  <v-chip-group column>
                    <v-chip @click:close="removePrice(j)" close v-for="(tag, j) in price_tags" :key="j">{{ tag.name
                    }} -
                      {{ formattedCurrency(tag.price) }}</v-chip>
                  </v-chip-group>
                </div>

                <div class="my-4">
                  <base-input v-model="priceName" :label="'Tag'" :placeholder="'Enter a tag'" type="text"
                    @blur="isFieldValidated('priceName')" />
                  <error-text :message="err.priceName" />
                </div>
                <div class="my-4">
                  <base-input v-model="pricePrice" :label="'Price'" :placeholder="'Enter a price'" type="number"
                    @blur="isFieldValidated('pricePrice')" />
                  <error-text :message="err.pricePrice" />
                </div>
                <span class="grey--text">PS. Click "Add" after every entry</span>
                <div class="d-flex justify-end my-2">
                  <base-button class="btn--md" @click="addPrice">Add</base-button>
                </div>
              </div>


              <!-- Add Extras -->
              <div class="my-8">
                <h4 class="__sub-title">Add Extra Tag</h4>
                <div class="my-2">
                  <p class="__sub-title__sub">
                    E.g.
                    Perhaps Bottle Water, Coke, Extra Wraps of Eba, Extra Sauce,
                    or a Desert.
                  </p>
                </div>
                <div class="px-2">
                  <v-chip-group column>
                    <v-chip @click:close="removeExtra(j)" close v-for="(tag, j) in extra_tags" :key="j">{{ tag.name
                    }} -
                      {{ formattedCurrency(tag.price) }}</v-chip>
                  </v-chip-group>
                </div>
                <div class="my-4">
                  <base-input v-model="extraName" :label="'Tag'" :placeholder="'Enter a tag'" type="text"
                    @blur="isFieldValidated('extraName')" />
                  <error-text v-if="!!err.extraName" :message="err.extraName" />
                </div>
                <div class="my-4">
                  <base-input v-model="extraPrice" :label="'Price'" :placeholder="'Enter a price'" type="number"
                    @blur="isFieldValidated('extraPrice')" />
                  <error-text v-if="!!err.extraPrice" :message="err.extraPrice" />
                </div>

                <span class="grey--text mx-2">
                  PS. Click "Add" after every entry
                </span>
                <div class="d-flex justify-end my-2">
                  <base-button class="btn--md" :name="'Add'" @click="addExtras" />
                </div>
              </div>

            </v-col>
            <v-col cols="12" md="6" align="center">
              <div class="mx-md-8 pa-8 outlined__dotted">
                <div v-if="!!!url">
                  <img src="~/assets/images/Upload.png" class="" alt="upload image" />
                  <h4 class="__sub-title">Drag and drop to upload</h4>
                </div>
                <img class="food__image" v-else :src="url" />
                <p class="grey--text mt-2">
                  We currently support JPG, JPEG, PNG and
                  make sure your file size is not more than 5MB or
                  <base-link @click="chooseFiles" name="Click to Browse"></base-link>
                </p>
                <input id="fileUpload" type="file" @change="processFile($event)" hidden
                  accept="image/png, image/jpeg, image/jpg" />
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="my-8">
                <base-button :type="'submit'" :loading="loading" class="btn--full btn--default btn--md"
                  :name="'Save'" />
              </div>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
var FormData = require("form-data");
import { mapGetters, mapState } from "vuex";
import * as Validator from 'validatorjs';
import { formatCurrency, foodCateegory } from "~/static/utils";
import BaseButton from "./Base/BaseButton.vue";
export default {
  name: "CreateEditFood",
  props: ["title", "foodDto"],
  data() {
    return {
      name: "",
      description: "",
      time_to_make: 1,
      type_of_meal: "",
      price_tags: [],
      extra_tags: [],
      image: undefined,
      err: {
        name: "",
        description: "",
        time_to_make: "",
        type_of_meal: "",
        price_tags: "",
        image: "",
        price: "",
        tag: "",
        priceName: "",
        pricePrice: "",
        extraName: "",
        extraPrice: ""
      },
      rules: {
        name: "required|string",
        description: "required|string|max:1000",
        time_to_make: "required",
        type_of_meal: "required",
        price_tags: "required",
        image: "required",
        extraName: "required|string",
        extraPrice: "required|numeric",
        priceName: "required|string",
        pricePrice: "required|numeric",
      },
      foodRules: {
        name: "required|string",
        description: "required|string|max:1000",
        time_to_make: "required",
        type_of_meal: "required",
        price_tags: "required",
        image: "required",
      },
      priceRules: {
        priceName: "required|string",
        pricePrice: "required|numeric",
      },
      extraRules: {
        extraName: "required|string",
        extraPrice: "required|numeric"
      },
      priceName: "",
      pricePrice: undefined,
      extraName: "",
      extraPrice: undefined,
      loading: false,
      eating_time: ["Afternoon", "In-between", "Morning", "Dinner"],
      url: undefined,
    };
  },
  computed: {
    ...mapGetters({
      userDto: "getUserDto",
      businessDto: "getBusinessDto",
    }),
    meal_type() {
      return foodCateegory;
    }
  },
  methods: {
    isFieldValidated(name) {
      const data = {
        name: this[name]
      };
      const rules = {
        name: this.rules[name],
      };
      let validation = new Validator(data, rules, { email: "Please enter a valid email format", required: "This is a required field", min: "The min length is :min" });
      if (validation.fails()) {
        this.err[name] = validation.errors.first("name");
      }
      else {
        this.err[name] = "";
      }
      return validation.fails();
    },
    isAllValidated(payload, rules = this.rules) {
      let validation = new Validator(payload, rules, { email: "Please enter a valid email format", required: "This is a required field", url: "Enter a valid url. https:// or http://" });
      if (validation.fails()) {
        Object.keys(payload).map(name => {
          this.err[name] = validation.errors.first(name);
        });
        console.log(this.err)
        return validation.passes();
      }
    },
    formattedCurrency(amount) {
      return formatCurrency(amount);
    },
    removePrice(j) {
      this.price_tags.splice(j, 1);
    },
    removeExtra(j) {
      this.extra_tags.splice(j, 1);
    },
    addExtras() {
      const payload = {
        extraName: this.extraName,
        extraPrice: this.extraPrice
      }
      if (this.isAllValidated(payload, this.extraRules) == false) {
        this.$toast.error("Correct all extra fields.");
      }
      else {
        this.extra_tags.push({
          name: this.extraName,
          price: this.extraPrice
        });
        // this.$v.extra.$reset();
        this.extraName = "";
        this.extraPrice = undefined;
        this.err.extraName = ""
        this.err.extraPrice = ""
      }
    },
    addPrice() {
      const payload = {
        priceName: this.priceName,
        pricePrice: this.pricePrice
      }
      if (this.isAllValidated(payload, this.priceRules) == false) {
        this.$toast.error("Correct all price fields.");
      } else if (this.pricePrice < 0) {
        this.$toast.error("Enter a postive price");
      } else {
        this.price_tags.push({
          name: this.priceName,
          price: this.pricePrice
        });

        this.err.priceName = ""
        this.err.pricePrice = ""
        this.priceName = "";
        this.pricePrice = undefined;
      }
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    processFile(event) {
      console.log("mobile");
      let fileData = event.target.files[0];
      if (fileData != null && !this.foodDto) {
        this.image = fileData;
        this.url = URL.createObjectURL(fileData);
        return;
      }
      if (fileData != null) {
        let payload = new FormData();
        payload.append("image", fileData);
        this.$store.dispatch("updateFoodImage", {
          payload,
          food_id: this.foodDto._id,
        });
        // this.food.image.location = null;
        this.url = URL.createObjectURL(fileData);
      }
    },
    async saveFood() {
      if (this.isAllValidated({
        name: this.name,
        description: this.description,
        time_to_make: this.time_to_make,
        type_of_meal: this.type_of_meal,
        price_tags: this.price_tags,
        extra_tags: this.extra_tags,
        image: this.image,
      }, this.foodRules) == false) {
        this.$toast.error("Correct all fields.");
        return
      } else if (this.time_to_make < 1 || this.time_to_make > 72) {
        return this.$toast.error("Food time should be at least 1 hour and 72 at most");
      } else if (!this.image) {
        this.$toast.error("Select an image");
      } else {
        let payload = new FormData();
        payload.append("name", this.name);
        payload.append("description", this.description);
        payload.append("type_of_meal", this.type_of_meal);
        payload.append("time_to_make", this.time_to_make);
        payload.append("price_tags", JSON.stringify(this.price_tags));
        if (this.extra_tags) {
          payload.append("extra_tags", JSON.stringify(this.extra_tags));
        }
        payload.append("image", this.image);
        payload.append("business_id", this.businessDto._id);
        this.loading = true;
        await this.$store.dispatch("createFood", payload).then(_ => {
          this.name = "";
          this.description = "";
          this.time_to_make = "";
          this.type_of_meal = "";
          this.price_tags = [];
          this.image = undefined;
          this.extra_tags = [];
          this.url = null;
          this.loading = false;
        });
      }
    },
    async updateFood() {
      console.log("reached here");
      const payload = {
        food_id: this.foodDto._id,
        name: this.name,
        description: this.description,
        time_to_make: this.time_to_make,
        type_of_meal: this.type_of_meal,
        price_tags: this.price_tags,
        extra_tags: this.extra_tags,
        image: this.image,
      };
      if (this.isAllValidated({
        name: this.name,
        description: this.description,
        time_to_make: this.time_to_make,
        type_of_meal: this.type_of_meal,
        price_tags: this.price_tags,
        extra_tags: this.extra_tags,
        image: this.image,
      }, this.foodRules) == false) {
        this.$toast.error("Correct all fields.");
        return
      }
      if (this.time_to_make < 1 || this.time_to_make > 72) {
        return this.$toast.error("Food time should be at least 1 hour and 72 at most");
      }


      // console.log(payload);
      this.loading = true;
      await this.$store.dispatch("updateFood", payload).then((_) => {
        this.loading = false;
      });
    },
  },
  created() {
    if (this.foodDto) {
      console.log(this.foodDto)
      this.name = this.foodDto.name;
      this.description = this.foodDto.description;
      this.time_to_make = this.foodDto.time_to_make;
      this.type_of_meal = this.foodDto.type_of_meal;
      this.price_tags = this.foodDto.price_tags;
      this.extra_tags = this.foodDto.extra_tags;
      this.image = this.foodDto.image;
      this.url = this.foodDto.image ? this.foodDto.image.location : "";
    }
  },
  components: { BaseButton }
};
</script>
<style lang="scss" scoped>
.v-textarea {
  font-size: 0.85rem;
}

.v-select {
  font-size: 0.85rem;
}

.v-text-field {
  font-size: 0.85rem;
}

.food__image {
  width: 200px;
  height: 200px;
  border-radius: 200px;
}
</style>