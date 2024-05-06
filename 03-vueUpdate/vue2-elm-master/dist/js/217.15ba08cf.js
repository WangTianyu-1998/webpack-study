"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[217],{8724:(e,t,o)=>{o.d(t,{A:()=>B});var l=o(3060);const n=e=>((0,l.pushScopeId)("data-v-3a98f49d"),e=e(),(0,l.popScopeId)(),e),c={id:"head_top"},r=n((()=>(0,l.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,l.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),a=[r],s={key:0,class:"user_avatar"},i=n((()=>(0,l.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),d=[i],p={key:1,class:"login_span"},m={key:2,class:"title_head ellipsis"},u={class:"title_text"};function g(e,t,o,n,r,i){const g=(0,l.resolveComponent)("router-link");return(0,l.openBlock)(),(0,l.createElementBlock)("header",c,[(0,l.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,l.renderSlot)(e.$slots,"search",{},void 0,!0),o.goBack?((0,l.openBlock)(),(0,l.createElementBlock)("section",{key:0,class:"head_goback",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},a)):(0,l.createCommentVNode)("",!0),o.signinUp?((0,l.openBlock)(),(0,l.createBlock)(g,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,l.withCtx)((()=>[e.userInfo?((0,l.openBlock)(),(0,l.createElementBlock)("svg",s,d)):((0,l.openBlock)(),(0,l.createElementBlock)("span",p,"登录|注册"))])),_:1},8,["to"])):(0,l.createCommentVNode)("",!0),o.headTitle?((0,l.openBlock)(),(0,l.createElementBlock)("section",m,[(0,l.createElementVNode)("span",u,(0,l.toDisplayString)(o.headTitle),1)])):(0,l.createCommentVNode)("",!0),(0,l.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,l.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,l.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,l.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var h=o(275);const k={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,h.mapState)(["userInfo"])},methods:{...(0,h.mapActions)(["getUserInfo"])}};var y=o(4621);const _=(0,y.A)(k,[["render",g],["__scopeId","data-v-3a98f49d"]]),B=_},5979:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var l=o(3060);const n=e=>((0,l.pushScopeId)("data-v-37c326fa"),e=e(),(0,l.popScopeId)(),e),c={class:"city_nav"},r=n((()=>(0,l.createElementVNode)("div",{class:"city_tip"},[(0,l.createElementVNode)("span",null,"当前定位城市："),(0,l.createElementVNode)("span",null,"定位不准时，请在城市列表中选择")],-1))),a=n((()=>(0,l.createElementVNode)("svg",{class:"arrow_right"},[(0,l.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"})],-1))),s={id:"hot_city_container"},i=n((()=>(0,l.createElementVNode)("h4",{class:"city_title"},"热门城市",-1))),d={class:"citylistul clear"},p={class:"group_city_container"},m={class:"letter_classify"},u={class:"city_title"},g={key:0},h={class:"groupcity_name_container citylistul clear"};function k(e,t,o,n,k,y){const _=(0,l.resolveComponent)("head-top"),B=(0,l.resolveComponent)("router-link");return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createVNode)(_,{"signin-up":"home"},{default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("span",{slot:"logo",class:"head_logo",onClick:t[0]||(t[0]=(...e)=>y.reload&&y.reload(...e))},"ele.me")])),_:1}),(0,l.createElementVNode)("nav",c,[r,(0,l.createVNode)(B,{to:"/city/"+k.guessCityid,class:"guess_city"},{default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("span",null,(0,l.toDisplayString)(k.guessCity),1),a])),_:1},8,["to"])]),(0,l.createElementVNode)("section",s,[i,(0,l.createElementVNode)("ul",d,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(k.hotcity,(e=>((0,l.openBlock)(),(0,l.createBlock)(B,{tag:"li",to:"/city/"+e.id,key:e.id},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(e.name),1)])),_:2},1032,["to"])))),128))])]),(0,l.createElementVNode)("section",p,[(0,l.createElementVNode)("ul",m,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(y.sortgroupcity,((e,t,o)=>((0,l.openBlock)(),(0,l.createElementBlock)("li",{key:t,class:"letter_classify_li"},[(0,l.createElementVNode)("h4",u,[(0,l.createTextVNode)((0,l.toDisplayString)(t)+" ",1),0==o?((0,l.openBlock)(),(0,l.createElementBlock)("span",g,"（按字母排序）")):(0,l.createCommentVNode)("",!0)]),(0,l.createElementVNode)("ul",h,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e,(e=>((0,l.openBlock)(),(0,l.createBlock)(B,{tag:"li",to:"/city/"+e.id,key:e.id,class:"ellipsis"},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)(e.name),1)])),_:2},1032,["to"])))),128))])])))),128))])])])}var y=o(8724),_=o(6497);const B={data(){return{guessCity:"",guessCityid:"",hotcity:[],groupcity:{}}},mounted(){(0,_.ll)().then((e=>{this.guessCity=e.name,this.guessCityid=e.id})),(0,_.Tw)().then((e=>{this.hotcity=e})),(0,_.P4)().then((e=>{this.groupcity=e}))},components:{headTop:y.A},computed:{sortgroupcity(){let e={};for(let t=65;t<=90;t++)this.groupcity[String.fromCharCode(t)]&&(e[String.fromCharCode(t)]=this.groupcity[String.fromCharCode(t)]);return e}},methods:{reload(){window.location.reload()}}};var E=o(4621);const f=(0,E.A)(B,[["render",k],["__scopeId","data-v-37c326fa"]]),v=f}}]);
//# sourceMappingURL=217.15ba08cf.js.map