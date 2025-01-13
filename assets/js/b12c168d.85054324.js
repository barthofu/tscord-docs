"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[4568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:70},s="Scheduler",c={unversionedId:"bot/features/scheduler",id:"version-2.4/bot/features/scheduler",title:"Scheduler",description:"The scheduler lets you schedule functions to be run each X time or at each X time.",source:"@site/versioned_docs/version-2.4/bot/features/scheduler.mdx",sourceDirName:"bot/features",slug:"/bot/features/scheduler",permalink:"/docs/bot/features/scheduler",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.4/bot/features/scheduler.mdx",tags:[],version:"2.4",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Assets",permalink:"/docs/bot/features/assets"},next:{title:"Stats",permalink:"/docs/bot/features/stats"}},i={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scheduler"},"Scheduler"),(0,o.kt)("p",null,"The scheduler lets you schedule functions to be run each X time or at each X time.\nIt uses ",(0,o.kt)("a",{parentName:"p",href:"https://ostechnix.com/a-beginners-guide-to-cron-jobs/"},"cron jobs")," under the hood, so you should be familiar with its syntax."),(0,o.kt)("p",null,"To setup a scheduled function, just add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Schedule()")," decorator on top of it (only works with methods within a class!)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"E.g:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Schedule } from '@/decorators'\n\nexport class YourService {\n\n    @Schedule('*/5 * * * *') // will run this function every 5 minutes\n    foo() {\n        console.log('foo')\n    }\n\n    @Schedule('0 0 * * *') // will run this function every dat at 00:00\n    bar() {\n        console.log('bar')\n    }\n    \n}\n")),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Here is a generator website for cron schedule expressions: ",(0,o.kt)("a",{parentName:"p",href:"https://crontab.guru/"},"https://crontab.guru/"),".")))}p.isMDXComponent=!0}}]);