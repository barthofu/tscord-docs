"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[38],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,f=l["".concat(d,".").concat(b)]||l[b]||u[b]||i;return r?o.createElement(f,c(c({ref:t},p),{},{components:r})):o.createElement(f,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=l;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4},c="Debug with VSCode",a={unversionedId:"bot/devops/debug-with-vscode",id:"version-2.0.0/bot/devops/debug-with-vscode",title:"Debug with VSCode",description:"TSCord bundles with a VSCode debug config.",source:"@site/versioned_docs/version-2.0.0/bot/devops/debug-with-vscode.mdx",sourceDirName:"bot/devops",slug:"/bot/devops/debug-with-vscode",permalink:"/tscord-docs/docs/bot/devops/debug-with-vscode",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.0.0/bot/devops/debug-with-vscode.mdx",tags:[],version:"2.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"PM2",permalink:"/tscord-docs/docs/bot/devops/pm2"},next:{title:"CI/CD",permalink:"/tscord-docs/docs/bot/devops/ci-cd"}},d={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"debug-with-vscode"},"Debug with VSCode"),(0,n.kt)("p",null,"TSCord bundles with a VSCode debug config."),(0,n.kt)("p",null,"The config is located at ",(0,n.kt)("inlineCode",{parentName:"p"},".vscode/launch.json")," but in fact you don't have to touch it!"),(0,n.kt)("p",null,"To start the bot in debugging mode, just go to the ",(0,n.kt)("strong",{parentName:"p"},"Run and Debug")," tab (or ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"maj"),"+",(0,n.kt)("inlineCode",{parentName:"p"},"d"),") and click on the green play button."))}u.isMDXComponent=!0}}]);