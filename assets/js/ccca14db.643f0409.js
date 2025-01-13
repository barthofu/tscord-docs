"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[6640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(v,a(a({ref:t},l),{},{components:r})):n.createElement(v,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_position:2},a="Events",i={unversionedId:"bot/discord/events",id:"version-2.0/bot/discord/events",title:"Events",description:"Base events",source:"@site/versioned_docs/version-2.0/bot/discord/events.mdx",sourceDirName:"bot/discord",slug:"/bot/discord/events",permalink:"/docs/2.0/bot/discord/events",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.0/bot/discord/events.mdx",tags:[],version:"2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/2.0/bot/discord/interactions"},next:{title:"Guards",permalink:"/docs/2.0/bot/discord/guards"}},d={},c=[{value:"Base events",id:"base-events",level:2},{value:"Added events",id:"added-events",level:2},{value:"Custom Events",id:"custom-events",level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("h2",{id:"base-events"},"Base events"),(0,o.kt)("p",null,"You can use this decorator to declare methods that will be executed whenever a Discord event is triggered."),(0,o.kt)("p",null,"Our methods must be decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@On(event: string)")," or ",(0,o.kt)("a",{parentName:"p",href:"https://discordx.js.org/docs/decorators/general/once"},"@Once(event: string)")," decorator."),(0,o.kt)("p",null,"It's that simple, when the event is triggered, the method is called:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Discord, On, Once } from 'discordx'\n\n@Discord()\nclass Example {\n\n  @On('messageCreate')\n  private onMessage() {\n    // ...\n  }\n\n  @Once('ready')\n  private onReady() {\n    // ...\n  }\n}\n")),(0,o.kt)("admonition",{title:"important",type:"tip"},(0,o.kt)("h3",{parentName:"admonition",id:"for-more-information-head-over-to-the-discordx-documentation"},"For more information, head over to the ",(0,o.kt)("a",{parentName:"h3",href:"https://discordx.js.org/docs/decorators/general/on"},"discordx documentation"),".")),(0,o.kt)("h2",{id:"added-events"},"Added events"),(0,o.kt)("p",null,"TSCord make the use of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/Androz2091/discord-logs"},"discord-logs"))," to add furthermore events to the client!"),(0,o.kt)("p",null,"You can find the complete list of added events ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord-logs.js.org/"},"here"))),(0,o.kt)("h2",{id:"custom-events"},"Custom Events"),(0,o.kt)("p",null,"You can also set your own custom events. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/bot/features/custom-events"},"Head over this part of the documentation to know more \ud83d\ude09")))}p.isMDXComponent=!0}}]);