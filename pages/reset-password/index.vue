<template>
  <v-row>
    <v-col cols="12" md="6">
      <div v-if="!resetSucess" class="ma-4">
        <div class="text-h5">Change your password</div>
        {{ email }}
        <input-field
          label="New Password"
          :text="password"
          :placeholder="'Enter new password'"
          @get="(value) => (password = value)"
        />
        <input-field
          :text="password2"
          label="Password again"
          :placeholder="'Enter new password again'"
          @get="(value) => (password2 = value)"
        />
        <base-button text="Reset Password" @click="resetUserPassword" />
      </div>
      <div v-else>
        <div class="text-h5">Password reset successful</div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { UserController } from '@/modules/user'

export default {
  name: 'reset-password',
  data() {
    return {
      password: '',
      password2: '',
      token: '',
      email: '',
      resetSucess: false,
    }
  },
  methods: {
    resetUserPassword() {
      if (this.password != this.password2 || this.password.length < 6) return
      UserController.resetPassword({
        password: this.password,
        token: this.token,
        email: this.email,
      }).then((data) => {
        this.resetSucess = true
        console.log(data)
      })
    },
  },
  mounted() {
    this.token = this.$route.query.token
    this.email = this.$route.query.email
  },
}
</script>