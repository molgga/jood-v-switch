(function(e){function t(t){for(var c,o,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(c=!1)}c&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},o={app:0},a={app:0},r=[];function i(e){return u.p+"js/"+({GettingStarted:"GettingStarted",demo:"demo"}[e]||e)+"."+{GettingStarted:"0887eef1","chunk-aab85ac2":"62d5a909",demo:"e59655bc"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={GettingStarted:1,"chunk-aab85ac2":1,demo:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({GettingStarted:"GettingStarted",demo:"demo"}[e]||e)+"."+{GettingStarted:"3df72063","chunk-aab85ac2":"f1fccf57",demo:"a8786f4b"}[e]+".css",a=u.p+c,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===c||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===c||d===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],b.parentNode.removeChild(b),n(r)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",l.name="ChunkLoadError",l.type=c,l.request=o,n[1](l)}a[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://molgga.github.io/jood-v-switch/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00ab":function(e,t,n){"use strict";n("67e6")},"0f04":function(e,t,n){"use strict";n("a88d")},"132e":function(e,t,n){"use strict";n("3201")},"144b":function(e,t,n){},"19cb":function(e,t,n){},"1e06":function(e,t,n){"use strict";n("19cb")},3156:function(e,t,n){},3201:function(e,t,n){},"3d58":function(e,t,n){"use strict";n("3156")},"46e9":function(e,t,n){},"67e6":function(e,t,n){},8186:function(e,t,n){"use strict";n("8d4e")},"8d4e":function(e,t,n){},"92fd":function(e,t,n){},"9e69":function(e,t,n){"use strict";n("46e9")},a1dc:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r}));n("ef1f"),n("f3b8"),n("918c"),n("fa8c");var c=n("4430"),o=[{key:"data-sample1",label:"Sample",component:Object(c["i"])((function(){return n.e("chunk-aab85ac2").then(n.bind(null,"083e"))}))}],a=function(){var e={};return o.forEach((function(t){e[t.key]=t})),e}(),r=function(){var e=[];for(var t in a){var n=a[t];e.push({to:"/demo/".concat(t),label:n.label})}return e}()},a88d:function(e,t,n){},b5a8:function(e,t,n){"use strict";n("144b")},c860:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"DemoLayout",(function(){return _})),n.d(c,"DemoMenu",(function(){return U})),n.d(c,"DemoMenuGroup",(function(){return q})),n.d(c,"DemoMenuItem",(function(){return H})),n.d(c,"DemoButton",(function(){return W})),n.d(c,"DemoPreviewCode",(function(){return ae})),n.d(c,"DemoPanel",(function(){return pe})),n.d(c,"DemoPanelDevicer",(function(){return me}));n("9531"),n("26d3"),n("2007"),n("41ab"),n("c860"),n("05a1");var o=n("4430"),a={class:"menu-wrap"};function r(e,t,n,c,r,i){var u=Object(o["A"])("demo-menu"),s=Object(o["A"])("router-view"),d=Object(o["A"])("demo-layout");return Object(o["s"])(),Object(o["d"])("div",null,[Object(o["h"])(d,{title:"@jood/v-switch",onGoGithub:c.onGoGithub,onGoNpm:c.onGoNpm,onGoDoc:c.onGoDocument},{menu:Object(o["H"])((function(){return[Object(o["h"])("nav",a,[Object(o["h"])(u,{menuList:c.menuList},null,8,["menuList"])])]})),default:Object(o["H"])((function(){return[Object(o["h"])(s,{class:"app-body"})]})),_:1},8,["onGoGithub","onGoNpm","onGoDoc"])])}var i=n("7c6c"),u=(n("d86f"),n("a1dc")),s={components:{},setup:function(){var e=function(){c("https://molgga.github.io/jood-v-switch/documents")},t=function(){c("https://github.com/molgga/jood-v-switch")},n=function(){c("https://www.npmjs.com/package/@jood/v-switch")},c=function(e){window.open(e)},o=[{to:"/",label:"Getting started"}].concat(Object(i["a"])(u["c"]));return{menuList:o,demoLinks:u["c"],onGoGithub:t,onGoNpm:n,onGoDocument:e}}};n("3d58");s.render=r;var d=s,l=(n("ef1f"),n("f3b8"),n("918c"),n("9c2b")),b=!0,f=b?"/jood-v-switch":"",p=[{path:"/",name:"GettingStarted",props:!0,component:Object(o["i"])((function(){return n.e("GettingStarted").then(n.bind(null,"e575"))}))},{path:"/demo/:demo",name:"DemoView",props:!0,component:Object(o["i"])((function(){return n.e("demo").then(n.bind(null,"30df"))}))},{path:"/:catchAll(.*)",name:"GettingStarted",props:!0,component:Object(o["i"])((function(){return n.e("GettingStarted").then(n.bind(null,"e575"))}))}],v=Object(l["a"])({history:Object(l["b"])(f),routes:p}),j=v,O=Object(o["I"])("data-v-655c9c4c");Object(o["v"])("data-v-655c9c4c");var m={class:"aside"},h=Object(o["g"])("menu"),g=Object(o["g"])("menu_open"),y={class:"tit"},S=Object(o["h"])("div",{class:"spacer"},null,-1),w={class:"bside"},k={class:"ly-content"};Object(o["t"])();var D=O((function(e,t,n,c,a,r){return Object(o["s"])(),Object(o["d"])("div",{class:["demo-layout",e.classes]},[Object(o["h"])("div",{class:"ly-header",style:e.headStyle},[Object(o["h"])("div",m,[Object(o["h"])("i",{class:"menu-toggle material-icons",onClick:t[1]||(t[1]=function(){return e.onMenuToggle&&e.onMenuToggle.apply(e,arguments)})},[e.layoutState.asideOpen?(Object(o["s"])(),Object(o["d"])(o["a"],{key:0},[h],64)):(Object(o["s"])(),Object(o["d"])(o["a"],{key:1},[g],64))]),Object(o["h"])("h1",y,Object(o["D"])(e.title),1)]),S,Object(o["h"])("div",w,[e.outGithub?(Object(o["s"])(),Object(o["d"])("i",{key:0,class:"out-link material-icons",onClick:t[2]||(t[2]=function(t){return e.onOutlink("goGithub")}),title:"Github"},"code")):Object(o["e"])("",!0),e.outNpm?(Object(o["s"])(),Object(o["d"])("i",{key:1,class:"out-link material-icons",onClick:t[3]||(t[3]=function(t){return e.onOutlink("goNpm")}),title:"NPM package"},"move_to_inbox")):Object(o["e"])("",!0),e.outDoc?(Object(o["s"])(),Object(o["d"])("i",{key:2,class:"out-link material-icons",onClick:t[4]||(t[4]=function(t){return e.onOutlink("goDoc")}),title:"Documentaion"},"library_books")):Object(o["e"])("",!0)])],4),Object(o["h"])("div",{class:"ly-aside",style:e.asideStyle},[Object(o["z"])(e.$slots,"menu",{},void 0,!0)],4),Object(o["h"])("div",{class:"ly-body",style:e.bodyStyle},[Object(o["h"])("div",k,[Object(o["z"])(e.$slots,"default",{},void 0,!0)])],4),Object(o["h"])("div",{class:"ly-overlay",onClick:t[5]||(t[5]=function(){return e.onMenuToggle&&e.onMenuToggle.apply(e,arguments)})})],2)})),G=(n("e94e"),Object(o["j"])({name:"DemoLayout",props:{title:{type:String,default:"foo"},sizeTop:{type:Number,default:60},sizeAside:{type:Number,default:240},outGithub:{type:Boolean,default:!0},outNpm:{type:Boolean,default:!0},outDoc:{type:Boolean,default:!0}},setup:function(e,t){var n=t.emit,c=function(){return 960<=window.innerWidth},a=Object(o["w"])({asideOpen:c(),top:e.sizeTop,left:e.sizeAside,right:0,bottom:0}),r=Object(o["b"])((function(){var e=a.asideOpen,t=a.top,n=a.left,o="".concat(t,"px"),r=e&&c()?"".concat(n,"px"):0;return{top:o,left:r,right:0,bottom:0}})),i=Object(o["b"])((function(){var e=r.value.top;return{height:e}})),u=Object(o["b"])((function(){var t=e.sizeAside,n=a.asideOpen,c=r.value,o=c.top,i=(c.left,n?0:-t);return{top:o,width:"".concat(t,"px"),transform:"translateX(".concat(i,"px)")}})),s=Object(o["b"])((function(){var e=r.value,t=e.top,n=e.right,c=e.bottom,o=e.left;return{padding:"".concat(t," ").concat(n," ").concat(c," ").concat(o)}})),d=Object(o["b"])((function(){var e=a.asideOpen;return{"need-overlay":e&&!c()}})),l=function(){a.asideOpen=!0},b=function(){a.asideOpen=!1},f=function(){a.asideOpen?b():l()},p=function(){f()},v=function(e){n(e)};return{layoutState:a,classes:d,headStyle:i,asideStyle:u,bodyStyle:s,onMenuToggle:p,onOutlink:v}}}));n("e62d");G.render=D,G.__scopeId="data-v-655c9c4c";var _=G,I=Object(o["I"])("data-v-f79e665a");Object(o["v"])("data-v-f79e665a");var A=Object(o["f"])('<div class="foot-desc" data-v-f79e665a><div class="desc-box" data-v-f79e665a><i class="icon material-icons" data-v-f79e665a>tag_faces</i><p class="desc" data-v-f79e665a> It is being used by <br data-v-f79e665a><a class="link" href="https://jood-lab.web.app/" target="_blank" data-v-f79e665a> jood-lab.web.app </a></p></div></div>',1);Object(o["t"])();var L=I((function(e,t,n,c,a,r){var i=Object(o["A"])("demo-menu-group");return Object(o["s"])(),Object(o["d"])("div",null,[Object(o["h"])(i,{menuList:n.menuList},null,8,["menuList"]),A])})),C=Object(o["I"])("data-v-47c28b19");Object(o["v"])("data-v-47c28b19");var M={class:"demo-menu-group"};Object(o["t"])();var P=C((function(e,t,n,c,a,r){var i=Object(o["A"])("demo-menu-group",!0),u=Object(o["A"])("demo-menu-item");return Object(o["s"])(),Object(o["d"])("div",M,[(Object(o["s"])(!0),Object(o["d"])(o["a"],null,Object(o["y"])(n.menuList,(function(e,t){return Object(o["s"])(),Object(o["d"])("div",{key:t,class:"group"},[e.children?(Object(o["s"])(),Object(o["d"])(i,{key:0,menuList:e.children},null,8,["menuList"])):(Object(o["s"])(),Object(o["d"])(u,{key:1,menu:e},null,8,["menu"]))])})),128))])})),x=(n("d6de"),n("8d0f"),Object(o["I"])("data-v-8a624f7c"));Object(o["v"])("data-v-8a624f7c");var N={class:"demo-menu-item"},T={class:"tit"},B={class:"desc"};Object(o["t"])();var z=x((function(e,t,n,c,a,r){var i=Object(o["A"])("router-link");return Object(o["s"])(),Object(o["d"])("div",N,[Object(o["h"])(i,{to:n.menu.to,class:"menu-action"},{default:x((function(){return[Object(o["h"])("span",T,Object(o["D"])(n.menu.label),1),Object(o["h"])("span",B,Object(o["D"])(n.menu.description),1)]})),_:1},8,["to"])])})),E={name:"DemoMenuItem",props:{menu:{type:Object,default:function(){return{}}}},setup:function(){return{}}};n("0f04");E.render=z,E.__scopeId="data-v-8a624f7c";var H=E,$={name:"DemoMenuGroup",components:{DemoMenuItem:H},props:{menuList:{type:Array,default:function(){return[]}}},setup:function(){return{}}};n("9e69");$.render=P,$.__scopeId="data-v-47c28b19";var q=$,J={name:"DemoMenu",components:{DemoMenuGroup:q},props:{menuList:{type:Array,default:function(){return[]}}},setup:function(){return{}}};n("1e06");J.render=L,J.__scopeId="data-v-f79e665a";var U=J,F=Object(o["I"])("data-v-5aa8dc04"),K=F((function(e,t,n,c,a,r){return Object(o["s"])(),Object(o["d"])("button",{class:["demo-button",e.buttonStyle.classes],style:e.buttonStyle.style},[Object(o["z"])(e.$slots,"default",{},void 0,!0)],6)})),V=Object(o["j"])({name:"DemoButton",props:{color:{type:String,default:""},text:{type:Boolean,default:!1}},setup:function(e){var t=Object(o["b"])((function(){var t=e.color,n=e.text,c={},o=[];return n?(o.push("is-text"),t&&/^(#|rgb)/.test(t)?c.color=t:o.push(t)):t&&/^(#|rgb)/.test(t)?c.backgroundColor=t:o.push(t),{style:c,classes:o}}));return{buttonStyle:t}}});n("8186");V.render=K,V.__scopeId="data-v-5aa8dc04";var W=V,X=Object(o["I"])("data-v-0cd9e527");Object(o["v"])("data-v-0cd9e527");var Q={class:"demo-preview-code"},R={key:0,class:"code-head"},Y={class:"tit"},Z={class:"desc"},ee={ref:"refContainer",class:"panel-viewer"};Object(o["t"])();var te=X((function(e,t,n,c,a,r){return Object(o["s"])(),Object(o["d"])("div",Q,[e.viewState.hasHead?(Object(o["s"])(),Object(o["d"])("div",R,[Object(o["h"])("h3",Y,Object(o["D"])(e.viewState.title),1),Object(o["h"])("div",Z,Object(o["D"])(e.viewState.description),1)])):Object(o["e"])("",!0),Object(o["h"])("div",ee,[Object(o["h"])("pre",{class:e.viewState.language},[Object(o["h"])("code",null,[Object(o["z"])(e.$slots,"default",{},(function(){return[Object(o["g"])(Object(o["D"])(e.viewState.code),1)]}),{},!0)])],2)],512)])})),ne=(n("b55a"),n("9f9b")),ce=n.n(ne),oe=(n("934d"),n("263c"),Object(o["j"])({name:"DemoPreviewCode",props:{title:{type:String,default:""},description:{type:String,default:""},lang:{type:String,default:"typescript"},code:{type:String,default:""}},setup:function(e){var t=Object(o["C"])(null),n=Object(o["b"])((function(){var t=e.title,n=e.description,c=e.lang,o=void 0===c?"":c,a=e.code,r=void 0===a?"":a,i=t||n;return{hasHead:i,title:t,description:n,language:"language-".concat(o),code:r.trim()}}));return Object(o["q"])((function(){ce.a.highlightAllUnder(t.value)})),{refContainer:t,viewState:n}}}));n("b5a8");oe.render=te,oe.__scopeId="data-v-0cd9e527";var ae=oe,re=Object(o["I"])("data-v-e486477c");Object(o["v"])("data-v-e486477c");var ie={class:"demo-panel"},ue={key:0,class:"panel-head"},se={key:0,class:"tit"},de={key:1,class:"desc"},le={class:"panel-body"};Object(o["t"])();var be=re((function(e,t,n,c,a,r){return Object(o["s"])(),Object(o["d"])("div",ie,[e.viewState.hasHead?(Object(o["s"])(),Object(o["d"])("div",ue,[e.viewState.title?(Object(o["s"])(),Object(o["d"])("h3",se,Object(o["D"])(e.viewState.title),1)):Object(o["e"])("",!0),e.viewState.description?(Object(o["s"])(),Object(o["d"])("p",de,Object(o["D"])(e.viewState.description),1)):Object(o["e"])("",!0)])):Object(o["e"])("",!0),Object(o["h"])("div",le,[Object(o["z"])(e.$slots,"default",{},void 0,!0)])])})),fe=Object(o["j"])({name:"DemoPanel",props:{title:{type:String,default:""},description:{type:String,default:""}},setup:function(e){var t=Object(o["b"])((function(){var t=e.title,n=e.description,c=!(!t&&!n);return{hasHead:c,title:t,description:n}}));return{viewState:t}}});n("00ab");fe.render=be,fe.__scopeId="data-v-e486477c";var pe=fe,ve=Object(o["I"])("data-v-0f24e6ca"),je=ve((function(e,t,n,c,a,r){return Object(o["s"])(),Object(o["d"])("div",{class:["demo-panel-devider",e.classes]},null,2)})),Oe=Object(o["j"])({name:"DemoPanelDevider",props:{half:{type:Boolean,default:!1},line:{type:Boolean,default:!1}},setup:function(e){var t=Object(o["b"])((function(){var t=e.half,n=e.line;return{half:t,line:n}}));return{classes:t}}});n("132e");Oe.render=je,Oe.__scopeId="data-v-0f24e6ca";var me=Oe,he=(n("868d"),{install:function(e){var t=c;for(var n in t){var o=t[n],a=o.name;e.component(a,o)}}}),ge=Object(o["c"])(d);ge.use(j),ge.use(he),ge.mount("#app")},e62d:function(e,t,n){"use strict";n("92fd")}});