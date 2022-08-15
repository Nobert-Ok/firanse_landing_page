<template>
  <div>
    <div class="my-4" v-show="false">
      <div class="d-flex justify-end mx-4">
        <v-btn class="text-none" color="primary" @click="addAdvertDialog = true">
          <v-icon>mdi-image</v-icon> Upload Advert
        </v-btn>
      </div>
      <v-card class="my-4 mx-md-4 pa-2" v-if="adverts.length > 0">
        <div class="d-flex align-center pa-2">
          <h4>Adverts</h4>
        </div>
        <v-divider class="my-4"></v-divider>
        <v-row dense no-gutters>
          <v-col cols="12" md="6" class="pa-2" v-for="(advert, i) in adverts" :key="i">
            <v-sheet>
              <img :src="advert.image.location" alt="" />
              <div class="d-flex align-center" v-if="advert.food">
                <v-icon class="mr-2">mdi-food</v-icon> Product:
                {{ advert.food.name }}
              </div>
              <div class="d-flex align-center" v-else>
                <v-icon class="mr-2">mdi-store</v-icon>
              </div>
              <div class="d-flex align-center justify-end">
                <v-btn icon @click="
                  advert_id = advert._id;
                deleteAdvertDialog = true;
                ">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
      <NoData :title="'You have not uploaded any advert'" v-else />

      <v-dialog persistent max-width="400" v-model="deleteAdvertDialog">
        <v-card>
          <div class="d-flex align-center pa-2">
            <v-spacer />
            <h4>Delete Advert</h4>
            <v-spacer />
            <v-btn icon color="primary" class="text-none" @click="deleteAdvertDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-divider class="my-2"></v-divider>
          <v-card-text class="my-4">
            Are you sure you want to delete this advert?
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn @click="deleteAdvertDialog = false" class="text-none">Cancel</v-btn>
            <v-btn @click="deleteAdvert" class="text-none" color="primary" :loading="loading">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog persistent max-width="400" v-model="addAdvertDialog">
        <v-card>
          <div class="d-flex align-center pa-2">
            <v-spacer />
            <h4>Add New Advert</h4>
            <v-spacer />
            <v-btn icon color="primary" class="text-none" @click="addAdvertDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-divider class="my-2" />
          <v-form class="ma-2">
            <v-row dense no-gutters>
              <v-col cols="12" align="center">
                <v-avatar v-if="url" tile size="100">
                  <img :src="url" />
                </v-avatar>
                <v-avatar v-else color="primary" tile size="100">
                  <v-icon color="white">mdi-image</v-icon>
                </v-avatar>
                <div class="my-2">
                  <v-btn class="text-none" @click="chooseFiles" color="primary">Upload Image</v-btn>
                  <input id="fileUpload" type="file" @change="processFile($event)" hidden
                    accept="image/png, image/jpeg, image/jpg" />
                </div>
              </v-col>
              <v-col cols="12" class="px-2">
                <label>Apply</label>
                <v-radio-group v-model="advert.type">
                  <v-radio label="Food" value="food"></v-radio>
                  <v-radio label="Kitchen" value="kitchen"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" v-if="advert.type == 'food'" class="px-2">
                <label>Apply select food</label>
                <v-select outlined dense single-line placeholder="Apply to?" :items="foods" item-text="name"
                  item-value="_id" v-model="advert.food_id" class="rounded-lg"></v-select>
              </v-col>
            </v-row>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions class="d-flex justify-end">
            <v-btn class="text-none" color="primary" @click="createAdvert" :loading="loading">Continue</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <h4>Coming soon!</h4>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
var FormData = require("form-data");
export default {
  name: "Advert",
  middleware: ["authenticated", "navigationWatcher"],
  data() {
    return {
      loading: false,
      addAdvertDialog: false,
      deleteAdvertDialog: false,
      adverts: [],
      foods: [],
      url: null,
      advert_id: "",
      advert: {
        image: null,
        food_id: null,
        type: "food",
      },
      types: [
        { name: "Food", value: "food" },
        { name: "Kitchen", value: "kitchen" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      userDto: "getUserDto",
      businessDto: "getBusinessDto",
    }),
  },
  watch: {
    "advert.type": function (newValue, oldValue) {
      if (newValue == "kitchen") {
        this.advert.food_id = null;
      }
    },
  },
  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    processFile(event) {
      let fileData = event.target.files[0];
      if (fileData != null) {
        this.advert.image = fileData;
        this.url = URL.createObjectURL(fileData);
        return;
      }
    },
    createAdvert() {
      if (!this.advert.image) {
        this.$toast.error("Please, add an image");
        return;
      }
      let payload = new FormData();
      payload.append("business_id", this.businessDto._id);
      payload.append("type", this.advert.type);
      payload.append("food_id", this.advert.food_id);
      payload.append("image", this.advert.image);
      console.log(payload);
      this.loading = true;

      this.$store.dispatch("createAdvert", payload).then((data) => {
        this.loading = false;
        // console.log(data);
        this.adverts.push(data.advert);
        this.addAdvertDialog = false;
      });
    },
    deleteAdvert() {
      this.loading = true;
      this.$store.dispatch("deleteAdvert", this.advert_id).then((_) => {
        this.loading = false;
        this.adverts = this.adverts.filter(
          (item) => item._id != this.advert_id
        );
        this.deleteAdvertDialog = false;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getAdverts").then((item) => {
      // console.log(item);
      this.adverts = [...item.adverts];
    });
    this.$store.dispatch("getBusinessFood").then((item) => {
      this.foods = [...item.food];
    });
  },
  head() {
    return {
      title: "Manage Advert | FiranseFood",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Login with your email and password",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>