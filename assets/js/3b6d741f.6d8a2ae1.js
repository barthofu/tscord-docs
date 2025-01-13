"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[2519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:20},i="Docker",c={unversionedId:"bot/devops/docker",id:"bot/devops/docker",title:"Docker",description:"TSCord is fully configured to work flawlessly with Docker using docker-compose.",source:"@site/docs/bot/devops/docker.mdx",sourceDirName:"bot/devops",slug:"/bot/devops/docker",permalink:"/docs/next/bot/devops/docker",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/devops/docker.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"HMR",permalink:"/docs/next/bot/features/hmr"},next:{title:"PM2",permalink:"/docs/next/bot/devops/pm2"}},s={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker"},"Docker"),(0,n.kt)("p",null,"TSCord is fully configured to work flawlessly with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.docker.com/"},"Docker"))," using ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.docker.com/compose/"},"docker-compose")),"."),(0,n.kt)("p",null,"Just install it and run the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," command to spin up a production ready instance of your bot!"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To install ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose"),", head over ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.docker.com/compose/install/"},"here")),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Build errors could occur if you're using a different version of node in your dev environment than the one used in the Dockerfile. To fix this, you can change the ",(0,n.kt)("inlineCode",{parentName:"p"},"node")," version in the Dockerfile to match the one you're using.")))}l.isMDXComponent=!0}}]);