<template>
  <div class="body">
    <Nav/>
    <v-row>
      <v-col col="3" class="container">
        <img class="foodbowl" src="~assets/images/foodbowl.png" alt="">
        <v-card elevation="7" class="mx-auto vcard">
            <v-card-text justify="center" class="sm-pt-10">
            <v-row dense no-gutters >
                <v-col cols="12">
                <v-card-text align="center" justify="center">
                    <p class="black--text download-text5">
                    Love. Life. Food. Firanse.
                    </p>
                    <nuxt-link to="/blog" class="mr-10">
                      <v-icon x-large>
                        mdi-facebook
                      </v-icon>
                    </nuxt-link>
                    
                    <nuxt-link to="/blog" class="mr-10">
                      <v-icon>
                        mdi-twitter
                      </v-icon>
                    </nuxt-link>
                    
                    <nuxt-link to="/blog">
                      <v-icon>
                        mdi-instagram
                      </v-icon>
                    </nuxt-link>
                    </v-card-text>
                </v-col>
            </v-row>
            </v-card-text>
        </v-card>
        <!----------------------------------Info cards--------------------------------------------------------------->
      </v-col>
    </v-row>
    <!-- <v-row v-if="this.featuredpost" class="m-5">
      <v-col cols="12" sm="6">
        <p class="aboutus3"> Featured Post</p>
          <v-card class="mx-auto blogcard" max-width="300">
              <v-img class="white--text" :src="this.featuredpost.thumbnail"></v-img>
              <v-card-title class="title">{{this.featuredpost.title}}</v-card-title>
              <v-card-text class="text--primary">
                <div>
                  <p class="trimmeddetails">{{this.trimmeddetails.substring(0,200)+"..."}}</p>
                </div>
                <p>{{getHumanDate(this.featuredpost.pubDate)}}</p>
              </v-card-text>


              <v-card-actions>
                <a :href="this.featuredpost.link">
                  <v-btn color="orange">
                  Read More
                </v-btn>
                </a>
              </v-card-actions>
          </v-card>
      </v-col>
    </v-row> -->
     <!-- <div v-else class="mx-auto">
      <v-progress-circular
      indeterminate
      color="amber"
    ></v-progress-circular> 
    </div> -->

    <!----------------------------------Blog cards--------------------------------------------------------------->
    <div class="blog">
      <p class="aboutus3" align="center"> Latest Posts</p>
      <v-row v-if="this.blogInfo && this.blogInfo.length > 0" justify="space-around">
        <v-col cols="12" sm="6" md="3" v-for="item in this.blogInfo" :key="item.guid" >
            <v-card class="mx-auto blogcard">
                <v-img class="white--text" :src="item.thumbnail" alt="thumbnail"></v-img>
                <v-card-title class="title">{{item.title}}</v-card-title>
                <v-card-text class="text--primary">
                  <div>
                    <p class="trimmeddetails">{{trimdetails(item.description.substring(0,200)+"....")}}</p>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <a :href="item.link">
                    <v-btn color="orange" class="readmore-button">
                    Read More
                  </v-btn>
                  </a>
                </v-card-actions>
                <p class="date">
                  <v-icon>
                    mdi-calendar
                  </v-icon>
                  {{getHumanDate(item.pubDate)}}
                </p>
            </v-card>
        </v-col>
      </v-row>
      
      <div v-else justify="center" align="center">
        <h5 class="black--text">No stories at the moment</h5>
        <!-- <v-progress-circular
        indeterminate
        color="amber"
      ></v-progress-circular> -->
      </div>
    </div>


    <!----------------------------------Download card -------------------------------------->
    <Downloadcard/>

    <!------------------------------------ Footer ------------------------------------------>
    <Footer/>
    <v-row>
      <v-col cols="12" class="endfooter">
        <div class="text-center black--text">FiranseFood. &copy;2022</div>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import axios from "axios";
import Applebutton from '~/components/Applebutton.vue'
import Googlebutton from '~/components/Googlebutton.vue'
import Nav from '~/components/Nav.vue'
import moment from 'moment'
import Downloadcard from "~/components/Downloadcard.vue";
import '@mdi/font/css/materialdesignicons.css'
import Footer from "~/components/Footer.vue"; // Ensure you are using css-loader


