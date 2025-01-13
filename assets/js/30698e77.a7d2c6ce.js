"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[9392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:10},i="Usage",l={unversionedId:"plugins/usage",id:"version-2.2/plugins/usage",title:"Usage",description:"Manage plugins",source:"@site/versioned_docs/version-2.2/plugins/usage.mdx",sourceDirName:"plugins",slug:"/plugins/usage",permalink:"/docs/2.2/plugins/usage",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.2/plugins/usage.mdx",tags:[],version:"2.2",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"TSCord Plugins",permalink:"/docs/2.2/plugins/"},next:{title:"Create a Plugin",permalink:"/docs/2.2/plugins/create"}},s={},u=[{value:"Manage plugins",id:"manage-plugins",level:3},{value:"Imports",id:"imports",level:3},{value:"Translations",id:"translations",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"manage-plugins"},"Manage plugins"),(0,a.kt)("p",null,"In order to install, uninstall, search, update, etc plugins, you'll need the official TSCord CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g tscord-cli \n")),(0,a.kt)("p",null,"To know all the plugin-related commands of the CLI, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/cli/usage#plugin"},"go to this part of the doc")),"."),(0,a.kt)("h3",{id:"imports"},"Imports"),(0,a.kt)("p",null,"You can use any plugin components wherever you want just by using imports like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ThePluginService } from '@services/{pluginName}'\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"{pluginName}")," is the name of the plugin folder."),(0,a.kt)("h3",{id:"translations"},"Translations"),(0,a.kt)("p",null,"There's a high probability that a plugin you want to use do not support all the same languages than your bot, so you can't add and edit translation for each locales. ",(0,a.kt)("br",null),"\nTo do that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First run the bot in ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," mode after installed the plugin so the translation will be generated inside ",(0,a.kt)("inlineCode",{parentName:"li"},"/src/i18n/"),"."),(0,a.kt)("li",{parentName:"ol"},"Copy the file ",(0,a.kt)("inlineCode",{parentName:"li"},"/src/i18n/{locale}/{plugin name}/index.ts")," as ",(0,a.kt)("inlineCode",{parentName:"li"},"/src/i18n/{locale}/{plugin name}/_custom.ts")," and put your Translations inside. ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},"Run again the bot in ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," mode and your custom translation should be loaded!")))}c.isMDXComponent=!0}}]);