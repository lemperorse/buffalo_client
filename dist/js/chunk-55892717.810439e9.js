(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55892717"],{"0cab":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-gray-100"},[i("div",{staticClass:"container w-full mx-auto"},[i("div",{staticClass:"w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"},[i("v-container",[i("h2",{staticClass:"font-bold text-3xl"},[i("i",{staticClass:"em em-clipboard text-4xl",attrs:{"aria-role":"presentation","aria-label":""}}),t._v(" ค้นหาใบพันธุ์ประวัติ")]),i("v-breadcrumbs",{attrs:{items:t.bc,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),i("hr",{staticClass:"border-b-2 border-gray-400 "})],1),i("div",{staticClass:"flex flex-wrap"},[i("div",{staticClass:"w-full md:w-1/1 xl:w-1/1 p-0 mb-3 md:p-3"},[i("div",{staticClass:"bg-white border-b-4 border-green-500 rounded shadow-xl p-2"},[i("div",{staticClass:"flex flex-row items-center"},[i("v-text-field",{attrs:{dense:"",clearable:"",flat:"","hide-details":"","append-icon":"mdi-magnify",label:"ค้นหาตามกลุ่ม,อำเภอ,ตำบล,จังหวัด,ชื่อฟาร์ม",outlined:"","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])]),i("div",{staticClass:"w-full md:w-1/1 xl:w-1/1 "},[i("div",{staticClass:"flex flex-wrap"},t._l(8,(function(e){return i("div",{staticClass:"w-full md:w-1/2 xl:w-1/4 p-0 md:p-3 mb-3"},[i("div",{staticClass:"bg-white border-b-4 border-green-600 rounded shadow-xl p-2"},[i("div",{staticClass:"flex flex-row items-center"},[i("div",{staticClass:"flex-shrink pr-4"},[i("v-avatar",{attrs:{color:"orange",size:"80"}},[i("v-img",{attrs:{src:"https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}})],1)],1),i("div",{staticClass:"flex-1 text-right md:text-center border-b-1 border-green-600"},[t._m(0,!0),i("h5",{staticClass:"font-bold uppercase text-sm"},[t._v("พ่อเปี้ย(1231)")]),i("button",{staticClass:"text-gray-600 p-2",on:{click:function(e){return t.$router.push("cer")}}},[t._v("ดูรายละเอียด")])])])])])})),0),i("div",{staticClass:"text-center mt-4"},[i("v-pagination",{attrs:{color:"green",length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h5",{staticClass:"font-bold uppercase text-base"},[i("span",{staticClass:"border-b border-dashed border-green-500 "},[t._v("เจ้าของ : นายแดง")])])}],n=(i("c975"),i("a434"),{components:{},data:function(){return{bc:[{text:"ค้นหาใบพันธุ์ประวัติ",disabled:!1,href:"/#/user/search"}],search:"",sex:["ตัวผู้","ตัวเมีย"],color:["ดำ","น้ำตาล"],from:["พ่อค้าคนกลาง","คลอด"],status:["ท้อง","ไม่ท้อง"],items:["มีชีวิต","ไม่มีชีวิต"],dialog:!1,dialog1:!0,radios:"ทั้งหมด",row:null,checkbox:!1,checkbox1:!1,checkbox2:!1,radioGroup:1,switch1:!0,page:1}},methods:{editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.desserts.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(e,1)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()},save1:function(t){this.$refs.menu.save(t)}}}),r=n,l=(i("3a6d"),i("2877")),o=i("6544"),c=i.n(o),u=i("8212"),d=i("2bc5"),h=i("a523"),v=i("132d"),p=i("adda"),b=i("891e"),f=i("8654"),g=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=g.exports;c()(g,{VAvatar:u["a"],VBreadcrumbs:d["a"],VContainer:h["a"],VIcon:v["a"],VImg:p["a"],VPagination:b["a"],VTextField:f["a"]})},"17b3":function(t,e,i){},"2bc5":function(t,e,i){"use strict";i("a15b");var a=i("5530"),s=(i("abd3"),i("ade3")),n=i("1c87"),r=i("58df"),l=Object(r["a"])(n["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(s["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return t("li",[t(i,Object(a["a"])(Object(a["a"])({},s),{},{attrs:Object(a["a"])(Object(a["a"])({},s.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots["default"])])}}),o=i("80d2"),c=Object(o["i"])("v-breadcrumbs__divider","li"),u=i("7560");e["a"]=Object(r["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(a["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],a=0;a<this.items.length;a++){var s=this.items[a];i.push(s.text),e?t.push(this.$scopedSlots.item({item:s})):t.push(this.$createElement(l,{key:i.join("."),props:s},[s.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots["default"]||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"3a6d":function(t,e,i){"use strict";var a=i("6804"),s=i.n(a);s.a},6804:function(t,e,i){},"891e":function(t,e,i){"use strict";i("99af"),i("d81d"),i("0d03"),i("a9e3"),i("d3b7"),i("e25e"),i("25f0"),i("4795");var a=i("2909"),s=i("5530"),n=(i("17b3"),i("9d26")),r=i("dc22"),l=i("a9ad"),o=i("de2c"),c=i("7560"),u=i("58df");e["a"]=Object(u["a"])(l["a"],Object(o["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(s["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,s=Math.floor(e/2),n=this.length-s+1+i;if(this.value>s&&this.value<n){var r=this.value-s+2,l=this.value+s-2-i;return[1,"..."].concat(Object(a["a"])(this.range(r,l)),["...",this.length])}if(this.value===s){var o=this.value+s-1-i;return[].concat(Object(a["a"])(this.range(1,o)),["...",this.length])}if(this.value===n){var c=this.value-s+1;return[1,"..."].concat(Object(a["a"])(this.range(c,this.length)))}return[].concat(Object(a["a"])(this.range(1,s)),["..."],Object(a["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button","aria-label":s},on:i?{}:{click:a}},[t(n["a"],[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),s=e===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},abd3:function(t,e,i){}}]);
//# sourceMappingURL=chunk-55892717.810439e9.js.map