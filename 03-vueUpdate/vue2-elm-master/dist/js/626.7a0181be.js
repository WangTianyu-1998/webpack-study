"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[626],{9102:(e,t,o)=>{o.d(t,{A:()=>u});var r=o(3060);const s=e=>((0,r.pushScopeId)("data-v-7a683c4e"),e=e(),(0,r.popScopeId)(),e),n={class:"alet_container"},a={class:"tip_text_container"},i=s((()=>(0,r.createElementVNode)("div",{class:"tip_icon"},[(0,r.createElementVNode)("span"),(0,r.createElementVNode)("span")],-1))),l={class:"tip_text"};function c(e,t,o,s,c,d){return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("section",a,[i,(0,r.createElementVNode)("p",l,(0,r.toDisplayString)(o.alertText),1),(0,r.createElementVNode)("div",{class:"confrim",onClick:t[0]||(t[0]=(...e)=>d.closeTip&&d.closeTip(...e))},"确认")])])}const d={data(){return{positionY:0,timer:null}},mounted(){},props:["alertText"],methods:{closeTip(){this.$emit("closeTip")}}};var m=o(4621);const p=(0,m.A)(d,[["render",c],["__scopeId","data-v-7a683c4e"]]),u=p},2757:(e,t,o)=>{o.d(t,{A:()=>m});var r=o(3060);const s=e=>((0,r.pushScopeId)("data-v-32996121"),e=e(),(0,r.popScopeId)(),e),n={class:"loading_container"},a=s((()=>(0,r.createElementVNode)("svg",{class:"load_ellipse",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,r.createElementVNode)("ellipse",{cx:"26",cy:"10",rx:"26",ry:"10",style:{fill:"#ddd",stroke:"none"}})],-1)));function i(e,t,o,s,i,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",{class:"load_img",style:(0,r.normalizeStyle)({backgroundPositionY:-i.positionY%7*2.5+"rem"})},null,4),a])}const l={data(){return{positionY:0,timer:null}},mounted(){this.timer=setInterval((()=>{this.positionY++}),600)},beforeDestroy(){clearInterval(this.timer)}};var c=o(4621);const d=(0,c.A)(l,[["render",i],["__scopeId","data-v-32996121"]]),m=d},4653:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Y});var r=o(3060);const s=e=>((0,r.pushScopeId)("data-v-27d51b35"),e=e(),(0,r.popScopeId)(),e),n={class:"order_page"},a={class:"order_list_ul"},i=["src"],l={class:"order_item_right"},c=["onClick"],d={class:"order_item_right_header"},m={class:"order_header"},p={class:"ellipsis"},u=s((()=>(0,r.createElementVNode)("svg",{fill:"#333",class:"arrow_right"},[(0,r.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"})],-1))),h={class:"order_time"},g={class:"order_status"},v={class:"order_basket"},_={class:"order_name ellipsis"},f={class:"order_amount"},k={class:"order_again"};function E(e,t,o,s,E,N){const w=(0,r.resolveComponent)("head-top"),V=(0,r.resolveComponent)("compute-time"),y=(0,r.resolveComponent)("router-link"),T=(0,r.resolveComponent)("foot-guide"),x=(0,r.resolveComponent)("loading"),I=(0,r.resolveComponent)("router-view"),b=(0,r.resolveDirective)("load-more");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createVNode)(w,{"head-title":"订单列表","go-back":"true"}),(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("ul",a,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(E.orderList,(t=>((0,r.openBlock)(),(0,r.createElementBlock)("li",{class:"order_list_li",key:t.id},[(0,r.createElementVNode)("img",{src:E.imgBaseUrl+t.restaurant_image_url,class:"restaurant_image"},null,8,i),(0,r.createElementVNode)("section",l,[(0,r.createElementVNode)("section",{onClick:e=>N.showDetail(t)},[(0,r.createElementVNode)("header",d,[(0,r.createElementVNode)("section",m,[(0,r.createElementVNode)("h4",null,[(0,r.createElementVNode)("span",p,(0,r.toDisplayString)(t.restaurant_name),1),u]),(0,r.createElementVNode)("p",h,(0,r.toDisplayString)(t.formatted_created_at),1)]),(0,r.createElementVNode)("p",g,(0,r.toDisplayString)(t.status_bar.title),1)]),(0,r.createElementVNode)("section",v,[(0,r.createElementVNode)("p",_,(0,r.toDisplayString)(t.basket.group[0][0].name)+(0,r.toDisplayString)(t.basket.group[0].length>1?" 等"+t.basket.group[0].length+"件商品":""),1),(0,r.createElementVNode)("p",f,"¥"+(0,r.toDisplayString)(t.total_amount.toFixed(2)),1)])],8,c),(0,r.createElementVNode)("div",k,["等待支付"==t.status_bar.title?((0,r.openBlock)(),(0,r.createBlock)(V,{key:0,time:t.time_pass},null,8,["time"])):((0,r.openBlock)(),(0,r.createBlock)(y,{key:1,to:{path:"/shop",query:{geohash:e.geohash,id:t.restaurant_id}},tag:"span",class:"buy_again"},{default:(0,r.withCtx)((()=>[(0,r.createTextVNode)("再来一单")])),_:2},1032,["to"]))])])])))),128))])),[[b,N.loaderMore]]),(0,r.createVNode)(T),(0,r.createVNode)(r.Transition,{name:"loading"},{default:(0,r.withCtx)((()=>[(0,r.withDirectives)((0,r.createVNode)(x,null,null,512),[[r.vShow,E.showLoading]])])),_:1}),(0,r.createVNode)(r.Transition,{name:"router-slid",mode:"out-in"},{default:(0,r.withCtx)((()=>[(0,r.createVNode)(I)])),_:1})])}var N=o(275),w=o(8724);const V={class:"page"};function y(e,t,o,s,n,a){const i=(0,r.resolveComponent)("alert-tip");return(0,r.openBlock)(),(0,r.createElementBlock)("div",V,[(0,r.createElementVNode)("span",{class:"rem_time",style:{color:"orange","border-width":"1px","border-style":"solid","border-color":"orange"},onClick:t[0]||(t[0]=(...e)=>a.gotoPay&&a.gotoPay(...e))},(0,r.toDisplayString)(a.remaining),1),n.showAlert?((0,r.openBlock)(),(0,r.createBlock)(i,{key:0,onCloseTip:t[1]||(t[1]=e=>n.showAlert=!1),alertText:n.alertText},null,8,["alertText"])):(0,r.createCommentVNode)("",!0)])}var T=o(9102);const x={data(){return{countNum:900,showAlert:!1,alertText:null}},mounted(){this.countNum-=this.numTime,this.remainingTime()},props:["time"],components:{alertTip:T.A},methods:{closeTip(){this.$emit("closeTip")},remainingTime(){clearInterval(this.timer),this.timer=setInterval((()=>{this.countNum--,0==this.countNum&&(clearInterval(this.timer),this.showAlert=!0,this.alertText="支付超时")}),1e3)},gotoPay(){this.showAlert=!0,this.alertText="暂不开放支付接口"}},computed:{remaining:function(){let e=parseInt(this.countNum/60),t=parseInt(this.countNum%60);return e<10&&(e="0"+e),t<10&&(t="0"+t),"去支付(还剩"+e+"分"+t+"秒)"},numTime:function(){return-1!==this.time.toString().indexOf("分钟")?60*parseInt(this.time):parseInt(this.time)}}};var I=o(4621);const b=(0,I.A)(x,[["render",y],["__scopeId","data-v-7ade998d"]]),B=b;var D=o(2757),S=o(9802),A=o(5284),C=o(6497),L=o(9120);const R={data(){return{orderList:null,offset:0,preventRepeat:!1,showLoading:!0,imgBaseUrl:L.o8}},mounted(){this.initData()},mixins:[S.U],components:{headTop:w.A,footGuide:A.A,loading:D.A,computeTime:B},computed:{...(0,N.mapState)(["userInfo","geohash"])},methods:{...(0,N.mapMutations)(["SAVE_ORDER"]),async initData(){if(this.userInfo&&this.userInfo.user_id){let e=await(0,C.n7)(this.userInfo.user_id,this.offset);this.orderList=[...e],this.hideLoading()}else this.hideLoading()},async loaderMore(){if(this.preventRepeat)return;this.preventRepeat=!0,this.showLoading=!0,this.offset+=10;let e=await(0,C.n7)(this.userInfo.user_id,this.offset);this.orderList=[...this.orderList,...e],this.hideLoading(),e.length<10||(this.preventRepeat=!1)},showDetail(e){this.SAVE_ORDER(e),this.preventRepeat=!1,this.$router.push("/order/orderDetail")},hideLoading(){this.showLoading=!1}},watch:{userInfo:function(e){e&&e.user_id&&!this.orderList&&this.initData()}}},P=(0,I.A)(R,[["render",E],["__scopeId","data-v-27d51b35"]]),Y=P},9802:(e,t,o)=>{o.d(t,{U:()=>s,d:()=>n});var r=o(2467);o(9120);const s={directives:{"load-more":{bind:(e,t)=>{let o,s,n,a,i,l,c,d,m=window.screen.height,p=e.attributes.type&&e.attributes.type.value,u=2;2==p?(c=e,d=e.children[0]):(c=document.body,d=e),e.addEventListener("touchstart",(()=>{o=d.clientHeight,s=e.offsetTop,n=(0,r.gd)(e,"paddingBottom"),a=(0,r.gd)(e,"marginBottom")}),!1),e.addEventListener("touchmove",(()=>{g()}),!1),e.addEventListener("touchend",(()=>{l=c.scrollTop,h()}),!1);const h=()=>{i=requestAnimationFrame((()=>{c.scrollTop!=l?(l=c.scrollTop,h()):(cancelAnimationFrame(i),o=d.clientHeight,g())}))},g=()=>{c.scrollTop+m>=o+s+n+a-u&&t.value()}}}}},n={methods:{getImgPath(e){let t;if(!e)return"//elm.cangdu.org/img/default.jpg";t=-1!==e.indexOf("jpeg")?".jpeg":".png";let o="/"+e.substr(0,1)+"/"+e.substr(1,2)+"/"+e.substr(3)+t;return"https://fuss10.elemecdn.com"+o}}}}}]);
//# sourceMappingURL=626.7a0181be.js.map