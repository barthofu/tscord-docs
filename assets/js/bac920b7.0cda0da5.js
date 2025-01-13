"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[2694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:110},i="HMR",s={unversionedId:"bot/features/hmr",id:"version-2.4/bot/features/hmr",title:"HMR",description:"Hot Module Replacement (HMR) is a feature to inject updated modules into the active runtime. This allows you to see changes in your application without a full reload.",source:"@site/versioned_docs/version-2.4/bot/features/hmr.mdx",sourceDirName:"bot/features",slug:"/bot/features/hmr",permalink:"/docs/bot/features/hmr",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.4/bot/features/hmr.mdx",tags:[],version:"2.4",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/bot/features/environment-variables"},next:{title:"Docker",permalink:"/docs/bot/devops/docker"}},l={},c=[{value:"Keep instance state",id:"keep-instance-state",level:2},{value:"Init method",id:"init-method",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hmr"},"HMR"),(0,a.kt)("p",null,"Hot Module Replacement (HMR) is a feature to inject updated modules into the active runtime. This allows you to see changes in your application without a full reload."),(0,a.kt)("p",null,"HMR is currenlty only working with ",(0,a.kt)("strong",{parentName:"p"},"events")," and ",(0,a.kt)("strong",{parentName:"p"},"commands")," files due to some limitations. We are planning to add as much support as possible in the future."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'It is important to not confuse HMR, which is an advanced technique that allows you to keep the state of your application while updating the code and feels almost instant, with the simple "automatic restart on save" happening on other files than ',(0,a.kt)("strong",{parentName:"p"},"events")," and ",(0,a.kt)("strong",{parentName:"p"},"commands")," ones. ")),(0,a.kt)("h2",{id:"keep-instance-state"},"Keep instance state"),(0,a.kt)("p",null,"If you want to keep the instance state of a singleton after an HMR auto-reload, you must set the ",(0,a.kt)("inlineCode",{parentName:"p"},"keepInstanceAfterHmr")," parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Service")," decorator to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"E.g:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Service } from '@/decorators'\n\n@Service({\n    keepInstanceAfterHmr: true\n})\nclass MyService {\n\n    // ...\n}\n")),(0,a.kt)("h3",{id:"init-method"},"Init method"),(0,a.kt)("p",null,"If your service needs to be ",(0,a.kt)("em",{parentName:"p"},"initialized")," after being constructed, you should re-run this initialization method by calling it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"// re-init services")," section of the ",(0,a.kt)("inlineCode",{parentName:"p"},"reload()")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.ts")," file."),(0,a.kt)("p",null,"E.g:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async reload(client: Client) {\n\n    // ...\n\n    // re-init services\n\n    const pluginManager = await resolveDependency(PluginsManager)\n    await pluginManager.loadPlugins()\n\n    const db = await resolveDependency(Database)\n    await db.initialize()\n\n//highlight-start\n    const myService = await resolveDependency(MyService)\n    await myService.init()\n//highlight-end\n\n    logger.log(chalk.whiteBright('Hot reloaded\\n'))\n}\n")),(0,a.kt)("p",null,"It is often the case with services that needs to init things asynchronously as the constructor of a class cannot be async."))}u.isMDXComponent=!0}}]);