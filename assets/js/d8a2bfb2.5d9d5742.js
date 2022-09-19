"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[22],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),p=r,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),r=t(7294),o=t(6010),i=t(2389),l=t(7392),s=t(7094),c=t(2466),d="tabList__CuJ",m="tabItem_LNqP";function u(e){var n,t,i=e.lazy,u=e.block,p=e.defaultValue,g=e.values,h=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,x=y.setTabGroupChoices,T=(0,r.useState)(N),P=T[0],C=T[1],O=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=w[h];null!=E&&E!==P&&k.some((function(e){return e.value===E}))&&C(E)}var D=function(e){var n=e.currentTarget,t=O.indexOf(n),a=k[t].value;a!==P&&(I(n),C(a),null!=h&&x(h,String(a)))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;t=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;t=null!=(o=O[i])?o:O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return O.push(e)},onKeyDown:M,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function p(e){var n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},9819:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var a,r=t(7462),o=t(3366),i=(t(7294),t(3905)),l=t(5488),s=(t(5162),["components"]),c={sidebar_position:3},d="Guards",m={unversionedId:"discord/guards",id:"discord/guards",title:"Guards",description:"A guard is a function that will be executed before an handler (event, slash, simple command, etc) is called.",source:"@site/docs/discord/guards.mdx",sourceDirName:"discord",slug:"/discord/guards",permalink:"/docs/discord/guards",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/discord/guards.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/discord/events"},next:{title:"Activities",permalink:"/docs/discord/activities"}},u={},p=[{value:"Built-in guards",id:"built-in-guards",level:2},{value:"Arguments",id:"arguments",level:4},{value:"More info here.",id:"more-info-here",level:4}],g=(a="Tab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guards"},"Guards"),(0,i.kt)("p",null,"A guard is a ",(0,i.kt)("em",{parentName:"p"},"function")," that will be executed ",(0,i.kt)("strong",{parentName:"p"},"before")," an handler (event, slash, simple command, etc) is called. "),(0,i.kt)("p",null,"If you're familiar with the back-end and APIs development, think of it as ",(0,i.kt)("em",{parentName:"p"},"middlewares"),"."),(0,i.kt)("p",null,"The guard will call the next handler if and only if the function ",(0,i.kt)("inlineCode",{parentName:"p"},"next()")," is called within it. Otherwise, it will stop the process."),(0,i.kt)("p",null,"Simple example of a guard function that is meant to be used alongside the ",(0,i.kt)("inlineCode",{parentName:"p"},"@On('messageCreate')")," and that will validate it only if a certain regex is matched:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/guards/match.ts"',title:'"src/guards/match.ts"'},'import type { ArgsOf, GuardFunction } from "discordx"\n  \n/**\n * Pass only when the message match with a passed regular expression\n * @param regex The regex to test\n */\nexport const Match = (regex: RegExp) => {\n\n    const guard: GuardFunction<\n        | ArgsOf<"messageCreate">\n    > = async ([message], client, next) => {\n        \n        if (message.content.match(regex)) next()\n    }\n\n    return guard\n}\n')),(0,i.kt)("p",null,"And use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/commands/General/foo.ts",title:"src/commands/General/foo.ts"},'import { Client } from "discordx"\n\nimport { Discord, On } from "@decorators"\nimport { Guard, Match } from "@guards"\n\n@Discord()\n@Category(\'General\')\nexport default class Tests {\n\n    @On(\'messageCreate\')\n    // highlight-start\n    @Guard(\n        Match(/foo/gm)\n    )\n    // highlight-end\n    async matchFoo(): Promise<void> {\n        \n        console.log(\'"foo" found!\')\n    }\n}\n')),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"for-more-information-head-over-to-the-official-discordx-documentation"},"For more information, head over to the official ",(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("a",{parentName:"strong",href:"https://discordx.js.org/docs/decorators/general/guard"},"discordx documentation"))))),(0,i.kt)("h2",{id:"built-in-guards"},"Built-in guards"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(g,{label:"Disabled",value:"disabled",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prevent interaction from running when it is disabled, except for devs.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @Slash({ \n        name: 'ping',\n        description: 'Pong!'\n    })\n    @Guard(\n        Disabled()\n    )\n    async ping(\n        interaction: CommandInteraction\n    ) {\n        \n        interaction.reply('Pong!')\n    }\n}\n"))),(0,i.kt)(g,{label:"OnlyGuild",value:"guild-only",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prevent the command from running on DM")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @Slash(\"ping\", { description:\n        'Pong!'\n    })\n    @Guard(\n        GuildOnly()\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong, but only from a channel on a guild!')\n    }\n}\n"))),(0,i.kt)(g,{label:"Maintenance",value:"maintenance",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prevent interactions and simple message commands from running when bot is in maintenance")),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://discordx.js.org/docs/decorators/general/guard#global-guards"},"global guard"))," applied on the bot client directly, you don't have to touch it nor use it!")))),(0,i.kt)(g,{label:"Match",value:"match",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pass only when the message content match with a passed regular expression")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"regex"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The regex to test"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @On('messageCreate')\n    @Guard(\n        Match(/ping/gm)\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong!')\n    }\n}\n"))),(0,i.kt)(g,{label:"NotBot",value:"not-bot",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prevent other bots to interact with this bot.")),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://discordx.js.org/docs/decorators/general/guard#global-guards"},"global guard"))," applied on the bot client directly, you don't have to touch it nor use it!")))),(0,i.kt)(g,{label:"NSFW",value:"nsfw",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prevent the command from running in non-NSFW channels")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @Slash(\"ping\", { description:\n        'Pong!'\n    })\n    @Guard(\n        NSFW()\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong, but only from a NSFW channel!')\n    }\n}\n"))),(0,i.kt)(g,{label:"RateLimit",value:"rate-limit",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This guard will rate limit a user for a specified amount of time. ")),(0,i.kt)("p",null,"When set, a user can only call a command x amount of times after that, a cooldown is applied disallowing any more calls to the command until the cooldown is over."),(0,i.kt)("p",null,"This cooldown starts from the moment the user sends the last message."),(0,i.kt)("p",null,"If your cooldown is 10 seconds, and you allow 3 calls of your command, the user will have 10 seconds to call it 3 times, with the timer resetting after each call."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nexport default class RateLimitExample {\n\n    /**\n    * 1 command every 30 seconds with default message\n    */\n    @Slash("rate_limit_1")\n    @Guard(\n        RateLimit(TIME_UNIT.seconds, 30)\n    )\n    rateLimit1(interaction: CommandInteraction): void {\n        \n        interaction.reply("It worked!")\n    }\n\n    /**\n    * Allow 3 command before rate limit of 30 seconds (from last message)\n    */\n    @Slash("rate_limit_3")\n    @Guard(\n        RateLimit(\n            TIME_UNIT.seconds, \n            30, \n            { message: "Please wait `30` seconds!", rateValue: 3 }\n        )\n    )\n    rateLimit3(interaction: CommandInteraction): void {\n\n        interaction.reply("It worked!")\n    }\n\n    /**\n    * Rate limit simple command\n    */\n    @SimpleCommand("rate_limit_simple")\n    @Guard(\n        RateLimit(TIME_UNIT.seconds, 10)\n    )\n    private async rateLimitSimpleCommand(\n        { message }: SimpleCommandMessage\n    ): Promise<void> {\n\n        message.reply("It worked!");\n    }\n}\n'))),(0,i.kt)(g,{label:"UserPermissions",value:"user-permissions",mdxType:"Tab"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When you are using global commands, but still wish to restrict commands to permissions from roles, then you can use this guard to easily supply an array of Permissions that a user must have in order to execute the command.")),(0,i.kt)("p",null,"The guard can take an array of permissions or an async resolver to the permission array."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand  {\n\n    @Slash(\"ping\", { description:\n        'Pong!'\n    })\n    @Guard(\n        UserPermissions([\"ADMINISTRATOR\"])\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong, but only admins can invoke it!')\n    }\n}\n")),(0,i.kt)("h4",{id:"more-info-here"},"More info ",(0,i.kt)("a",{parentName:"h4",href:"https://github.com/oceanroleplay/discordx/tree/main/packages/utilities#permissionguard"},"here"),"."))))}f.isMDXComponent=!0}}]);