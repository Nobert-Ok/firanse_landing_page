(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{377:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(10),c=r(17),o=r(18),l=(r(52),r(6),r(168)),d=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"logIn",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("/user/auth/sign-in",e);case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"signUp",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("/user/sign-up",e);case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"updateFiranseTag",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.put("/user/update-tag",e);case 3:c=t.sent,r(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"getCurrentUser",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,AsyncStorage.getItem("firanse_token");case 2:if(!(c=t.sent)||null==c){t.next=15;break}return t.prev=4,t.next=7,l.a.get("/user/me",e);case 7:o=t.sent,r(o.data.data),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),n(t.t0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"getUserByTagPhone",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("/user/user",e);case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"searchUsers",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("/user/search?name=".concat(e));case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"updateUser",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.put("/user/update",e);case 3:c=t.sent,r(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"uploadImage",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.put("/user/image",e);case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"changePassword",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.put("/user/password",e);case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"resetPassword",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("/user/reset-password",e);case 3:c=t.sent,r(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}}]),e}(),v=new d},379:function(e,t,r){e.exports=r.p+"img/firansee.20b68b0.png"},437:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(10),c=r(17),o=r(18),l=(r(52),r(6),r(168)),d=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"addToWish",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("/user/wish/create",e);case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"getWish",value:function(){return new Promise(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/user/wish");case 3:n=e.sent,t(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}())}},{key:"getWishDetail",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("/user/wish/".concat(e));case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"getFriendWish",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("/user/wish/friends/".concat(e));case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"deleteWish",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.delete("/user/wish/delete/".concat(e));case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}},{key:"updateWish",value:function(e){return new Promise(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.put("/user/wish/update",e);case 3:c=t.sent,r(c.data.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}())}}]),e}(),v=new d},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(22),r(46);var n=function(e){if(isNaN(e)){var t=e.replace(/\,/g,"");e=1*t}return"#"+(e+"").replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,").replace(".",",")}},469:function(e,t,r){var content=r(562);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(67).default)("e8fb7030",content,!0,{sourceMap:!1})},560:function(e,t,r){e.exports=r.p+"img/circle-dashes.88d5506.png"},561:function(e,t,r){"use strict";r(469)},562:function(e,t,r){var n=r(66)(!1);n.push([e.i,"p[data-v-567cda5e]{line-height:20px}h1[data-v-567cda5e]{color:#000}h4[data-v-567cda5e]{color:#342301}.intro-text[data-v-567cda5e],.intro-text1[data-v-567cda5e]{font-size:15px}.image-text[data-v-567cda5e]{font-size:1rem}.userprofile[data-v-567cda5e]{margin:1.5rem}@media only screen and (min-width:786px){.userprofile[data-v-567cda5e]{width:70vw;margin:0 auto}}.gift-button[data-v-567cda5e]{width:140px}.gift-button-text[data-v-567cda5e]{font-size:1.2rem;font-weight:900;text-transform:capitalize}.loading[data-v-567cda5e]{position:fixed;z-index:999;height:2em;width:2em;margin:auto;top:0;left:0;bottom:0;right:0}.v-text-field--outlined[data-v-567cda5e] fieldset{border-color:#ffa800}.v-text-field[data-v-567cda5e]{width:100%;margin:0 auto}.food_image[data-v-567cda5e]{margin:0 0 10px;-o-object-fit:cover;object-fit:cover;width:85%;height:9rem;border-radius:20px}@media only screen and (min-width:768px){.food_image[data-v-567cda5e]{width:80%}}.user-details[data-v-567cda5e]{background:rgba(255,168,0,.2);border-radius:20px}.image-cluster[data-v-567cda5e]{display:inline-block;position:relative;z-index:1}.image-cluster+img[data-v-567cda5e]{position:absolute;z-index:1;top:11px;right:11px}.dashes[data-v-567cda5e]{width:200px;height:200px}img[data-v-567cda5e]{width:178px;height:178px}.business_image[data-v-567cda5e],img[data-v-567cda5e]{border-radius:50%;-o-object-fit:cover;object-fit:cover}.business_image[data-v-567cda5e]{height:50px;width:50px}.bottom-left[data-v-567cda5e]{position:absolute;bottom:50px;left:40px}.bottom-right[data-v-567cda5e]{position:absolute;bottom:7px;right:24px;background-color:#ffa800;padding-left:20px;padding-right:20px;border-top-left-radius:10px;border-bottom-right-radius:20px}.logo[data-v-567cda5e]{width:180px;height:100%;display:inline;border-radius:0;cursor:pointer}",""]),e.exports=n},605:function(e,t,r){"use strict";r.r(t);var n=r(10),c=(r(90),r(48),r(22),r(69),r(44),r(52),r(377)),o=r(437),l=r(438),d={name:"UserProfile",components:{},data:function(){return{cravetag:"",loading:!0,location:"",user:null,wishlist:null,page:1,nonexistent:!1}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{c.a.getUserByTagPhone({search:e.$route.params.userprofile}).then((function(data){console.log(data.user),e.user=data.user,o.a.getFriendWish(e.user._id).then((function(data){console.log(data.wishList.docs),console.log(data),e.location=data.location,e.wishlist=data.wishList.docs,e.loading=!1}))}))}catch(t){e.loading=!1,console.log(t)}case 1:case"end":return t.stop()}}),t)})))()},computed:{getid:function(){return this.user._id}},methods:{getFormattedCurrency:function(e){return Object(l.a)(e)},getvalue:function(){var e=this;this.cravetag=this.cravetag.toLowerCase(),c.a.getUserByTagPhone({search:this.cravetag}).then((function(data){data?(e.nonexistent=!1,e.$router.push("/user/"+data.user.firanse_tag)):e.nonexistent=!0}))},titleCase:function(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},set:function(e){if(!this.disabled)return this.temp_value=e,this.value=e}}},v=(r(561),r(75)),f=r(112),m=r.n(f),h=r(610),x=r(593),w=r(399),k=r(449),_=r(594),y=r(597),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.user?n("div",{staticClass:"userprofile"},[n("div",{staticClass:"d-flex align-center my-3 inline"},[n("img",{staticClass:"logo",attrs:{src:r(379)},on:{click:function(t){return e.$router.push("/")}}})]),e._v(" "),n("v-row",{attrs:{align:"center",justify:"center","no-gutters":"",dense:""}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-text-field",{staticClass:"mt-2",attrs:{outlined:"",placeholder:"Search for firanse tag, non-profits, or anybody","prepend-inner-icon":"mdi-magnify",color:"#FFA800"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getvalue.apply(null,arguments)}},model:{value:e.cravetag,callback:function(t){e.cravetag=t},expression:"cravetag"}}),e._v(" "),e.nonexistent?n("p",{staticClass:"error--text mb-8 mt-n6"},[e._v("\n        This user does not exist!\n      ")]):e._e()],1)],1),e._v(" "),e.user?n("div",[n("div",{staticClass:"card black--text"},[n("v-row",{staticClass:"user-details"},[n("v-col",{attrs:{cols:"12",align:"center"}},[n("div",{staticClass:"image-cluster"},[n("div",{staticClass:"image-cluster"},[n("img",{staticClass:"dashes",attrs:{src:r(560),alt:""}})]),e._v(" "),n("img",{attrs:{src:e.user.image?e.user.image.location:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDgkPQavzX7KwcLzeAsf0fgOx_-D51F3fag&usqp=CAU",alt:""}})]),e._v(" "),n("h4",{staticClass:"text-center"},[e._v("\n            "+e._s(e.user.firstname)+" "+e._s(e.user.lastname)+"\n          ")]),e._v(" "),n("h4",{staticClass:"text-center"},[e._v("@"+e._s(e.user.firanse_tag))]),e._v(" "),n("h4",{staticClass:"text-center"},[n("v-icon",{attrs:{medium:"",color:"#342301",size:"18"}},[e._v("\n              mdi-map-marker-outline ")]),e._v(e._s(e.titleCase(e.user.address.state))+", Nigeria\n          ")],1)])],1),e._v(" "),n("v-row",{staticClass:"mt-10"},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"font-weight-black intro-text"},[n("v-icon",{attrs:{color:"#000000",medium:""}},[e._v("\n              mdi-silverware-fork-knife\n            ")]),e._v("\n            Food cravings\n            "),n("span",{staticClass:"float-right font-weight-thin intro-text"},[n("v-icon",{attrs:{color:"#000000",medium:""}},[e._v(" mdi-history ")]),e._v("\n              most recents\n            ")],1)],1),e._v(" "),n("p",{staticClass:"mb-8 intro-text1",staticStyle:{color:"#6d7175"}},[e._v("\n            Showing food available today in\n            "),n("span",{staticClass:"font-weight-black intro-text1"},[e._v(e._s(e.titleCase(e.location)))])])])],1)],1),e._v(" "),n("div",{staticClass:"image-container"},[e.wishlist&&e.wishlist.length>0?n("v-row",{attrs:{dense:"","no-gutters":""}},e._l(e.wishlist,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4"}},[n("div",{staticClass:"mt-4"},[n("div",{staticClass:"d-flex align-center"},[n("img",{staticClass:"business_image",attrs:{src:t.business.image.location}}),e._v(" "),n("div",{staticClass:"ml-2 mt-4"},[n("p",{staticClass:"image-text"},[e._v("\n                  "+e._s(t.business.name)+"\n                  "),n("br"),e._v("\n                  @"+e._s(t.business.tag)+"\n                ")])])]),e._v(" "),n("div",{staticClass:"d-flex align-center"},[n("img",{staticClass:"food_image",attrs:{src:t.food.image.location}}),e._v(" "),n("v-btn",{staticClass:"ml-2",attrs:{icon:"",outlined:""},on:{click:function(r){return e.$router.push("/user/"+e.$route.params.userprofile+"/wish/"+t._id)}}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1),e._v(" "),n("p",{staticClass:"font-weight-black pa-0 ma-0 image-text"},[e._v("\n              "+e._s(t.food.name)+"\n            ")]),e._v(" "),n("p",{staticClass:"image-text"},[e._v("\n              "+e._s(e.getFormattedCurrency(t.price_tag.price))+"\n            ")])])])})),1):n("div",[e._v("\n        None of "+e._s(e.user.firstname+"'s")+" wishes are in his current city and\n        cannot be delivered to him.\n      ")])],1)]):n("div",[n("div",[n("h1",[e._v("404 Error")]),e._v(" "),n("p",[e._v("\n        The details for this user "+e._s(e.$route.params.userprofile)+" could not be\n        found.\n      ")]),e._v(" "),n("router-link",{attrs:{to:"/",exact:""}},[e._v(" Go to home page ")])],1)])],1):n("div",[n("v-progress-circular",{staticClass:"loading",attrs:{size:50,color:"amber",indeterminate:""}})],1)}),[],!1,null,"567cda5e",null);t.default=component.exports;m()(component,{VBtn:h.a,VCol:x.a,VIcon:w.a,VProgressCircular:k.a,VRow:_.a,VTextField:y.a})}}]);