"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[310],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(v,s(s({ref:t},l),{},{components:n})):r.createElement(v,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},c="Events",d={unversionedId:"discord/events",id:"discord/events",title:"Events",description:"Base events",source:"@site/docs/discord/events.mdx",sourceDirName:"discord",slug:"/discord/events",permalink:"/tscord-docs/docs/discord/events",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/discord/events.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/tscord-docs/docs/discord/interactions"},next:{title:"Guards",permalink:"/tscord-docs/docs/discord/guards"}},l={},u=[{value:"Base events",id:"base-events",level:2},{value:"Added events",id:"added-events",level:2},{value:"Custom Events",id:"custom-events",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h2",{id:"base-events"},"Base events"),(0,a.kt)("p",null,"You can use this decorator to declare methods that will be executed whenever a Discord event is triggered."),(0,a.kt)("p",null,"Our methods must be decorated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@On(event: string)")," or ",(0,a.kt)("a",{parentName:"p",href:"https://discordx.js.org/docs/decorators/general/once"},"@Once(event: string)")," decorator."),(0,a.kt)("p",null,"It's that simple, when the event is triggered, the method is called:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Discord, On, Once } from 'discordx'\n\n@Discord()\nclass Example {\n\n  @On('messageCreate')\n  private onMessage() {\n    // ...\n  }\n\n  @Once('ready')\n  private onReady() {\n    // ...\n  }\n}\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("h3",{parentName:"div",id:"for-more-information-head-over-to-the-discordx-documentation"},"For more information, head over to the ",(0,a.kt)("a",{parentName:"h3",href:"https://discordx.js.org/docs/decorators/general/on"},"discordx documentation")))),(0,a.kt)("h2",{id:"added-events"},"Added events"),(0,a.kt)("p",null,"TSCord make the use of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Androz2091/discord-logs"},"discord-logs"))," to add furthermore events to the client!"),(0,a.kt)("p",null,"You can find the complete list of added events ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://discord-logs.js.org/"},"here"))),(0,a.kt)("h2",{id:"custom-events"},"Custom Events"),(0,a.kt)("p",null,"You can also set your own custom events. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/features/custom-events"},"Head over this part of the documentation to know more \ud83d\ude09")))}m.isMDXComponent=!0}}]);