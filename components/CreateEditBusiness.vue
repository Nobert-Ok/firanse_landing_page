<template>
  <div>
    <div class='d-flex' v-if="!!!businessDto">
      <back-button :on-click="logoutUser" />
      <div>
        <h1 class="__title">Business Information</h1>
        <p class="__title__sub">Complete your business profile</p>
      </div>
    </div>
    <div v-if="!!businessDto">
      <div class="d-flex align-center">
        <back-button class="d-md-none" />
        <h1 class="__sub-title">Business Information</h1>
      </div>
    </div>
    <form @submit.prevent="() => businessDto ? updateBusiness() : saveBusiness()">
      <div class="my-8">
        <div v-if="!!!businessDto">
          <h2 class="__sub-title">Contacts</h2>
          <p class="__sub-title__sub">Basic information about your business</p>
        </div>
        <div class="my-4">
          <base-input v-model="businessName" :label="'Business name'" :placeholder="'Enter a business name'"
            @input-change="isFieldValidated('businessName')" type="text" @blur="isFieldValidated('businessName')" />
          <error-text :message="err.businessName" />
        </div>
        <div class="my-4">
          <base-input v-model.trim="businessPhone" :label="'Business phone'" :placeholder="'Enter a business phone'"
            @input-change="isFieldValidated('businessPhone')" type="tel" @blur="isFieldValidated('businessPhone')" />
          <error-text :message="err.businessPhone" />
        </div>
        <div class="my-4">
          <base-input v-model.trim="businessEmail" :label="'Business email'" :placeholder="'Enter a business email'"
            @input-change="isFieldValidated('businessEmail')" type="email" @blur="isFieldValidated('businessEmail')" />
          <error-text :message="err.businessEmail" />
        </div>
        <div class="my-4">
          <base-input v-model="businessTag" :label="'Business Tag/Handle'" :placeholder="'Enter a business tag/handle'"
            @input-change="isFieldValidated('businessTag')" type="text" @blur="isFieldValidated('businessTag')" />
          <error-text :message="err.businessTag" />
        </div>
      </div>

      <div class="my-8">
        <div v-if="!!!businessDto">
          <h2 class="__sub-title">Social network</h2>
          <p class="__sub-title__sub">Indicate the desired communication method</p>
        </div>
        <div class="my-4">
          <base-input v-model.trim="businessInstagram" :label="'Business Instagram link'"
            :placeholder="'Enter an instagram link (optional)'" @input-change="isFieldValidated('businessInstagram')"
            type="url" @blur="isFieldValidated('businessInstagram')" />
          <error-text :message="err.businessInstagram" />
        </div>
        <div class="my-4">
          <base-input v-model.trim="businessWebsite" :label="'Business Website link'"
            :placeholder="'Enter a website link (optional)'" @input-change="isFieldValidated('businessWebsite')"
            type="url" @blur="isFieldValidated('businessWebsite')" />
          <error-text :message="err.businessWebsite" />
        </div>
        <div class="my-4">
          <base-text-area v-model="businessDescription" :label="'Business description'"
            :placeholder="'Enter a business description'" @input-change="isFieldValidated('businessDescription')"
            type="text" @blur="isFieldValidated('businessDescription')" />
          <error-text :message="err.businessDescription" />
        </div>
        <div class="my-4">
          <base-input id="ship-address" v-model="addressName" :label="'Business Address'"
            :placeholder="'Enter a business address'" @input-change="isFieldValidated('addressName')" type="text"
            @blur="isFieldValidated('addressName')" />
          <error-text :message="err.addressName" />
        </div>
        <div class="my-4">
          <base-input v-model.trim="businessDeliveryFee" :label="'Business Delivery Fee(NGN)'"
            :placeholder="'Enter a delivery fee in Naira'" @input-change="isFieldValidated('businessDeliveryFee')"
            type="text" @blur="isFieldValidated('businessDeliveryFee')" />
          <div>Delivery fee for 5km distance</div>
          <error-text :message="err.businessDeliveryFee" />
        </div>
        <div class="my-4">
          <base-input v-model="businessDeliveryTime" :label="'Business Delivery Time(hours)'"
            :placeholder="'Enter a delivery time in hours'" @input-change="isFieldValidated('businessDeliveryTIme')"
            type="number" @blur="isFieldValidated('businessDeliveryTime')" />
          <div>How long will it take you to deliver?</div>
          <error-text :message="err.businessDeliveryTime" />
        </div>
      </div>

      <div class="my-8">
        <h2 class="__sub-title">Opening hours</h2>
        <p class="__sub-title__sub">Enter openning hours for weekend and week days</p>
        <div v-for="(item, i) in businessOperatingHours" :key="item.day">
          <div>{{ item.day }}</div>
          <div class="d-flex align-center">
            <div class="my-4 mr-4">
              <base-time v-model="item.open" :label="'Opens'" />
            </div>
            <div class="my-4 mr-4">
              <base-time v-model="item.close" :label="'Closes'" />
            </div>
          </div>
        </div>
      </div>
      <div class="my-8">
        <h2 class="__sub-title">Profile photo</h2>
        <p class="__sub-title__sub">Upload a profile photo</p>
        <div v-if="url" class="profile" @click="chooseFiles">
          <img :src="url" class="profile__img" alt="">
          <span class="profile__text">Change Logo</span>
        </div>
        <div class="profile" @click="chooseFiles" v-else>
          <img src="~/assets/images/upload-img.png" class="profile__img" alt="">
          <span class="profile__text">Add photo</span>
        </div>
        <input id="fileUpload" type="file" @change="processFile($event)" hidden
          accept="image/png, image/jpeg, image/jpg" />
      </div>
      <base-button :loading="loading" class="btn--full btn--default btn--md" type="'submit'">
        Save
      </base-button>
    </form>
  </div>
