webpackJsonp([1],{"0pPi":function(t,a){},"1uuo":function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},r,!1,function(t){s("0pPi")},null,null).exports,n=s("/ocq"),l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;$("a").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500),!1});var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary nav_principal"},[s("a",{staticClass:"navbar-brand nav_item",attrs:{href:"#"}},[t._v("B52 Days")]),t._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("¿Qué es?")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Clase de cortesía")])])])])]),t._v(" "),s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),t._v(" "),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),t._v(" "),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),t._v(" "),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item active"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://i.ytimg.com/vi/eDKEC3GRJRo/maxresdefault.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/08/16/getting-back-into-exercise.jpg?w968",alt:""}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://www.t-nation.com/system/publishing/articles/10005823/original/The-Combo-Exercise-Thats-Just-Plain-Silly.png?1516126325",alt:""}})])]),t._v(" "),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._v(" "),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Next")])])]),t._v(" "),s("div",[s("iframe",{attrs:{width:"900",height:"700",src:"https://s3-us-west-2.amazonaws.com/videosdoritos/Drake+-+In+My+Feelings.mp4",frameborder:"0",allowfullscreen:""}})])])}]};var c=s("VU/8")({methods:{}},o,!1,function(t){s("QzzZ")},null,null).exports;e.a.use(n.a);var v=new n.a({routes:[{path:"/",name:"MainPage",component:c}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:v,components:{App:i},template:"<App/>"})},QzzZ:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.adb0366054f2ee4b8695.js.map