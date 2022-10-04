"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[1535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:p,groupId:g,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[x,w]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=g){const e=v[g];null!=e&&e!==x&&k.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==x&&(P(t),w(a),null!=g&&N(g,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},3212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488);n(5162);const i={sidebar_position:3},l="Guards",s={unversionedId:"bot/discord/guards",id:"bot/discord/guards",title:"Guards",description:"",source:"@site/docs/bot/discord/guards.mdx",sourceDirName:"bot/discord",slug:"/bot/discord/guards",permalink:"/docs/bot/discord/guards",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/discord/guards.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/bot/discord/events"},next:{title:"Activities",permalink:"/docs/bot/discord/activities"}},c={},d=[{value:"Built-in guards",id:"built-in-guards",level:2},{value:"Arguments",id:"arguments",level:4},{value:"More info here.",id:"more-info-here",level:4}],m=(u="Tab",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const p={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guards"},"Guards"),(0,r.kt)("p",null,"A guard is a ",(0,r.kt)("em",{parentName:"p"},"function")," that will be executed ",(0,r.kt)("strong",{parentName:"p"},"before")," an handler (event, slash, simple command, etc) is called. "),(0,r.kt)("p",null,"If you're familiar with the back-end and APIs development, think of it as ",(0,r.kt)("em",{parentName:"p"},"middlewares"),"."),(0,r.kt)("p",null,"The guard will call the next handler if and only if the function ",(0,r.kt)("inlineCode",{parentName:"p"},"next()")," is called within it. Otherwise, it will stop the process."),(0,r.kt)("p",null,"Simple example of a guard function that is meant to be used alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"@On('messageCreate')")," and that will validate it only if a certain regex is matched:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/guards/match.ts"',title:'"src/guards/match.ts"'},'import type { ArgsOf, GuardFunction } from "discordx"\n  \n/**\n * Pass only when the message match with a passed regular expression\n * @param regex The regex to test\n */\nexport const Match = (regex: RegExp) => {\n\n    const guard: GuardFunction<\n        | ArgsOf<"messageCreate">\n    > = async ([message], client, next) => {\n        \n        if (message.content.match(regex)) next()\n    }\n\n    return guard\n}\n')),(0,r.kt)("p",null,"And use it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/commands/General/foo.ts",title:"src/commands/General/foo.ts"},'import { Client } from "discordx"\n\nimport { Discord, On } from "@decorators"\nimport { Guard, Match } from "@guards"\n\n@Discord()\n@Category(\'General\')\nexport default class Tests {\n\n    @On(\'messageCreate\')\n    // highlight-start\n    @Guard(\n        Match(/foo/gm)\n    )\n    // highlight-end\n    async matchFoo(): Promise<void> {\n        \n        console.log(\'"foo" found!\')\n    }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"important",type:"tip"},(0,r.kt)("h3",{parentName:"admonition",id:"for-more-information-head-over-to-the-official-discordx-documentation"},"For more information, head over to the official ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("a",{parentName:"strong",href:"https://discordx.js.org/docs/decorators/general/guard"},"discordx documentation")),".")),(0,r.kt)("h2",{id:"built-in-guards"},"Built-in guards"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(m,{label:"Disabled",value:"disabled",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prevent interaction from running when it is disabled, except for devs.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @Slash({ \n        name: 'ping',\n        description: 'Pong!'\n    })\n    @Guard(\n        Disabled()\n    )\n    async ping(\n        interaction: CommandInteraction\n    ) {\n        \n        interaction.reply('Pong!')\n    }\n}\n"))),(0,r.kt)(m,{label:"OnlyGuild",value:"guild-only",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prevent the command from running on DM")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @Slash(\"ping\", { description:\n        'Pong!'\n    })\n    @Guard(\n        GuildOnly()\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong, but only from a channel on a guild!')\n    }\n}\n"))),(0,r.kt)(m,{label:"Maintenance",value:"maintenance",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prevent interactions and simple message commands from running when bot is in maintenance")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://discordx.js.org/docs/decorators/general/guard#global-guards"},"global guard"))," applied on the bot client directly, you don't have to touch it nor use it!"))),(0,r.kt)(m,{label:"Match",value:"match",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pass only when the message content match with a passed regular expression")),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"regex"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The regex to test"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @On('messageCreate')\n    @Guard(\n        Match(/ping/gm)\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong!')\n    }\n}\n"))),(0,r.kt)(m,{label:"NotBot",value:"not-bot",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prevent other bots to interact with this bot.")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://discordx.js.org/docs/decorators/general/guard#global-guards"},"global guard"))," applied on the bot client directly, you don't have to touch it nor use it!"))),(0,r.kt)(m,{label:"NSFW",value:"nsfw",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prevent the command from running in non-NSFW channels")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand {\n\n    @Slash(\"ping\", { description:\n        'Pong!'\n    })\n    @Guard(\n        NSFW()\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong, but only from a NSFW channel!')\n    }\n}\n"))),(0,r.kt)(m,{label:"RateLimit",value:"rate-limit",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This guard will rate limit a user for a specified amount of time. ")),(0,r.kt)("p",null,"When set, a user can only call a command x amount of times after that, a cooldown is applied disallowing any more calls to the command until the cooldown is over."),(0,r.kt)("p",null,"This cooldown starts from the moment the user sends the last message."),(0,r.kt)("p",null,"If your cooldown is 10 seconds, and you allow 3 calls of your command, the user will have 10 seconds to call it 3 times, with the timer resetting after each call."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nexport default class RateLimitExample {\n\n    /**\n    * 1 command every 30 seconds with default message\n    */\n    @Slash("rate_limit_1")\n    @Guard(\n        RateLimit(TIME_UNIT.seconds, 30)\n    )\n    rateLimit1(interaction: CommandInteraction): void {\n        \n        interaction.reply("It worked!")\n    }\n\n    /**\n    * Allow 3 command before rate limit of 30 seconds (from last message)\n    */\n    @Slash("rate_limit_3")\n    @Guard(\n        RateLimit(\n            TIME_UNIT.seconds, \n            30, \n            { message: "Please wait `30` seconds!", rateValue: 3 }\n        )\n    )\n    rateLimit3(interaction: CommandInteraction): void {\n\n        interaction.reply("It worked!")\n    }\n\n    /**\n    * Rate limit simple command\n    */\n    @SimpleCommand("rate_limit_simple")\n    @Guard(\n        RateLimit(TIME_UNIT.seconds, 10)\n    )\n    private async rateLimitSimpleCommand(\n        { message }: SimpleCommandMessage\n    ): Promise<void> {\n\n        message.reply("It worked!");\n    }\n}\n'))),(0,r.kt)(m,{label:"UserPermissions",value:"user-permissions",mdxType:"Tab"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you are using global commands, but still wish to restrict commands to permissions from roles, then you can use this guard to easily supply an array of Permissions that a user must have in order to execute the command.")),(0,r.kt)("p",null,"The guard can take an array of permissions or an async resolver to the permission array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\nexport default class PingCommand  {\n\n    @Slash(\"ping\", { description:\n        'Pong!'\n    })\n    @Guard(\n        UserPermissions([\"ADMINISTRATOR\"])\n    )\n    async ping(\n        interaction: CommandInteraction\n    ): Promise<void> {\n        \n        interaction.reply('Pong, but only admins can invoke it!')\n    }\n}\n")),(0,r.kt)("h4",{id:"more-info-here"},"More info ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/oceanroleplay/discordx/tree/main/packages/utilities#permissionguard"},"here"),"."))))}g.isMDXComponent=!0}}]);