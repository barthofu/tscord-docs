"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[667],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7976:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var n=t(7462),o=t(3366),a=t(7294),i=t(3905);function s(e){var r=e.src,t=e.alt,n=e.center,o=void 0!==n&&n;return a.createElement("img",{src:r,alt:t||"Image",style:Object.assign({borderRadius:"5px"},o&&{display:"block",margin:"0 auto"},{boxShadow:"0 0 20px rgba(0, 0, 0, .25)"})})}var l=["components"],c={sidebar_position:90},d="Error Handler",u={unversionedId:"features/error-handler",id:"features/error-handler",title:"Error Handler",description:"All unhandled errors in TSCord fallbacks to a default error handler, which can be configured to send those errors in the console, in a file or even in a discord channel!",source:"@site/docs/features/error-handler.mdx",sourceDirName:"features",slug:"/features/error-handler",permalink:"/tscord-docs/docs/features/error-handler",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/features/error-handler.mdx",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/tscord-docs/docs/features/logger"},next:{title:"CLI",permalink:"/tscord-docs/docs/devops/cli"}},p={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Discord",id:"discord",level:2},{value:"Custom errors",id:"custom-errors",level:2}],f={toc:m};function h(e){var r=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"error-handler"},"Error Handler"),(0,i.kt)("p",null,"All unhandled errors in TSCord fallbacks to a default error handler, which can be configured to send those errors in the console, in a file or even in a discord channel!"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/logs.ts",title:"src/config/logs.ts"},"//...\n    \n    error: {\n        file: true,\n        console: true,\n        channel: null // null or the ID of the channel to send \n    }\n\n//...\n")),(0,i.kt)("h2",{id:"discord"},"Discord"),(0,i.kt)("p",null,"If you've set a channel ID in the config, each error happening on your bot will be beautifully logged on Discord."),(0,i.kt)(s,{src:t(5518).Z,mdxType:"RenderImage"}),(0,i.kt)("h2",{id:"custom-errors"},"Custom errors"),(0,i.kt)("p",null,"You can create custom errors classes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"handle()")," method that will be executed each time it is thrown!"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The class must extend ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseError")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"E.g:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { BaseError } from \"@utils/classes\"\nimport { snake } from \"case\"\n\nexport class InvalidOptionName extends BaseError {\n\n    constructor(nameOption: string) {\n        super(`Name option must be all lowercase with no spaces. '${nameOption}' should be '${snake(nameOption)}'`)\n    }\n\n    handle() {\n\n        this.logger.console('error', this.message)\n        this.kill()\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want your error to ",(0,i.kt)("em",{parentName:"p"},"actually")," kill the process, you should call the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseError")," method: ",(0,i.kt)("inlineCode",{parentName:"p"},"kill()")))))}h.isMDXComponent=!0},5518:function(e,r,t){r.Z=t.p+"assets/images/error_log_discord_channel_example-2e3efb3963c88671d9cb54b1aee98859.png"}}]);