"use strict";(self["webpackChunkelm"]=self["webpackChunkelm"]||[]).push([[639],{8724:(e,t,o)=>{o.d(t,{A:()=>f});var n=o(3060);const l=e=>((0,n.pushScopeId)("data-v-3a98f49d"),e=e(),(0,n.popScopeId)(),e),s={id:"head_top"},a=l((()=>(0,n.createElementVNode)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[(0,n.createElementVNode)("polyline",{points:"12,18 4,9 12,0",style:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"}})],-1))),r=[a],i={key:0,class:"user_avatar"},c=l((()=>(0,n.createElementVNode)("use",{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"},null,-1))),d=[c],p={key:1,class:"login_span"},u={key:2,class:"title_head ellipsis"},m={class:"title_text"};function h(e,t,o,l,a,c){const h=(0,n.resolveComponent)("router-link");return(0,n.openBlock)(),(0,n.createElementBlock)("header",s,[(0,n.renderSlot)(e.$slots,"logo",{},void 0,!0),(0,n.renderSlot)(e.$slots,"search",{},void 0,!0),o.goBack?((0,n.openBlock)(),(0,n.createElementBlock)("section",{key:0,class:"head_goback",onClick:t[0]||(t[0]=t=>e.$router.go(-1))},r)):(0,n.createCommentVNode)("",!0),o.signinUp?((0,n.openBlock)(),(0,n.createBlock)(h,{key:1,to:e.userInfo?"/profile":"/login",class:"head_login"},{default:(0,n.withCtx)((()=>[e.userInfo?((0,n.openBlock)(),(0,n.createElementBlock)("svg",i,d)):((0,n.openBlock)(),(0,n.createElementBlock)("span",p,"登录|注册"))])),_:1},8,["to"])):(0,n.createCommentVNode)("",!0),o.headTitle?((0,n.openBlock)(),(0,n.createElementBlock)("section",u,[(0,n.createElementVNode)("span",m,(0,n.toDisplayString)(o.headTitle),1)])):(0,n.createCommentVNode)("",!0),(0,n.renderSlot)(e.$slots,"edit",{},void 0,!0),(0,n.renderSlot)(e.$slots,"msite-title",{},void 0,!0),(0,n.renderSlot)(e.$slots,"changecity",{},void 0,!0),(0,n.renderSlot)(e.$slots,"changeLogin",{},void 0,!0)])}var g=o(275);const k={data(){return{}},mounted(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:{...(0,g.mapState)(["userInfo"])},methods:{...(0,g.mapActions)(["getUserInfo"])}};var v=o(4621);const E=(0,v.A)(k,[["render",h],["__scopeId","data-v-3a98f49d"]]),f=E},8639:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var n=o(3060);const l={class:"rating_page"},s={class:"setname"},a={class:"setname-top"},r={key:0},i={key:1,class:"unlikep"},c={class:"reset"};function d(e,t,o,d,p,u){const m=(0,n.resolveComponent)("head-top");return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createVNode)(m,{"head-title":"修改用户名","go-back":"true"}),(0,n.createElementVNode)("section",s,[(0,n.createElementVNode)("section",a,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",placeholder:"输入用户名",class:(0,n.normalizeClass)({"setname-input":p.bordercolor}),onInput:t[0]||(t[0]=(...e)=>u.inputThing&&u.inputThing(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>p.inputValue=e)},null,34),[[n.vModelText,p.inputValue]]),(0,n.createElementVNode)("div",null,[p.earn?((0,n.openBlock)(),(0,n.createElementBlock)("p",r,"用户名只能修改一次（5-24字符之间）")):((0,n.openBlock)(),(0,n.createElementBlock)("p",i,"用户名长度在5到24位之间"))])]),(0,n.createElementVNode)("section",c,[(0,n.createElementVNode)("button",{class:(0,n.normalizeClass)({fontopacity:p.opacityall}),onClick:t[2]||(t[2]=(...e)=>u.resetName&&u.resetName(...e))},"确认修改",2)])])])}var p=o(8724),u=o(9802),m=o(275);const h={data(){return{earn:!0,bordercolor:!1,opacityall:!1,inputValue:"",newusername:""}},created(){},mixins:[u.d],components:{headTop:p.A},mounted(){},computed:{...(0,m.mapState)(["userInfo"])},props:[],methods:{...(0,m.mapMutations)(["RETSET_NAME"]),inputThing(){return this.inputValue.length<5||this.inputValue.length>24?(this.earn=!1,this.bordercolor=!0,this.opacityall=!1,!1):(this.earn=!0,this.bordercolor=!1,this.opacityall=!0,!0)},resetName(){let e=this.inputThing();e&&(this.RETSET_NAME(this.inputValue),this.$router.go(-1))}}};var g=o(4621);const k=(0,g.A)(h,[["render",d],["__scopeId","data-v-3ba1ebe8"]]),v=k},9802:(e,t,o)=>{o.d(t,{U:()=>l,d:()=>s});var n=o(2467);o(9120);const l={directives:{"load-more":{bind:(e,t)=>{let o,l,s,a,r,i,c,d,p=window.screen.height,u=e.attributes.type&&e.attributes.type.value,m=2;2==u?(c=e,d=e.children[0]):(c=document.body,d=e),e.addEventListener("touchstart",(()=>{o=d.clientHeight,l=e.offsetTop,s=(0,n.gd)(e,"paddingBottom"),a=(0,n.gd)(e,"marginBottom")}),!1),e.addEventListener("touchmove",(()=>{g()}),!1),e.addEventListener("touchend",(()=>{i=c.scrollTop,h()}),!1);const h=()=>{r=requestAnimationFrame((()=>{c.scrollTop!=i?(i=c.scrollTop,h()):(cancelAnimationFrame(r),o=d.clientHeight,g())}))},g=()=>{c.scrollTop+p>=o+l+s+a-m&&t.value()}}}}},s={methods:{getImgPath(e){let t;if(!e)return"//elm.cangdu.org/img/default.jpg";t=-1!==e.indexOf("jpeg")?".jpeg":".png";let o="/"+e.substr(0,1)+"/"+e.substr(1,2)+"/"+e.substr(3)+t;return"https://fuss10.elemecdn.com"+o}}}}}]);
//# sourceMappingURL=639.2663272c.js.map