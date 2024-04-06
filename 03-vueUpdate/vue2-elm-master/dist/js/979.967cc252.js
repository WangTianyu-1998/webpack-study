"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[979],{8724:(e,t,o)=>{o.d(t,{A:()=>E});var n=o(3060);const s=e=>((0,n.pushScopeId)("data-v-3a98f49d"),e=e(),(0,n.popScopeId)(),e),l={id:"head_top"},r=s((()=>(0,n.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,n.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),d=[r],a={key:0,class:"user_avatar"},i=s((()=>(0,n.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),c=[i],p={key:1,class:"login_span"},m={key:2,class:"title_head ellipsis"},u={class:"title_text"};function h(e,t,o,s,r,i){const h=(0,n.resolveComponent)("router-link");return(0,n.openBlock)(),(0,n.createElementBlock)("header",l,[(0,n.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,n.renderSlot)(e.$slots,"search",{},void 0,!0),o.goBack?((0,n.openBlock)(),(0,n.createElementBlock)("section",{key:0,class:"head_goback",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},d)):(0,n.createCommentVNode)("",!0),o.signinUp?((0,n.openBlock)(),(0,n.createBlock)(h,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,n.withCtx)((()=>[e.userInfo?((0,n.openBlock)(),(0,n.createElementBlock)("svg",a,c)):((0,n.openBlock)(),(0,n.createElementBlock)("span",p,"登录|注册"))])),_:1},8,["to"])):(0,n.createCommentVNode)("",!0),o.headTitle?((0,n.openBlock)(),(0,n.createElementBlock)("section",m,[(0,n.createElementVNode)("span",u,(0,n.toDisplayString)(o.headTitle),1)])):(0,n.createCommentVNode)("",!0),(0,n.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,n.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,n.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,n.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var g=o(275);const k={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,g.mapState)(["userInfo"])},methods:{...(0,g.mapActions)(["getUserInfo"])}};var v=o(4621);const f=(0,v.A)(k,[["render",h],["__scopeId","data-v-3a98f49d"]]),E=f},979:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var n=o(3060);const s=e=>((0,n.pushScopeId)("data-v-5cdbd960"),e=e(),(0,n.popScopeId)(),e),l={class:"rating_page"},r={class:"address"},d={class:"addresslist"},a={key:0},i={key:0,class:"deletesite"},c=["onClick"],p=s((()=>(0,n.createElementVNode)("div",{class:"addsite"},[(0,n.createElementVNode)("span",null,"新增地址"),(0,n.createElementVNode)("span",{class:"addsvg"},[(0,n.createElementVNode)("svg",{fill:"#d8d8d8"},[(0,n.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"})])])],-1)));function m(e,t,o,s,m,u){const h=(0,n.resolveComponent)("head-top"),g=(0,n.resolveComponent)("router-link"),k=(0,n.resolveComponent)("router-view");return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createVNode)(h,{"head-title":"编辑地址","go-back":"true"},{default:(0,n.withCtx)((()=>[(0,n.createElementVNode)("span",{slot:"edit",class:"edit",onClick:t[0]||(t[0]=(...e)=>u.editThing&&u.editThing(...e))},(0,n.toDisplayString)(m.editText),1)])),_:1}),(0,n.createElementVNode)("section",r,[(0,n.createElementVNode)("ul",d,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.removeAddress,((e,t)=>((0,n.openBlock)(),(0,n.createElementBlock)("li",null,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("p",null,(0,n.toDisplayString)(e.address),1),(0,n.createElementVNode)("p",null,[(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(e.phone),1),e.phonepk?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,"、"+(0,n.toDisplayString)(e.phonepk),1)):(0,n.createCommentVNode)("",!0)])]),m.deletesite?((0,n.openBlock)(),(0,n.createElementBlock)("div",i,[(0,n.createElementVNode)("span",{onClick:o=>u.deleteSite(t,e)},"x",8,c)])):(0,n.createCommentVNode)("",!0)])))),256))]),(0,n.createVNode)(g,{to:"/profile/info/address/add"},{default:(0,n.withCtx)((()=>[p])),_:1})]),(0,n.createVNode)(n.Transition,{name:"router-slid",mode:"out-in"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(k)])),_:1})])}var u=o(8724),h=o(9802),g=o(275),k=o(6497);const v={data(){return{deletesite:!1,editText:"编辑",adressList:[]}},mounted(){this.initData()},mixins:[h.d],mounted(){},components:{headTop:u.A},computed:{...(0,g.mapState)(["userInfo","removeAddress"])},props:[],methods:{...(0,g.mapActions)(["saveAddress"]),initData(){this.userInfo&&this.userInfo.user_id&&this.saveAddress()},editThing(){"编辑"==this.editText?(this.editText="完成",this.deletesite=!0):(this.editText="编辑",this.deletesite=!1)},async deleteSite(e,t){this.userInfo&&this.userInfo.user_id&&(await(0,k.ab)(this.userInfo.user_id,t.id),this.removeAddress.splice(e,1))}},watch:{userInfo:function(e){e&&e.user_id&&this.initData()}}};var f=o(4621);const E=(0,f.A)(v,[["render",m],["__scopeId","data-v-5cdbd960"]]),w=E},9802:(e,t,o)=>{o.d(t,{U:()=>s,d:()=>l});var n=o(2467);o(9120);const s={directives:{"load-more":{bind:(e,t)=>{let o,s,l,r,d,a,i,c,p=window.screen.height,m=e.attributes.type&&e.attributes.type.value,u=2;2==m?(i=e,c=e.children[0]):(i=document.body,c=e),e.addEventListener("touchstart",(()=>{o=c.clientHeight,s=e.offsetTop,l=(0,n.gd)(e,"paddingBottom"),r=(0,n.gd)(e,"marginBottom")}),!1),e.addEventListener("touchmove",(()=>{g()}),!1),e.addEventListener("touchend",(()=>{a=i.scrollTop,h()}),!1);const h=()=>{d=requestAnimationFrame((()=>{i.scrollTop!=a?(a=i.scrollTop,h()):(cancelAnimationFrame(d),o=c.clientHeight,g())}))},g=()=>{i.scrollTop+p>=o+s+l+r-u&&t.value()}}}}},l={methods:{getImgPath(e){let t;if(!e)return"//elm.cangdu.org/img/default.jpg";t=-1!==e.indexOf("jpeg")?".jpeg":".png";let o="/"+e.substr(0,1)+"/"+e.substr(1,2)+"/"+e.substr(3)+t;return"https://fuss10.elemecdn.com"+o}}}}}]);
//# sourceMappingURL=979.967cc252.js.map