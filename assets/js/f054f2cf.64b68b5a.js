"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[4001],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:10},i="\u267b\ufe0f Update & migrations",l={unversionedId:"bot/get-started/update",id:"version-2.0/bot/get-started/update",title:"\u267b\ufe0f Update & migrations",description:"Global update guide",source:"@site/versioned_docs/version-2.0/bot/get-started/update.mdx",sourceDirName:"bot/get-started",slug:"/bot/get-started/update",permalink:"/docs/2.0/bot/get-started/update",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.0/bot/get-started/update.mdx",tags:[],version:"2.0",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Understand the template",permalink:"/docs/2.0/bot/get-started/understand-the-template"},next:{title:"Interactions",permalink:"/docs/2.0/bot/discord/interactions"}},s={},d=[{value:"Global update guide",id:"global-update-guide",level:2},{value:"Migrations",id:"migrations",level:2},{value:"Custom events",id:"custom-events",level:4},{value:"<code>configs</code> alias",id:"configs-alias",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-update--migrations"},"\u267b\ufe0f Update & migrations"),(0,o.kt)("h2",{id:"global-update-guide"},"Global update guide"),(0,o.kt)("p",null,"TSCord is a template-kind of project, so updating it can really be harsh. ",(0,o.kt)("br",null),"\nHowever, here is an update guide that you can follow for each migration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd")," into your project directory"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git remote add tscord https://github.com/barthofu/tscord")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git fetch origin")),(0,o.kt)("li",{parentName:"ol"},"Now, get the tag of the release you want to update to (ex: ",(0,o.kt)("inlineCode",{parentName:"li"},"v2.1"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git merge v2.1")," (replace ",(0,o.kt)("inlineCode",{parentName:"li"},"v2.1")," with the tag you want to)"),(0,o.kt)("li",{parentName:"ol"},"Resolve the conflicts (we highly recommend you to use the new merge editor of VSCode)"),(0,o.kt)("li",{parentName:"ol"},"Once you've resolved all the conflict, commit the changes"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"git remote rm tscord"))),(0,o.kt)("h2",{id:"migrations"},"Migrations"),(0,o.kt)("details",{title:"test"},(0,o.kt)("summary",null,(0,o.kt)("strong",null,"v2.0 to v2.1")),(0,o.kt)("h4",{id:"custom-events"},"Custom events"),(0,o.kt)("p",null,"Events and Custom events, which used to both relay the ",(0,o.kt)("inlineCode",{parentName:"p"},"@On()")," decorator of ",(0,o.kt)("inlineCode",{parentName:"p"},"discordx"),", are now split."),(0,o.kt)("p",null,"Indeed, we've implemented our own event manager so custom events are split from the discord ones, so they don't have to execute the whole guards pipeline."),(0,o.kt)("p",null,"You'll have to replace all your custom events by the new ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnCustom()")," decorators, and emit them via the ",(0,o.kt)("inlineCode",{parentName:"p"},"emit()")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EventManager")," service."),(0,o.kt)("h4",{id:"configs-alias"},(0,o.kt)("inlineCode",{parentName:"h4"},"configs")," alias"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"src/config")," folder has been renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configs"),", and so for its path alias: ",(0,o.kt)("inlineCode",{parentName:"p"},"@config")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"@configs"))))}c.isMDXComponent=!0}}]);