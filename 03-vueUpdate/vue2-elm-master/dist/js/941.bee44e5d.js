"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[941],{1001:(e,t,o)=>{o.d(t,{A:()=>N});var s=o(3060);const n=e=>((0,s.pushScopeId)("data-v-1183baec"),e=e(),(0,s.popScopeId)(),e),a={class:"cart_module"},l={key:0,class:"cart_button"},r=n((()=>(0,s.createElementVNode)("svg",null,[(0,s.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-minus"})],-1))),c=[r],i={key:0,class:"cart_num"},d=n((()=>(0,s.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-add"},null,-1))),p=[d],m={key:1,class:"choose_specification"},u={class:"choose_icon_container"},h=n((()=>(0,s.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#cart-minus"},null,-1))),g=[h],f={key:0,class:"cart_num"};function k(e,t,o,n,r,d){return(0,s.openBlock)(),(0,s.createElementBlock)("section",a,[o.foods.specifications.length?((0,s.openBlock)(),(0,s.createElementBlock)("section",m,[(0,s.createElementVNode)("section",u,[(0,s.createVNode)(s.Transition,{name:"showReduce"},{default:(0,s.withCtx)((()=>[d.foodNum?((0,s.openBlock)(),(0,s.createElementBlock)("svg",{key:0,class:"specs_reduce_icon",onClick:t[2]||(t[2]=(...e)=>d.showReduceTip&&d.showReduceTip(...e))},g)):(0,s.createCommentVNode)("",!0)])),_:1}),(0,s.createVNode)(s.Transition,{name:"fade"},{default:(0,s.withCtx)((()=>[d.foodNum?((0,s.openBlock)(),(0,s.createElementBlock)("span",f,(0,s.toDisplayString)(d.foodNum),1)):(0,s.createCommentVNode)("",!0)])),_:1}),(0,s.createElementVNode)("span",{class:"show_chooselist",onClick:t[3]||(t[3]=e=>d.showChooseList(o.foods))},"选规格")])])):((0,s.openBlock)(),(0,s.createElementBlock)("section",l,[(0,s.createVNode)(s.Transition,{name:"showReduce"},{default:(0,s.withCtx)((()=>[d.foodNum?((0,s.openBlock)(),(0,s.createElementBlock)("span",{key:0,onClick:t[0]||(t[0]=e=>d.removeOutCart(o.foods.category_id,o.foods.item_id,o.foods.specfoods[0].food_id,o.foods.specfoods[0].name,o.foods.specfoods[0].price,"",o.foods.specfoods[0].packing_fee,o.foods.specfoods[0].sku_id,o.foods.specfoods[0].stock))},c)):(0,s.createCommentVNode)("",!0)])),_:1}),(0,s.createVNode)(s.Transition,{name:"fade"},{default:(0,s.withCtx)((()=>[d.foodNum?((0,s.openBlock)(),(0,s.createElementBlock)("span",i,(0,s.toDisplayString)(d.foodNum),1)):(0,s.createCommentVNode)("",!0)])),_:1}),((0,s.openBlock)(),(0,s.createElementBlock)("svg",{class:"add_icon",onClick:t[1]||(t[1]=e=>d.addToCart(o.foods.category_id,o.foods.item_id,o.foods.specfoods[0].food_id,o.foods.specfoods[0].name,o.foods.specfoods[0].price,"",o.foods.specfoods[0].packing_fee,o.foods.specfoods[0].sku_id,o.foods.specfoods[0].stock,e))},p))]))])}var _=o(275);const v={data(){return{showMoveDot:[]}},mounted(){},computed:{...(0,_.mapState)(["cartList"]),shopCart:function(){return Object.assign({},this.cartList[this.shopId])},foodNum:function(){let e=this.foods.category_id,t=this.foods.item_id;if(this.shopCart&&this.shopCart[e]&&this.shopCart[e][t]){let o=0;return Object.values(this.shopCart[e][t]).forEach(((e,t)=>{o+=e.num})),o}return 0}},props:["foods","shopId"],methods:{...(0,_.mapMutations)(["ADD_CART","REDUCE_CART"]),removeOutCart(e,t,o,s,n,a,l,r,c){this.foodNum>0&&this.REDUCE_CART({shopid:this.shopId,category_id:e,item_id:t,food_id:o,name:s,price:n,specs:a,packing_fee:l,sku_id:r,stock:c})},addToCart(e,t,o,s,n,a,l,r,c,i){this.ADD_CART({shopid:this.shopId,category_id:e,item_id:t,food_id:o,name:s,price:n,specs:a,packing_fee:l,sku_id:r,stock:c});let d=i.target.getBoundingClientRect().left,p=i.target.getBoundingClientRect().bottom;this.showMoveDot.push(!0),this.$emit("showMoveDot",this.showMoveDot,d,p)},showChooseList(e){this.$emit("showChooseList",e)},showReduceTip(){this.$emit("showReduceTip")}}};var E=o(4621);const w=(0,E.A)(v,[["render",k],["__scopeId","data-v-1183baec"]]),N=w},4065:(e,t,o)=>{o.d(t,{A:()=>f});var s=o(3060);const n=e=>((0,s.pushScopeId)("data-v-149e3d30"),e=e(),(0,s.popScopeId)(),e),a={class:"rating_container"},l={class:"star_container"},r=n((()=>(0,s.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"},null,-1))),c=[r],i={class:"star_container"},d=n((()=>(0,s.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#star"},null,-1))),p=[d];function m(e,t,o,n,r,d){return(0,s.openBlock)(),(0,s.createElementBlock)("div",a,[(0,s.createElementVNode)("section",l,[((0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(5,(e=>(0,s.createElementVNode)("svg",{class:"grey_fill",key:e},c))),64))]),(0,s.createElementVNode)("div",{style:(0,s.normalizeStyle)("width:"+2*o.rating/5+"rem"),class:"star_overflow"},[(0,s.createElementVNode)("section",i,[((0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(5,(e=>(0,s.createElementVNode)("svg",{class:"orange_fill",key:e},p))),64))])],4)])}const u={data(){return{}},mounted(){},props:["rating"]};var h=o(4621);const g=(0,h.A)(u,[["render",m],["__scopeId","data-v-149e3d30"]]),f=g},8724:(e,t,o)=>{o.d(t,{A:()=>v});var s=o(3060);const n=e=>((0,s.pushScopeId)("data-v-3a98f49d"),e=e(),(0,s.popScopeId)(),e),a={id:"head_top"},l=n((()=>(0,s.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,s.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),r=[l],c={key:0,class:"user_avatar"},i=n((()=>(0,s.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),d=[i],p={key:1,class:"login_span"},m={key:2,class:"title_head ellipsis"},u={class:"title_text"};function h(e,t,o,n,l,i){const h=(0,s.resolveComponent)("router-link");return(0,s.openBlock)(),(0,s.createElementBlock)("header",a,[(0,s.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,s.renderSlot)(e.$slots,"search",{},void 0,!0),o.goBack?((0,s.openBlock)(),(0,s.createElementBlock)("section",{key:0,class:"head_goback",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},r)):(0,s.createCommentVNode)("",!0),o.signinUp?((0,s.openBlock)(),(0,s.createBlock)(h,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,s.withCtx)((()=>[e.userInfo?((0,s.openBlock)(),(0,s.createElementBlock)("svg",c,d)):((0,s.openBlock)(),(0,s.createElementBlock)("span",p,"登录|注册"))])),_:1},8,["to"])):(0,s.createCommentVNode)("",!0),o.headTitle?((0,s.openBlock)(),(0,s.createElementBlock)("section",m,[(0,s.createElementVNode)("span",u,(0,s.toDisplayString)(o.headTitle),1)])):(0,s.createCommentVNode)("",!0),(0,s.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,s.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,s.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,s.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var g=o(275);const f={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,g.mapState)(["userInfo"])},methods:{...(0,g.mapActions)(["getUserInfo"])}};var k=o(4621);const _=(0,k.A)(f,[["render",h],["__scopeId","data-v-3a98f49d"]]),v=_},9941:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V});var s=o(3060);const n=e=>((0,s.pushScopeId)("data-v-6107aa12"),e=e(),(0,s.popScopeId)(),e),a={class:"rating_page"},l={class:"header_img"},r=["src"],c=n((()=>(0,s.createElementVNode)("div",{class:"cover"},null,-1))),i={class:"description"},d={class:"detail_container"},p={class:"detail_left"},m={class:"rating_sale"},u=n((()=>(0,s.createElementVNode)("span",null,"评分",-1))),h={key:0};function g(e,t,o,n,g,f){const k=(0,s.resolveComponent)("head-top"),_=(0,s.resolveComponent)("rating-star");return(0,s.openBlock)(),(0,s.createElementBlock)("div",a,[(0,s.createVNode)(k,{"head-title":g.name,"go-back":"true"},null,8,["head-title"]),(0,s.createElementVNode)("section",l,[(0,s.createElementVNode)("img",{src:g.imgBaseUrl+g.image_path,class:"food_img"},null,8,r),c]),(0,s.createElementVNode)("p",i,(0,s.toDisplayString)(g.description),1),(0,s.createElementVNode)("section",d,[(0,s.createElementVNode)("section",p,[(0,s.createElementVNode)("p",null,(0,s.toDisplayString)(g.name),1),(0,s.createElementVNode)("div",m,[u,(0,s.createVNode)(_,{rating:g.rating},null,8,["rating"]),(0,s.createElementVNode)("span",null,(0,s.toDisplayString)(g.rating.toFixed(1)),1)]),(0,s.createElementVNode)("p",null,[(0,s.createElementVNode)("span",null,"月售 "+(0,s.toDisplayString)(g.month_sales)+"单",1),(0,s.createElementVNode)("span",null,"售价 ¥"+(0,s.toDisplayString)(g.foods.specfoods[0].price),1),g.foods.specfoods.length?((0,s.openBlock)(),(0,s.createElementBlock)("span",h,"起")):(0,s.createCommentVNode)("",!0)]),(0,s.createElementVNode)("p",null,[(0,s.createElementVNode)("span",null,"评论数 "+(0,s.toDisplayString)(g.rating_count),1),(0,s.createElementVNode)("span",null,"好评率 "+(0,s.toDisplayString)(g.satisfy_rate)+"%",1)])])])])}var f=o(8724),k=o(9802),_=o(4065),v=o(1001),E=o(9120);const w={data(){return{image_path:null,description:null,month_sales:null,name:null,rating:null,rating_count:null,satisfy_rate:null,foods:null,shopId:null,imgBaseUrl:E.o8}},created(){this.image_path=this.$route.query.image_path,this.description=this.$route.query.description,this.month_sales=this.$route.query.month_sales,this.name=this.$route.query.name,this.rating=this.$route.query.rating,this.rating_count=this.$route.query.rating_count,this.satisfy_rate=this.$route.query.satisfy_rate,this.foods=this.$route.query.foods,this.shopId=this.$route.query.shopId},mixins:[k.d],components:{headTop:f.A,ratingStar:_.A,buyCart:v.A},props:[],methods:{}};var N=o(4621);const y=(0,N.A)(w,[["render",g],["__scopeId","data-v-6107aa12"]]),V=y},9802:(e,t,o)=>{o.d(t,{U:()=>n,d:()=>a});var s=o(2467);o(9120);const n={directives:{"load-more":{bind:(e,t)=>{let o,n,a,l,r,c,i,d,p=window.screen.height,m=e.attributes.type&&e.attributes.type.value,u=2;2==m?(i=e,d=e.children[0]):(i=document.body,d=e),e.addEventListener("touchstart",(()=>{o=d.clientHeight,n=e.offsetTop,a=(0,s.gd)(e,"paddingBottom"),l=(0,s.gd)(e,"marginBottom")}),!1),e.addEventListener("touchmove",(()=>{g()}),!1),e.addEventListener("touchend",(()=>{c=i.scrollTop,h()}),!1);const h=()=>{r=requestAnimationFrame((()=>{i.scrollTop!=c?(c=i.scrollTop,h()):(cancelAnimationFrame(r),o=d.clientHeight,g())}))},g=()=>{i.scrollTop+p>=o+n+a+l-u&&t.value()}}}}},a={methods:{getImgPath(e){let t;if(!e)return"//elm.cangdu.org/img/default.jpg";t=-1!==e.indexOf("jpeg")?".jpeg":".png";let o="/"+e.substr(0,1)+"/"+e.substr(1,2)+"/"+e.substr(3)+t;return"https://fuss10.elemecdn.com"+o}}}}}]);
//# sourceMappingURL=941.bee44e5d.js.map