webpackJsonp([1],{HanR:function(t,e){},IBBb:function(t,e){},"N+zL":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},i=o("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},n,!1,null,null,null);e.default=i.exports},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav"},[e("router-link",{attrs:{to:"/home"}},[e("i",{staticClass:"iconfont icon-shouye"}),e("span",[this._v("首页")])]),this._v(" "),e("router-link",{attrs:{to:"/list"}},[e("i",{staticClass:"iconfont icon-liebiao"}),e("span",[this._v("列表")])]),this._v(" "),e("router-link",{attrs:{to:"/collect"}},[e("i",{staticClass:"iconfont icon-shoucang"}),e("span",[this._v("收藏")])]),this._v(" "),e("router-link",{attrs:{to:"/add"}},[e("i",{staticClass:"iconfont icon-icon--"}),e("span",[this._v("添加")])])],1)},staticRenderFns:[]};var s={name:"App",components:{Tab:o("VU/8")({data:function(){return{}},methods:{},computed:{},components:{},props:{}},i,!1,function(t){o("jdek")},null,null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fadeIn"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1)],1),this._v(" "),e("transition",{attrs:{name:"fadeIn"}},[this.$route.meta.keepAlive?this._e():e("router-view")],1),this._v(" "),e("Tab")],1)},staticRenderFns:[]};var r=o("VU/8")(s,a,!1,function(t){o("HanR")},null,null).exports,c=o("/ocq"),u=o("Xxa5"),l=o.n(u),d=o("exGp"),p=o.n(d),v={data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}},computed:{},components:{},props:{back:{type:Boolean,default:!1}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._t("default"),this._v(" "),this.back?e("i",{staticClass:"iconfont icon-fanhui-yuanshijituantubiao",on:{click:this.goBack}}):this._e()],2)},staticRenderFns:[]};var h=o("VU/8")(v,f,!1,function(t){o("IBBb")},"data-v-0f0b0847",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperSlides,function(t,o){return e("swiper-slide",{key:o},[e("img",{staticStyle:{width:"100%"},attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]},b=o("VU/8")({name:"carousel",props:["swiperSlides"],data:function(){return{swiperOption:{autoplay:3500,setWrapperSize:!0,pagination:".swiper-pagination",observeParents:!0}}}},m,!1,null,null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"loader"},[e("div",{staticClass:"loading-2"},[e("i"),this._v(" "),e("i"),this._v(" "),e("i"),this._v(" "),e("i"),this._v(" "),e("i")])])])}]};var _=o("VU/8")({data:function(){return{}},methods:{},computed:{},components:{},props:{}},k,!1,function(t){o("exXA")},"data-v-58a83727",null).exports,g=o("mtWM"),w=o.n(g);w.a.defaults.baseURL="http://localhost:3000",w.a.interceptors.response.use(function(t){return t.data});var x=function(t){return w.a.delete("/book?id="+t)},C={created:function(){this.getLunBo(),this.getReMen(),this.importBook()},mounted:function(){},data:function(){return{sliders:[],hotBooks:[],loading:!0}},methods:{importBook:function(){this.$store.commit("IMPORT_BOOK")},getLunBo:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/sliders");case 2:t.sliders=e.sent;case 3:case"end":return e.stop()}},e,t)}))()},getReMen:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/hot");case 2:t.hotBooks=e.sent,t.loading=!1;case 4:case"end":return e.stop()}},e,t)}))()}},computed:{},components:{MHeader:h,Swiper:b,Loading:_},props:{}},$={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("MHeader",[t._v("首页")]),t._v(" "),o("div",{staticClass:"content"},[o("Loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),o("Swiper",{attrs:{swiperSlides:t.sliders}}),t._v(" "),o("div",{staticClass:"container"},[o("h3",[t._v("热门图书")]),t._v(" "),o("ul",t._l(t.hotBooks,function(e,n){return o("router-link",{key:n,attrs:{to:{name:"detail",params:{bid:e.bookId}},tag:"li"}},[o("img",{attrs:{src:e.bookCover}}),t._v("\n          "+t._s(e.bookName)+"\n        ")])}))])],1)],1)},staticRenderFns:[]};var I=o("VU/8")(C,$,!1,function(t){o("drFe")},"data-v-56f0fbec",null).exports,y=o("mvHQ"),N=o.n(y),M={created:function(){this.storeBook=JSON.parse(localStorage.getItem("data"))},data:function(){return{storeBook:[]}},watch:{storeBook:{handler:function(){this.$store.commit("CHANGE_BOOK",this.storeBook),localStorage.setItem("data",N()(this.storeBook))},deep:!0}},methods:{dislike:function(t){this.storeBook=this.storeBook.filter(function(e){return e.bookId!==t.bookId})}},computed:{},components:{MHeader:h},props:{}},P={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("MHeader",[t._v("收藏夹")]),t._v(" "),o("ul",{staticClass:"content"},t._l(this.$store.state.books,function(e,n){return o("router-link",{key:n,attrs:{to:{name:"detail",params:{bid:e.bookId}},tag:"li"}},[o("img",{attrs:{src:e.bookCover}}),t._v(" "),o("div",[o("h4",[t._v(t._s(e.bookName))]),t._v(" "),o("p",[t._v(t._s(e.bookInfo))]),t._v(" "),o("button",{on:{click:function(o){o.stopPropagation(),t.dislike(e)}}},[t._v("取消收藏")])])])}))],1)},staticRenderFns:[]};var E=o("VU/8")(M,P,!1,function(t){o("QbMK")},"data-v-4d9be500",null).exports,B=o("fZjL"),O=o.n(B),L={data:function(){return{book:{}}},created:function(){this.getData()},watch:{$route:function(){this.getData()}},methods:{update:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o=t.bid,n=t.book,w.a.put("/book?id="+o,n);case 2:t.$router.push("/list");case 3:case"end":return e.stop()}var o,n},e,t)}))()},getData:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o=t.bid,w.a.get("/book?id="+o);case 2:t.book=e.sent,0===O()(t.book).length&&t.$router.push("/list");case 4:case"end":return e.stop()}var o},e,t)}))()}},computed:{bid:function(){return this.$route.params.bid}},components:{MHeader:h},props:{}},S={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail"},[o("MHeader",{attrs:{back:!0}},[t._v("书籍详情")]),t._v(" "),o("ul",[o("li",[o("label",{attrs:{for:"bookName"}},[t._v("书名")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName",readonly:""},domProps:{value:t.book.bookName},on:{input:function(e){e.target.composing||t.$set(t.book,"bookName",e.target.value)}}})]),t._v(" "),o("li",[o("label",{attrs:{for:"bookPrice"}},[t._v("价格")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",id:"bookPrice",readonly:""},domProps:{value:t.book.bookPrice},on:{input:function(e){e.target.composing||t.$set(t.book,"bookPrice",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),o("li",[o("label",{attrs:{for:"bookInfo"}},[t._v("信息")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:t.book.bookInfo},on:{input:function(e){e.target.composing||t.$set(t.book,"bookInfo",e.target.value)}}})]),t._v(" "),o("li",[o("button",{on:{click:t.update}},[t._v("确认修改")])])])],1)},staticRenderFns:[]};var T=o("VU/8")(L,S,!1,function(t){o("aWEk")},"data-v-566b3a26",null).exports,H={data:function(){return{book:{}}},methods:{add:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o=t.book,w.a.post("/book",o);case 2:t.$router.push("/list");case 3:case"end":return e.stop()}var o},e,t)}))()}},computed:{},components:{MHeader:h},props:{}},R={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("MHeader",[t._v("添加")]),t._v(" "),o("div",{staticClass:"content"},[o("ul",[o("li",[o("label",{attrs:{for:"bookName"}},[t._v("书的名称")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName"},domProps:{value:t.book.bookName},on:{input:function(e){e.target.composing||t.$set(t.book,"bookName",e.target.value)}}})]),t._v(" "),o("li",[o("label",{attrs:{for:"bookPrice"}},[t._v("书的价格")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",id:"bookPrice"},domProps:{value:t.book.bookPrice},on:{input:function(e){e.target.composing||t.$set(t.book,"bookPrice",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),o("li",[o("label",{attrs:{for:"bookInfo"}},[t._v("书的信息")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:t.book.bookInfo},on:{input:function(e){e.target.composing||t.$set(t.book,"bookInfo",e.target.value)}}})]),t._v(" "),o("li",[o("label",{attrs:{for:"bookCover"}},[t._v("书的封面")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.bookCover,expression:"book.bookCover"}],attrs:{type:"text",id:"bookCover"},domProps:{value:t.book.bookCover},on:{input:function(e){e.target.composing||t.$set(t.book,"bookCover",e.target.value)}}})]),t._v(" "),o("li",[o("button",{on:{click:t.add}},[t._v("添加")])])])])],1)},staticRenderFns:[]};var U=o("VU/8")(H,R,!1,function(t){o("c/lt")},"data-v-4508aad4",null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"dialog"},[this._t("default")],2)},staticRenderFns:[]};var V={data:function(){return{books:[],offset:0,hasMore:!0,loading:!1,IsMoved:!1,finish:!1}},created:function(){this.getData()},mounted:function(){var t=this;this.$nextTick(function(){t.MoveLoad()})},methods:{finishLoad:function(){var t=this;this.finish=!0,setTimeout(function(){t.finish=!1},1e3)},isCollected:function(t){return!this.$store.state.books.find(function(e){return e.bookId===t.bookId})},collect:function(t){this.$store.commit("COLLECT_BOOK",t),localStorage.setItem("data",N()(this.$store.state.books))},MoveLoad:function(){var t=this,e=this.$refs.list,o=e.offsetTop,n=0;e.addEventListener("touchstart",function(i){if(0==e.scrollTop){var s=i.touches[0].pageY,a=function i(a){t.isMoved=!0;var c=a.touches[0].pageY;(n=c-s)>0?e.style.top=n+o+"px":(e.removeEventListener("touchmove",i),e.removeEventListener("touchend",r))},r=function i(s){t.isMoved&&(t.isMoved=!1,clearInterval(t.timer2),t.timer2=setInterval(function(){if(n<=0)return clearInterval(t.timer2),n=0,e.style.top=o+"px",e.removeEventListener("touchmove",a),e.removeEventListener("touchend",i),t.hasMore=!0,t.offset=0,t.books=[],void t.getData();n-=2,e.style.top=o+n+"px"},1))};e.addEventListener("touchmove",a),e.addEventListener("touchend",r)}},!1)},loadMore:function(){var t=this;clearTimeout(this.timer1),this.timer1=setTimeout(function(){var e=t.$refs.list;e.scrollTop+e.clientHeight+20>e.scrollHeight&&(t.getData(),t.hasMore||t.finishLoad())},100)},remove:function(t){var e=this;return p()(l.a.mark(function o(){return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,x(t);case 2:e.books=e.books.filter(function(e){return e.bookId!==t});case 3:case"end":return o.stop()}},o,e)}))()},getData:function(){var t=this;return p()(l.a.mark(function e(){var o,n,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.hasMore||t.loading){e.next=11;break}return t.loading=!0,e.next=4,s=t.offset,w.a.get("/page?offset="+s);case 4:o=e.sent,n=o.hasMore,i=o.books,t.books=t.books.concat(i),t.hasMore=n,t.loading=!1,t.offset=t.books.length;case 11:case"end":return e.stop()}var s},e,t)}))()}},computed:{},components:{MHeader:h,Loading:_,Dialog:o("VU/8")({data:function(){return{}},methods:{},computed:{},components:{},props:{}},F,!1,function(t){o("Xauz")},"data-v-2f597a97",null).exports},props:{}},j={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("MHeader",[t._v("图书列表")]),t._v(" "),this.loading?o("Loading"):t._e(),t._v(" "),o("div",{ref:"list",staticClass:"content",on:{scroll:t.loadMore}},[o("ul",t._l(t.books,function(e,n){return o("router-link",{key:n,attrs:{to:{name:"detail",params:{bid:e.bookId}},tag:"li"}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.bookCover,expression:"book.bookCover"}]}),t._v(" "),o("div",[o("h4",[t._v(t._s(e.bookName))]),t._v(" "),o("p",[t._v(t._s(e.bookInfo))]),t._v(" "),o("b",[t._v(t._s("￥"+e.bookPrice))]),t._v(" "),t.isCollected(e)?o("div",{staticClass:"btn"},[o("button",{staticClass:"btn1",on:{click:function(o){o.stopPropagation(),t.collect(e)}}},[t._v("收藏")]),t._v(" "),o("button",{staticClass:"btn2",on:{click:function(o){o.stopPropagation(),t.remove(e.bookId)}}},[t._v("不喜欢")])]):o("div",{staticClass:"collect"},[o("i",{staticClass:"iconfont icon-shoucang"}),t._v("已收藏\n          ")])])])}))]),t._v(" "),t.finish?o("Dialog",[t._v("已经到底了！")]):t._e()],1)},staticRenderFns:[]};var A=o("VU/8")(V,j,!1,function(t){o("VuUY")},"data-v-02ae7eac",null).exports;n.a.use(c.a);var D,K=new c.a({routes:[{path:"/",redirect:"/home"},{path:"/home/",name:"home",component:I,meta:{keepAlive:!0,title:"首页"}},{path:"/detail/:bid",component:T,name:"detail",meta:{title:"详情页"}},{path:"/collect/",name:"collect",component:E,meta:{title:"收藏页"}},{path:"/add",component:U,meta:{title:"添加页"}},{path:"/list",component:A,meta:{keepAlive:!0,title:"列表页"}}]}),z=o("F3EI"),Y=o.n(z),W=(o("v2ns"),o("cTzj")),X=o.n(W),G=o("NYxO"),Q=o("sax8"),J=o.n(Q),q=o("bOdI"),Z=o.n(q),tt=o("Gu7T"),et=o.n(tt),ot=(D={},Z()(D,"COLLECT_BOOK",function(t,e){t.books.find(function(t){return t.bookId===e.bookId})?t.books=[].concat(et()(t.books)):t.books.push(e)}),Z()(D,"IMPORT_BOOK",function(t){t.books=JSON.parse(localStorage.getItem("data"))||t.books,t.books=[].concat(et()(t.books))}),Z()(D,"CHANGE_BOOK",function(t,e){t.books=[].concat(et()(e))}),D),nt={count:function(t){return t.books.reduce(function(t,e){},0)}};n.a.use(G.a);var it=new G.a.Store({state:{books:[]},mutations:ot,getters:nt,strict:!0,plugins:[J.a]});n.a.use(Y.a),n.a.config.productionTip=!1,n.a.use(X.a,{preLoad:1.3,error:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=101945704,1599501728&fm=27&gp=0.jpg",loading:"http://uelibrary.com/ue_lib/Uploads/article/20160523/1463977446558234.jpg",attempt:1}),K.beforeEach(function(t,e,o){document.title=t.meta.title,o()}),new n.a({el:"#app",router:K,store:it,components:{App:r},template:"<App/>"})},QbMK:function(t,e){},VuUY:function(t,e){},Xauz:function(t,e){},aWEk:function(t,e){},"c/lt":function(t,e){},drFe:function(t,e){},exXA:function(t,e){},jdek:function(t,e){},pYmz:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=o("gsqX"));var i={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var o in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(o)&&t.options[o]&&(e=!0,t.defaultSwiperClasses[o]=t.options[o]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),o("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},a=o("VU/8")(i,s,!1,null,null,null);e.default=a.exports},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d70208dad3bc0f0fd0ce.js.map