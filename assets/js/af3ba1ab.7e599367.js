"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[3559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a="Activities",c={unversionedId:"bot/discord/activities",id:"bot/discord/activities",title:"Activities",description:"You can simply setup activities your bot will loop through in the configs/general.ts file, like this:",source:"@site/docs/bot/discord/activities.mdx",sourceDirName:"bot/discord",slug:"/bot/discord/activities",permalink:"/tscord-docs/docs/next/bot/discord/activities",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/discord/activities.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Guards",permalink:"/tscord-docs/docs/next/bot/discord/guards"},next:{title:"Configuration",permalink:"/tscord-docs/docs/next/bot/features/database/configuration"}},s={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activities"},"Activities"),(0,i.kt)("p",null,"You can simply setup activities your bot will loop through in the ",(0,i.kt)("inlineCode",{parentName:"p"},"configs/general.ts")," file, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=configs/general.ts",title:"configs/general.ts"},"export const generalConfig = {\n    \n    //...\n\n    activities: [\n        {\n            text: 'discord.js v13',\n            type: 'PLAYING'\n        },\n        {\n            text: 'some knowledge',\n            type: 'STREAMING'\n        }\n    ],\n\n    //...\n\n}\n")),(0,i.kt)("p",null,"The allowed types are :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLAYING")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LISTENING")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WATCHING")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STREAMING"))))}d.isMDXComponent=!0}}]);