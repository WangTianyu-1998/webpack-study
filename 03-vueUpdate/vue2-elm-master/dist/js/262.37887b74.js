"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[262],{9102:(e,A,t)=>{t.d(A,{A:()=>E});var a=t(3060);const o=e=>((0,a.pushScopeId)("data-v-7a683c4e"),e=e(),(0,a.popScopeId)(),e),n={class:"alet_container"},d={class:"tip_text_container"},c=o((()=>(0,a.createElementVNode)("div",{class:"tip_icon"},[(0,a.createElementVNode)("span"),(0,a.createElementVNode)("span")],-1))),s={class:"tip_text"};function l(e,A,t,o,l,r){return(0,a.openBlock)(),(0,a.createElementBlock)("div",n,[(0,a.createElementVNode)("section",d,[c,(0,a.createElementVNode)("p",s,(0,a.toDisplayString)(t.alertText),1),(0,a.createElementVNode)("div",{class:"confrim",onClick:A[0]||(A[0]=(...e)=>r.closeTip&&r.closeTip(...e))},"确认")])])}const r={data(){return{positionY:0,timer:null}},mounted(){},props:["alertText"],methods:{closeTip(){this.$emit("closeTip")}}};var B=t(4621);const i=(0,B.A)(r,[["render",l],["__scopeId","data-v-7a683c4e"]]),E=i},8724:(e,A,t)=>{t.d(A,{A:()=>k});var a=t(3060);const o=e=>((0,a.pushScopeId)("data-v-3a98f49d"),e=e(),(0,a.popScopeId)(),e),n={id:"head_top"},d=o((()=>(0,a.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,a.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),c=[d],s={key:0,class:"user_avatar"},l=o((()=>(0,a.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),r=[l],B={key:1,class:"login_span"},i={key:2,class:"title_head ellipsis"},E={class:"title_text"};function p(e,A,t,o,d,l){const p=(0,a.resolveComponent)("router-link");return(0,a.openBlock)(),(0,a.createElementBlock)("header",n,[(0,a.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,a.renderSlot)(e.$slots,"search",{},void 0,!0),t.goBack?((0,a.openBlock)(),(0,a.createElementBlock)("section",{key:0,class:"head_goback",onClick:A[0]||(A[0]=A=>e.$router.go(-1))},c)):(0,a.createCommentVNode)("",!0),t.signinUp?((0,a.openBlock)(),(0,a.createBlock)(p,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,a.withCtx)((()=>[e.userInfo?((0,a.openBlock)(),(0,a.createElementBlock)("svg",s,r)):((0,a.openBlock)(),(0,a.createElementBlock)("span",B,"登录|注册"))])),_:1},8,["to"])):(0,a.createCommentVNode)("",!0),t.headTitle?((0,a.openBlock)(),(0,a.createElementBlock)("section",i,[(0,a.createElementVNode)("span",E,(0,a.toDisplayString)(t.headTitle),1)])):(0,a.createCommentVNode)("",!0),(0,a.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,a.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,a.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,a.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var Q=t(275);const m={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,Q.mapState)(["userInfo"])},methods:{...(0,Q.mapActions)(["getUserInfo"])}};var I=t(4621);const u=(0,I.A)(m,[["render",p],["__scopeId","data-v-3a98f49d"]]),k=u},3262:(e,A,t)=>{t.r(A),t.d(A,{default:()=>m});var a=t(3060);const o="data:image/jpeg;base64,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",n=e=>((0,a.pushScopeId)("data-v-37d82524"),e=e(),(0,a.popScopeId)(),e),d={class:"download_page"},c={class:"dowload_container"},s=n((()=>(0,a.createElementVNode)("img",{src:o,class:"logo_img"},null,-1))),l=n((()=>(0,a.createElementVNode)("p",null,"下载饿了么APP",-1)));function r(e,A,t,o,n,r){const B=(0,a.resolveComponent)("head-top"),i=(0,a.resolveComponent)("alert-tip");return(0,a.openBlock)(),(0,a.createElementBlock)("div",d,[(0,a.createVNode)(B,{"head-title":"下载","go-back":"true"}),(0,a.createElementVNode)("section",c,[s,l,(0,a.createElementVNode)("div",{class:"determine",onClick:A[0]||(A[0]=(...e)=>r.download&&r.download(...e))},"下载")]),n.showAlert?((0,a.openBlock)(),(0,a.createBlock)(i,{key:0,onCloseTip:A[1]||(A[1]=e=>n.showAlert=!1),alertText:n.alertText},null,8,["alertText"])):(0,a.createCommentVNode)("",!0)])}var B=t(8724),i=t(9102);const E={data(){return{system:null,showAlert:!1,alertText:null}},created(){let e=navigator.userAgent,A=e.indexOf("Android")>-1||e.indexOf("Linux")>-1,t=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);this.system=A?"Android":t?"IOS":"pc"},mixins:[],components:{headTop:B.A,alertTip:i.A},props:[],methods:{download(){if("IOS"==this.system)this.showAlert=!0,this.alertText="IOS用户请前往AppStore下载";else try{let e=document.createElement("iframe");e.src="http://cangdu.org/files/elm.apk",e.style.display="none",document.body.appendChild(e)}catch(e){alert("下载失败")}}}};var p=t(4621);const Q=(0,p.A)(E,[["render",r],["__scopeId","data-v-37d82524"]]),m=Q}}]);
//# sourceMappingURL=262.37887b74.js.map