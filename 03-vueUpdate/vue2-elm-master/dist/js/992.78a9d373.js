"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[992],{9102:(e,t,o)=>{o.d(t,{A:()=>h});var a=o(3060);const n=e=>((0,a.pushScopeId)("data-v-7a683c4e"),e=e(),(0,a.popScopeId)(),e),c={class:"alet_container"},l={class:"tip_text_container"},s=n((()=>(0,a.createElementVNode)("div",{class:"tip_icon"},[(0,a.createElementVNode)("span"),(0,a.createElementVNode)("span")],-1))),r={class:"tip_text"};function d(e,t,o,n,d,i){return(0,a.openBlock)(),(0,a.createElementBlock)("div",c,[(0,a.createElementVNode)("section",l,[s,(0,a.createElementVNode)("p",r,(0,a.toDisplayString)(o.alertText),1),(0,a.createElementVNode)("div",{class:"confrim",onClick:t[0]||(t[0]=(...e)=>i.closeTip&&i.closeTip(...e))},"确认")])])}const i={data(){return{positionY:0,timer:null}},mounted(){},props:["alertText"],methods:{closeTip(){this.$emit("closeTip")}}};var p=o(4621);const m=(0,p.A)(i,[["render",d],["__scopeId","data-v-7a683c4e"]]),h=m},8724:(e,t,o)=>{o.d(t,{A:()=>x});var a=o(3060);const n=e=>((0,a.pushScopeId)("data-v-3a98f49d"),e=e(),(0,a.popScopeId)(),e),c={id:"head_top"},l=n((()=>(0,a.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,a.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),s=[l],r={key:0,class:"user_avatar"},d=n((()=>(0,a.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),i=[d],p={key:1,class:"login_span"},m={key:2,class:"title_head ellipsis"},h={class:"title_text"};function u(e,t,o,n,l,d){const u=(0,a.resolveComponent)("router-link");return(0,a.openBlock)(),(0,a.createElementBlock)("header",c,[(0,a.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,a.renderSlot)(e.$slots,"search",{},void 0,!0),o.goBack?((0,a.openBlock)(),(0,a.createElementBlock)("section",{key:0,class:"head_goback",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},s)):(0,a.createCommentVNode)("",!0),o.signinUp?((0,a.openBlock)(),(0,a.createBlock)(u,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,a.withCtx)((()=>[e.userInfo?((0,a.openBlock)(),(0,a.createElementBlock)("svg",r,i)):((0,a.openBlock)(),(0,a.createElementBlock)("span",p,"登录|注册"))])),_:1},8,["to"])):(0,a.createCommentVNode)("",!0),o.headTitle?((0,a.openBlock)(),(0,a.createElementBlock)("section",m,[(0,a.createElementVNode)("span",h,(0,a.toDisplayString)(o.headTitle),1)])):(0,a.createCommentVNode)("",!0),(0,a.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,a.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,a.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,a.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var g=o(275);const k={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,g.mapState)(["userInfo"])},methods:{...(0,g.mapActions)(["getUserInfo"])}};var v=o(4621);const C=(0,v.A)(k,[["render",u],["__scopeId","data-v-3a98f49d"]]),x=C},7992:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var a=o(3060);const n=e=>((0,a.pushScopeId)("data-v-f8edf0dc"),e=e(),(0,a.popScopeId)(),e),c={class:"page"},l={class:"exchange_code"},s={class:"input_container captcha_code_container"},r={class:"img_change_img"},d=["src"],i=n((()=>(0,a.createElementVNode)("p",null,"看不清",-1))),p=n((()=>(0,a.createElementVNode)("p",null,"换一张",-1))),m=[i,p];function h(e,t,o,n,i,p){const h=(0,a.resolveComponent)("head-top"),u=(0,a.resolveComponent)("alert-tip");return(0,a.openBlock)(),(0,a.createElementBlock)("div",c,[(0,a.createVNode)(h,{"head-title":"兑换红包","go-back":"true"}),(0,a.createElementVNode)("form",l,[(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",placeholder:"请输入兑换码","onUpdate:modelValue":t[0]||(t[0]=e=>i.exchangeCode=e),class:"exchange_input"},null,512),[[a.vModelText,i.exchangeCode]]),(0,a.createElementVNode)("section",s,[(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",placeholder:"验证码",maxlength:"4","onUpdate:modelValue":t[1]||(t[1]=e=>i.codeNumber=e)},null,512),[[a.vModelText,i.codeNumber]]),(0,a.createElementVNode)("div",r,[(0,a.withDirectives)((0,a.createElementVNode)("img",{src:i.captchaCodeImg},null,8,d),[[a.vShow,i.captchaCodeImg]]),(0,a.createElementVNode)("div",{class:"change_img",onClick:t[2]||(t[2]=(...e)=>p.getCaptchaCode&&p.getCaptchaCode(...e))},m)])])]),(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["determine",{active:p.status}]),onClick:t[3]||(t[3]=(...e)=>p.exchange&&p.exchange(...e))},"兑换",2),i.showAlert?((0,a.openBlock)(),(0,a.createBlock)(u,{key:0,onCloseTip:t[4]||(t[4]=e=>i.showAlert=!1),alertText:i.alertText},null,8,["alertText"])):(0,a.createCommentVNode)("",!0)])}var u=o(8724),g=o(275),k=o(6497),v=o(9102);const C={data(){return{showAlert:!1,alertText:null,exchangeCode:null,codeNumber:"",captchaCodeImg:null}},mounted(){this.getCaptchaCode()},components:{headTop:u.A,alertTip:v.A},computed:{...(0,g.mapState)(["userInfo"]),status:function(){let e=/^\d+$/gi.test(this.exchangeCode)&&/^\w{4}$/gi.test(this.codeNumber);return e}},methods:{async getCaptchaCode(){let e=await(0,k.CI)();this.captchaCodeImg=e.code},async exchange(){if(this.status){let e=await(0,k.ET)(this.userInfo.user_id,this.exchangeCode,this.codeNumber);e.message&&(this.getCaptchaCode(),this.showAlert=!0,this.alertText=e.message)}}}};var x=o(4621);const N=(0,x.A)(C,[["render",h],["__scopeId","data-v-f8edf0dc"]]),E=N}}]);
//# sourceMappingURL=992.78a9d373.js.map