<template>
  <div>
    <div class="mb-4">
      <v-alert :type="alert.type" :value="alert.show" :timeout="alert.timeout">{{ alert.msg }}
      </v-alert>
    </div>
    <h1 class="__title">Find your account!</h1>
    <p class="__title__sub">
      Please enter your email address, Firanse Tag, or mobile number to
      search for your account.
    </p>
    <form @submit.prevent="continueClicked">
      <base-input v-model="email" :label="'Email'" :placeholder="'Enter a valid email or phone'"
        @input-change="isFieldValidated('email')" type="email" @blur="isFieldValidated('email')" />
      <error-text :message="err.email" />
      <div class="mt-8">
        <base-button :name="'Continue'" :appendIcon="'chevron-right'" class="btn--full btn--default btn--md"
          :loading="loading" type="submit" />
      </div>
    </form>
  </div>
</template>


<script>
import { AuthController } from "~/modules/Auth";
import * as Validator from 'validatorjs';
export default {
  layout: "auth",
  name: "forgot-password",
  data() {
    return {
      rules: {
        email: "required|email",
      },
      loading: false,
      type: "success",
      email: "",
      err: {
        email: "",
      },
      alert: { show: false, msg: "Nothing", timeout: 2000 },
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
      }
      return validation.fails();
    },
    isAllValidated: function () {
      const payload = { email: this.email };
      let validation = new Validator(payload, this.rules, { email: "Please enter a valid email format", required: ":attribute is a required field" });
      if (validation.fails()) {
        Object.keys(payload).map(name => {
          this.err[name] = validation.errors.first(name);
        });
        return validation.passes()
      }
    },
    continueClicked() {
      if (this.isAllValidated() === false) return;
      this.loading = true;
      AuthController.sendResetToken({ email: this.email })
        .then((_) => {
          this.alert.show = true;
          this.alert.type = "success";
          this.alert.msg =
            "A link has been sent to the email provided. Follow the link to retrieve your password";
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.alert.show = true;
          this.alert.type = "error";
          this.alert.msg = "Account with this email does not exist";
        });
    },
  },

  head() {
    return {
      title: "Forgot Password | FiranseFood",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Forgot Password with your email and password",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