</template>
<script>
import { resetRouter } from "~/plugins/router-util";
import * as Validator from 'validatorjs';
var FormData = require("form-data");
import { lga } from "static/utils.js";
import { mapGetters } from "vuex";
export default {
  name: "CreateEditBusiness",
  data() {
    return {
      err: {
        businessName: "",
        businessPhone: "",
        businessEmail: "",
        businessTag: "",
        businessInstagram: "",
        businessWebsite: "",
        businessdescription: "",
        addressName: "",
        businessDeliveryFee: "",
        businessDeliveryTime: ""
      },

      loading: false,
      businessName: "",
      businessDescription: "",
      businessEmail: "",
      businessWebsite: undefined,
      businessInstagram: undefined,
      businessTag: "",
      businessPhone: "",
      businessDeliveryFee: undefined,
      businessDeliveryTime: undefined,
      businessAddress: {
        name: "",
        longitude: "",
        latitude: undefined,
        state: undefined,
        lga: "",
      },
      image: "",
      businessOperatingHours: [
        { day: "Weekdays", open: null, close: null },
        { day: "Weekends", open: null, close: null },
      ],
      address: {
        name: "",
        latitude: "",
        longitude: "",
        state: "",
      },

      addressName: "",
      rules: {
        businessTag: ['required', 'string', 'regex:/^[a-z0-9._][^\s-][a-z0-9._]+$/'],
        businessName: 'required|string',
        businessDescription: 'required|max:100',
        businessEmail: 'required|email',
        businessPhone: 'required|max:14|min:10',
        addressName: 'required|string',
        businessDeliveryTime: 'required|numeric',
        businessDeliveryFee: 'required|integer|numeric',
        businessInstagram: 'url',
        businessWebsite: 'url',
      },

      time: null,
      selectedTime: null,
      timeDialog: false,
      addressField: "",
      autocomplete: "",
      url: "",
    };
  },
  props: {
    businessDto: Object,
    // userDto: Object,
  },
  computed: {
    ...mapGetters({
      userDto: "getUserDto",
    }),
    getLgas() {
      let lg = lga[this.business.address.state];
      return lg;
    }
  },
  watch: {
    // businessDeliveryTime(newValue) {
    //   if (newValue <= 0) {
    //     this.businessDeliveryTime = 1
    //   }
    // }
  },
  methods: {
    isFieldValidated(name) {
      try {
        const data = {
          name: this[name]
        };
        const rule = {
          name: this.rules[name],
        };
        let validation = new Validator(data, rule, { regex: 'Characters should not contain a space, capital letters, or symbols', email: "Please enter a valid email format", required: "This is a required field", min: "The min length is :min" });
        console.log("Error goes here:", validation.errors)
        if (validation.fails() && validation.errors) {
          this.err[name] = validation.errors.first("name");
        }
        else {
          this.err[name] = "";
        }
        return validation.fails();
      } catch (error) {
        console.log(error)
      }
    },
    isAllValidated() {
      let payload = {
        businessName: this.businessName,
        businessPhone: this.businessPhone,
        businessEmail: this.businessEmail,
        businessTag: this.businessTag,
        businessInstagram: this.businessInstagram,
        businessWebsite: this.businessWebsite,
        businessDescription: this.businessDescription,
        addressName: this.addressName,
        businessDeliveryFee: this.businessDeliveryFee,
        businessDeliveryTime: this.businessDeliveryTime
      };


      let validation = new Validator(payload, this.rules, { regex: 'Characters should not contain a space, capital letters, or symbols', email: "Please enter a valid email format", required: "This is a required field", url: "Enter a valid url. https:// or http://" });
      if (validation.fails()) {
        Object.keys(payload).map(name => {
          this.err[name] = validation.errors.first(name);
        });
        return validation.passes()
      }
    },
    fillInAddress() {
      const place = this.autocomplete.getPlace();
      for (var i = 0; i < place.address_components.length; i++) {
        for (var j = 0; j < place.address_components[i].types.length; j++) {
          if (
            place.address_components[i].types[j] ==
            "administrative_area_level_1"
          ) {
            this.businessAddress.state =
              place.address_components[i]["long_name"].toLowerCase();
          }
          if (
            place.address_components[i].types[j] ==
            "administrative_area_level_2"
          ) {
            this.businessAddress.lga =
              place.address_components[i]["long_name"].toLowerCase();
          }
        }
      }

      // document.querySelector("#ship-address").value = place.formatted_address;
      this.businessAddress.name = place.formatted_address;
      this.addressName = place.formatted_address;
      // console.log(this.business.address.name)
      this.businessAddress.latitude = place.geometry.location.lat();
      this.businessAddress.longitude = place.geometry.location.lng();
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    processFile(event) {
      console.log("mobile");
      let fileData = event.target.files[0];
      if (fileData != null && !this.businessDto) {
        this.businessImage = fileData;
        this.url = URL.createObjectURL(fileData);
        return;
      }
      if (fileData != null) {
        let payload = new FormData();
        payload.append("image", fileData);
        payload.append("business_id", this.businessDto._id);
        this.$store.dispatch("updateBusinessImage", payload);
        // this.business.image.location = null;
        this.url = URL.createObjectURL(fileData);
      }
    },
    async saveBusiness() {
      if (!this.businessImage) {
        return this.$toast.error("Select a cover image");
      } else if (this.businessDeliveryTime < 1 || this.businessDeliveryTime > 72) {
        return this.$toast.error("Delivery time should be at least 1 hour and 72 at most");
      } else if (this.isAllValidated() == false) {
        return this.$toast.error("All fields are required.");
      } else if (this.businessAddress.longitude == undefined || this.businessAddress.latitude == undefined) {
        return this.$toast.error("Please, put an addrress");
      } else {
        this.businessOperatingHours.forEach((item) => {
          if (
            item.open == null ||
            item.close == null ||
            !item.close ||
            !item.open
          ) {
            this.$toast.error("Please, enter all time fields");
            return;
          }
        });
        let payload = new FormData();
        payload.append("user", this.userDto._id);
        payload.append("name", this.businessName);
        payload.append("email", this.businessEmail);
        payload.append("website", this.businessWebsite);
        payload.append("instagram", this.businessInstagram);
        payload.append("phone", this.businessPhone);
        payload.append("tag", this.businessTag);
        payload.append("delivery_fee", this.businessDeliveryFee);
        payload.append("deliveryTime", this.businessDeliveryTime);
        payload.append("description", this.businessDescription);
        payload.append("image", this.businessImage);
        payload.append("address", JSON.stringify(this.businessAddress));
        payload.append(
          "operating_hours",
          JSON.stringify(this.businessOperatingHours)
        );
        this.loading = true;
        this.$store.dispatch("createBusiness", payload).then((data) => {
          if (data && !data.error) {
            this.$router.push(`/`);
            this.loading = false;
            return;
          }
        }).catch(err => {
          this.loading = false;
        });
      }
    },
    async updateBusiness() {
      // console.log(this.businessOperatingHours);
      let err = false;
      if (this.businessAddress.longitude == undefined || this.businessAddress.latitude == undefined) {
        return this.$toast.error("Please, put an addrress");
      }
      if (this.businessDeliveryTime < 1 || this.businessDeliveryTime > 72) {
        return this.$toast.error("Delivery time should be at least 1 hour and at most 72 hours");
      }
      this.businessOperatingHours.forEach((item) => {
        if (
          item.open == null ||
          item.close == null ||
          !item.close ||
          !item.open
        ) {
          this.$toast.error("Please, enter all time fields");
          err = true;
        }
      });
      if (!err) {
        let payload = {
          name: this.businessName,
          tag: this.businessTag,
          phone: this.businessPhone,
          email: this.businessEmail,
          instagram: this.businessInstagram,
          website: this.businessWebsite,
          address: this.businessAddress,
          delivery_fee: this.businessDeliveryFee,
          deliveryTime: this.businessDeliveryTime,
          image: this.businessImage,
          description: this.businessDescription,
          operating_hours: [...this.businessOperatingHours],
          business_id: this.businessDto._id,
        };
        this.loading = true;
        await this.$store.dispatch("updateBusiness", payload);
        this.loading = false;
      }
    },
    logoutUser() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/auth/login");
        resetRouter();
      });
    },
  },
  mounted() {
    if (this.businessDto && this.businessDto.address) {
      this.businessAddress = { ...this.businessDto.address };
      this.addressName = this.businessDto.address.name;
    }
    this.addressField = document.querySelector("#ship-address");

    // Create the autocomplete object, restricting the search predictions to
    // addresses in the US and Canada.

    this.autocomplete = new google.maps.places.Autocomplete(this.addressField, {
      componentRestrictions: { country: ["ng"] },
      fields: ["address_components", "formatted_address", "geometry"],
      types: ["address"],
    });
    this.autocomplete.addListener("place_changed", this.fillInAddress);
  },
  created() {
    if (this.businessDto) {
      console.log(this.businessDto.state);
      this.businessName = this.businessDto.name;
      this.businessTag = this.businessDto.tag;
      this.businessWebsite = this.businessDto.website == 'undefined' ? undefined : this.businessDto.website;
      this.businessInstagram = this.businessDto.instagram == 'undefined' ? undefined : this.businessDto.instagram;
      this.businessPhone = this.businessDto.phone;
      this.businessDeliveryFee = this.businessDto.deliveryFee;
      this.businessDeliveryTime = this.businessDto.deliveryTime;
      this.businessEmail = this.businessDto.email;
      this.businessAddress = { ...this.businessDto.address.name };
      this.businessImage = { ...this.businessDto.image };
      this.url = this.businessDto.image.location;
      this.businessDescription = this.businessDto.description;
      this.businessOperatingHours = [...this.businessDto.operating_hours];
    }
  },
};
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  display: inline;
  cursor: pointer;

  &__img {
    display: inline;
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }

  .overlay {
    border-end-end-radius: 100px;
    border-end-start-radius: 100px;
    height: 80px;
    width: 150px;
    z-index: 1;
    opacity: 0.4;
    // border-radius: 75px;
    background-color: black;
    position: absolute;
    bottom: 5px;
  }


  &__text {
    z-index: 2;
    position: absolute;
    bottom: 100%;
    left: 20%;
    // transform: translate(50%, -80%);
    color: white;
  }
}
</style>