"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[6320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),i=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:h,className:f}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==w&&(E(t),C(a),null!=h&&N(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},2078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(5488);n(5162);const i={sidebar_position:20},l="Internationalization (i18n)",s={unversionedId:"bot/features/internationalization",id:"bot/features/internationalization",title:"Internationalization (i18n)",description:"",source:"@site/docs/bot/features/internationalization.mdx",sourceDirName:"bot/features",slug:"/bot/features/internationalization",permalink:"/tscord-docs/docs/bot/features/internationalization",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/features/internationalization.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Backups",permalink:"/tscord-docs/docs/bot/features/database/backups"},next:{title:"Custom Events",permalink:"/tscord-docs/docs/bot/features/custom-events"}},c={},p=[{value:"Write translations",id:"write-translations",level:2},{value:"Use translations",id:"use-translations",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Locale extractor",id:"locale-extractor",level:3},{value:"Automatic detection",id:"automatic-detection",level:3},{value:"Discord-side translation",id:"discord-side-translation",level:2}],u=(d="Tab",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"internationalization-i18n"},"Internationalization (i18n)"),(0,o.kt)("p",null,"Internationalization is the process to provide automated translations based on locales (languages) extracted from any user input."),(0,o.kt)("p",null,"TSCord uses the excellent ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ivanhofer/typesafe-i18n"},"typesafe-i18n"))," package, that provides a fully typed translation system, with string templating and many more!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Click ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ivanhofer/typesafe-i18n#table-of-contents"},"here"))," to view its documentation and understand how it works.")),(0,o.kt)("p",null,"In fact, this library is a program that will watch your translation files. If it detects any change, it will re-generate a type file in consequence. This is how it achieves complete typesafety!"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Even if this system is good, it is known to be really slow and painful with a ",(0,o.kt)("strong",{parentName:"p"},"really")," large translation codebase. I however chose it because a simple discord bot, except for particular cases, will never reach this limit.")),(0,o.kt)("p",null,'This "program" can be launched as a standalone using ',(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev:i18"),", but anyway it is runned in parallel of the bot when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," command!"),(0,o.kt)("h2",{id:"write-translations"},"Write translations"),(0,o.kt)("p",null,"You first need to choose a ",(0,o.kt)("strong",{parentName:"p"},"base translation language"),". It is from this language and file that ",(0,o.kt)("inlineCode",{parentName:"p"},"typesafe-i18n")," will generate the type file.\nBy default, TSCord have two translation languages : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"en")," (default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fr"))),(0,o.kt)("p",null,"Their translation file are respectively located in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/i18n/en/index.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src/i18n/fr/index.ts"))),(0,o.kt)("p",null,"Your workflow should be as follow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit the ",(0,o.kt)("strong",{parentName:"li"},"base translation language")," file first (",(0,o.kt)("inlineCode",{parentName:"li"},"en")," by default) as you need"),(0,o.kt)("li",{parentName:"ol"},"Run the generator with either ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run dev:i18n")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run dev")),(0,o.kt)("li",{parentName:"ol"},"Then, when the type file is updated, you can edit the other language translation files without errors"),(0,o.kt)("li",{parentName:"ol"},"If you still have errors displayed in your editor, restart the Typescript Server if your IDE")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"E.g:")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(u,{label:"en",value:"en",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/i18n/en/index.ts",title:"src/i18n/en/index.ts"},"import type { BaseTranslation } from \"../i18n-types\"\n\nconst en: BaseTranslation = {\n\n    GREET: 'Hello!'\n}\n\nexport default en\n"))),(0,o.kt)(u,{label:"fr",value:"fr",mdxType:"Tab"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/i18n/fr/index.ts",title:"src/i18n/fr/index.ts"},"import type { Translation } from \"../i18n-types\"\n\nconst fr: Translation = {\n\n    GREET: 'Bonjour !'\n}\n\nexport default fr\n")))),(0,o.kt)("h2",{id:"use-translations"},"Use translations"),(0,o.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,o.kt)("p",null,"To use translations, nothing more simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { L } from '@i18n'\n\nconst locale = 'en'\n\nconsole.log(L[locale]['GREET']()) // -> Hello!\n")),(0,o.kt)("h3",{id:"locale-extractor"},"Locale extractor"),(0,o.kt)("p",null,"TSCord have a built-in function to extract a valid locale from any discord interaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Discord, Slash } from 'discordx'\nimport { CommandInteraction } from 'discord.js'\n\nimport { L, getLocaleFromInteraction } from '@i18n'\n\n@Discord()\nclass Example {\n\n    @Slash({ name: 'greet' })\n    async greet(\n        interaction: CommandInteraction\n    ) {\n        \n        const locale = getLocaleFromInteraction(interaction)\n\n        // will respond 'Hello!' to a user who have his discord client in english, \n        // and 'Bonjour !' to a french one.\n        interaction.followUp(L[locale]['GREET']()) \n    }\n}\n")),(0,o.kt)("h3",{id:"automatic-detection"},"Automatic detection"),(0,o.kt)("p",null,"And that's not all!\nWe've automated this process to free you from importing ",(0,o.kt)("inlineCode",{parentName:"p"},"L")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getLocaleFromInteraction")," in nearly every files."),(0,o.kt)("p",null,"In fact, every interaction handler will automaticaly receive the locale and localized ",(0,o.kt)("inlineCode",{parentName:"p"},"L")," function as an auto injected parameter as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Discord, Slash } from 'discordx'\nimport { CommandInteraction } from 'discord.js'\n\nimport { L, getLocaleFromInteraction } from '@i18n'\n\n@Discord()\nclass Example {\n\n    @Slash({ name: 'greet' })\n    async greet(\n        interaction: CommandInteraction,\n        client: Client, // -> if you want to use these auto injected data, you MUST put the client because discordx injects it anyway!\n                        // if you don't, then the object passed as the InteractionData one will be in fact the client \u2620\ufe0f\n        // highlight-next-line\n        { sanitizedLocale, localize }: InteractionData\n    ) {\n        \n        console.log(sanitizedLocale) // -> en\n\n        interaction.followUp(localize['GREET']()) // -> 'Hello!'\n    }\n}\n")),(0,o.kt)("h2",{id:"discord-side-translation"},"Discord-side translation"),(0,o.kt)("p",null,"Quite recently, Discord has made available the possibility to submit multiple ",(0,o.kt)("em",{parentName:"p"},"name")," and ",(0,o.kt)("em",{parentName:"p"},"description")," depending on the language of the user's client.\nSo for example, you can submit a slash command with a name of ",(0,o.kt)("strong",{parentName:"p"},"hello")," for english users and ",(0,o.kt)("strong",{parentName:"p"},"bonjour")," for french users (the english one should also be the fallback language for the one you haven't referenced)."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands#localization"},"Official Discord documentation on localized components"),".")),(0,o.kt)("p",null,'this is the "raw" way of doing that with ',(0,o.kt)("inlineCode",{parentName:"p"},"discordx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Slash({\n    name: 'hello',\n    nameLocalizations: {\n        en: 'hello',\n        fr: 'bonjour'\n    },\n    description: {\n        en: 'Reply hello to the user',\n        fr: 'R\xe9pond bonjour \xe0 l\\'utilisateur'\n    }\n})\n//...\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"@Slash")," should be imported from '@decorators', as explained on ",(0,o.kt)("a",{parentName:"p",href:"/docs/bot/discord/interactions"},"this page"),".")),(0,o.kt)("p",null,"But to avoid having to put this text-heavy thing in the code, we recommand you to put these in the translation files.\nThen, you have 2 ways to reference it on the ",(0,o.kt)("em",{parentName:"p"},"Slash")," (or ",(0,o.kt)("em",{parentName:"p"},"ContexMenus"),", or ",(0,o.kt)("em",{parentName:"p"},"SlashOption"),", etc...) decorators:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(u,{label:"localizationSource",value:"localization-source",mdxType:"Tab"},(0,o.kt)("p",null,"We added an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"localizationSource")," property to the component decorators.\nIt will automaticaly seek a ",(0,o.kt)("inlineCode",{parentName:"p"},"NAME")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"DESCRIPTION")," property at the given path in the translation file."),(0,o.kt)("p",null,"For example, this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"\n@Slash({\n    name: 'hello',\n    localizationSource: 'COMMANDS.HELLO'\n})\n//...\n\n")),(0,o.kt)("p",null,"Will search translations at ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMANDS.HELLO.NAME")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"nameLocalizations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMANDS.HELLO.DESCRIPTION")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"descriptionLocalizations"),".")),(0,o.kt)(u,{label:"name",value:"name",mdxType:"Tab"},(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Only for ",(0,o.kt)("inlineCode",{parentName:"p"},"@Slash"),".")),(0,o.kt)("p",null,"If no ",(0,o.kt)("inlineCode",{parentName:"p"},"localizationSource")," is provided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property will be used as the localization source."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"E.g:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Slash({\n    name: 'hello'\n})\n")),(0,o.kt)("p",null,"Will search translations at ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMANDS.HELLO.NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMANDS.HELLO.DESCRIPTION"),"."))))}h.isMDXComponent=!0}}]);