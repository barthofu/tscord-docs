"use strict";(self.webpackChunktscord_template_docs=self.webpackChunktscord_template_docs||[]).push([[843],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Configuration",c={unversionedId:"get-started/configuration",id:"get-started/configuration",title:"Configuration",description:"Env",source:"@site/docs/get-started/configuration.md",sourceDirName:"get-started",slug:"/get-started/configuration",permalink:"/tscord-template-docs/docs/get-started/configuration",draft:!1,editUrl:"https://github.com/barthofu/tscord-template-docs/tree/main/docs/get-started/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/tscord-template-docs/docs/get-started/installation"},next:{title:"Usage",permalink:"/tscord-template-docs/docs/get-started/usage"}},d={},u=[{value:"Env",id:"env",level:2},{value:"Configs",id:"configs",level:2},{value:"General",id:"general",level:3},{value:"Database",id:"database",level:3},{value:"Logs",id:"logs",level:3},{value:"Stats",id:"stats",level:3}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("h2",{id:"env"},"Env"),(0,o.kt)("p",null,"The first thing you have to do after installing the template is to setup the environments variables.\nTSCord supports ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files out-of-the-box."),(0,o.kt)("p",null,"You'll find a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," file in the root directory with the following key/values pairs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"BOT_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"Your discord bot token (can be found ",(0,o.kt)("a",{parentName:"td",href:"https://discord.com/developers/applications"},"here"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"TEST_GUILD_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the guild where you'll make tests with your bot"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"IMGUR_CLIENT_ID")),(0,o.kt)("td",{parentName:"tr",align:null},"Imgur client ID (see ",(0,o.kt)("a",{parentName:"td",href:"/docs/features/assets"},"here")," for more informations)"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"Once you have filled up the required values, rename the file from ",(0,o.kt)("inlineCode",{parentName:"p"},".env.example")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,o.kt)("h2",{id:"configs"},"Configs"),(0,o.kt)("p",null,"Nearly all the configuration of the bot lives in the ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/")," folder.\nIt is then splitted in separated files by concern."),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=configs/general.ts",title:"configs/general.ts"},"export const generalConfig = {\n\n    // do not touch that\n    __templateVersion: '2.0.0',\n\n    name: '', // the name of your bot\n    description: '', // the description of your bot\n    defaultLocale: 'en', // default language of the bot, must be a valid locale\n    simpleCommandsPrefix: '!', // default prefix for simple command messages (old way to do commands on discord)\n    owner: 'YOUR_ID_HERE',\n    timezone: 'Europe/Paris', // default TimeZone to well format and localize dates (logs, stats, etc)\n    automaticUploadImagesToImgur: true, // enable or not the automatic assets upload\n\n    devs: [\n        '260908777446965248'\n    ], // discord IDs of the devs that are working on the bot \n\n    eval: {\n        name: 'bot', // name to trigger the eval command\n        onlyOwner: false // restrict the eval command to the owner only (if not, all the devs can trigger it)\n    },\n\n    // define the bot activities (phrases under its name). Types can be: PLAYING, LISTENING, WATCHING, STREAMING\n    activities: [\n        {\n            text: 'discord.js v13',\n            type: 'PLAYING'\n        },\n        {\n            text: 'some knowledge',\n            type: 'STREAMING'\n        }\n    ]\n}\n")),(0,o.kt)("h3",{id:"database"},"Database"),(0,o.kt)("p",null,"For more informations about the Mikro-ORM config (which holds, for instance, the database connection informations), head ",(0,o.kt)("a",{parentName:"p",href:"docs/features/database/orm"},"over here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=configs/database.ts",title:"configs/database.ts"},'export const databaseConfig = {\n    \n    mikroORMConfig, // -> docs/features/database/orm\n\n    path: "./database/", // path to the folder containing the sqlite database (if there is any) and the migrations folder\n    \n    // config for setting up an automated backup of the database\n    backup: {\n        enabled: false,\n        interval: "daily",\n        time: "00:00",\n        path: ""\n    }\n}\n')),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=configs/logs.ts",title:"configs/logs.ts"},"export const logsConfig = {\n\n    debug: true, // set the discordx client debug logs\n        \n    // for each type of log, you can precise :\n    // - if the log should be consoled\n    // - if the log should be saved to the log files\n    // - if the log should be sent to a discord channel (providing its IP)\n    \n    interaction: {\n        file: true,\n        console: true,\n        channel: null,\n\n        // exclude some interactions types\n        exclude: [\n            'BUTTON_INTERACTION', \n            'SELECT_MENU_INTERACTION'\n        ]\n    },\n\n    simpleCommand: {\n        file: true,\n        console: true,\n        channel: null\n    },\n\n    newUser: {\n        file: true,\n        console: true,\n        channel: null\n    },\n    \n    guild: {\n        file: true,\n        console: true,\n        channel: null\n    }\n}\n")),(0,o.kt)("h3",{id:"stats"},"Stats"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=configs/stats.ts",title:"configs/stats.ts"},"export const statsConfig = {\n\n    interaction: {\n\n        // exclude interaction types from being recorded as stat\n        exclude: [\n            'BUTTON_INTERACTION',\n            'SELECT_MENU_INTERACTION'\n        ]\n    }\n}\n")))}f.isMDXComponent=!0}}]);