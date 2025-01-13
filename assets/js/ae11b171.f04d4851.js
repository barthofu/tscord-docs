"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[6554],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},43517:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(67294);function n(e){let{children:t,color:o="limegreen"}=e;return r.createElement("span",{style:{backgroundColor:o,color:"white",padding:"5px 10px",borderRadius:"5px",fontSize:"12px",fontWeight:"bold",textTransform:"uppercase",display:"inline-block",margin:"0 5px"}},t)}},87639:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905)),i=o(43517);const a={sidebar_position:60},l="Deployment",s={unversionedId:"bot/devops/deployment",id:"version-2.4/bot/devops/deployment",title:"Deployment",description:"On this page, we'll list some options on how to host your bot, including free options!",source:"@site/versioned_docs/version-2.4/bot/devops/deployment.mdx",sourceDirName:"bot/devops",slug:"/bot/devops/deployment",permalink:"/docs/bot/devops/deployment",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.4/bot/devops/deployment.mdx",tags:[],version:"2.4",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"CI/CD",permalink:"/docs/bot/devops/ci-cd"},next:{title:"Linting and Formatting",permalink:"/docs/bot/devops/linting-and-formatting"}},p={},c=[{value:"Self hosting",id:"self-hosting",level:2},{value:"Home computer",id:"home-computer",level:3},{value:"Discord bot specific hosts",id:"discord-bot-specific-hosts",level:3},{value:"VPS",id:"vps",level:3},{value:"CapRover <Badge>free</Badge>",id:"caprover-free",level:3},{value:"Cloud hosting",id:"cloud-hosting",level:2},{value:"Railway <Badge>free</Badge>",id:"railway-free",level:3}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"On this page, we'll list some options on how to host your bot, including free options!"),(0,n.kt)("h2",{id:"self-hosting"},"Self hosting"),(0,n.kt)("p",null,"Either at home or in a data center, these solutions are full managed by ",(0,n.kt)("strong",{parentName:"p"},"you"),"! "),(0,n.kt)("h3",{id:"home-computer"},"Home computer"),(0,n.kt)("p",null,"Nothing really particular here, you can use an old computer or a ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/"},"Raspberry Pi")," in order to host your bot. With this solution however, you'll be in charge of the uptime and production of your bot."),(0,n.kt)("h3",{id:"discord-bot-specific-hosts"},"Discord bot specific hosts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sparkedhost.com/discord-bot-hosting"},"Sparked")," (from 1$/month)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://something.host/en/products/discord-bot-hosting/?utm_source=geekflare&utm_medium=bot_hosting_platforms"},"Something Host")," (from 1.5$/month)")),(0,n.kt)("h3",{id:"vps"},"VPS"),(0,n.kt)("p",null,"You can use a VPS (Virtual Private Server) to host your bot."),(0,n.kt)("p",null,"It is basically a no-GUI remote linux computer on which you connect through ",(0,n.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/Secure_Shell"},"SSH"),"."),(0,n.kt)("p",null,"Here is a sample list of some VPS providers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vultr.com/"},"Vultr")," (from 3.5$/month)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/pricing/droplets"},"DigitalOcean")," (from 4$/month)")),(0,n.kt)("h3",{id:"caprover-free"},(0,n.kt)("a",{parentName:"h3",href:"https://caprover.com/"},"CapRover")," ",(0,n.kt)(i.Z,{mdxType:"Badge"},"free")),(0,n.kt)("p",null,"CapRover is a free and open-source PaaS (Platform as a Service) that makes it easy to deploy and manage web apps. Think of it like a self-hosted Heroku."),(0,n.kt)("h2",{id:"cloud-hosting"},"Cloud hosting"),(0,n.kt)("h3",{id:"railway-free"},(0,n.kt)("a",{parentName:"h3",href:"https://railway.app/"},"Railway")," ",(0,n.kt)(i.Z,{mdxType:"Badge"},"free")),(0,n.kt)("p",null,"Railway billing is quite particular. In fact, you pay for the resources usage you make."),(0,n.kt)("p",null,"Then, if your bill of the month is under ",(0,n.kt)("strong",{parentName:"p"},"5$"),", it is free.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"But if you haven't set a credit card, you'll be limited to 500h of usage per month (~21d). To disable this limit, just register a credit card but take care: if your usage exceed 5$/month, it'll be paid automatically using your card."),(0,n.kt)("p",null,"Don't worry however, the estimation for a classic discord bot is ",(0,n.kt)("strong",{parentName:"p"},"3$/month"),"."))}d.isMDXComponent=!0}}]);