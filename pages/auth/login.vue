<template>
  <div>
    <div class="mb-8">
      <h1 class="__title">Welcome back,</h1>
      <p class="__title__sub ">Log in to continue</p>
    </div>
    <form @submit.prevent="login">
      <base-input v-model.trim="email" :label="'Email'" :placeholder="'Enter a valid email'"
        @input-change="isFieldValidated('email')" type="email" @blur="isFieldValidated('email')" />
      <error-text :message="err.email" />
      <div class="my-4">
        <base-input v-model="password" :label="'Password'" :type="passwordType" :placeholder="'Enter password'"
          @input-change="isFieldValidated('password')" :icon="passwordIcon" @blur="isFieldValidated('password')"
          @iconClicked="eyeClicked" />
        <error-text :message="err.password" />
        <div class="d-flex justify-end mt-2 mb-4">
          <BaseLink :name="'Forgot password?'" @click="$router.push('/auth/forgot-password')" class="ml-2 a--sm" />
        </div>
      </div>
      <div class="mt-8">
        <base-button :name="'Login'" :appendIcon="'chevron-right'" class="btn--full btn--default btn--md"
          :loading="loading" type="submit" />
      </div>
    </form>
    <div class="text-center">
      <div class="mt-4">
        Don't have an account?
        <base-link :name="'Sign up'" @click="$router.push('/auth/signup')" class="ml-2" />
      </div>
    </div>
  </div>
</template>

<script>
import { resetRouter } from "~/plugins/router-util";
import * as Validator from 'validatorjs';
export default {
  name: "login",
  layout: "auth",
  data() {
    return {
      email: "",
      password: "",
      passwordType: 'password',
      passwordIcon: 'eye',
      loading: false,
      rules: {
        email: "required|email",
        password: "required|min:6"
      },
      err: {
        email: "",
        password: "",
      }
    };
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
      console.log(validation.fails());
      if (validation.fails()) {
        this.err[name] = validation.errors.first("name");
        console.log(this.err);
      }
      else {
        this.err[name] = "";
        console.log(this.err);
      }
      return validation.fails();
    },
    isAllValidated() {
      let payload = { email: this.email, password: this.password };
      let validation = new Validator(payload, this.rules, { email:  "Please enter a valid email format", required: ":attribute is a required field" });
      if (validation.fails()) {
        Object.keys(payload).map(name => {
          this.err[name] = validation.errors.first(name);
        });
        return validation.passes()
      }
    },
    eyeClicked: function () {
      if (this.passwordType == 'password') {
        this.passwordType = 'text'
        this.passwordIcon = 'eye-off'
      }
      else {
        this.passwordType = 'password'
        this.passwordIcon = 'eye'
      }
    },
    login() {
      if (this.isAllValidated() === false) {
        return;
      }

      try {
        this.loading = true;
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password,
          })
          .then((data) => {
            if (!!data) {
              console.log('Logged in succesffuly')
              this.loading = false;
              window.location.href = "https://dashboard.firansefood.com/";
              localStorage.setItem('firanse-token', response.data.data.token)

              resetRouter();
              // return;
            }
            this.loading = false;
          });
      }
      catch (err) {
        console.log(err)
        this.loading = false;
      }
    },
  },
  head() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_API_KEY}&libraries=places`,
        },
      ],
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
