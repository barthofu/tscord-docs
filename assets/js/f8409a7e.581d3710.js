"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[206],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:e},c),{},{components:n})):r.createElement(h,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9568:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Introduction",u={unversionedId:"intro",id:"intro",title:"Introduction",description:"TSCord is a fully-featured Discord bots template written in Typescript, intended to provide a framework that's easy to use, extend and modify.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/get-started/installation"}},c={},d=[{value:"\ud83d\udcdc Features",id:"-features",level:2},{value:"\ud83d\udcda Documentation",id:"-documentation",level:2},{value:"Check this <strong>Documentation</strong> to get started and to understand how to use this template.",id:"check-this-documentation-to-get-started-and-to-understand-how-to-use-this-template",level:4},{value:"\ud83d\udcd1 License",id:"-license",level:2}],p={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("br",null),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("br",null),(0,o.kt)("h1",{id:"-what-is-tscord"},"\ud83c\udf1f What is TSCord"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TSCord")," is a fully-featured ",(0,o.kt)("strong",{parentName:"p"},"Discord bots")," ",(0,o.kt)("em",{parentName:"p"},"template")," written in ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"Typescript"),", intended to provide a framework that's easy to use, extend and modify."),(0,o.kt)("p",null,"It uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discordx"},(0,o.kt)("inlineCode",{parentName:"a"},"discordx"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/discordjs/discord.js"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.js v13"))," under the hood to simplify the development of discord bots."),(0,o.kt)("p",null,"This template was created to give developers a starting point for new Discord bots, so that much of the initial setup can be avoided and developers can instead focus on meaningful bot features. Developers can simply copy this repo, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://barthofu.github.io/tscord-docs"},"setup instructions"),", and have a working bot with many boilerplate features already included!        ")))),(0,o.kt)("h2",{id:"-features"},"\ud83d\udcdc Features"),(0,o.kt)("p",null,"Talking about features, here are some of the core features of this template:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Advanced handlers for:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Interactions (slash, context menu, button, modal, select menu, etc)"),(0,o.kt)("li",{parentName:"ul"},"Simple message commands"),(0,o.kt)("li",{parentName:"ul"},"Discord events listeners"))),(0,o.kt)("li",{parentName:"ul"},"Guards functions, acting like middlewares on handlers with some built-ins:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rate limiter"),(0,o.kt)("li",{parentName:"ul"},"Maintenance mode"),(0,o.kt)("li",{parentName:"ul"},"Disabling command"),(0,o.kt)("li",{parentName:"ul"},"Guild only command (no DMs)"),(0,o.kt)("li",{parentName:"ul"},"NSFW only command"),(0,o.kt)("li",{parentName:"ul"},"Message's content match using regex"))),(0,o.kt)("li",{parentName:"ul"},"Multiple databases support out-of-the-box using an ORM"),(0,o.kt)("li",{parentName:"ul"},"Migrations system to keep a safe database"),(0,o.kt)("li",{parentName:"ul"},"Automatic static assets upload to ",(0,o.kt)("a",{parentName:"li",href:"https://imgur.com/"},"imgur")),(0,o.kt)("li",{parentName:"ul"},"Custom events handlers"),(0,o.kt)("li",{parentName:"ul"},"Error handler"),(0,o.kt)("li",{parentName:"ul"},"Fully-typed localization (i18n)"),(0,o.kt)("li",{parentName:"ul"},"Local store"),(0,o.kt)("li",{parentName:"ul"},"Advanced logger with log files and discord channels support"),(0,o.kt)("li",{parentName:"ul"},"Scheduler for cron jobs"),(0,o.kt)("li",{parentName:"ul"},"Built-in rich statistics system")),(0,o.kt)("p",null,"Also, this template is developper friendly and follow strict design patterns to ease its maintenance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Written in Typescript"),(0,o.kt)("li",{parentName:"ul"},"Built around the Dependency Injection and Singleton patterns"),(0,o.kt)("li",{parentName:"ul"},"Uses battle-tested libraries under the hood (",(0,o.kt)("em",{parentName:"li"},"discordx")," and ",(0,o.kt)("em",{parentName:"li"},"discord.js"),")"),(0,o.kt)("li",{parentName:"ul"},"Built-in debugging setup for VSCode"),(0,o.kt)("li",{parentName:"ul"},"Support for running with the ",(0,o.kt)("a",{parentName:"li",href:"https://pm2.keymetrics.io/"},"PM2")," process manger"),(0,o.kt)("li",{parentName:"ul"},"Support for running with ",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},"CI/CD integration with Github Actions")),(0,o.kt)("p",null,"and many more!"),(0,o.kt)("h2",{id:"-documentation"},"\ud83d\udcda Documentation"),(0,o.kt)("h4",{id:"check-this-documentation-to-get-started-and-to-understand-how-to-use-this-template"},"Check this ",(0,o.kt)("a",{parentName:"h4",href:"https://barthofu.github.io/tscord-docs/docs"},(0,o.kt)("strong",{parentName:"a"},"Documentation"))," to get started and to understand how to use this template."),(0,o.kt)("p",null,"You can also find useful documentations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("a",{parentName:"li",href:"https://discordx.js.org/"},"discordx documentation")),(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/intro"},"Discord's developer portal")),(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("a",{parentName:"li",href:"https://discordjs.guide/"},"Discord.js Guide")),(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("a",{parentName:"li",href:"https://owencalvin.github.io/discordx/"},"discordx official documentation"))),(0,o.kt)("h2",{id:"-license"},"\ud83d\udcd1 License"),(0,o.kt)("p",null,"MIT License"),(0,o.kt)("p",null,"Copyright (c) barthofu"))}m.isMDXComponent=!0}}]);