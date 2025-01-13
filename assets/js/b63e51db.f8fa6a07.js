"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[9856],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a="TSCord Plugins",l={unversionedId:"plugins/index",id:"version-2.1/plugins/index",title:"TSCord Plugins",description:"#### TSCord template is fully extensible thanks to the plugin eco-system!",source:"@site/versioned_docs/version-2.1/plugins/index.mdx",sourceDirName:"plugins",slug:"/plugins/",permalink:"/docs/2.1/plugins/",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.1/plugins/index.mdx",tags:[],version:"2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/2.1/cli/usage"},next:{title:"Usage",permalink:"/docs/2.1/plugins/usage"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tscord-plugins"},"TSCord Plugins"),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"tscord-template-is-fully-extensible-thanks-to-the-plugin-eco-system"},"TSCord template is fully extensible thanks to the plugin eco-system!")),(0,o.kt)("p",null,"Each plugin is a sub-component of the original TSCord discord bot template, so they can provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"handlers (commands, events, etc)"),(0,o.kt)("li",{parentName:"ul"},"services"),(0,o.kt)("li",{parentName:"ul"},"guards"),(0,o.kt)("li",{parentName:"ul"},"utils"),(0,o.kt)("li",{parentName:"ul"},"api endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"etc..."))),(0,o.kt)("p",null,"They're stored in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/barthofu/tscord-plugins"},"barthofu/tscord-plugins")," repository and they're all verified by a TSCord core team member."))}p.isMDXComponent=!0}}]);