export default {
  name: 'index',
  data() {
    return {
      drawer: false,
      cravetag: this.value,
      nonexistent: false,
      avtar: '',
      blogInfo:[],
      featuredpost:[],
      trimmeddetails:'',
    }
  },
  icons:{
    iconfont: 'mdi', 
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  watch: {
    model(currentValue) {
      this.$emit('input', currentValue)
    },
  },
  async created() {
    try {
      const res = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@firansefood`);
      this.blogInfo = res.data.items;
      this.featuredpost = this.blogInfo[Object.keys(this.blogInfo)[0]];
      this.avtar = res.data.feed.image;
      this.trimmeddetails = this.trimdetails(this.featuredpost.description);
      console.log(this.blogInfo);
      console.log(this.trimmeddetails);

    } catch (e) {
      console.error(e);
    }
  },
  components: {
    Applebutton,
    Googlebutton,
    Nav,
    Downloadcard,
    Footer
},

  methods: {
    gotoDashboard() {
      window.open('https://dashboard.firansefood.com')
    },
    trimdetails(node){
      let tag = document.createElement("div");
      tag.innerHTML = node;
      node = tag.innerText;
      return node;
    },
    getHumanDate(date) {
      return moment(date, 'YYYY-MM-DD').format("MMM DD, YYYY");
    }
  },
}
</script>
<style lang="scss" scoped>
.body {
  position: relative;
  overflow: hidden;
}
h6 {
  margin: 10px 0;
  font-size: 25px;
  text-decoration: underline;
  color: white;
}
ul {
  list-style: none;
  list-style-type: none;
  padding: 0;
  li {
    margin: 10px 0;
    color: white;
    .nuxtlink{
      color: #000;
      text-decoration: none;
    }
  }
}
.nuxtlink:hover {
  color: $primary;
}

.nuxt-link-exact-active {
    color: $primary !important;
}

p {
  line-height: 45px;
}
.maindish {
  width: 90%;
  object-fit: fill;
}
.girl-image {
  width: 90%;
}

.grid-image1 {
  width: 65% !important;
}

.grid-image2 {
  width: 90% !important;
}

.process {
  background-color: #ffe580;
}

// ----------------Blog Card-----------------
.blog{
  // background-color: #ffe580;
}
.aboutus3 {
  color: #342301 !important;
  letter-spacing: 2px;
  margin-bottom: 1rem !important;
  margin-top: 30px;
  font-size: 30px;
  line-height: 45px;
}

.blogcard{
  background-color: #FFA80033 !important;
  max-width: 350px;
  max-height: 700px;
}
.trimmeddetails{
  font-family: 'Poppins' !important;
  line-height: 20px !important;
  font-size: 14.5px;
  margin-bottom: 0px !important;
  letter-spacing: 1px;
  color: #412b00;
}

.title{
  font-family: Balsamiq Sans !important;
  font-size: 20px !important;
  line-height: 20px;
  margin-bottom: -10px !important;
  margin-top: -5px !important;
  font-weight: bolder;
  letter-spacing: 1px;
  color: #342301;
}

.foodbowl{
  width: 100% !important;
}

.readmore-button{
  font-family: 'Poppins' !important;
  color: rgb(243, 243, 243) !important;
  text-transform: capitalize;
  margin-top: -1.5rem !important;
  margin-left: 0.5rem;
}

.date{
  font-family: 'Poppins' !important;
  font-size: 14.5px;
  margin-left: 1rem;
  color: #412b00;
}

a{
  text-decoration: none;
}
// ----------------Download Card-----------------

.vcard{
  background-color: #FFDC99 !important;
  max-width: 75%;
  height: 200px !important;
  margin-top: -100px;
  margin-bottom: 5rem;
}
.download-button-card {
  width: 100% !important;
}

.download-text5,
.app-text {
  font-size: 27px;
  font-weight: 600;
  line-height: 35px;
  font-family: Balsamiq Sans !important;
  color: #431d01 !important;
  letter-spacing: 2px;
}

.download-text6 {
  font-size: 29px;
  font-weight: 600;
  line-height: 6px;
  margin-bottom: 50px;
  font-family: Balsamiq Sans !important;
  color: #431d01 !important;
  letter-spacing: 2px;
}

.download-text4 {
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  font-family: 'Poppins' !important;
}


// ------------Footer--------------------------

footer {
  background: #342301;
}

.endfooter {
  background-color: white;
  margin: 0.1% !important;
}

svg {
  margin-bottom: -3% !important;
}

// ----------------Search Button-----------------
.custom-search {
  position: relative;
  width: 100%;
}

.custom-search-input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 1;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
}

.custom-search-botton {
  position: absolute;
  right: 9px;
  top: 7px;
  bottom: 3px;
  border: 0;
  background: #ffa800;
  color: #fff;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 10px;
  z-index: 2;
  width: 59px;
  height: 45px;
  box-shadow: 5px 5px 7px #a4a4a4;
}

.header-button {
  width: 103% !important;
}

.header-button1 {
  width: 100% !important;
}

@media only screen and (max-width: 375px) {
  .blogcard{
  background-color: #FFA80033;
  max-width: 300px !important;
  max-height: 700px;
}
  
}

/*sm*/
@media only screen and (min-width: 600px) and (max-width: 960px) {
  .vcard {
    max-width: 55%;
    height: 250px !important;
    margin-top: -150px;
  }
  
  .download-text3 {
    font-size: 11px;
  }

  .download-text5 {
    font-size: 30px;
    margin-top: 30px;
  }

  .download-text6 {
    font-size: 30px;
  }

  .download-text4 {
    font-size: 15px;
    font-weight: 400;
  }

  .download-icon {
    font-size: 30px;
  }
   // ----------------Blog Card-----------------
.aboutus3 {
  color: #342301 !important;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 3rem !important;
  font-size: 49px;
  line-height: 50px;
}



}
/*md*/
@media only screen and (min-width: 960px) and (max-width: 1264px) {
  .vcard {
    max-width: 65%;
    margin-top: -100px;
  }

  .subscribe-card {
    max-width: 50%;
  }
  .download-text3 {
    font-size: 12px;
  }
  .download-text5 {
    font-size: 45px;
    margin-top: 30px;
    line-height: 45px;
  }

  .download-text6 {
    font-size: 45px;
  }

  .download-text4 {
    font-size: 17px;
  }

  .download-icon {
    font-size: 40px;
  }
 // ----------------Blog Card-----------------
.aboutus3 {
  color: #342301 !important;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 2rem !important;
  font-size: 49px;
  line-height: 50px;
}
.blogcard{
  max-width: 400px !important;
}
.trimmeddetails{
  line-height: 25px !important;
  font-size: 15px;
  margin-bottom: 0px !important;
}

.title{
  font-size: 20px !important;
  line-height: 25px;
  margin-bottom: -10px !important;
  font-weight: bolder;
  overflow-wrap: break-word;
}

.foodbowl{
  width: 100% !important;
}

.date{
  font-size: 15px;
}


}
/*lg*/
@media only screen and (min-width: 1264px) and (max-width: 1904px) {
  .vcard {
    max-width: 55%;
    height: 250px !important;
    margin-top: -150px;
  }

  .download-text5 {
    font-size: 49px;
    line-height: 50px;
    margin-top: 30px;
  }

  .download-text6 {
    font-size: 39px;
    margin-bottom: 50px;
  }

  .download-text4 {
    font-size: 23px;
    font-weight: 400;
    line-height: 24px;
  }


  // ----------------Blog Card-----------------
.aboutus3 {
  color: #342301 !important;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 4rem !important;
  font-size: 49px;
  line-height: 50px;
}

.blogcard{
  background-color: #FFA80033;
  max-width: 700px !important;
  max-height: 700px;
}

.trimmeddetails{
  line-height: 25px !important;
  font-size: 15px;
  margin-bottom: 0px !important;
}

.title{
  font-size: 20px !important;
  line-height: 25px;
  margin-bottom: -10px !important;
  font-weight: bolder;
  overflow-wrap: break-word;
}

.foodbowl{
  width: 100% !important;
}

.date{
  font-size: 15px;
}

}
</style>
