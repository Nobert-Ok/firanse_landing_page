<template>
  <div>
    <div v-if="!!!userDto">
      <h1 class="__title">User Information</h1>
      <p class="__title__sub">Complete your user profile</p>
    </div>
    <div class="d-flex align-center" v-else>
      <v-btn icon tile class="mr-2 d-md-none" @click="!!!userDto ? $router.go(-1) : $emit('back')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h1 class="__sub-title">Basic Information</h1>
    </div>
    <form @submit.prevent="() => userDto ? updateUser() : saveUser()">
      <div class="my-8">
        <!-- <h2 class="__sub-title">Contacts</h2>
          <p class="__sub-title__sub">Basic information about you</p> -->
        <div class="my-4">
          <base-input v-model="firstname" :label="'First name'" :placeholder="'Enter a firstname name'"
            @input-change="isFieldValidated('firstname')" type="text" @blur="isFieldValidated('firstname')" />
          <error-text :message="err.firstname" />
        </div>
        <div class="my-4">
          <base-input v-model="lastname" :label="'Last name'" :placeholder="'Enter a lastname'"
            @input-change="isFieldValidated('lastname')" type="tel" @blur="isFieldValidated('lastname')" />
          <error-text :message="err.lastname" />
        </div>
        <div class="my-4">
          <base-input v-model.trim="email" disabled :label="'Email'" :placeholder="'Enter an email'"
            @input-change="isFieldValidated('email')" type="email" @blur="isFieldValidated('email')" />
          <error-text :message="err.email" />
        </div>
        <div class="my-4">
          <base-input v-model="phone" :label="'Phone'" :placeholder="'Enter a phone number'"
            @input-change="isFieldValidated('phone')" type="tel" @blur="isFieldValidated('phone')" />
          <error-text :message="err.phone" />
        </div>
      </div>
      <base-button class="btn--full btn--default btn--md" :name="'Save'" type="'submit'">
      </base-button>
    </form>

  </div>
</template>
<script>
import * as Validator from 'validatorjs';
import { mapGetters } from "vuex";
export default {
  name: "CreateEditBusiness",
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      err: {
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
      },
      loading: false,
      rules: {
        firstname: 'required|string',
        lastname: 'required|string',
        email: 'required|email',
        phone: 'required|max:14|min:10',
      },
    };
  },
  computed: {
    ...mapGetters({
      userDto: "getUserDto",
    }),
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

    isAllValidated() {
      const payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email,
      };

      let validation = new Validator(payload, this.rules, { email: "Please enter a valid email format", required: "This is a required field", url: "Enter a valid url. https:// or http://" });
      if (validation.fails()) {
        Object.keys(payload).map(name => {
          this.err[name] = validation.errors.first(name);
        });
        return validation.passes()
      }
    },
    updateUser() {
      if (this.isAllValidated() === false) {
        this.$toast.error("All fields are required.");
        return
      };
      const payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        // email: this.email,
        phone: this.phone,
      };
      this.loading = true;
      this.$store.dispatch("updateUser", payload).then(_ => {
        this.loading = false;
      }).catch(err => {
        console.log(err)
      })
    },
  },

  mounted() {
    this.firstname = this.userDto.firstname
    this.lastname = this.userDto.lastname
    this.email = this.userDto.email
    this.phone = this.userDto.phone
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
    bottom: 10%;
    left: 0%;
    transform: translate(40%, -80%);
    color: white;
  }
}
</style>