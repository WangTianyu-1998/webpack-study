"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[534],{9102:(e,t,o)=>{o.d(t,{A:()=>u});var a=o(3060);const l=e=>((0,a.pushScopeId)("data-v-7a683c4e"),e=e(),(0,a.popScopeId)(),e),n={class:"alet_container"},s={class:"tip_text_container"},r=l((()=>(0,a.createElementVNode)("div",{class:"tip_icon"},[(0,a.createElementVNode)("span"),(0,a.createElementVNode)("span")],-1))),c={class:"tip_text"};function d(e,t,o,l,d,i){return(0,a.openBlock)(),(0,a.createElementBlock)("div",n,[(0,a.createElementVNode)("section",s,[r,(0,a.createElementVNode)("p",c,(0,a.toDisplayString)(o.alertText),1),(0,a.createElementVNode)("div",{class:"confrim",onClick:t[0]||(t[0]=(...e)=>i.closeTip&&i.closeTip(...e))},"确认")])])}const i={data(){return{positionY:0,timer:null}},mounted(){},props:["alertText"],methods:{closeTip(){this.$emit("closeTip")}}};var p=o(4621);const m=(0,p.A)(i,[["render",d],["__scopeId","data-v-7a683c4e"]]),u=m},8724:(e,t,o)=>{o.d(t,{A:()=>f});var a=o(3060);const l=e=>((0,a.pushScopeId)("data-v-3a98f49d"),e=e(),(0,a.popScopeId)(),e),n={id:"head_top"},s=l((()=>(0,a.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,a.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),r=[s],c={key:0,class:"user_avatar"},d=l((()=>(0,a.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),i=[d],p={key:1,class:"login_span"},m={key:2,class:"title_head ellipsis"},u={class:"title_text"};function h(e,t,o,l,s,d){const h=(0,a.resolveComponent)("router-link");return(0,a.openBlock)(),(0,a.createElementBlock)("header",n,[(0,a.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,a.renderSlot)(e.$slots,"search",{},void 0,!0),o.goBack?((0,a.openBlock)(),(0,a.createElementBlock)("section",{key:0,class:"head_goback",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},r)):(0,a.createCommentVNode)("",!0),o.signinUp?((0,a.openBlock)(),(0,a.createBlock)(h,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,a.withCtx)((()=>[e.userInfo?((0,a.openBlock)(),(0,a.createElementBlock)("svg",c,i)):((0,a.openBlock)(),(0,a.createElementBlock)("span",p,"登录|注册"))])),_:1},8,["to"])):(0,a.createCommentVNode)("",!0),o.headTitle?((0,a.openBlock)(),(0,a.createElementBlock)("section",m,[(0,a.createElementVNode)("span",u,(0,a.toDisplayString)(o.headTitle),1)])):(0,a.createCommentVNode)("",!0),(0,a.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,a.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,a.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,a.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var v=o(275);const k={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,v.mapState)(["userInfo"])},methods:{...(0,v.mapActions)(["getUserInfo"])}};var b=o(4621);const g=(0,b.A)(k,[["render",h],["__scopeId","data-v-3a98f49d"]]),f=g},2534:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var a=o(3060);const l={class:"page_container"},n={class:"buy_for"},s={class:"form_style"},r=(0,a.createStaticVNode)('<footer class="Binding" data-v-00bb4e46><h3 data-v-00bb4e46>——温馨提示——</h3><p data-v-00bb4e46>新兑换的会员服务，权益以「会员说明」为准。</p><p data-v-00bb4e46>月卡：<b data-v-00bb4e46>30次</b>减免配送费。</p><p data-v-00bb4e46>季卡：<b data-v-00bb4e46>90次</b>减免配送费。</p><p data-v-00bb4e46>年卡：<b data-v-00bb4e46>360</b>次减免配送费。</p><p data-v-00bb4e46>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p></footer>',1);function c(e,t,o,c,d,i){const p=(0,a.resolveComponent)("head-top"),m=(0,a.resolveComponent)("alert-tip");return(0,a.openBlock)(),(0,a.createElementBlock)("div",l,[(0,a.createVNode)(p,{"head-title":"兑换会员","go-back":"true"}),(0,a.createElementVNode)("p",n,[(0,a.createTextVNode)("成功兑换后将关联到当前帐号： "),(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(e.userInfo.username),1)]),(0,a.createElementVNode)("form",s,[(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",name:"cartNumber",maxlength:"10","onUpdate:modelValue":t[0]||(t[0]=e=>d.cartNumber=e),placeholder:"请输入10位卡号"},null,512),[[a.vModelText,d.cartNumber]]),(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",name:"passWord",maxlength:"6","onUpdate:modelValue":t[1]||(t[1]=e=>d.passWord=e),placeholder:"请输入6位卡密"},null,512),[[a.vModelText,d.passWord]])]),(0,a.createElementVNode)("p",{class:(0,a.normalizeClass)(["determine",{could_pay:i.couldPay}]),onClick:t[2]||(t[2]=(...e)=>i.confrimPay&&i.confrimPay(...e))},"兑换",2),r,d.showAlert?((0,a.openBlock)(),(0,a.createBlock)(m,{key:0,onCloseTip:t[3]||(t[3]=e=>d.showAlert=!1),alertText:d.alertText},null,8,["alertText"])):(0,a.createCommentVNode)("",!0)])}var d=o(8724),i=o(275),p=o(6497),m=o(9102);const u={data(){return{cartNumber:null,passWord:null,showAlert:!1,alertText:null}},mounted(){},computed:{...(0,i.mapState)(["userInfo"]),couldPay:function(){return/^\d{10}$/.test(this.cartNumber)&&/^\d{6}$/.test(this.passWord)}},components:{headTop:d.A,alertTip:m.A},methods:{async confrimPay(){if(this.couldPay){let e=await(0,p.M2)(this.userInfo.id,this.cartNumber,this.passWord);e.message?(this.showAlert=!0,this.alertText=e.message):e.name&&(this.showAlert=!0,this.alertText=e.name)}}}};var h=o(4621);const v=(0,h.A)(u,[["render",c],["__scopeId","data-v-00bb4e46"]]),k=v}}]);
//# sourceMappingURL=534.ca772124.js.map