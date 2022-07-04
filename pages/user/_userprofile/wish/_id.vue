<template>
  <div v-if="wish" class="wish">
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" lg="8">
        <div class="d-flex">
          <v-btn
            class="ma-4"
            color="grey"
            small
            icon
            outlined
            @click="$router.go(-1)"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          >
        </div>
        <v-row dense no-gutters>
          <!-- First Col -->
          <v-col cols="12" md="6">
            <div class="pa-4">
              <div>
                <img :src="wish.food.image.location" alt="" />
              </div>
              <div>
                <div class="d-flex justify-space-between my-4">
                  <div>
                    <div>{{ wish.food.name }}</div>
                    <div>{{ wish.price_tag.name }}</div>
                  </div>
                  <div>
                    {{ getFormattedCurrency(wish.price_tag.price) }} x
                    {{ wish.quantity }}
                  </div>
                </div>
                <v-rating value="4" dense readonly></v-rating>
                <v-divider class="my-4"></v-divider>
                <div>
                  <h4>Description</h4>

                  <div class="mt-4">
                    <p>{{ wish.food.description }}</p>
                  </div>
                </div>
                <div class="d-flex">
                  <img
                    :src="wish.business.image.location"
                    class="business_image"
                  />
                  <div class="ml-2">
                    <p>
                      {{ wish.business.name }}
                      <br />
                      @{{ wish.business.tag }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Second Col -->
          <v-col cols="12" md="6">
            <v-card class="ma-4 pa-4 card">
              <div v-if="wish.extra_tags.length > 0">
                <h4>Extra</h4>
                <div class="mt-4">
                  <div
                    class="d-flex justify-space-between my-2"
                    v-for="({ name, price, quantity }, i) in wish.extra_tags"
                    :key="i"
                  >
                    <span>{{ name }}</span>
                    <span>{{ quantity }}</span>
                    <span>{{ getFormattedCurrency(price) }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <h4>Order Summary</h4>
                <div class="mt-4">
                  <div class="d-flex justify-space-between my-2">
                    <span>Delivery Fee</span>
                    <span>{{ getFormattedCurrency(deliveryFee) }}</span>
                  </div>
                  <div class="d-flex justify-space-between my-2">
                    <span>Sub-total</span>
                    <span>{{ getFormattedCurrency(getSubTotal()) }}</span>
                  </div>
                  <div class="d-flex justify-space-between my-2">
                    <span>Total</span>
                    <span>{{ getFormattedCurrency(getTotal()) }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <h4>Your details</h4>
                <div class="mt-4">
                  <form role="submit" @submit="makePayment">
                    <input-field
                      :text="payload.customer.email"
                      label="Email"
                      :placeholder="'Enter email address'"
                      @get="(value) => (payload.customer.email = value)"
                    />
                    <input-field
                      :text="payload.customer.name"
                      label="Name"
                      :placeholder="'Enter name'"
                      @get="(value) => (payload.customer.name = value)"
                    />
                    <input-field
                      :text="payload.customer.phonenumber"
                      label="Phone Number (optional)"
                      :required="false"
                      :placeholder="'Enter a phone number(optional)'"
                      @get="(value) => (payload.customer.phonenumber = value)"
                    />
                    <v-card-actions class="justify-center">
                      <base-button
                        text="Proceed to Payment"
                        @click="makePayment"
                      />
                    </v-card-actions>
                  </form>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog transparent max-width="500" v-model="success" persistent>
          <v-card class="pa-4">
            <div class="d-flex justify-end">
              <v-btn
                @click="$router.push(`/user/${wish.user.firanse_tag}`)"
                x-small
                icon
                color="grey"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </div>
            <div class="d-flex justify-center">
              <img src="~assets/images/success.svg" class="success-icon" />
            </div>
            <div class="my-4">
              <h4 class="text-center">Successfully ordered</h4>
              <p class="text-center my-2">
                {{ wish.user.firstname + wish.user.lastname }} is very grateful
              </p>
            </div>
          </v-card>
        </v-dialog>
        <v-dialog transparent max-width="500" v-model="cancelled" persistent>
          <v-card class="pa-4">
            <div class="d-flex justify-end">
              <v-btn
                @click="$router.push(`/user/${wish.user.firanse_tag}`)"
                x-small
                icon
                color="grey"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </div>
            <div class="d-flex justify-center">
              <v-icon color="red">mdi-stop</v-icon>
            </div>
            <div class="my-4">
              <h4 class="text-center">Something went wrong</h4>
            </div>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { WishController } from '@/modules/wish'
import { OthersController } from '@/modules/others'
import { formattedCurrency } from '@/static/utils'
import { makePaymentFLW } from '@/modules/flutterwave'
import { v4 as uuidv4 } from 'uuid'
import { ValidatorObject } from '~/modules/Validation'
import * as Validator from 'validatorjs'

export default {
  name: 'wish',
  components: {},
  data() {
    return {
      // error: ['email'],
      success: false,
      cancelled: false,
      deliveryFee: 1000,
      wish: null,
      payload: {
        tx_ref: '',
        redirect_url: '',
        currency: 'NGN',
        amount: 1000,
        payment_options: 'card',
        customer: {
          email: '',
          phonenumber: '',
          name: '',
        },
      },
      rules: {
        'customer.email': 'required|email',
        'customer.name': 'required|string',
        'customer.phonenumber': 'string',
      },
    }
  },
  async mounted() {
    try {
      // if (this.$route.query.status == 'successful') {
      if (
        this.$route.query.status &&
        this.$route.query.status == 'successful'
      ) {
        this.success = true
      }
      // else {
      if (
        this.$route.query.status &&
        this.$route.query.status != 'successful'
      ) {
        this.cancelled = true
      }
      WishController.getWishDetail(this.$route.params.id)
        .then((data) => {
          this.wish = data.wish
          this.deliveryFee = data.wish.business.deliveryFee

          // let payload = {
          //   pickup_latitude: this.wish.business.address.latitude,
          //   pickup_longitude: this.wish.business.address.longitude,
          //   delivery_latitude: this.wish.address.latitude,
          //   delivery_longitude: this.wish.address.longitude,
          // }
          // OthersController.fetchFare(payload)
          //   .then((data) => {
          //     this.deliveryFee = data.delivery_price
          //     console.log(this.wish)
          //     console.log(this.deliveryFee)
          //   })
          //   .catch((err) => {
          //     console.log(err)
          //   })
        })
        .catch((err) => {
          console.log(err.response)
        })
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    getid() {
      return this.user._id
    },
  },
  methods: {
    getTotal() {
      return this.deliveryFee + this.getSubTotal()
    },
    getSubTotal() {
      let total = 0
      if (this.wish) {
        total += this.wish.price_tag.price * this.wish.quantity
      }
      if (this.wish.extra_tags.length) {
        this.wish.extra_tags.forEach((extra) => {
          total += extra.price * extra.quantity
        })
      }
      return total
    },
    getFormattedCurrency(amount) {
      return formattedCurrency(amount)
    },

    async makePayment() {
      const validation = new Validator(this.payload, this.rules)

      if (validation.fails()) {
        let messages
        messages = ValidatorObject.getMessages(validation.errors)

        messages.forEach((error) => {
          this.$toast.error(error)
        })
        return
      }

      try {
        this.payload.tx_ref = `${this.wish.user._id}*${uuidv4()}*${'wish'}*${
          this.wish._id
        }`
        this.payload.redirect_url = document.documentURI
        this.payload.amount = this.getTotal()

        makePaymentFLW(this.payload).then((res) => {
          console.log(res.data)
          window.location.replace(res.data.link)
          console.log(res.data)
        })
      } catch (error) {
        console.log(error)
      }
    },

    titleCase(str) {
      return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ')
    },
    set: function (value) {
      var self = this

      if (!this.disabled) {
        this.temp_value = value
        return (this.value = value)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.logo {
  width: 180px;
  height: 100%;
  display: inline;
  border-radius: 0;
  cursor: pointer;
}
p {
  line-height: 20px;
}
h1 {
  color: black;
}
h4 {
  color: #342301;
}

.card{
  background-color: #ECECEC !important;
}
.business_image {
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
.wish {
  background-color: #fff;
  min-height: 100vh;
  /* width: 100vw; */
}
img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
  /* display: inline; */
}
.success-icon {
  width: 150px;
  height: 150px;
}
</style>
