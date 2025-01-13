"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[1893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},s),{},{components:n})):o.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},i="Configuration",l={unversionedId:"dashboard/configuration",id:"version-2.0/dashboard/configuration",title:"Configuration",description:"Before anything else, head over to your bot config and enable the API server and Websocket client.",source:"@site/versioned_docs/version-2.0/dashboard/configuration.mdx",sourceDirName:"dashboard",slug:"/dashboard/configuration",permalink:"/docs/2.0/dashboard/configuration",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.0/dashboard/configuration.mdx",tags:[],version:"2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/2.0/dashboard/installation"},next:{title:"Usage",permalink:"/docs/2.0/dashboard/usage"}},p={},c=[{value:"Client",id:"client",level:2},{value:"Websocket",id:"websocket",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Before anything else, head over to your ",(0,r.kt)("strong",{parentName:"p"},"bot")," config and enable the API server and Websocket client."),(0,r.kt)("h2",{id:"client"},"Client"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"client/.env.example")),(0,r.kt)("li",{parentName:"ol"},"Fill in all the variables")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can find your bot's ",(0,r.kt)("strong",{parentName:"p"},"secret")," in your ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal"),". Click on your application and then go to the OAuth2 tab. You will find it under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret")," section.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Go on your ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"Discord Developer Portal")),(0,r.kt)("li",{parentName:"ol"},"Click on your application"),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2")," tab"),(0,r.kt)("li",{parentName:"ol"},"Add the following redirect URIs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"http://localhost:3000/api/auth/callback/discord"),(0,r.kt)("li",{parentName:"ul"},"<your_domain>/api/auth/callback/discord (if you are running the app on a domain in production)"))),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"Client Id")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"Client Secret")),(0,r.kt)("li",{parentName:"ol"},"Paste them in the ",(0,r.kt)("inlineCode",{parentName:"li"},".env.example")," file, as well as your bot API admin token."),(0,r.kt)("li",{parentName:"ol"},"Rename the file ",(0,r.kt)("inlineCode",{parentName:"li"},".env")),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"client/src/core/config/bots.ts")),(0,r.kt)("li",{parentName:"ol"},"Fill in your bot info (here is a sample)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"    {\n        id: '943804890143133736',\n        name: 'TSCord',\n        iconUrl: 'https://cdn.discordapp.com/avatars/943804890143133736/c08ad02818b89d43210a232094b32215.webp',\n        apiUrl: process.env['TSCORD_API_URL']!,\n        apiToken: process.env['TSCORD_API_TOKEN']!,\n        secret: process.env['TSCORD_SECRET']!\n    }\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As you may have noticed, the bots config is an array, so you can setup multiple bots!"))),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"client")," folder"),(0,r.kt)("li",{parentName:"ol"},"Then, run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start"))),(0,r.kt)("h2",{id:"websocket"},"Websocket"),(0,r.kt)("p",null,"In order to make the ",(0,r.kt)("strong",{parentName:"p"},"Monitoring")," dashboard page working, you must spin up the Websocket proxy server on which your bot ",(0,r.kt)("em",{parentName:"p"},"and")," your Next.js app will connect."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy/.env.example")," at your convenance"),(0,r.kt)("li",{parentName:"ol"},"Rename it ",(0,r.kt)("inlineCode",{parentName:"li"},".env")),(0,r.kt)("li",{parentName:"ol"},"Put the correct websocket url to access the proxy server both in the Next.js app and TSCord bot env files"),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy")," folder"),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start")),(0,r.kt)("li",{parentName:"ol"},"Now, if your bot is running in parallel, you should see in the console: ",(0,r.kt)("inlineCode",{parentName:"li"},"New client connected: <name_of_your_bot>"))))}d.isMDXComponent=!0}}]);