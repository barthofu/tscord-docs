"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[7462],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8487:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294);function o(e){let{src:r,alt:t,center:o=!1}=e;return n.createElement("img",{src:r,alt:t||"Image",style:{borderRadius:"5px",...o&&{display:"block",margin:"0 auto"},boxShadow:"0 0 20px rgba(0, 0, 0, .25)"}})}},6968:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),o=(t(7294),t(3905)),a=t(8487);const i={sidebar_position:90},l="Error Handler",s={unversionedId:"bot/features/error-handler",id:"bot/features/error-handler",title:"Error Handler",description:"",source:"@site/docs/bot/features/error-handler.mdx",sourceDirName:"bot/features",slug:"/bot/features/error-handler",permalink:"/tscord-docs/docs/next/bot/features/error-handler",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/features/error-handler.mdx",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/tscord-docs/docs/next/bot/features/logger"},next:{title:"Docker",permalink:"/tscord-docs/docs/next/bot/devops/docker"}},c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Discord",id:"discord",level:2},{value:"Custom errors",id:"custom-errors",level:2}],p={toc:d};function u(e){let{components:r,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-handler"},"Error Handler"),(0,o.kt)("p",null,"All unhandled errors in TSCord fallbacks to a default error handler, which can be configured to send those errors in the console, in a file or even in a discord channel!"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/logs.ts",title:"src/config/logs.ts"},"//...\n    \n    error: {\n        file: true,\n        console: true,\n        channel: null // null or the ID of the channel to send \n    }\n\n//...\n")),(0,o.kt)("h2",{id:"discord"},"Discord"),(0,o.kt)("p",null,"If you've set a channel ID in the config, each error happening on your bot will be beautifully logged on Discord."),(0,o.kt)(a.Z,{src:t(8701).Z,mdxType:"RenderImage"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Errors will not be sent to discord in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," mode.")),(0,o.kt)("h2",{id:"custom-errors"},"Custom errors"),(0,o.kt)("p",null,"You can create custom errors classes with a ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," method that will be executed each time it is thrown!"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The class must extend ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseError"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"E.g:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { BaseError } from \"@utils/classes\"\nimport { snake } from \"case\"\n\nexport class InvalidOptionName extends BaseError {\n\n    constructor(nameOption: string) {\n        super(`Name option must be all lowercase with no spaces. '${nameOption}' should be '${snake(nameOption)}'`)\n    }\n\n    handle() {\n\n        this.logger.console('error', this.message)\n        this.kill()\n    }\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want your error to ",(0,o.kt)("em",{parentName:"p"},"actually")," kill the process, you should call the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseError")," method: ",(0,o.kt)("inlineCode",{parentName:"p"},"kill()"),".")))}u.isMDXComponent=!0},8701:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/error_log_discord_channel_example-2e3efb3963c88671d9cb54b1aee98859.png"}}]);