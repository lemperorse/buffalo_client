(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc9ad6b6"],{"2bc5":function(t,e,a){"use strict";a("a15b");var s=a("5530"),r=(a("abd3"),a("ade3")),i=a("1c87"),l=a("58df"),n=Object(l["a"])(i["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return t("li",[t(a,Object(s["a"])(Object(s["a"])({},r),{},{attrs:Object(s["a"])(Object(s["a"])({},r.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots["default"])])}}),d=a("80d2"),c=Object(d["i"])("v-breadcrumbs__divider","li"),o=a("7560");e["a"]=Object(l["a"])(o["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],s=0;s<this.items.length;s++){var r=this.items[s];a.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(n,{key:a.join("."),props:r},[r.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots["default"]||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"2fa4":function(t,e,a){"use strict";a("20f6");var s=a("80d2");e["a"]=Object(s["i"])("spacer","div","v-spacer")},"6cc0":function(t,e,a){},abd3:function(t,e,a){},d4cb:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-gray-100"},[a("div",{staticClass:"container w-full mx-auto"},[a("div",{staticClass:"w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"},[a("v-container",[a("h2",{staticClass:"font-bold text-3xl"},[a("i",{staticClass:"em em-man_in_tuxedo text-4xl",attrs:{"aria-role":"presentation","aria-label":""}}),t._v(" ข้อมูลส่วนตัว")]),a("v-breadcrumbs",{attrs:{items:t.bc,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),a("hr",{staticClass:"border-b-2 border-gray-400 "})],1),t._m(0),a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full md:w-1/1 xl:w-1/1 p-0 md:p-3"},[a("div",{staticClass:"bg-white border-b-4 border-blue-500  rounded  shadow-xl  p-2"},[a("v-tabs",[a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v("mdi-account")]),t._v(" ข้อมูลส่วนตัว ")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v("mdi-cog")]),t._v(" ตั้งค่า ")],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",{staticClass:"font-bold text-2xl"},[t._v("ข้อมูลส่วนตัว")])]),a("v-card-text",[a("div",[a("v-expansion-panels",{attrs:{multiple:"",flat:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("h5",{staticClass:"font-bold uppercase text-gray-700 text-xl"},[t._v("รายละเอียด")])]),a("v-expansion-panel-content",[a("v-text-field",{attrs:{value:"dang1234",label:"ชื่อผู้ใช้งาน",readonly:"","prepend-inner-icon":"mdi-account"}}),a("v-text-field",{attrs:{value:"นายแดง มีชัย",label:"ชื่อ-นามสกุล","prepend-inner-icon":"mdi-card-account-details-outline"}}),a("v-text-field",{attrs:{value:"dang1234@gmail.com",label:"อีเมล","prepend-inner-icon":"mdi-email"}})],1)],1)],1)],1)]),a("v-card-title",[a("v-spacer"),a("button",{staticClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},[t._v(" แก้ไข ")])],1)],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",{staticClass:"font-bold text-2xl"},[t._v("รหัสผ่าน")])]),a("v-card-text",[a("div",[a("v-expansion-panels",{attrs:{multiple:"",flat:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("h5",{staticClass:"font-bold uppercase text-gray-700 text-xl"},[t._v("ตั้งค่ารหัสผ่าน")])]),a("v-expansion-panel-content",[a("v-text-field",{attrs:{value:"dang1234",label:"รหัสผ่านเก่า",type:"password","prepend-inner-icon":"mdi-lock"}}),a("v-text-field",{attrs:{value:"123456789",label:"รหัสผ่านใหม่",type:"password","prepend-inner-icon":"mdi-lock"}}),a("v-text-field",{attrs:{value:"123456789",label:"ยืนยันรหัสผ่าน",type:"password","prepend-inner-icon":"mdi-lock"}})],1)],1)],1)],1)]),a("v-card-title",[a("v-spacer"),a("button",{staticClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},[t._v(" แก้ไข ")])],1)],1)],1)],1)],1)])])],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-row flex-wrap p-0 mb-3 md:p-3"},[a("div",{staticClass:"mx-auto w-full md:w-2/3"},[a("div",{staticClass:"rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased bgcardprofile"},[a("div",{staticClass:"md:w-1/3 w-full"},[a("img",{staticClass:"rounded-lg shadow-lg antialiased",attrs:{src:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"}})]),a("div",{staticClass:"md:w-2/3 w-full px-3 flex flex-row flex-wrap"},[a("div",{staticClass:"w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"},[a("div",{staticClass:"text-2xl text-white leading-tight"},[t._v("นายแดง มีชัย")]),a("div",{staticClass:"text-normal text-gray-300 hover:text-gray-400 cursor-pointer"},[a("span",{staticClass:"border-b border-dashed border-gray-500 pb-1"},[t._v("ผู้ดูแลระบบ")])]),a("div",{staticClass:"text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"},[t._v("เข้าสู่ระบบครั้งล่าสุด: "),a("b",[t._v("2 ที่ผ่านมา")])])])])])])])}],i={data:function(){return{bc:[{text:"ข้อมูลส่วนตัว",disabled:!1,href:"/#/admin/profile"}],panel:[0,1,2,3]}}},l=i,n=(a("f1ad"),a("2877")),d=a("6544"),c=a.n(d),o=a("2bc5"),p=a("b0af"),b=a("99d9"),v=a("a523"),u=a("cd55"),f=a("49e2"),m=a("c865"),x=a("0393"),h=a("132d"),g=a("2fa4"),w=a("71a3"),C=a("c671"),_=a("fe57"),y=a("8654"),j=Object(n["a"])(l,s,r,!1,null,"7e0cd3bb",null);e["default"]=j.exports;c()(j,{VBreadcrumbs:o["a"],VCard:p["a"],VCardText:b["b"],VCardTitle:b["c"],VContainer:v["a"],VExpansionPanel:u["a"],VExpansionPanelContent:f["a"],VExpansionPanelHeader:m["a"],VExpansionPanels:x["a"],VIcon:h["a"],VSpacer:g["a"],VTab:w["a"],VTabItem:C["a"],VTabs:_["a"],VTextField:y["a"]})},f1ad:function(t,e,a){"use strict";var s=a("6cc0"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-fc9ad6b6.d4c14734.js.map