"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[3649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},s="Sync",i={unversionedId:"bot/features/database/sync",id:"version-2.0.0/bot/features/database/sync",title:"Sync",description:"Guilds",source:"@site/versioned_docs/version-2.0.0/bot/features/database/sync.mdx",sourceDirName:"bot/features/database",slug:"/bot/features/database/sync",permalink:"/tscord-docs/docs/bot/features/database/sync",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.0.0/bot/features/database/sync.mdx",tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Migrations",permalink:"/tscord-docs/docs/bot/features/database/migrations"},next:{title:"Single Data Type",permalink:"/tscord-docs/docs/bot/features/database/single-data-type"}},l={},c=[{value:"Guilds",id:"guilds",level:2},{value:"Users",id:"users",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sync"},"Sync"),(0,a.kt)("h2",{id:"guilds"},"Guilds"),(0,a.kt)("p",null,"TSCord constantly synchronizes guilds between Discord and the database."),(0,a.kt)("p",null,"This synchronization happens at each startup, so even if the bot is offline and doesn't track some ",(0,a.kt)("inlineCode",{parentName:"p"},"guildCreate")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"guildDelete")," events, it will compare the database and the discord client guilds list to keep it up to date."),(0,a.kt)("p",null,"Deleted guilds aren't ",(0,a.kt)("em",{parentName:"p"},"actualy")," deleted, they're ",(0,a.kt)("inlineCode",{parentName:"p"},"deleted")," boolean property in the database is simply set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".\nThis is really useful as a guild doesn't loose its data if they remove and then re-add the bot."),(0,a.kt)("h2",{id:"users"},"Users"),(0,a.kt)("p",null,"Each time an unknown user interact with the bot, it'll create a new user in the database."),(0,a.kt)("p",null,"So the database contains all users that have been interacting at least once with the bot."))}u.isMDXComponent=!0}}]);