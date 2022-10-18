"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[2361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:30},a="Deployment",s={unversionedId:"website/deployment",id:"version-2.0.0/website/deployment",title:"Deployment",description:"You have two options for the deployment:",source:"@site/versioned_docs/version-2.0.0/website/deployment.mdx",sourceDirName:"website",slug:"/website/deployment",permalink:"/tscord-docs/docs/website/deployment",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.0.0/website/deployment.mdx",tags:[],version:"2.0.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/tscord-docs/docs/website/configuration"},next:{title:"Usage",permalink:"/tscord-docs/docs/website/usage"}},l={},c=[{value:"Server",id:"server",level:2},{value:"Static",id:"static",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"You have two options for the deployment:"),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"Just run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start")," and you will be able to access the website using the port of the next.js server. "),(0,o.kt)("p",null,"This is the simplest way to run the website, and it will enable ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"},"ISR")," on the website, which permit to keep the advantage of a static website ",(0,o.kt)("em",{parentName:"p"},"while")," refreshing the data and rebuilding automatically individual pages every X time (by default: 12 hours)."),(0,o.kt)("p",null,"But the main downside is the need of a next.js server instance to be running 24/7."),(0,o.kt)("h2",{id:"static"},"Static"),(0,o.kt)("p",null,"The other solution is to run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run export"),", which will create a full static version of the website with no need of a next.js server instance to run in the background. This command exports the website in the ",(0,o.kt)("inlineCode",{parentName:"p"},"out")," directory, and you'll next have the choice of deploying this directory anywhere you want (e.g: Github Pages, CDN, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www")," folder of your private server, etc)."),(0,o.kt)("p",null,"In this solution, and as a contrast with the other, the main downside is that you'll have to re-build and re-deploy the website each time your data (list of commands, articles, etc) change. "),(0,o.kt)("p",null,"You can still resolve this by automating all of this with a well configured CI/CD ecosystem (e.g: Github Actions, cron jobs on your server or on your bot, etc). "),(0,o.kt)("p",null,"It will take you more effort for sure, but will result in the best of the two solutions!"),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that you must have your bot running each time you build the website, otherwise it'll fail.")))}p.isMDXComponent=!0}}]);