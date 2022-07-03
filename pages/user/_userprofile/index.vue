<template>
  <div v-if="user" class="userprofile">
    <div class="d-flex align-center my-3 inline">
      <img
        src="~/assets/images/firansee.png"
        class="logo"
        @click="$router.push('/')"
      />
    </div>
    <v-row align="center" justify="center" no-gutters dense>
      <v-col cols="12" md="8">
        <v-text-field
          outlined
          class="mt-2"
          placeholder="Search for firanse tag, non-profits, or anybody"
          prepend-inner-icon="mdi-magnify"
          color="#FFA800"
          v-model="cravetag"
          @keyup.enter="getvalue"
        >
        </v-text-field>
        <p class="error--text mb-8 mt-n6" v-if="nonexistent">
          This user does not exist!
        </p>
      </v-col>
    </v-row>

    <div v-if="user">
      <div class="card black--text">
        <v-row class="user-details">
          <v-col cols="12" align="center">
            <div class="image-cluster">
              <div class="image-cluster">
                <img
                  src="~/assets/images/circle-dashes.png"
                  class="dashes"
                  alt=""
                />
              </div>
              <img
                :src="
                  user.image
                    ? user.image.location
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDgkPQavzX7KwcLzeAsf0fgOx_-D51F3fag&usqp=CAU'
                "
                alt=""
              />
            </div>

            <h4 class="text-center">
              {{ user.firstname }} {{ user.lastname }}
            </h4>
            <h4 class="text-center">@{{ user.firanse_tag }}</h4>
            <h4 class="text-center">
              <v-icon medium color="#342301" size="18">
                mdi-map-marker-outline </v-icon
              >{{ titleCase(user.address.state) }}, Nigeria
            </h4>
          </v-col>
        </v-row>
        <v-row class="mt-10">
          <v-col cols="12">
            <p class="font-weight-black intro-text">
              <v-icon color="#000000" medium>
                mdi-silverware-fork-knife
              </v-icon>
              Food cravings
              <span class="float-right font-weight-thin intro-text">
                <v-icon color="#000000" medium> mdi-history </v-icon>
                most recents
              </span>
            </p>
            <p class="mb-8 intro-text1" style="color: #6d7175">
              Showing food available today in
              <span class="font-weight-black intro-text1">{{
                titleCase(location)
              }}</span>
            </p>
          </v-col>
        </v-row>
      </div>
      <div class="image-container">
        <v-row dense no-gutters v-if="wishlist && wishlist.length > 0">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="wish in wishlist"
            :key="wish.id"
          >
            <div class="mt-4">
              <div class="d-flex align-center">
                <img
                  :src="wish.business.image.location"
                  class="business_image"
                />
                <div class="ml-2 mt-4">
                  <p class="image-text">
                    {{ wish.business.name }}
                    <br />
                    @{{ wish.business.tag }}
                  </p>
                </div>
              </div>
              <div class="d-flex align-center">
                <img :src="wish.food.image.location" class="food_image" />
                <v-btn
                  @click="
                    $router.push(
                      `/user/${$route.params.userprofile}/wish/${wish._id}`
                    )
                  "
                  icon
                  outlined
                  class="ml-2"
                  ><v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>

              <p class="font-weight-black pa-0 ma-0 image-text">
                {{ wish.food.name }}
              </p>
              <p class="image-text">
                {{ getFormattedCurrency(wish.price_tag.price) }}
              </p>
            </div>
          </v-col>
        </v-row>
        <div v-else>
          None of {{ user.firstname + "'s" }} wishes are in his current city and
          cannot be delivered to him.
        </div>
      </div>

      <!-- <v-row class="mt-10">
            <v-col cols="12">
                <p class="font-weight-black">
                    <v-icon color="#000000" medium>
                    mdi-silverware-fork-knife
                    </v-icon>
                    Food cravings
                    <span class="float-right font-weight-thin">
                        <v-icon color="#000000" medium>
                        mdi-history
                        </v-icon>
                        most recents
                    </span>
                </p>
                <p class="mt-n2" style="color:#6D7175;">
                    Showing food available today in <span class="font-weight-black">{{titleCase(job.address.state)}}, Nigeria</span> 
                </p>
            </v-col>
        </v-row> -->
    </div>

    <div v-else>
      <div>
        <h1>404 Error</h1>
        <p>
          The details for this user {{ $route.params.userprofile }} could not be
          found.
        </p>
        <router-link to="/" exact> Go to home page </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <v-progress-circular :size="50" color="amber" indeterminate class="loading">
    </v-progress-circular>
  </div>
</template>

<script>
import { UserController } from '@/modules/user'
import { WishController } from '@/modules/wish'
// import StarRating from 'vue-star-rating'
import { formattedCurrency } from '@/static/utils'

export default {
  name: 'UserProfile',
  components: {
    // StarRating,
  },
  data() {
    return {
      cravetag: '',
      loading: true,
      location: '',
      user: null,
      wishlist: null,
      page: 1,
      nonexistent: false,
    }
  },
  async mounted() {
    try {
      UserController.getUserByTagPhone({
        search: this.$route.params.userprofile,
      }).then((data) => {
        console.log(data.user)
        this.user = data.user
        WishController.getFriendWish(this.user._id).then((data) => {
          console.log(data.wishList.docs)
          console.log(data)
          this.location = data.location
          this.wishlist = data.wishList.docs
          this.loading = false
        })
      })
    } catch (error) {
      this.loading = false
      console.log(error)
    }
  },
  computed: {
    getid() {
      return this.user._id
    },
  },
  methods: {
    getFormattedCurrency(amount) {
      return formattedCurrency(amount)
    },

    getvalue() {
      this.cravetag = this.cravetag.toLowerCase()
      UserController.getUserByTagPhone({ search: this.cravetag }).then(
        (data) => {
          if (!data) {
            this.nonexistent = true
            return
          }
          this.nonexistent = false
          this.$router.push('/user/' + data.user.firanse_tag)
        }
      )
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
p {
  line-height: 20px;
}
h1 {
  color: black;
}

h4 {
  color: #342301;
}

.intro-text {
  font-size: 15px;
}

.intro-text1 {
  font-size: 15px;
}

.image-text {
  font-size: 1rem;
}

.userprofile {
  margin: 1.5rem;
  @media only screen and (min-width: 786px) {
    width: 70vw;
    margin: 0 auto;
  }
}

.gift-button {
  width: 140px;
}

.gift-button-text {
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: capitalize;
}

.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.v-text-field--outlined >>> fieldset {
  border-color: #ffa800;
}

.v-text-field {
  width: 100%;
  margin: 0 auto;
}

.food_image {
  margin: 0 0 10px 0;
  object-fit: cover;
  width: 85%;
  height: 9rem;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
}

.user-details {
  background: #C4C4C4;
  border-radius: 20px;
}

.image-cluster {
  display: inline-block;
  position: relative;
  z-index: 1;
}
.image-cluster + img {
  position: absolute;
  z-index: 1;
  top: 11px;
  right: 11px;
}
.dashes {
  width: 200px;
  height: 200px;
}
img {
  width: 178px;
  height: 178px;
  border-radius: 50%;
  object-fit: cover;
}
.business_image {
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.bottom-left {
  position: absolute;
  bottom: 50px;
  left: 40px;
}

.bottom-right {
  position: absolute;
  bottom: 7px;
  right: 24px;
  background-color: #ffa800;
  padding-left: 20px;
  padding-right: 20px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 20px;
}
.logo {
  width: 180px;
  height: 100%;
  display: inline;
  border-radius: 0;
  cursor: pointer;
}
</style>
