<template>
  <div>
    <div class="my-8">
      <p class="__title">Registration</p>
      <p class="__title__sub ">Fill in the registration data. It will take a couple of minutes.
        All you need is a phone number and e-mail</p>
    </div>
    <form @submit.prevent="signUp" autocomplete="off">
      <div class="my-4">
        <base-input v-model="firstname" :label="'First name'" :placeholder="'Enter a first name'"
          @input-change="isFieldValidated('firstname')" type="text" @blur="isFieldValidated('firstname')" />
        <error-text :message="err.firstname" />
      </div>
      <div class="my-4">
        <base-input v-model="lastname" :label="'Last name'" :placeholder="'Enter a last name'"
          @input-change="isFieldValidated('lastname')" type="text" @blur="isFieldValidated('lastname')" />
        <error-text :message="err.lastname" />
      </div>
      <div class="my-4">
        <base-input v-model.trim="phone" :label="'Phone Number'" :placeholder="'Enter a valid phone number'"
          @input-change="isFieldValidated('phone')" type="tel" @blur="isFieldValidated('phone')" />
        <error-text :message="err.phone" />
      </div>
      <div class="my-4">
        <base-input v-model.trim="email" :label="'Email'" :placeholder="'Enter a valid email'"
          @input-change="isFieldValidated('email')" type="email" @blur="isFieldValidated('email')" />
        <error-text :message="err.email" />
      </div>
      <div class="my-4">
        <base-input v-model="password" :label="'Password'" :type="passwordType" :placeholder="'Enter a password'"
          @input-change="isFieldValidated('password')" :icon="passwordIcon" @blur="isFieldValidated('password')"
          @iconClicked="eyeClicked" />
        <error-text :message="err.password" />
      </div>
      <div class="my-4">
        <base-input v-model="confirmPassword" :label="'Confirm password'" :type="passwordType"
          :placeholder="'Confirm password'" @input-change="isFieldValidated('confirmPassword')" :icon="passwordIcon"
          @blur="isFieldValidated('confirmPassword')" @iconClicked="eyeClicked" />
        <error-text :message="err.confirmPassword" />
      </div>
      <div class="mt-8">
        <div class="d-flex align-center">
          <v-checkbox v-model="accepted"></v-checkbox>
          <p class="my-4">
            I accept the
            <base-link :name="'Terms & Condition'" @click="$router.push('/legal/terms')" class="ml-2" />
            and
            <base-link :name="'Privacy Policy'" @click="$router.push('/legal/privacy')" class="ml-2" />
          </p>
        </div>
        <base-button :name="'Sign up'" :disabled="accepted === false" :appendIcon="'chevron-right'"
          class="btn--full btn--default btn--md" :loading="loading" type="submit" />
      </div>
    </form>
    <p class="my-4 text-center">
      Already have an account?
      <base-link :name="'Login'" @click="$router.push('/auth/login')" class="ml-2" />
    </p>
  </div>

</template>
<script>
import * as Validator from 'validatorjs';
export default {
  layout: "auth",
  name: "Signup",
  data() {
    return {
      hide_password: true,
      loading: false,
      passwordType: 'password',
      passwordIcon: 'eye',
      accepted: false,

      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",

      confirmPassword: "",

      customeMessages: {
        email: "Enter a valid email format",
        required: "This is a required field",
        min: "The min length is :min",
        max: "The max length is :max"
      },

      rules: {
        firstname: 'required',
        lastname: 'required',
        email: 'required|email',
        phone: 'required|min:11|max:11',
        password: 'required',
        confirmPassword: 'required',
      },
      err: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      },
    };
  },

  methods: {
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
    isFieldValidated(name) {
      const data = {
        name: this[name]
      };
      const rules = {
        name: this.rules[name],
      };
      let validation = new Validator(data, rules, this.customeMessages);
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
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
      let validation = new Validator(payload, this.rules, this.customMessages);
      if (validation.fails()) {
        Object.keys(payload).map(name => {
          this.err[name] = validation.errors.first(name);
          // console.log(this.err)
        });
        return validation.passes()
      }
    },

    togglePassword: function () {
      this.hide_password = !this.hide_password;
    },
    signUp() {
      if (this.password != this.confirmPassword) {
        this.$toast.error("Confirm password is not correct.")
      }
      if (this.isAllValidated() === false) return;
      let payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        password: this.password,
      };

      this.loading = true;
      this.$store.dispatch("signUp", payload).then((data) => {
        this.loading = false;
        if (data) {
          this.$router.push("/auth/login");
        }
      }).catch(err => {
        this.loading = false;
        console.log(err)
      });
    },
  },
  head() {
    return {
      title: "Signup | FiranseFood",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Signup with your email and password",
        },
      ],
    };
  },
};
</script>