(function(e){function t(t){for(var r,o,c=t[0],u=t[1],d=t[2],s=0,l=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function c(e){return u.p+"js/"+({Error:"Error",Main:"Main"}[e]||e)+"."+{Error:"daadf367",Main:"d76ed9ec"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={Error:1,Main:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({Error:"Error",Main:"Main"}[e]||e)+"."+{Error:"0349fa69",Main:"e45fe6d8"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var d=a[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===i))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],s=d.getAttribute("data-href");if(s===r||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var l=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/figarte/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"354d":function(e,t,n){"use strict";n("3f86")},"3f86":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e792"),n("1368");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap",class:e.device},[n("router-view")],1)},i=[],a={name:"App",data:function(){return{device:null}},watch:{device:{handler:function(e){e&&this.$store.dispatch("checkDevice",e)},immediate:!0}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onResize:function(){var e=document.documentElement.clientWidth;this.device=e>1920?"desktop-wide":e>=1230&&e<=1920?"desktop":e<1230&&e>991?"tablet":"mobile"}}},c=a,u=(n("354d"),n("2877")),d=Object(u["a"])(c,o,i,!1,null,"7275a8f7",null),s=d.exports,l=n("8c4f");r["a"].use(l["a"]);var f=[{path:"/",name:"Home",component:function(){return n.e("Main").then(n.bind(null,"cd56"))}},{path:"*",redirect:"/error"},{path:"/error",name:"Error",component:function(){return n.e("Error").then(n.bind(null,"dda8"))}},{path:"/detail/:name?",name:"Detail",component:function(){return n.e("Error").then(n.bind(null,"c84b"))}}],p=new l["a"]({mode:"history",base:"/figarte/",routes:f,scrollBehavior:function(e,t,n){return{x:0,y:0}}}),h=p,m=n("2f62");r["a"].use(m["a"]);var v=new m["a"].Store({state:{device:null},mutations:{},actions:{checkDevice:function(e,t){var n=e.state;n.device=t}},getters:{isMobile:function(e){return"mobile"===e.device},isTablet:function(e){return"tablet"===e.device},isDesktop:function(e){return"desktop"===e.device}}}),g=n("f6dd");function b(){var e={width:1230,fontSize:18},t={width:991,fontSize:31},n=document.documentElement,r="orientationchange"in window?"orientationchange":"resize",o=function(){var r=n.clientWidth;if(r){var o=function(e){var t=e.fontSize*(r/e.width),o=Math.round(t);n.style.fontSize="".concat(o<11?11:o,"px")};r<=t.width?o(t):r>t.width&&r<=e.width?o(e):n.style.fontSize="".concat(e.fontSize,"px")}};document.addEventListener&&(window.addEventListener(r,o,!1),document.addEventListener("DOMContentLoaded",o,!1))}n("c1c3");b(),r["a"].config.productionTip=!1,r["a"].use(g["a"],{global:!0,componentId:"youtube-media"}),new r["a"]({router:h,store:v,render:function(e){return e(s)}}).$mount("#app")},c1c3:function(e,t,n){}});