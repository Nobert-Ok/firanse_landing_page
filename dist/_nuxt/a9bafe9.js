(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{376:function(e,t,n){"use strict";n(30),n(25),n(34),n(41),n(27),n(42);var r=n(19),o=n(11),c=(n(22),n(69),n(136),n(6),n(78),n(0)),l=n(45),d=n(64);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=c.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(e){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(l.b)("style must be an object",this),data):"string"==typeof data.class?(Object(l.b)("class must be an object",this),data):(Object(d.d)(e)?data.style=v(v({},data.style),{},{"background-color":"".concat(e),"border-color":"".concat(e)}):e&&(data.class=v(v({},data.class),{},Object(o.a)({},e,!0))),data)},setTextColor:function(e){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(l.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(l.b)("class must be an object",this),data;if(Object(d.d)(e))data.style=v(v({},data.style),{},{color:"".concat(e),"caret-color":"".concat(e)});else if(e){var t=e.toString().trim().split(" ",2),n=Object(r.a)(t,2),c=n[0],f=n[1];data.class=v(v({},data.class),{},Object(o.a)({},c+"--text",!0)),f&&(data.class["text--"+f]=!0)}return data}}})},381:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));n(44),n(6),n(23),n(48),n(31),n(25),n(50),n(54),n(32),n(34),n(41),n(27),n(42);var r=n(11),o=n(19),c=(n(22),n(69),n(136),n(30),n(43),n(20));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var h=/;(?![^(]*\))/g,m=/:(.*)/;function y(style){var e,t={},n=f(style.split(h));try{for(n.s();!(e=n.n()).done;){var r=e.value.split(m),l=Object(o.a)(r,2),d=l[0],v=l[1];(d=d.trim())&&("string"==typeof v&&(v=v.trim()),t[Object(c.c)(d)]=v)}}catch(e){n.e(e)}finally{n.f()}return t}function _(){for(var e,t={},i=arguments.length;i--;)for(var n=0,r=Object.keys(arguments[i]);n<r.length;n++)switch(e=r[n]){case"class":case"directives":arguments[i][e]&&(t[e]=x(t[e],arguments[i][e]));break;case"style":arguments[i][e]&&(t[e]=w(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=O(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]=d(d({},arguments[i][e]),t[e]);break;default:t[e]||(t[e]=arguments[i][e])}return t}function w(e,source){return e?source?(e=Object(c.x)("string"==typeof e?y(e):e)).concat("string"==typeof source?y(source):source):e:source}function x(e,source){return source?e&&e?Object(c.x)(e).concat(source):source:e}function O(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var e={},i=2;i--;){var t=i<0||arguments.length<=i?void 0:arguments[i];for(var n in t)t[n]&&(e[n]?e[n]=[].concat(t[n],e[n]):e[n]=t[n])}return e}},391:function(e,t,n){"use strict";var r=n(3),o=n(247);r({target:"String",proto:!0,forced:n(248)("small")},{small:function(){return o(this,"small","","")}})},393:function(e,t,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("0d5788c2",content,!0,{sourceMap:!1})},395:function(e,t,n){"use strict";var r=n(0);function o(e){return function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(t,r)||this.$delete(this.$data[e],r);for(var o in t)this.$set(this.$data[e],o,t[o])}}t.a=r.a.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",o("attrs$"),{immediate:!0}),this.$watch("$listeners",o("listeners$"),{immediate:!0})}})},396:function(e,t,n){"use strict";n(391);var r=n(0);t.a=r.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},397:function(e,t,n){"use strict";var r=n(24);n(6);function o(e,t,n){var r,o=null==(r=e._observe)?void 0:r[n.context._uid];o&&(o.observer.unobserve(e),delete e._observe[n.context._uid])}var c={inserted:function(e,t,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var c=t.modifiers||{},l=t.value,d="object"===Object(r.a)(l)?l:{handler:l,options:{}},f=d.handler,v=d.options,h=new IntersectionObserver((function(){var r,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,v=null==(r=e._observe)?void 0:r[n.context._uid];if(v){var h=l.some((function(e){return e.isIntersecting}));!f||c.quiet&&!v.init||c.once&&!h&&!v.init||f(l,d,h),h&&c.once?o(e,t,n):v.init=!0}}),v);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:h},h.observe(e)}},unbind:o};t.a=c},398:function(e,t,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("6b715e77",content,!0,{sourceMap:!1})},399:function(e,t,n){var r=n(66)(!1);r.push([e.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),e.exports=r},415:function(e,t,n){"use strict";var r=n(3),o=n(247);r({target:"String",proto:!0,forced:n(248)("fixed")},{fixed:function(){return o(this,"tt","","")}})},416:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var r=n(0),o=n(20),c={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.a.extend({name:"positionable",props:e.length?Object(o.k)(c,e):c})}t.a=l()},420:function(e,t,n){"use strict";n(30),n(25),n(34),n(41),n(27),n(42);var r,o=n(11),c=(n(391),n(6),n(51),n(68),n(22),n(246),n(136),n(137),n(44),n(398),n(395)),l=n(376),d=n(396),f=n(166),v=n(20),h=n(0),m=n(165);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}!function(e){e.xSmall="12px",e.small="16px",e.default="24px",e.medium="28px",e.large="36px",e.xLarge="40px"}(r||(r={}));var w=Object(m.a)(c.a,l.a,d.a,f.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(v.v)(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(v.s)(e).find((function(t){return e[t]}));return t&&r[t]||Object(v.g)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:_({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var e=this.getSize(),t=_(_({},this.getDefaultData()),{},{style:e?{fontSize:e,height:e,width:e}:void 0});return this.applyColors(t),t},applyColors:function(data){data.class=_(_({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(e,t){var n=[],data=this.getDefaultData(),r="material-icons",o=e.indexOf("-"),c=o<=-1;c?n.push(e):function(e){return["fas","far","fal","fab","fad","fak"].some((function(t){return e.includes(t)}))}(r=e.slice(0,o))&&(r=""),data.class[r]=!0,data.class[e]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),t(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(e,t){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=e.component;return data.props=e.props,data.nativeOn=data.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(component,data)])}},render:function(e){var t=this.getIcon();return"string"==typeof t?function(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});t.a=h.a.extend({name:"v-icon",$_wrapperFor:w,functional:!0,render:function(e,t){var data=t.data,n=t.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),e(w,data,r?[r]:n)}})},428:function(e,t,n){"use strict";n(393)},429:function(e,t,n){var r=n(66)(!1);r.push([e.i,"input[data-v-188d4abc]{box-sizing:border-box;background:#fdfdfd;border:1px solid #e0e0e0;border-radius:4px;font-size:1rem;padding:10px 20px;text-rendering:auto;display:inline;width:100%}@media screen and (min-width:768px){input[data-v-188d4abc]{width:100%}}div[data-v-188d4abc]{width:100%;margin:25px 0}label[data-v-188d4abc]{font-size:16px;font-style:normal;font-weight:400;line-height:22px;letter-spacing:.5px;text-align:left;margin:10px 0;display:block}input[data-v-188d4abc]:focus{outline:none}",""]),e.exports=r},434:function(e,t,n){"use strict";n(23),n(43),n(77),n(246),n(444);var r=n(20);function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function c(e){return"TouchEvent"===e.constructor.name}function l(e){return"KeyboardEvent"===e.constructor.name}var d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=0,o=0;if(!l(e)){var d=t.getBoundingClientRect(),f=c(e)?e.touches[e.touches.length-1]:e;r=f.clientX-d.left,o=f.clientY-d.top}var v=0,h=.3;t._ripple&&t._ripple.circle?(h=.15,v=t.clientWidth/2,v=n.center?v:v+Math.sqrt(Math.pow(r-v,2)+Math.pow(o-v,2))/4):v=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var m="".concat((t.clientWidth-2*v)/2,"px"),y="".concat((t.clientHeight-2*v)/2,"px"),_=n.center?m:"".concat(r-v,"px"),w=n.center?y:"".concat(o-v,"px");return{radius:v,scale:h,x:_,y:w,centerX:m,centerY:y}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var r=document.createElement("span"),c=document.createElement("span");r.appendChild(c),r.className="v-ripple__container",n.class&&(r.className+=" ".concat(n.class));var l=d(e,t,n),f=l.radius,v=l.scale,h=l.x,m=l.y,y=l.centerX,_=l.centerY,w="".concat(2*f,"px");c.className="v-ripple__animation",c.style.width=w,c.style.height=w,t.appendChild(r);var x=window.getComputedStyle(t);x&&"static"===x.position&&(t.style.position="relative",t.dataset.previousPosition="static"),c.classList.add("v-ripple__animation--enter"),c.classList.add("v-ripple__animation--visible"),o(c,"translate(".concat(h,", ").concat(m,") scale3d(").concat(v,",").concat(v,",").concat(v,")")),c.dataset.activated=String(performance.now()),setTimeout((function(){c.classList.remove("v-ripple__animation--enter"),c.classList.add("v-ripple__animation--in"),o(c,"translate(".concat(y,", ").concat(_,") scale3d(1,1,1)"))}),0)}},v=function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var n=t[t.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var r=performance.now()-Number(n.dataset.activated),o=Math.max(250-r,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((function(){1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),o)}}}};function h(e){return void 0===e||!!e}function m(e){var t={},element=e.currentTarget;if(element&&element._ripple&&!element._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,c(e))element._ripple.touched=!0,element._ripple.isTouch=!0;else if(element._ripple.isTouch)return;if(t.center=element._ripple.centered||l(e),element._ripple.class&&(t.class=element._ripple.class),c(e)){if(element._ripple.showTimerCommit)return;element._ripple.showTimerCommit=function(){f(e,element,t)},element._ripple.showTimer=window.setTimeout((function(){element&&element._ripple&&element._ripple.showTimerCommit&&(element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null)}),80)}else f(e,element,t)}}function y(e){var element=e.currentTarget;if(element&&element._ripple){if(window.clearTimeout(element._ripple.showTimer),"touchend"===e.type&&element._ripple.showTimerCommit)return element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null,void(element._ripple.showTimer=setTimeout((function(){y(e)})));window.setTimeout((function(){element._ripple&&(element._ripple.touched=!1)})),v(element)}}function _(e){var element=e.currentTarget;element&&element._ripple&&(element._ripple.showTimerCommit&&(element._ripple.showTimerCommit=null),window.clearTimeout(element._ripple.showTimer))}var w=!1;function x(e){w||e.keyCode!==r.r.enter&&e.keyCode!==r.r.space||(w=!0,m(e))}function O(e){w=!1,y(e)}function j(e){!0===w&&(w=!1,y(e))}function k(e,t,n){var r=h(t.value);r||v(e),e._ripple=e._ripple||{},e._ripple.enabled=r;var o=t.value||{};o.center&&(e._ripple.centered=!0),o.class&&(e._ripple.class=t.value.class),o.circle&&(e._ripple.circle=o.circle),r&&!n?(e.addEventListener("touchstart",m,{passive:!0}),e.addEventListener("touchend",y,{passive:!0}),e.addEventListener("touchmove",_,{passive:!0}),e.addEventListener("touchcancel",y),e.addEventListener("mousedown",m),e.addEventListener("mouseup",y),e.addEventListener("mouseleave",y),e.addEventListener("keydown",x),e.addEventListener("keyup",O),e.addEventListener("blur",j),e.addEventListener("dragstart",y,{passive:!0})):!r&&n&&S(e)}function S(e){e.removeEventListener("mousedown",m),e.removeEventListener("touchstart",m),e.removeEventListener("touchend",y),e.removeEventListener("touchmove",_),e.removeEventListener("touchcancel",y),e.removeEventListener("mouseup",y),e.removeEventListener("mouseleave",y),e.removeEventListener("keydown",x),e.removeEventListener("keyup",O),e.removeEventListener("dragstart",y),e.removeEventListener("blur",j)}var C={bind:function(e,t,n){k(e,t,!1)},unbind:function(e){delete e._ripple,S(e)},update:function(e,t){t.value!==t.oldValue&&k(e,t,h(t.oldValue))}};t.a=C},436:function(e,t,n){"use strict";function r(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,"a",(function(){return r}))},437:function(e,t,n){"use strict";n.r(t);var r={name:"InputField",props:{label:{type:String,required:!1},required:{type:Boolean,default:!0,required:!1},placeholder:{type:String,required:!1},text:{type:String,required:!0},errormsg:{type:String,required:!1}},data:function(){return{word:this.text}}},o=(n(428),n(75)),c=n(112),l=n.n(c),d=n(738),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-text-field",{staticClass:"mb-n4",attrs:{type:"text",outlined:"",label:e.label,required:e.required,placeholder:e.placeholder,"error-messages":e.errormsg},on:{change:function(t){return e.$emit("get",e.word)}},model:{value:e.word,callback:function(t){e.word=t},expression:"word"}})],1)}),[],!1,null,"188d4abc",null);t.default=component.exports;l()(component,{VTextField:d.a})},444:function(e,t,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(67).default)("04604cc2",content,!0,{sourceMap:!1})},445:function(e,t,n){var r=n(66)(!1);r.push([e.i,".v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1);opacity:.25}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(.4,0,.2,1);opacity:0}",""]),e.exports=r},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),o=(n(43),n(0)),c=n(45);function l(e,t){return function(){return Object(c.c)("The ".concat(e," component must be used inside a ").concat(t))}}function d(e,t,n){var c=t&&n?{register:l(t,n),unregister:l(t,n)}:null;return o.a.extend({name:"registrable-inject",inject:Object(r.a)({},e,{default:c})})}},452:function(e,t,n){"use strict";var r={inserted:function(e,t,n){var r=t.value,o=t.options||{passive:!0};window.addEventListener("resize",r,o),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:r,options:o},t.modifiers&&t.modifiers.quiet||r()},unbind:function(e,t,n){var r;if(null!=(r=e._onResize)&&r[n.context._uid]){var o=e._onResize[n.context._uid],c=o.callback,l=o.options;window.removeEventListener("resize",c,l),delete e._onResize[n.context._uid]}}};t.a=r}}]);