(window.webpackJsonp=window.webpackJsonp||[]).push([[14,11],{373:function(t,e,n){"use strict";n.r(e);n(383);var r=n(75),o=n(112),d=n.n(o),c=n(750),l=n(420),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"px-7 py-7 download-button",attrs:{color:"#FFA800",large:"",elevation:"5"}},[n("v-icon",{staticClass:"download-icon mr-4",attrs:{color:"white"}},[t._v("mdi-apple")]),t._v(" "),n("span",{staticClass:"d-inline-block download-text1 white--text"},[n("small",{staticClass:"font-weight-light d-block white--text"},[t._v("Download on")]),t._v("\n    App Store\n  ")])],1)}),[],!1,null,"6730adf2",null);e.default=component.exports;d()(component,{VBtn:c.a,VIcon:l.a})},374:function(t,e,n){"use strict";n.r(e);n(385);var r=n(75),o=n(112),d=n.n(o),c=n(750),l=n(420),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"px-7 py-7 download-button",attrs:{color:"#FFA800",large:"",elevation:"5"}},[n("v-icon",{staticClass:"download-icon text--center",attrs:{color:"white"}},[t._v("mdi-google-play")]),t._v(" "),n("span",{staticClass:"d-inline-block download-text1 text--center white--text"},[n("small",{staticClass:"font-weight-light d-block text--center white--text"},[t._v("Get it on")]),t._v("\n        Google Play\n    ")])],1)}),[],!1,null,"6d43d721",null);e.default=component.exports;d()(component,{VBtn:c.a,VIcon:l.a})},375:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("febdb7e8",content,!0,{sourceMap:!1})},377:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("0792d860",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-center my-3 ml-sm-16 ml-4"},[e("img",{staticClass:"logo",attrs:{src:n(387)}})])}],o=n(373),d=n(374),c=(n(379),{name:"index",data:function(){return{drawer:!1,cravetag:this.value,nonexistent:!1}},props:{value:{type:String,default:""}},watch:{model:function(t){this.$emit("input",t)}},components:{Applebutton:o.default,Googlebutton:d.default,Nav:j},methods:{gotoDashboard:function(){window.open("https://dashboard.firansefood.com")}}}),l=(n(389),n(75)),v=n(112),m=n.n(v),f=n(750),x=n(420),h=n(748),w=n(734),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"d-flex justify-space-between align-center mx-auto"},[t._m(0),t._v(" "),n("div",{staticClass:"d-md-flex mr-4"},[n("nav",{staticClass:"d-none d-md-block"},[n("ul",{staticClass:"d-flex align-center"},[n("li",{staticClass:"mx-10"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/",exact:""}},[t._v("\n           Home\n          ")])],1),t._v(" "),n("li",{staticClass:"mx-10"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/about",exact:""}},[t._v("\n           About\n          ")])],1),t._v(" "),n("li",{staticClass:"mx-10"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/blog",exact:""}},[t._v("\n           Blog\n          ")])],1),t._v(" "),n("li",{staticClass:"mx-10"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/contact",exact:""}},[t._v("\n           Contact\n          ")])],1),t._v(" "),n("li",{staticClass:"mx-10"},[n("v-btn",{staticClass:"white--text text-none",attrs:{color:"#FFA800",elevation:"4",target:"blank"},on:{click:t.gotoDashboard}},[t._v("Create a Resturant")])],1)])]),t._v(" "),n("v-btn",{staticClass:"ml-2 text-none d-md-none",attrs:{color:"primary",icon:""},on:{click:function(e){t.drawer=!0}}},[n("v-icon",[t._v("mdi-menu")])],1)],1)]),t._v(" "),n("v-row",{attrs:{dense:"","no-gutters":"",align:"center",justify:"space-around"}},[n("v-navigation-drawer",{attrs:{absolute:"",temporary:"",width:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-btn",{staticClass:"float-right",attrs:{color:"#FFA800",icon:""},on:{click:function(e){t.drawer=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("div",{staticClass:"d-flex flex-column justify-center align-center full"},[n("div",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/"}},[n("v-btn",{staticClass:"mb-10 text-none",attrs:{plain:"",color:"#FFA800"}},[t._v("Home")])],1)],1),t._v(" "),n("div",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/about"}},[n("v-btn",{staticClass:"mb-10 text-none",attrs:{plain:"",color:"#FFA800"}},[t._v("About")])],1)],1),t._v(" "),n("div",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/blog"}},[n("v-btn",{staticClass:"mb-10 text-none",attrs:{plain:"",color:"#FFA800"}},[t._v("Blog")])],1)],1),t._v(" "),n("div",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:"/contact"}},[n("v-btn",{staticClass:"mb-10 text-none",attrs:{plain:"",color:"#FFA800"}},[t._v("Contact")])],1)],1),t._v(" "),n("div",[n("v-btn",{staticClass:"white--text text-none",attrs:{color:"#FFA800",elevation:"4",target:"blank"},on:{click:t.gotoDashboard}},[t._v("Create a Resturant")])],1)])],1)],1)],1)}),r,!1,null,"2f58061f",null),j=e.default=component.exports;m()(component,{Nav:n(378).default}),m()(component,{VBtn:f.a,VIcon:x.a,VNavigationDrawer:h.a,VRow:w.a})},379:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(10),o=n(16),d=n(17),c=(n(52),n(6),n(168)),l=function(){function t(){Object(o.a)(this,t)}return Object(d.a)(t,[{key:"logIn",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/user/auth/sign-in",t);case 3:o=e.sent,n(o.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"signUp",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/user/sign-up",t);case 3:o=e.sent,n(o.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"updateFiranseTag",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.put("/user/update-tag",t);case 3:o=e.sent,n(o.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getCurrentUser",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,AsyncStorage.getItem("firanse_token");case 2:if(!(o=e.sent)||null==o){e.next=15;break}return e.prev=4,e.next=7,c.a.get("/user/me",t);case 7:d=e.sent,n(d.data.data),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),r(e.t0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getUserByTagPhone",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/user/user",t);case 3:o=e.sent,n(o.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"searchUsers",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/user/search?name=".concat(t));case 3:o=e.sent,n(o.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"updateUser",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.put("/user/update",t);case 3:o=e.sent,n(o.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"uploadImage",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.put("/user/image",t);case 3:o=e.sent,n(o.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"changePassword",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.put("/user/password",t);case 3:o=e.sent,n(o.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"resetPassword",value:function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/user/reset-password",t);case 3:o=e.sent,n(o.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}())}}]),t}(),v=new l},380:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("0168f6d8",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";n(375)},384:function(t,e,n){var r=n(66)(!1);r.push([t.i,".download-button[data-v-6730adf2]{width:150px}.download-text1[data-v-6730adf2]{font-size:12px;font-weight:900}.download-icon[data-v-6730adf2]{font-size:27px;margin-right:10px!important}@media only screen and (max-width:370px){.download-icon[data-v-6730adf2]{font-size:25px!important}.download-text1[data-v-6730adf2]{font-size:9px}}",""]),t.exports=r},385:function(t,e,n){"use strict";n(377)},386:function(t,e,n){var r=n(66)(!1);r.push([t.i,".download-button[data-v-6d43d721]{width:150px}.download-text1[data-v-6d43d721]{font-size:12px;font-weight:900}.download-icon[data-v-6d43d721]{font-size:27px;margin-right:10px!important}@media only screen and (max-width:370px){.download-icon[data-v-6d43d721]{font-size:25px!important}.download-text1[data-v-6d43d721]{font-size:9px}}",""]),t.exports=r},387:function(t,e,n){t.exports=n.p+"img/firansee.20b68b0.png"},389:function(t,e,n){"use strict";n(380)},390:function(t,e,n){var r=n(66)(!1);r.push([t.i,".logo[data-v-2f58061f]{width:180px;height:100%;display:inline;border-radius:0;cursor:pointer}.first-head[data-v-2f58061f]{margin-top:50px}header[data-v-2f58061f]{width:100%}.full[data-v-2f58061f]{height:100vh}h1[data-v-2f58061f]{font-size:3rem}h6[data-v-2f58061f]{margin:10px 0;font-size:25px;text-decoration:underline;color:#fff}ul[data-v-2f58061f]{list-style:none;list-style-type:none;padding:0}ul li[data-v-2f58061f]{margin:10px 0;color:#fff}ul li .nuxtlink[data-v-2f58061f]{color:#000;text-decoration:none}.nuxtlink[data-v-2f58061f]:hover{color:#ffa800}.nuxt-link-exact-active[data-v-2f58061f]{color:#ffa800!important}.nuxtlink[data-v-2f58061f]{text-decoration:none}",""]),t.exports=r},427:function(t,e,n){t.exports=n.p+"img/maindish.7f79458.png"},598:function(t,e,n){var content=n(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("75bb5cd7",content,!0,{sourceMap:!1})},675:function(t,e,n){var map={"./af":463,"./af.js":463,"./ar":464,"./ar-dz":465,"./ar-dz.js":465,"./ar-kw":466,"./ar-kw.js":466,"./ar-ly":467,"./ar-ly.js":467,"./ar-ma":468,"./ar-ma.js":468,"./ar-sa":469,"./ar-sa.js":469,"./ar-tn":470,"./ar-tn.js":470,"./ar.js":464,"./az":471,"./az.js":471,"./be":472,"./be.js":472,"./bg":473,"./bg.js":473,"./bm":474,"./bm.js":474,"./bn":475,"./bn-bd":476,"./bn-bd.js":476,"./bn.js":475,"./bo":477,"./bo.js":477,"./br":478,"./br.js":478,"./bs":479,"./bs.js":479,"./ca":480,"./ca.js":480,"./cs":481,"./cs.js":481,"./cv":482,"./cv.js":482,"./cy":483,"./cy.js":483,"./da":484,"./da.js":484,"./de":485,"./de-at":486,"./de-at.js":486,"./de-ch":487,"./de-ch.js":487,"./de.js":485,"./dv":488,"./dv.js":488,"./el":489,"./el.js":489,"./en-au":490,"./en-au.js":490,"./en-ca":491,"./en-ca.js":491,"./en-gb":492,"./en-gb.js":492,"./en-ie":493,"./en-ie.js":493,"./en-il":494,"./en-il.js":494,"./en-in":495,"./en-in.js":495,"./en-nz":496,"./en-nz.js":496,"./en-sg":497,"./en-sg.js":497,"./eo":498,"./eo.js":498,"./es":499,"./es-do":500,"./es-do.js":500,"./es-mx":501,"./es-mx.js":501,"./es-us":502,"./es-us.js":502,"./es.js":499,"./et":503,"./et.js":503,"./eu":504,"./eu.js":504,"./fa":505,"./fa.js":505,"./fi":506,"./fi.js":506,"./fil":507,"./fil.js":507,"./fo":508,"./fo.js":508,"./fr":509,"./fr-ca":510,"./fr-ca.js":510,"./fr-ch":511,"./fr-ch.js":511,"./fr.js":509,"./fy":512,"./fy.js":512,"./ga":513,"./ga.js":513,"./gd":514,"./gd.js":514,"./gl":515,"./gl.js":515,"./gom-deva":516,"./gom-deva.js":516,"./gom-latn":517,"./gom-latn.js":517,"./gu":518,"./gu.js":518,"./he":519,"./he.js":519,"./hi":520,"./hi.js":520,"./hr":521,"./hr.js":521,"./hu":522,"./hu.js":522,"./hy-am":523,"./hy-am.js":523,"./id":524,"./id.js":524,"./is":525,"./is.js":525,"./it":526,"./it-ch":527,"./it-ch.js":527,"./it.js":526,"./ja":528,"./ja.js":528,"./jv":529,"./jv.js":529,"./ka":530,"./ka.js":530,"./kk":531,"./kk.js":531,"./km":532,"./km.js":532,"./kn":533,"./kn.js":533,"./ko":534,"./ko.js":534,"./ku":535,"./ku.js":535,"./ky":536,"./ky.js":536,"./lb":537,"./lb.js":537,"./lo":538,"./lo.js":538,"./lt":539,"./lt.js":539,"./lv":540,"./lv.js":540,"./me":541,"./me.js":541,"./mi":542,"./mi.js":542,"./mk":543,"./mk.js":543,"./ml":544,"./ml.js":544,"./mn":545,"./mn.js":545,"./mr":546,"./mr.js":546,"./ms":547,"./ms-my":548,"./ms-my.js":548,"./ms.js":547,"./mt":549,"./mt.js":549,"./my":550,"./my.js":550,"./nb":551,"./nb.js":551,"./ne":552,"./ne.js":552,"./nl":553,"./nl-be":554,"./nl-be.js":554,"./nl.js":553,"./nn":555,"./nn.js":555,"./oc-lnc":556,"./oc-lnc.js":556,"./pa-in":557,"./pa-in.js":557,"./pl":558,"./pl.js":558,"./pt":559,"./pt-br":560,"./pt-br.js":560,"./pt.js":559,"./ro":561,"./ro.js":561,"./ru":562,"./ru.js":562,"./sd":563,"./sd.js":563,"./se":564,"./se.js":564,"./si":565,"./si.js":565,"./sk":566,"./sk.js":566,"./sl":567,"./sl.js":567,"./sq":568,"./sq.js":568,"./sr":569,"./sr-cyrl":570,"./sr-cyrl.js":570,"./sr.js":569,"./ss":571,"./ss.js":571,"./sv":572,"./sv.js":572,"./sw":573,"./sw.js":573,"./ta":574,"./ta.js":574,"./te":575,"./te.js":575,"./tet":576,"./tet.js":576,"./tg":577,"./tg.js":577,"./th":578,"./th.js":578,"./tk":579,"./tk.js":579,"./tl-ph":580,"./tl-ph.js":580,"./tlh":581,"./tlh.js":581,"./tr":582,"./tr.js":582,"./tzl":583,"./tzl.js":583,"./tzm":584,"./tzm-latn":585,"./tzm-latn.js":585,"./tzm.js":584,"./ug-cn":586,"./ug-cn.js":586,"./uk":587,"./uk.js":587,"./ur":588,"./ur.js":588,"./uz":589,"./uz-latn":590,"./uz-latn.js":590,"./uz.js":589,"./vi":591,"./vi.js":591,"./x-pseudo":592,"./x-pseudo.js":592,"./yo":593,"./yo.js":593,"./zh-cn":594,"./zh-cn.js":594,"./zh-hk":595,"./zh-hk.js":595,"./zh-mo":596,"./zh-mo.js":596,"./zh-tw":597,"./zh-tw.js":597};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=675},676:function(t,e,n){"use strict";n(598)},677:function(t,e,n){var r=n(66)(!1);r.push([t.i,'.body[data-v-78b183da]{position:relative;overflow:hidden}h6[data-v-78b183da]{margin:10px 0;font-size:25px;text-decoration:underline;color:#fff}ul[data-v-78b183da]{list-style:none;list-style-type:none;padding:0}ul li[data-v-78b183da]{margin:10px 0;color:#fff}ul li .nuxtlink[data-v-78b183da]{color:#000;text-decoration:none}.nuxtlink[data-v-78b183da]:hover{color:#ffa800}.nuxt-link-exact-active[data-v-78b183da]{color:#ffa800!important}p[data-v-78b183da]{line-height:45px}.maindish[data-v-78b183da]{width:90%;-o-object-fit:fill;object-fit:fill}.girl-image[data-v-78b183da]{width:90%}.grid-image1[data-v-78b183da]{width:65%!important}.grid-image2[data-v-78b183da]{width:90%!important}.process[data-v-78b183da]{background-color:#ffe580}.aboutus[data-v-78b183da]{position:relative;margin:20px}.aboutus-image[data-v-78b183da]{width:100%;-o-object-fit:fill;object-fit:fill}.aboutus-button[data-v-78b183da]{color:#fff!important;height:50px!important;width:45%;text-transform:capitalize;font-weight:900;font-family:"Poppins"!important;background-color:#ffa800!important}.aboutus3[data-v-78b183da],.aboutus-button[data-v-78b183da]{font-size:30px;letter-spacing:2px}.aboutus3[data-v-78b183da]{color:#342301!important}.commitment[data-v-78b183da]{font-size:18px;line-height:20px;font-weight:600}.commitment[data-v-78b183da],.pro-commitment[data-v-78b183da]{font-family:"Poppins"!important;letter-spacing:2px;color:#342301!important}.pro-commitment[data-v-78b183da]{font-size:15px;line-height:24px}.blogcard[data-v-78b183da]{background-color:rgba(255,168,0,.2)}.download-button-card[data-v-78b183da]{width:100%!important}.app-text[data-v-78b183da],.download-text5[data-v-78b183da]{font-size:27px;line-height:35px}.app-text[data-v-78b183da],.download-text5[data-v-78b183da],.download-text6[data-v-78b183da]{font-weight:600;font-family:Balsamiq Sans!important;color:#431d01!important;letter-spacing:2px}.download-text6[data-v-78b183da]{font-size:29px;line-height:6px;margin-bottom:50px}.download-text4[data-v-78b183da]{font-size:16px;line-height:19px;font-weight:400;font-family:"Poppins"!important}.cheese[data-v-78b183da]{margin-top:-75px;z-index:-1}.cheese-img[data-v-78b183da]{position:relative;width:40%}.drinkspill-img[data-v-78b183da]{width:50%;margin-top:-120px}footer[data-v-78b183da]{background:#342301}.endfooter[data-v-78b183da]{background-color:#fff;margin:.1%!important}svg[data-v-78b183da]{margin-bottom:-3%!important}.custom-search[data-v-78b183da]{position:relative;width:100%}.custom-search-input[data-v-78b183da]{width:100%;border:1px solid #ccc;border-radius:10px;line-height:1;box-sizing:border-box;outline:none;font-size:15px}.custom-search-botton[data-v-78b183da]{position:absolute;right:9px;top:7px;bottom:3px;border:0;background:#ffa800;color:#fff;outline:none;margin:0;padding:0 10px;border-radius:10px;z-index:2;width:59px;height:45px;box-shadow:5px 5px 7px #a4a4a4}.header-button[data-v-78b183da]{width:103%!important}.header-button1[data-v-78b183da]{width:100%!important}@media only screen and (max-width:350px){.subcribe-newsletter[data-v-78b183da]{font-size:24px}.download-icon[data-v-78b183da]{font-size:25px!important;margin-left:2px!important}.mdi-36px[data-v-78b183da]{font-size:15px!important}}@media only screen and (min-width:600px)and (max-width:960px){header[data-v-78b183da]{margin-bottom:8%}input[data-v-78b183da]{width:70%;height:85px;font-size:25px}.button[data-v-78b183da]{padding:35px 20px;margin-left:-15%;width:75px}.subscribe-card[data-v-78b183da]{max-width:65%}.subcribe-newsletter[data-v-78b183da]{font-size:25px}.download[data-v-78b183da]{background-color:#000;border-radius:10px;width:250px}.grid-image[data-v-78b183da]{height:250px}.send[data-v-78b183da]{font-size:65px;line-height:62px}.share[data-v-78b183da]{line-height:32px;font-weight:500}.cravetag[data-v-78b183da],.share[data-v-78b183da]{font-size:20px}.vcard[data-v-78b183da]{max-width:80%;margin-top:-25%;margin-bottom:20%}.download-text3[data-v-78b183da]{font-size:11px}.download-text5[data-v-78b183da]{font-size:30px;margin-top:30px}.download-text6[data-v-78b183da]{font-size:30px}.download-text4[data-v-78b183da]{font-size:15px;font-weight:400}.download-icon[data-v-78b183da]{font-size:30px}.custom-search-botton[data-v-78b183da]{width:90px;height:50px;right:9px;top:10px;bottom:3px}.custom-search-input[data-v-78b183da]{height:70px;font-size:15px}.aboutus[data-v-78b183da]{margin:40px}.aboutus3[data-v-78b183da]{font-size:40px;margin-right:25px}.commitment[data-v-78b183da]{font-size:14px;line-height:19px;margin-right:19px}.pro-commitment[data-v-78b183da]{font-size:12px;margin-right:30px;line-height:16px}.favorite[data-v-78b183da]{font-size:30px;margin:3% 0 5%;letter-spacing:1px}.grid-image2[data-v-78b183da]{width:40%!important}.cheese-img[data-v-78b183da]{width:33%!important;margin-top:-250px}.drinkspill-img[data-v-78b183da]{width:35%}.header-button1[data-v-78b183da]{width:70%!important}}@media only screen and (min-width:960px)and (max-width:1264px){header[data-v-78b183da]{background-color:#fff}input[data-v-78b183da]{height:90px;width:600px;font-size:25px}.button[data-v-78b183da]{padding:40px 20px;margin-left:-22%;width:95px}.subcribe-newsletter[data-v-78b183da]{font-size:35px}.download[data-v-78b183da]{width:200px}.send[data-v-78b183da]{font-size:45px;line-height:50px}.send[data-v-78b183da],.share[data-v-78b183da]{font-weight:500}.share[data-v-78b183da]{font-size:18px;line-height:32px}.cravetag[data-v-78b183da]{font-size:20px}.vcard[data-v-78b183da]{max-width:75%;margin-top:-30%}.subscribe-card[data-v-78b183da]{max-width:50%}.download-text3[data-v-78b183da]{font-size:12px}.download-text5[data-v-78b183da]{font-size:45px;margin-top:30px;line-height:45px}.download-text6[data-v-78b183da]{font-size:45px}.download-text4[data-v-78b183da]{font-size:17px}.download-icon[data-v-78b183da]{font-size:40px}.custom-search-botton[data-v-78b183da]{width:100px;height:55px;right:9px;top:10px;bottom:3px}.custom-search-input[data-v-78b183da]{height:75px;font-size:20px}.aboutus[data-v-78b183da]{margin:50px 80px}.aboutus3[data-v-78b183da]{font-size:40px;margin-right:25px}.commitment[data-v-78b183da]{font-size:19px;line-height:35px;margin-right:23px}.pro-commitment[data-v-78b183da]{font-size:15px;margin-right:39px}.favorite[data-v-78b183da]{font-size:40px;letter-spacing:1px;margin:4% 0 5%}.grid-image2[data-v-78b183da]{width:45%!important}.cheese-img[data-v-78b183da]{width:27%!important;margin-top:-40px}.drinkspill-img[data-v-78b183da]{width:33%;margin-top:-13%}.header-button[data-v-78b183da]{width:90%!important}.header-button1[data-v-78b183da]{width:60%!important}}@media only screen and (min-width:1264px)and (max-width:1904px){header[data-v-78b183da]{background-color:#fff}.grid-image[data-v-78b183da]{width:100%;border-radius:10px;width:250px;height:200px;margin:5px}.grid-image2[data-v-78b183da]{width:50%!important}.first-head[data-v-78b183da]{margin-top:-160px}.love[data-v-78b183da]{width:150px;margin-bottom:-60px}.subcribe-newsletter[data-v-78b183da]{font-size:35px}.download[data-v-78b183da]{background-color:#000;border-radius:10px;width:250px}.send[data-v-78b183da]{font-size:60px;line-height:64px;font-weight:500}.share[data-v-78b183da]{font-size:1.8rem;line-height:30px}.favorite[data-v-78b183da]{font-size:45px;letter-spacing:1px;margin:2% 0 5%}.cravetag[data-v-78b183da]{font-size:27px}.breaker[data-v-78b183da]{margin-top:20px!important}.mt-n7[data-v-78b183da]{margin-top:-15px!important}.vcard[data-v-78b183da]{max-width:75%;height:400px!important;margin-top:-400px}.subscribe-card[data-v-78b183da]{max-width:55%;padding:50px}.custom-search-botton[data-v-78b183da]{width:90px;height:50px;right:9px;top:10px;bottom:3px}.custom-search-input[data-v-78b183da]{height:70px;font-size:20px;padding-left:30px}.aboutus[data-v-78b183da]{margin:100px 200px}.aboutus3[data-v-78b183da]{font-size:40px;margin-right:25px}.commitment[data-v-78b183da]{font-size:25px;line-height:35px;margin-right:29px}.pro-commitment[data-v-78b183da]{font-size:17px;margin-right:45px}.aboutus-image[data-v-78b183da]{width:100%}.cheese-img[data-v-78b183da]{width:30%!important;margin-top:-120px}.drinkspill-img[data-v-78b183da]{width:30%}.download-text5[data-v-78b183da]{font-size:49px;line-height:50px;margin-top:30px}.download-text6[data-v-78b183da]{font-size:39px;margin-bottom:50px}.download-text4[data-v-78b183da]{font-size:23px;font-weight:400;line-height:24px}.header-button[data-v-78b183da]{width:100%!important}.header-button1[data-v-78b183da]{width:60%!important}}',""]),t.exports=r},741:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(52),n(30),n(25),n(50),n(107)),d=n.n(o),c=n(373),l=n(374),v=n(378),m=n(369),f=n.n(m),x={name:"index",data:function(){return{drawer:!1,cravetag:this.value,nonexistent:!1,avtar:"",blogInfo:[],featuredpost:[],trimmeddetails:""}},props:{value:{type:String,default:""}},watch:{model:function(t){this.$emit("input",t)}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nobertokoyeve");case 3:n=e.sent,t.blogInfo=n.data.items,t.featuredpost=t.blogInfo[Object.keys(t.blogInfo)[0]],t.avtar=n.data.feed.image,t.trimmeddetails=t.trimdetails(t.featuredpost.description),console.log(t.featuredpost),console.log(t.trimmeddetails),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},components:{Applebutton:c.default,Googlebutton:l.default,Nav:v.default},methods:{gotoDashboard:function(){window.open("https://dashboard.firansefood.com")},trimdetails:function(t){var e=document.createElement("div");return e.innerHTML=t,t=e.innerText},getHumanDate:function(t){return f()(t,"YYYY-MM-DD").format("MMM DD, YYYY")}}},h=(n(676),n(75)),w=n(112),j=n.n(w),k=n(750),_=n(392),y=n(382),z=n(426),C=n(727),R=n(461),F=n(734),component=Object(h.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[r("Nav"),t._v(" "),r("v-row",{attrs:{dense:"","no-gutters":"",align:"center",justify:"space-around"}},[r("v-col",{staticClass:"first-head ml-sm-7 ml-sm-8",attrs:{cols:"11",md:"5",justify:"center"}},[r("p",{staticClass:"black--text send"},[t._v("\n        Blog coming soon 🥘.\n      ")])]),t._v(" "),r("v-col",{staticClass:"my-8",attrs:{cols:"12",md:"5",align:"center"}},[r("img",{staticClass:"maindish",attrs:{src:n(427),alt:""}})])],1),t._v(" "),r("v-img",{staticClass:"white--text",attrs:{src:this.featuredpost.thumbnail}}),t._v(" "),this.featuredpost?r("v-row",{staticClass:"m-5"},[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card",{staticClass:"mx-auto blogcard",attrs:{"max-width":"500"}},[r("v-img",{staticClass:"white--text",attrs:{src:this.featuredpost.thumbnail}}),t._v(" "),r("v-card-title",[t._v(t._s(this.featuredpost.title))]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[r("p",[t._v(t._s(this.trimmeddetails.substring(0,200)+"..."))])]),t._v(" "),r("p",[t._v(t._s(t.getHumanDate(this.featuredpost.pubDate)))])]),t._v(" "),r("v-card-actions",[r("a",{attrs:{href:this.featuredpost.link}},[r("v-btn",{attrs:{color:"orange"}},[t._v("\n                Read More\n              ")])],1)])],1)],1)],1):r("div",{staticClass:"mx-auto"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"amber"}})],1),t._v(" "),this.blogInfo&&this.blogInfo.length>0?r("v-row",t._l(this.blogInfo,(function(e){return r("v-col",{key:e.guid,attrs:{cols:"6",sm:"6"}},[r("v-card",{staticClass:"mx-auto blogcard",attrs:{"max-width":"500"}},[r("v-img",{staticClass:"white--text",attrs:{src:e.thumbnail,alt:"thumbnail"}}),t._v(" "),r("v-card-title",[t._v(t._s(e.title))]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[r("p",[t._v(t._s(t.trimdetails(e.description.substring(0,250)+"....")))])]),t._v(" "),r("p",[t._v(t._s(t.getHumanDate(e.pubDate)))])]),t._v(" "),r("v-card-actions",[r("a",{attrs:{href:e.link}},[r("v-btn",{attrs:{color:"orange"}},[t._v("\n                Read More\n              ")])],1)])],1)],1)})),1):r("div",{staticClass:"mx-auto"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"amber"}})],1),t._v(" "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{fill:"#342301","fill-opacity":"1",d:"M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,245.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"}})]),t._v(" "),r("footer",[r("v-row",{attrs:{justify:"center",dense:"","no-gutters":""}},[r("v-col",{attrs:{cols:"12",md:"10"}},[r("v-row",{staticClass:"mx-4",attrs:{"no-gutters":"",dense:""}},[r("v-col",{staticClass:"my-4",attrs:{cols:"6",sm:"3"}},[r("h6",[t._v("Company")]),t._v(" "),r("ul",[r("li",[t._v("About")]),t._v(" "),r("li",[t._v("Blog")]),t._v(" "),r("li",[t._v("Careers")]),t._v(" "),r("li",[t._v("Contact Us")])])]),t._v(" "),r("v-col",{staticClass:"my-4",attrs:{cols:"6",sm:"3"}},[r("h6",[t._v("Follow us")]),t._v(" "),r("ul",[r("li",[t._v("Facebook")]),t._v(" "),r("li",[t._v("Twitter")]),t._v(" "),r("li",[t._v("Instagram")])])]),t._v(" "),r("v-col",{staticClass:"my-4",attrs:{cols:"12",sm:"3"}},[r("h6",[t._v("Other")]),t._v(" "),r("ul",[r("li",[t._v("FAQs")]),t._v(" "),r("li",[t._v("Privacy Policy")])])]),t._v(" "),r("v-col",{staticClass:"my-10",attrs:{cols:"8",sm:"3"}},[r("Applebutton",{staticClass:"mb-5 header-button"}),t._v(" "),r("Googlebutton",{staticClass:"header-button"})],1)],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"endfooter",attrs:{cols:"12"}},[r("div",{staticClass:"text-center black--text"},[t._v("FiranseFood. ©2022")])])],1)],1)}),[],!1,null,"78b183da",null);e.default=component.exports;j()(component,{Nav:n(378).default,Applebutton:n(373).default,Googlebutton:n(374).default}),j()(component,{VBtn:k.a,VCard:_.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:z.a,VImg:C.a,VProgressCircular:R.a,VRow:F.a})}}]);