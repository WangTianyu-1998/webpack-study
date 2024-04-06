"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[783],{2757:(e,t,o)=>{o.d(t,{A:()=>m});var l=o(3060);const a=e=>((0,l.pushScopeId)("data-v-32996121"),e=e(),(0,l.popScopeId)(),e),r={class:"loading_container"},n=a((()=>(0,l.createElementVNode)("svg",{class:"load_ellipse",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,l.createElementVNode)("ellipse",{cx:"26",cy:"10",rx:"26",ry:"10",style:{fill:"#ddd",stroke:"none"}})],-1)));function s(e,t,o,a,s,i){return(0,l.openBlock)(),(0,l.createElementBlock)("div",r,[(0,l.createElementVNode)("div",{class:"load_img",style:(0,l.normalizeStyle)({backgroundPositionY:-s.positionY%7*2.5+"rem"})},null,4),n])}const i={data(){return{positionY:0,timer:null}},mounted(){this.timer=setInterval((()=>{this.positionY++}),600)},beforeDestroy(){clearInterval(this.timer)}};var c=o(4621);const d=(0,c.A)(i,[["render",s],["__scopeId","data-v-32996121"]]),m=d},8724:(e,t,o)=>{o.d(t,{A:()=>V});var l=o(3060);const a=e=>((0,l.pushScopeId)("data-v-3a98f49d"),e=e(),(0,l.popScopeId)(),e),r={id:"head_top"},n=a((()=>(0,l.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,l.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),s=[n],i={key:0,class:"user_avatar"},c=a((()=>(0,l.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),d=[c],m={key:1,class:"login_span"},p={key:2,class:"title_head ellipsis"},u={class:"title_text"};function g(e,t,o,a,n,c){const g=(0,l.resolveComponent)("router-link");return(0,l.openBlock)(),(0,l.createElementBlock)("header",r,[(0,l.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,l.renderSlot)(e.$slots,"search",{},void 0,!0),o.goBack?((0,l.openBlock)(),(0,l.createElementBlock)("section",{key:0,class:"head_goback",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},s)):(0,l.createCommentVNode)("",!0),o.signinUp?((0,l.openBlock)(),(0,l.createBlock)(g,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,l.withCtx)((()=>[e.userInfo?((0,l.openBlock)(),(0,l.createElementBlock)("svg",i,d)):((0,l.openBlock)(),(0,l.createElementBlock)("span",m,"登录|注册"))])),_:1},8,["to"])):(0,l.createCommentVNode)("",!0),o.headTitle?((0,l.openBlock)(),(0,l.createElementBlock)("section",p,[(0,l.createElementVNode)("span",u,(0,l.toDisplayString)(o.headTitle),1)])):(0,l.createCommentVNode)("",!0),(0,l.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,l.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,l.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,l.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var h=o(275);const _={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,h.mapState)(["userInfo"])},methods:{...(0,h.mapActions)(["getUserInfo"])}};var E=o(4621);const N=(0,E.A)(_,[["render",g],["__scopeId","data-v-3a98f49d"]]),V=N},4783:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var l=o(3060);const a=e=>((0,l.pushScopeId)("data-v-0f4c27dc"),e=e(),(0,l.popScopeId)(),e),r={class:"order_detail_page"},n={key:0,id:"scroll_section",class:"scroll_container"},s={class:"scroll_insert"},i={class:"order_titel"},c=["src"],d={class:"food_list"},m={class:"shop_name"},p=["src"],u=a((()=>(0,l.createElementVNode)("svg",{fill:"#333",class:"arrow_right"},[(0,l.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"})],-1))),g={class:"food_list_ul"},h={class:"food_name ellipsis"},_={class:"quantity_price"},E={class:"deliver_fee"},N=a((()=>(0,l.createElementVNode)("span",null,"配送费",-1))),V={class:"pay_ment"},v={class:"order_detail_style"},k=a((()=>(0,l.createElementVNode)("header",null,"配送信息",-1))),f={class:"item_style"},y=a((()=>(0,l.createElementVNode)("p",{class:"item_left"},"送达时间：",-1))),D={class:"item_right"},w={class:"item_style"},B=a((()=>(0,l.createElementVNode)("p",{class:"item_left"},"送货地址：",-1))),S={class:"item_right"},x=a((()=>(0,l.createElementVNode)("section",{class:"item_style"},[(0,l.createElementVNode)("p",{class:"item_left"},"配送方式："),(0,l.createElementVNode)("div",{class:"item_right"},[(0,l.createElementVNode)("p",null,"蜂鸟专送")])],-1))),I={class:"order_detail_style"},b=a((()=>(0,l.createElementVNode)("header",null,"订单信息",-1))),C={class:"item_style"},T=a((()=>(0,l.createElementVNode)("p",{class:"item_left"},"订单号：",-1))),A={class:"item_right"},L=a((()=>(0,l.createElementVNode)("section",{class:"item_style"},[(0,l.createElementVNode)("p",{class:"item_left"},"支付方式："),(0,l.createElementVNode)("div",{class:"item_right"},[(0,l.createElementVNode)("p",null,"在线支付")])],-1))),U={class:"item_style"},$=a((()=>(0,l.createElementVNode)("p",{class:"item_left"},"下单时间：",-1))),q={class:"item_right"};function F(e,t,o,a,F,Y){const j=(0,l.resolveComponent)("head-top"),H=(0,l.resolveComponent)("router-link"),P=(0,l.resolveComponent)("loading");return(0,l.openBlock)(),(0,l.createElementBlock)("div",r,[(0,l.createVNode)(j,{"head-title":"订单详情","go-back":"true"}),F.showLoading?(0,l.createCommentVNode)("",!0):((0,l.openBlock)(),(0,l.createElementBlock)("section",n,[(0,l.createElementVNode)("section",s,[(0,l.createElementVNode)("section",i,[(0,l.createElementVNode)("img",{src:F.imgBaseUrl+e.orderDetail.restaurant_image_url},null,8,c),(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(e.orderDetail.status_bar.title),1),(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(e.orderDetail.timeline_node.description),1),(0,l.createVNode)(H,{class:"order_again",to:{path:"/shop",query:{geohash:e.geohash,id:e.orderDetail.restaurant_id}}},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)("再来一单")])),_:1},8,["to"])]),(0,l.createElementVNode)("section",d,[(0,l.createVNode)(H,{class:"food_list_header",to:{path:"/shop",query:{geohash:e.geohash,id:e.orderDetail.restaurant_id}}},{default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("div",m,[(0,l.createElementVNode)("img",{src:F.imgBaseUrl+e.orderDetail.restaurant_image_url},null,8,p),(0,l.createElementVNode)("span",null,(0,l.toDisplayString)(e.orderDetail.restaurant_name),1)]),u])),_:1},8,["to"]),(0,l.createElementVNode)("ul",g,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.orderDetail.basket.group[0],(e=>((0,l.openBlock)(),(0,l.createElementBlock)("li",null,[(0,l.createElementVNode)("p",h,(0,l.toDisplayString)(e.name),1),(0,l.createElementVNode)("div",_,[(0,l.createElementVNode)("span",null,"X"+(0,l.toDisplayString)(e.quantity),1),(0,l.createElementVNode)("span",null,"¥"+(0,l.toDisplayString)(e.price),1)])])))),256))]),(0,l.createElementVNode)("div",E,[N,(0,l.createElementVNode)("span",null,(0,l.toDisplayString)(e.orderDetail.basket.deliver_fee&&e.orderDetail.basket.deliver_fee.price||0),1)]),(0,l.createElementVNode)("div",V,"实付"+(0,l.toDisplayString)(e.orderDetail.total_amount.toFixed(2)),1)]),(0,l.createElementVNode)("section",v,[k,(0,l.createElementVNode)("section",f,[y,(0,l.createElementVNode)("div",D,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(F.orderData.deliver_time),1)])]),(0,l.createElementVNode)("section",w,[B,(0,l.createElementVNode)("div",S,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(F.orderData.consignee),1),(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(F.orderData.phone),1),(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(F.orderData.address),1)])]),x]),(0,l.createElementVNode)("section",I,[b,(0,l.createElementVNode)("section",C,[T,(0,l.createElementVNode)("div",A,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(e.orderDetail.id),1)])]),L,(0,l.createElementVNode)("section",U,[$,(0,l.createElementVNode)("div",q,[(0,l.createElementVNode)("p",null,(0,l.toDisplayString)(e.orderDetail.formatted_created_at),1)])])])])])),(0,l.createVNode)(l.Transition,{name:"loading"},{default:(0,l.withCtx)((()=>[F.showLoading?((0,l.openBlock)(),(0,l.createBlock)(P,{key:0})):(0,l.createCommentVNode)("",!0)])),_:1})])}var Y=o(275),j=o(8724),H=o(9802),P=o(6497),z=o(2757),K=o(3210),O=o(9120);const X={data(){return{showLoading:!0,orderData:null,imgBaseUrl:O.o8}},mounted(){this.initData()},mixins:[H.d],components:{headTop:j.A,loading:z.A},computed:{...(0,Y.mapState)(["orderDetail","geohash","userInfo"])},methods:{async initData(){this.userInfo&&this.userInfo.user_id&&(this.orderData=await(0,P.KU)(this.userInfo.user_id,this.orderDetail.unique_id),this.showLoading=!1,this.$nextTick((()=>{new K.A("#scroll_section",{deceleration:.001,bounce:!0,swipeTime:1800,click:!0})})))}},watch:{userInfo:function(e){e&&e.user_id&&this.initData()}}};var G=o(4621);const J=(0,G.A)(X,[["render",F],["__scopeId","data-v-0f4c27dc"]]),M=J},9802:(e,t,o)=>{o.d(t,{U:()=>a,d:()=>r});var l=o(2467);o(9120);const a={directives:{"load-more":{bind:(e,t)=>{let o,a,r,n,s,i,c,d,m=window.screen.height,p=e.attributes.type&&e.attributes.type.value,u=2;2==p?(c=e,d=e.children[0]):(c=document.body,d=e),e.addEventListener("touchstart",(()=>{o=d.clientHeight,a=e.offsetTop,r=(0,l.gd)(e,"paddingBottom"),n=(0,l.gd)(e,"marginBottom")}),!1),e.addEventListener("touchmove",(()=>{h()}),!1),e.addEventListener("touchend",(()=>{i=c.scrollTop,g()}),!1);const g=()=>{s=requestAnimationFrame((()=>{c.scrollTop!=i?(i=c.scrollTop,g()):(cancelAnimationFrame(s),o=d.clientHeight,h())}))},h=()=>{c.scrollTop+m>=o+a+r+n-u&&t.value()}}}}},r={methods:{getImgPath(e){let t;if(!e)return"//elm.cangdu.org/img/default.jpg";t=-1!==e.indexOf("jpeg")?".jpeg":".png";let o="/"+e.substr(0,1)+"/"+e.substr(1,2)+"/"+e.substr(3)+t;return"https://fuss10.elemecdn.com"+o}}}}}]);
//# sourceMappingURL=783.750df5ac.js.map