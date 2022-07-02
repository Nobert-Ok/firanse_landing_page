<template>
    <div style="position:relative;">
        <v-row justify="center" class="custom-search">
            <v-col cols="1">
            <p class="number1 py-2 text-h6 ml-n5 ml-sm-n1">
                1
            </p>
            </v-col>
            <v-col cols="8">
            <p class="steps px-4 py-4 text-left ">
            Download & Install the FiranseFood mobile application on your 
            iOS or Android phone. Sign-up to create your unique Firanse_foodtag.
            </p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="8">
            <p class="steps px-5 py-5 text-left">
            Enter your current address/location to see restaurants near you. 
            Order your favourite meals from those restaurants.
            </p>
            </v-col>
            <v-col cols="1">
            <p class="number2 py-2 text-h6 ml-n3 mr-sm-n1">
                2
            </p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="1">
            <p class="number3 py-2 text-h6 ml-n5 ml-sm-n1">
                3
            </p>
            </v-col>
            <v-col cols="8">
            <p class="steps px-5 py-5 text-left">
            Create your firanse_cravetag to share your cravings with friends and loved ones.  
            You can also invite them to create their own cravings.
            </p>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="8">
            <p class="steps px-5 py-5 text-left">
            Enter cravetags of loved ones to see their cravings and surprise them by ordering for their faves. It gets to them in a drift.
            </p>
            </v-col>
            <v-col cols="1">
            <p class="number4 py-2 text-h6 ml-n3 mr-sm-n1">
                4
            </p>
            </v-col>
        </v-row>
    </div>
</template>

<style lang="scss" scoped>

.custom-search {
  position: relative;
  width: 100%;
}

.steps {
  background-color: #fff;
  border-radius: 20px;
  font-size:12px !important;
}


.number1 {
  position: absolute;
  left: 15%;
  top: 19px;
  bottom: 3px;
  margin: 0;
  padding: 0 10px;
  background-color: #FFA800;
  color: #fff;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number2 {
  position: absolute;
  right: 8%;
  top: 30%;
  bottom: 3px;
  margin: 0;
  padding: 0 10px;
  background-color: #FFA800;
  color: #fff;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number3 {
  position: absolute;
  left: 14%;
  top: 54%;
  bottom: 3px;
  margin: 0;
  padding: 0 10px;
  background-color: #FFA800;
  color: #fff;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number4 {
  position: absolute;
  right: 8%;
  top: 80%;
  bottom: 3px;
  margin: 0;
  padding: 0 10px;
  background-color: #FFA800;
  color: #fff;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

/*sm*/
@media only screen and (min-width: 600px) and (max-width: 960px) {
.steps {
    border-radius: 20px;
    font-size: 12.5px !important;
    line-height: 20px ;
    padding: 10px 10px !important;
}
.number1 {
  left: 15%;
  top: 19px;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number2 {
  right: 13%;
  top: 30%;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number3 {
  left: 14%;
  top: 53%;
  bottom: 3px;  
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number4 {
  right: 13%;
  top: 80%;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

}


/*md*/
@media only screen and (min-width: 960px) and (max-width: 1264px) {
.steps {
    font-size: 12.5px !important;
    line-height: 20px ;
}
.number1 {
  left: 15%;
  top: 19px;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number2 {
  right: 13%;
  top: 30%;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number3 {
  left: 14%;
  top: 53%;
  bottom: 3px;  
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

.number4 {
  right: 13%;
  top: 80%;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}

}

/*lg*/
@media only screen and (min-width: 1264px) {
.steps {
    border-radius: 25px;
    font-size: 13px !important;
    line-height: 20px ;
    padding: 20px 20px !important;
}
.number2 {
  right: 13%;
  top: 30%;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}
.number4 {
  right: 13%;
  top: 80%;
  bottom: 3px;
  width: 35px;
  height: 35px;
  font-size: 15px !important;
  padding: 3px 0px !important;
}
}




</style>