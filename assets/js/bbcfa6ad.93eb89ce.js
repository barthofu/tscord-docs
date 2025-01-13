"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[3832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),b=o,f=l["".concat(d,".").concat(b)]||l[b]||u[b]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},80330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:40},a="Debug with VSCode",c={unversionedId:"bot/devops/debug-with-vscode",id:"version-2.4/bot/devops/debug-with-vscode",title:"Debug with VSCode",description:"TSCord bundles with a VSCode debug config.",source:"@site/versioned_docs/version-2.4/bot/devops/debug-with-vscode.mdx",sourceDirName:"bot/devops",slug:"/bot/devops/debug-with-vscode",permalink:"/docs/bot/devops/debug-with-vscode",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.4/bot/devops/debug-with-vscode.mdx",tags:[],version:"2.4",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"PM2",permalink:"/docs/bot/devops/pm2"},next:{title:"CI/CD",permalink:"/docs/bot/devops/ci-cd"}},d={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-with-vscode"},"Debug with VSCode"),(0,o.kt)("p",null,"TSCord bundles with a VSCode debug config."),(0,o.kt)("p",null,"The config is located at ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode/launch.json")," but in fact you don't have to touch it!"),(0,o.kt)("p",null,"To start the bot in debugging mode, just go to the ",(0,o.kt)("strong",{parentName:"p"},"Run and Debug")," tab (or ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,o.kt)("inlineCode",{parentName:"p"},"maj"),"+",(0,o.kt)("inlineCode",{parentName:"p"},"d"),") and click on the green play button."))}u.isMDXComponent=!0}}]);