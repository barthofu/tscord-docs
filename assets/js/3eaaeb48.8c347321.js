"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[1716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:30},i="Custom Events",s={unversionedId:"bot/features/custom-events",id:"bot/features/custom-events",title:"Custom Events",description:"We've extended the behavior of @On and @Once decorators so they can work flawlessly with any kind of custom event.",source:"@site/docs/bot/features/custom-events.mdx",sourceDirName:"bot/features",slug:"/bot/features/custom-events",permalink:"/docs/bot/features/custom-events",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/features/custom-events.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Internationalization (i18n)",permalink:"/docs/bot/features/internationalization"},next:{title:"API",permalink:"/docs/bot/features/api"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-events"},"Custom Events"),(0,o.kt)("p",null,"We've extended the behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"@On")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@Once")," decorators so they can work flawlessly with any kind of custom event.\nIn fact, you can emit and handle your own events!"),(0,o.kt)("p",null,"In order to emit an event, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"emit()")," method on your ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { singleton } from '@tsyringe'\nimport { Client } from 'discordx'\n\n@singleton()\nexport class YourService {\n\n    constructor(\n        private client: Client\n    ) {}\n\n    doSomething() {\n\n        // highlight-next-line\n        this.client.emit('myCustomEvent')\n    }\n}\n")),(0,o.kt)("p",null,"And then handle it with a method decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@On")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@Once")," decorators:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Discord, On } from '@decorators'\n\n@Discord()\nexport class YourEventHandler {\n\n    // highlight-next-line\n    @On('myCustomEvent')\n    handleMyCustomEvent() {\n\n        console.log('I handled my custom event!')\n    }\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that the class where you handle the event must be decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Discord()")," decorator.")))}p.isMDXComponent=!0}}]);