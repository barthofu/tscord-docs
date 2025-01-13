"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[1733],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,i(i({ref:e},d),{},{components:n})):r.createElement(f,i({ref:e},d))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3780:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},i="Installation",s={unversionedId:"bot/get-started/installation",id:"bot/get-started/installation",title:"Installation",description:"As of now, this template is not yet compatible with sharding, so we don't advertise to use it for large bots.",source:"@site/docs/bot/get-started/installation.mdx",sourceDirName:"bot/get-started",slug:"/bot/get-started/installation",permalink:"/docs/next/bot/get-started/installation",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/get-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/next/intro"},next:{title:"Configuration",permalink:"/docs/next/bot/get-started/configuration"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2}],d={toc:p};function c(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As of now, this template is not yet compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://discordjs.guide/sharding/#when-to-shard"},"sharding"),", so we don't advertise to use it for large bots."),(0,o.kt)("p",{parentName:"admonition"},"Researchs are made to find how to implement this, as well as clustering, in a proper manner. This implementation should be happening in the future next big version ",(0,o.kt)("inlineCode",{parentName:"p"},"3.0"),"."),(0,o.kt)("p",{parentName:"admonition"},"Sorry for the inconvenience.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://nodejs.org/"},"node.js"))," (",(0,o.kt)("em",{parentName:"li"},">= 18.x.x"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/nodejs/node-gyp?tab=readme-ov-file#installation"},"node-gyp")))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the official CLI globally"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm i -g tscord\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the init command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"tscord init bot <name_of_your_bot>\n")),(0,o.kt)("p",{parentName:"li"},"It'll initialize a fresh TSCord-based discord bot, install its dependencies and setup git on it!"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli/usage"},"CLI documentation")," to know more on this and other commands!")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"tscord init bot")," command fails with an exit error code of 1, it is likely that the dependencies installation step has failed."),(0,o.kt)("p",{parentName:"admonition"},"In most cases, it is due to the lack of native build tools on your system required by ",(0,o.kt)("inlineCode",{parentName:"p"},"node-gyp"),". You can fix this by following the steps mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp?tab=readme-ov-file#installation"},"official node-gyp documentation"))))}c.isMDXComponent=!0}}]);