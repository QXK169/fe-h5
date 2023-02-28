import{y as E}from"./vue-libs-3cddcbbd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const x=(t,e)=>{const o=t.__vccOpts||t;for(const[s,n]of e)o[s]=n;return o},L="modulepreload",C=function(t){return"/public/fe-h5/"+t},p={},f=function(e,o,s){if(!o||o.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=C(r),r in p)return;p[r]=!0;const a=r.endsWith(".css"),_=a?'[rel="stylesheet"]':"";if(!!s)for(let c=n.length-1;c>=0;c--){const u=n[c];if(u.href===r&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${_}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":L,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((c,u)=>{i.addEventListener("load",c),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},P=()=>f(()=>import("./home-f828b9cd.js"),["assets/home-f828b9cd.js","assets/vue-libs-3cddcbbd.js"]),R=()=>f(()=>import("./quickstart-8af3ca29.js"),["assets/quickstart-8af3ca29.js","assets/vue-libs-3cddcbbd.js"]),T=()=>f(()=>import("./README-a4821098.js"),["assets/README-a4821098.js","assets/vue-libs-3cddcbbd.js"]),m={name:"app-component-lib",build:{css:{base:"style/index.css",preprocessor:"sass"},site:{publicPath:"/public/fe-h5/"}},site:{title:"app-component-lib",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",nav:[{title:"开发指南",items:[{path:"home",title:"介绍"},{path:"quickstart",title:"快速上手"}]},{title:"基础组件",items:[{path:"gw-text",title:"gw按钮"},{path:"gw-navBar",title:"标题栏"}]}]}},M={Home:P,Quickstart:R,GwText:T},D="1.0.4";let d=[],h=!1;function g(t){h?t():d.push(t)}window.top===window?window.addEventListener("message",t=>{t.data.type==="iframeReady"&&(h=!0,d.forEach(e=>e()),d=[])}):window.top.postMessage({type:"iframeReady"},"*");function y(){var o,s;const t=window.vueRouter,{path:e}=t.currentRoute.value;return(o=m.site.simulator)!=null&&o.routeMapper?(s=m.site.simulator)==null?void 0:s.routeMapper(e):e}function I(){window.top.postMessage({type:"replacePath",value:y()},"*")}function N(){const t=document.querySelector("iframe");t&&g(()=>{t.contentWindow.postMessage({type:"replacePath",value:y()},"*")})}function $(t){const e=document.querySelector("iframe");e&&g(()=>{e.contentWindow.postMessage({type:"updateTheme",value:t},"*")})}function b(){const t=window.localStorage.getItem("vantTheme");return t||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function q(){const t=E(b());return window.addEventListener("message",e=>{var s,n;if(((s=e.data)==null?void 0:s.type)!=="updateTheme")return;const o=((n=e.data)==null?void 0:n.value)||"";t.value=o}),t}function z(t){window.addEventListener("message",e=>{var s,n;if(((s=e.data)==null?void 0:s.type)!=="replacePath")return;const o=((n=e.data)==null?void 0:n.value)||"";t.currentRoute.value.path!==o&&t.replace(o).catch(()=>{})})}const S=navigator.userAgent.toLowerCase(),B=/ios|iphone|ipod|ipad|android/.test(S);function U(t,e="-"){return t.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}function V(t){const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);const o=document.getSelection();if(!o)return;const s=o.rangeCount>0?o.getRangeAt(0):!1;e.select(),document.execCommand("copy"),document.body.removeChild(e),s&&(o.removeAllRanges(),o.addRange(s))}const v="zh-CN",A="en-US",w="vant-cli-lang";let l=v;function Z(){return l}function H(t){l=t,localStorage.setItem(w,t)}function W(t){const e=localStorage.getItem(w);if(e){l=e;return}if(navigator.language&&navigator.language.indexOf("zh-")!==-1){l=v;return}l=t||A}export{x as _,m as a,H as b,V as c,W as d,M as e,N as f,b as g,U as h,B as i,Z as j,f as k,z as l,I as m,D as p,$ as s,q as u};
