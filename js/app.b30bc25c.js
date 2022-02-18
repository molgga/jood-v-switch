(function(){"use strict";var e={3006:function(e,t,n){n.d(t,{k5:function(){return r},A0:function(){return i},Nc:function(){return a}});var o=n(7875);const r=[{key:"data-sample1",label:"Sample",component:(0,o.RC)((()=>n.e(824).then(n.bind(n,8824))))}],i=(()=>{const e={};return r.forEach((t=>{e[t.key]=t})),e})(),a=(()=>{const e=[];for(const t in i){const n=i[t];e.push({to:`/demo/${t}`,label:n.label})}return e})()},126:function(e,t,n){var o={};n.r(o),n.d(o,{DemoButton:function(){return Q},DemoLayout:function(){return A},DemoMenu:function(){return K},DemoMenuGroup:function(){return U},DemoMenuItem:function(){return W},DemoPanel:function(){return be},DemoPanelDevicer:function(){return De},DemoPreviewCode:function(){return ce}});var r=n(4825),i=n(7875);const a={class:"menu-wrap"};function s(e,t,n,o,r,s){const u=(0,i.up)("demo-menu"),l=(0,i.up)("router-view"),c=(0,i.up)("demo-layout");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c,{title:"@jood/v-switch",onGoGithub:o.onGoGithub,onGoNpm:o.onGoNpm,onGoDoc:o.onGoDocument},{menu:(0,i.w5)((()=>[(0,i._)("nav",a,[(0,i.Wm)(u,{menuList:o.menuList},null,8,["menuList"])])])),default:(0,i.w5)((()=>[(0,i.Wm)(l,{class:"app-body"})])),_:1},8,["onGoGithub","onGoNpm","onGoDoc"])])}var u=n(3006),l={components:{},setup(){const e=()=>{o("https://molgga.github.io/jood-v-switch/documents")},t=()=>{o("https://github.com/molgga/jood-v-switch")},n=()=>{o("https://www.npmjs.com/package/@jood/v-switch")},o=e=>{window.open(e)},r=[{to:"/",label:"Getting started"},...u.Nc];return{menuList:r,demoLinks:u.Nc,onGoGithub:t,onGoNpm:n,onGoDocument:e}}},c=n(4407);const d=(0,c.Z)(l,[["render",s]]);var p=d,f=n(2049);const m=!0,v=m?"/jood-v-switch":"",g=[{path:"/",name:"GettingStarted",props:!0,component:(0,i.RC)((()=>n.e(496).then(n.bind(n,3143))))},{path:"/demo/:demo",name:"DemoView",props:!0,component:(0,i.RC)((()=>n.e(577).then(n.bind(n,978))))},{path:"/:catchAll(.*)",name:"GettingStarted",props:!0,component:(0,i.RC)((()=>n.e(496).then(n.bind(n,3143))))}],h=(0,f.p7)({history:(0,f.PO)(v),routes:g});var y=h,b=n(349);const w=e=>((0,i.dD)("data-v-655c9c4c"),e=e(),(0,i.Cn)(),e),k={class:"aside"},_=(0,i.Uk)("menu"),D=(0,i.Uk)("menu_open"),S={class:"tit"},C=w((()=>(0,i._)("div",{class:"spacer"},null,-1))),j={class:"bside"},O={class:"ly-content"};function G(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",{class:(0,b.C_)(["demo-layout",e.classes])},[(0,i._)("div",{class:"ly-header",style:(0,b.j5)(e.headStyle)},[(0,i._)("div",k,[(0,i._)("i",{class:"menu-toggle material-icons",onClick:t[0]||(t[0]=(...t)=>e.onMenuToggle&&e.onMenuToggle(...t))},[e.layoutState.asideOpen?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[_],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[D],64))]),(0,i._)("h1",S,(0,b.zw)(e.title),1)]),C,(0,i._)("div",j,[e.outGithub?((0,i.wg)(),(0,i.iD)("i",{key:0,class:"out-link material-icons",onClick:t[1]||(t[1]=t=>e.onOutlink("goGithub")),title:"Github"},"code")):(0,i.kq)("",!0),e.outNpm?((0,i.wg)(),(0,i.iD)("i",{key:1,class:"out-link material-icons",onClick:t[2]||(t[2]=t=>e.onOutlink("goNpm")),title:"NPM package"},"move_to_inbox")):(0,i.kq)("",!0),e.outDoc?((0,i.wg)(),(0,i.iD)("i",{key:2,class:"out-link material-icons",onClick:t[3]||(t[3]=t=>e.onOutlink("goDoc")),title:"Documentaion"},"library_books")):(0,i.kq)("",!0)])],4),(0,i._)("div",{class:"ly-aside",style:(0,b.j5)(e.asideStyle)},[(0,i.WI)(e.$slots,"menu",{},void 0,!0)],4),(0,i._)("div",{class:"ly-body",style:(0,b.j5)(e.bodyStyle)},[(0,i._)("div",O,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])],4),(0,i._)("div",{class:"ly-overlay",onClick:t[4]||(t[4]=(...t)=>e.onMenuToggle&&e.onMenuToggle(...t))})],2)}var L=n(641),N=(0,i.aZ)({name:"DemoLayout",props:{title:{type:String,default:"foo"},sizeTop:{type:Number,default:60},sizeAside:{type:Number,default:240},outGithub:{type:Boolean,default:!0},outNpm:{type:Boolean,default:!0},outDoc:{type:Boolean,default:!0}},setup(e,t){const{emit:n}=t,o=()=>960<=window.innerWidth,r=(0,L.qj)({asideOpen:o(),top:e.sizeTop,left:e.sizeAside,right:0,bottom:0}),a=(0,i.Fl)((()=>{const{asideOpen:e,top:t,left:n}=r,i=`${t}px`,a=e&&o()?`${n}px`:0;return{top:i,left:a,right:0,bottom:0}})),s=(0,i.Fl)((()=>{const{top:e}=a.value;return{height:e}})),u=(0,i.Fl)((()=>{const{sizeAside:t}=e,{asideOpen:n}=r,{top:o,left:i}=a.value,s=n?0:-t;return{top:o,width:`${t}px`,transform:`translateX(${s}px)`}})),l=(0,i.Fl)((()=>{const{top:e,right:t,bottom:n,left:o}=a.value;return{padding:`${e} ${t} ${n} ${o}`}})),c=(0,i.Fl)((()=>{const{asideOpen:e}=r;return{"need-overlay":e&&!o()}})),d=()=>{r.asideOpen=!0},p=()=>{r.asideOpen=!1},f=()=>{r.asideOpen?p():d()},m=()=>{f()},v=e=>{n(e)};return{layoutState:r,classes:c,headStyle:s,asideStyle:u,bodyStyle:l,onMenuToggle:m,onOutlink:v}}});const I=(0,c.Z)(N,[["render",G],["__scopeId","data-v-655c9c4c"]]);var A=I;const M=(0,i.uE)('<div class="foot-desc" data-v-f79e665a><div class="desc-box" data-v-f79e665a><i class="icon material-icons" data-v-f79e665a>tag_faces</i><p class="desc" data-v-f79e665a> It is being used by <br data-v-f79e665a><a class="link" href="https://jood-lab.web.app/" target="_blank" data-v-f79e665a> jood-lab.web.app </a></p></div></div>',1);function T(e,t,n,o,r,a){const s=(0,i.up)("demo-menu-group");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s,{menuList:n.menuList},null,8,["menuList"]),M])}const x={class:"demo-menu-group"};function P(e,t,n,o,r,a){const s=(0,i.up)("demo-menu-group",!0),u=(0,i.up)("demo-menu-item");return(0,i.wg)(),(0,i.iD)("div",x,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.menuList,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"group"},[e.children?((0,i.wg)(),(0,i.j4)(s,{key:0,menuList:e.children},null,8,["menuList"])):((0,i.wg)(),(0,i.j4)(u,{key:1,menu:e},null,8,["menu"]))])))),128))])}const $={class:"demo-menu-item"},Z={class:"tit"},z={class:"desc"};function E(e,t,n,o,r,a){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",$,[(0,i.Wm)(s,{to:n.menu.to,class:"menu-action"},{default:(0,i.w5)((()=>[(0,i._)("span",Z,(0,b.zw)(n.menu.label),1),(0,i._)("span",z,(0,b.zw)(n.menu.description),1)])),_:1},8,["to"])])}var F={name:"DemoMenuItem",props:{menu:{type:Object,default:()=>({})}},setup(){return{}}};const B=(0,c.Z)(F,[["render",E],["__scopeId","data-v-8a624f7c"]]);var W=B,q={name:"DemoMenuGroup",components:{DemoMenuItem:W},props:{menuList:{type:Array,default:()=>[]}},setup(){return{}}};const H=(0,c.Z)(q,[["render",P],["__scopeId","data-v-47c28b19"]]);var U=H,R={name:"DemoMenu",components:{DemoMenuGroup:U},props:{menuList:{type:Array,default:()=>[]}},setup(){return{}}};const Y=(0,c.Z)(R,[["render",T],["__scopeId","data-v-f79e665a"]]);var K=Y;function X(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("button",{class:(0,b.C_)(["demo-button",e.buttonStyle.classes]),style:(0,b.j5)(e.buttonStyle.style)},[(0,i.WI)(e.$slots,"default",{},void 0,!0)],6)}var V=(0,i.aZ)({name:"DemoButton",props:{color:{type:String,default:""},text:{type:Boolean,default:!1}},setup(e){const t=(0,i.Fl)((()=>{const{color:t,text:n}=e,o={},r=[];return n?(r.push("is-text"),t&&/^(#|rgb)/.test(t)?o.color=t:r.push(t)):t&&/^(#|rgb)/.test(t)?o.backgroundColor=t:r.push(t),{style:o,classes:r}}));return{buttonStyle:t}}});const J=(0,c.Z)(V,[["render",X],["__scopeId","data-v-5aa8dc04"]]);var Q=J;const ee={class:"demo-preview-code"},te={key:0,class:"code-head"},ne={class:"tit"},oe={class:"desc"},re={ref:"refContainer",class:"panel-viewer"};function ie(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",ee,[e.viewState.hasHead?((0,i.wg)(),(0,i.iD)("div",te,[(0,i._)("h3",ne,(0,b.zw)(e.viewState.title),1),(0,i._)("div",oe,(0,b.zw)(e.viewState.description),1)])):(0,i.kq)("",!0),(0,i._)("div",re,[(0,i._)("pre",{class:(0,b.C_)(e.viewState.language)},[(0,i._)("code",null,[(0,i.WI)(e.$slots,"default",{},(()=>[(0,i.Uk)((0,b.zw)(e.viewState.code),1)]),!0)])],2)],512)])}var ae=n(8476),se=n.n(ae),ue=(n(3083),n(8650),(0,i.aZ)({name:"DemoPreviewCode",props:{title:{type:String,default:""},description:{type:String,default:""},lang:{type:String,default:"typescript"},code:{type:String,default:""}},setup(e){const t=(0,L.XI)(null),n=(0,i.Fl)((()=>{const{title:t,description:n,lang:o="",code:r=""}=e,i=t||n;return{hasHead:i,title:t,description:n,language:`language-${o}`,code:r.trim()}}));return(0,i.bv)((()=>{se().highlightAllUnder(t.value)})),{refContainer:t,viewState:n}}}));const le=(0,c.Z)(ue,[["render",ie],["__scopeId","data-v-0cd9e527"]]);var ce=le;const de={class:"demo-panel"},pe={key:0,class:"panel-head"},fe={key:0,class:"tit"},me={key:1,class:"desc"},ve={class:"panel-body"};function ge(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",de,[e.viewState.hasHead?((0,i.wg)(),(0,i.iD)("div",pe,[e.viewState.title?((0,i.wg)(),(0,i.iD)("h3",fe,(0,b.zw)(e.viewState.title),1)):(0,i.kq)("",!0),e.viewState.description?((0,i.wg)(),(0,i.iD)("p",me,(0,b.zw)(e.viewState.description),1)):(0,i.kq)("",!0)])):(0,i.kq)("",!0),(0,i._)("div",ve,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])}var he=(0,i.aZ)({name:"DemoPanel",props:{title:{type:String,default:""},description:{type:String,default:""}},setup(e){const t=(0,i.Fl)((()=>{const{title:t,description:n}=e,o=!(!t&&!n);return{hasHead:o,title:t,description:n}}));return{viewState:t}}});const ye=(0,c.Z)(he,[["render",ge],["__scopeId","data-v-e486477c"]]);var be=ye;function we(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",{class:(0,b.C_)(["demo-panel-devider",e.classes])},null,2)}var ke=(0,i.aZ)({name:"DemoPanelDevider",props:{half:{type:Boolean,default:!1},line:{type:Boolean,default:!1}},setup(e){const t=(0,i.Fl)((()=>{const{half:t,line:n}=e;return{half:t,line:n}}));return{classes:t}}});const _e=(0,c.Z)(ke,[["render",we],["__scopeId","data-v-0f24e6ca"]]);var De=_e;const Se={install:e=>{const t=o;for(const n in t){const o=t[n],r=o.name;e.component(r,o)}}},Ce=(0,r.ri)(p);Ce.use(y),Ce.use(Se),Ce.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({496:"GettingStarted",577:"demo"}[e]||e)+"."+{496:"28256ef5",577:"12c39fd9",824:"eef66ccc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({496:"GettingStarted",577:"demo"}[e]||e)+"."+{496:"0037b7e0",577:"debab056",824:"59f42566"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dev:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://molgga.github.io/jood-v-switch/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={496:1,577:1,824:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],u=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkdev"]=self["webpackChunkdev"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(126)}));o=n.O(o)})();