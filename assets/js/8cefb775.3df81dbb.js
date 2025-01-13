"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[6301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4},i="Understand the template",s={unversionedId:"bot/get-started/understand-the-template",id:"version-2.3/bot/get-started/understand-the-template",title:"Understand the template",description:"Before starting to code a bot using this template, you should understand how it works in a more theoretical way (yeah we know, not the most entertaining part :P)",source:"@site/versioned_docs/version-2.3/bot/get-started/understand-the-template.mdx",sourceDirName:"bot/get-started",slug:"/bot/get-started/understand-the-template",permalink:"/docs/2.3/bot/get-started/understand-the-template",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.3/bot/get-started/understand-the-template.mdx",tags:[],version:"2.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/2.3/bot/get-started/usage"},next:{title:"Update and migrations",permalink:"/docs/2.3/bot/get-started/update"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Presentation layer",id:"presentation-layer",level:3},{value:"Business layer",id:"business-layer",level:3},{value:"Data layer",id:"data-layer",level:3},{value:"Files structure",id:"files-structure",level:2},{value:"Typescript",id:"typescript",level:2},{value:"discordx",id:"discordx",level:3},{value:"Decorators",id:"decorators",level:3},{value:"Coding principles",id:"coding-principles",level:2},{value:"Dependency Injection",id:"dependency-injection",level:3},{value:"Resolvers",id:"resolvers",level:4}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"understand-the-template"},"Understand the template"),(0,a.kt)("p",null,"Before starting to code a bot using this template, you should understand how it works in a more theoretical way (yeah we know, not the most entertaining part :P)"),(0,a.kt)("p",null,"Here is a sample of the architecture of TSCord:"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TSCord architecture diagram",src:n(13393).Z+"#gh-light-mode-only",width:"1057",height:"283"}),"\n",(0,a.kt)("img",{alt:"TSCord architecture diagram",src:n(90387).Z+"#gh-dark-mode-only",width:"1057",height:"283"})),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"TSCord is following a clear separation of concerns and is built on multiple layers, each having its own scope in the codebase."),(0,a.kt)("h3",{id:"presentation-layer"},"Presentation layer"),(0,a.kt)("p",null,"The first brick in this layered architecture, and the place where all of the flow starts are the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/bot/discord/events"},"Events"))," listeners triggered by interactions on Discord. Theses interactions are then redirected to the correct ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/bot/discord/interactions"},"Handler")),", similar to a ",(0,a.kt)("em",{parentName:"p"},"controller")," in a MVC pattern."),(0,a.kt)("p",null,"We can also trigger our own ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/bot/features/custom-events"},"Custom Events"))," at any time from anywhere in the codebase."),(0,a.kt)("h3",{id:"business-layer"},"Business layer"),(0,a.kt)("p",null,"The business layer includes all the ",(0,a.kt)("em",{parentName:"p"},"logic")," of the application. It is represented by the ",(0,a.kt)("strong",{parentName:"p"},"Services")," and ",(0,a.kt)("strong",{parentName:"p"},"Utility")," classes.\nIndeed, the ",(0,a.kt)("em",{parentName:"p"},"handlers")," should contain the least amount of logic possible."),(0,a.kt)("h3",{id:"data-layer"},"Data layer"),(0,a.kt)("p",null,"Last but not least, the data layer have the responsibility of manipulating and persisting data to a database."),(0,a.kt)("p",null,"We are using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/bot/features/database/orm"},"Mikro-ORM"))," within TSCord so you don't have to worry a lot about this layer, except to write some custom methods on repositories."),(0,a.kt)("h2",{id:"files-structure"},"Files structure"),(0,a.kt)("p",null,"Here is a simplified view of the template structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tscord-template\n\u251c\u2500\u2500 .env # environments variables\n\u251c\u2500\u2500 package.json # config for npm\n\u251c\u2500\u2500 mikro-orm.config.ts # exports the config of Mikro-ORM for the CLI (/!\\ DO NOT TOUCH /!\\)\n\u251c\u2500\u2500 pm2.config.json # config for PM2\n\u251c\u2500\u2500 tsconfig.json # config for the typescript transpiler (/!\\ DO NOT TOUCH /!\\)\n\u251c\u2500\u2500 .typesafe-i18n.json # config for the i18n plugin (/!\\ DO NOT TOUCH /!\\)\n\u251c\u2500\u2500 docker-compose.yml # docker-compose config file\n\u251c\u2500\u2500 .docker # dockerfiles\n\u2502   \u2514\u2500 #...\n\u251c\u2500\u2500 .vscode # contains the configs for vscode (e.g: debug)\n\u2502   \u2514\u2500 # ...\n\u251c\u2500\u2500 assets # assets folder\n\u2502   \u2514\u2500 # ...\n\u251c\u2500\u2500 cli # plop CLI code base location\n\u2502   \u2514\u2500 # ...\n\u251c\u2500\u2500 database\n\u2502   \u251c\u2500 db.sqlite # SQLite database location (if SQLite is configured as database for the bot)\n\u2502   \u2514\u2500 migrations # folder where are stored the database migrations\n\u2502       \u2514\u2500 #...\n\u251c\u2500\u2500 logs # log files (info, warn, debug, error)\n\u2502   \u2514\u2500 # ... \n\u2514\u2500\u2500 src # all the source code of the bot!\n    \u251c\u2500 commands # commands handlers (can be nested as wanted)\n    \u2502   \u2514\u2500 #...\n    \u2502       \u2514\u2500 #...\n    \u251c\u2500\u2500 config # bot's config files\n    \u2502   \u2514\u2500 # ...\n    \u251c\u2500 entities # entities models definitions (mikro-orm)\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 events # events and custom events handlers\n    \u2502   \u251c\u2500 triggers # custom events triggers based on discord events\n    \u2502   \u2502   \u2514\u2500 # ...\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 guards # guards functions (similar to middlewares)\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 i18n # localization (i18n) system. /!\\ YOU SHOULD NOT TOUCH FILES, ONLY LOCALES FOLDERS\n    \u2502   \u251c\u2500 en\n    \u2502   \u251c\u2500 fr\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 services # services classes exposing most of the features of the bot\n    \u2502   \u2514\u2500 #...\n    \u251c\u2500 utils # utilities\n    \u2502   \u251c\u2500 functions # utility simple pure functions \n    \u2502   \u2502   \u2514\u2500 #...\n    \u2502   \u251c\u2500 classes # utility classes \n    \u2502   \u2502   \u2514\u2500 #...\n    \u2502   \u251c\u2500 decorators # implementations of decorators \n    \u2502   \u2502   \u2514\u2500 #...\n    \u2502   \u2514\u2500 types # typescript types definitions \n    \u2502       \u2514\u2500 #...\n    \u251c\u2500 client.ts # discordx client config\n    \u2514\u2500 main.ts # main file that starts all the bot logic\n")),(0,a.kt)("h2",{id:"typescript"},"Typescript"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.")),(0,a.kt)("h3",{id:"discordx"},"discordx"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Under the hood, ",(0,a.kt)("em",{parentName:"p"},"TSCord")," uses ",(0,a.kt)("strong",{parentName:"p"},"discordx")," that is himself a superset of ",(0,a.kt)("strong",{parentName:"p"},"discord.js"),"."),(0,a.kt)("p",{parentName:"admonition"},"We ",(0,a.kt)("strong",{parentName:"p"},"HIGHLY")," recommend to check their documentation here: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://discordx.js.org/"},"https://discordx.js.org/")),".")),(0,a.kt)("h3",{id:"decorators"},"Decorators"),(0,a.kt)("p",null,"A Decorator is a special kind of declaration that can be attached to a class ",(0,a.kt)("em",{parentName:"p"},"declaration"),", ",(0,a.kt)("em",{parentName:"p"},"method"),", ",(0,a.kt)("em",{parentName:"p"},"accessor"),", ",(0,a.kt)("em",{parentName:"p"},"property"),", or ",(0,a.kt)("em",{parentName:"p"},"parameter"),". Decorators use the form @expression , where expression must evaluate to a function that will be called at runtime with information about the decorated declaration."),(0,a.kt)("p",null,"This template and ",(0,a.kt)("strong",{parentName:"p"},"discordx")," are using decorators ",(0,a.kt)("em",{parentName:"p"},"a lot"),"."),(0,a.kt)("p",null,"Even if it is not difficult at all to understand and use them, creating ones is quite another thing. Don't hesitate to check the ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"official decorators doc")," and take the already existing ones as examples (",(0,a.kt)("inlineCode",{parentName:"p"},"src/utils/decorators"),")."),(0,a.kt)("h2",{id:"coding-principles"},"Coding principles"),(0,a.kt)("p",null,"Here are some code principles the template is using and that you should be aware of."),(0,a.kt)("h3",{id:"dependency-injection"},"Dependency Injection"),(0,a.kt)("p",null,"Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out."),(0,a.kt)("p",null,"Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g. Spring) to do that, but they certainly aren't required."),(0,a.kt)("p",null,"In addition of that, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://sourcemaking.com/design_patterns/singleton"},"Singleton Pattern")," that will instantiate a class only once. Furthermore, this is this single instance that will be passed everywhere in your codebase using Dependency Injection."),(0,a.kt)("p",null,"We are using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/microsoft/tsyringe"},"tsyringe"))," package internally to achieve this in this template."),(0,a.kt)("p",null,"Here is a concrete example of how you would use DI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Service, Injectable } from '@/decorators'\n\n@Service()\nclass LoggerService {\n\n    private uniqueIdentifier = Math.random() * 1000000 // each time this class is instantiated, it will have a merely unique 'uniqueIdentifier' attribute\n\n    public log(message: string) {\n\n        console.log(`[${this.uniqueIdentifier}] ${message}`)\n    }\n}\n\n@Injectable()\nclass Foo {\n\n    constructor(\n        private logger: LoggerService\n    ) {}\n\n    public bar() {\n        this.logger.log('Hello world!')\n    }\n}\n\nconst foo = new Foo()\nfoo.bar() // -> [175000] Hello World!\n\nconst logger = container.resolve(LoggerService)\nlogger.log('Hello World!') // -> [175000] Hello World!\n\n")),(0,a.kt)("p",null,"Explanations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Thanks to the ",(0,a.kt)("inlineCode",{parentName:"li"},"@Service")," decorator, the ",(0,a.kt)("inlineCode",{parentName:"li"},"LoggerService")," class will be instantiated ",(0,a.kt)("em",{parentName:"li"},"once")," when your program starts"),(0,a.kt)("li",{parentName:"ul"},"Then, this instance can be injected with 2 methods:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"By passing a parameter to the constructor with the class type of the desired instance (only possible when using the ",(0,a.kt)("inlineCode",{parentName:"li"},"@Injectable")," decorator on the class)"),(0,a.kt)("li",{parentName:"ul"},"By using the ",(0,a.kt)("inlineCode",{parentName:"li"},"container.resolve()")," function (so we can get the instance from anywhere in the code, not only from classes)")))),(0,a.kt)("p",null,"You can see that both methods will output ",(0,a.kt)("inlineCode",{parentName:"p"},"175000")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqueIdentifier"),", showing that it is from the same class!"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you have an error like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'Cannot inject the dependency "myDependency" at position #0 of "Service" constructor. Reason:\n    TypeInfo not known for "Object"\n')),(0,a.kt)("p",{parentName:"admonition"},"You should use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsyringe?tab=readme-ov-file#circular-dependencies"},"delay method")," even if you are not in the case of a circular dependency.")),(0,a.kt)("h4",{id:"resolvers"},"Resolvers"),(0,a.kt)("p",null,"We also provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"resolveDependency")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"resolveDependencies")," functions from ",(0,a.kt)("inlineCode",{parentName:"p"},"@/utils/functions")," to resolve dependencies from anywhere."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"It is, in some cases, better to use them than the automatic injection in the constructor."),(0,a.kt)("p",{parentName:"admonition"},"Indeed, we've had some issues with the constructor injection in some edge cases that we hardly understand at the moment. We are working on it, but in the meantime, you can use these functions to resolve your dependencies if you encounter weird problems linked to tsyringe. For example, the previous ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," class could be rewritten like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n\n    private logger: LoggerService\n\n    constructor() {\n        resolveDependency(LoggerService).then(logger => {\n            this.logger = logger\n        })\n    }\n\n    public bar() {\n        this.logger.log('Hello world!')\n    }\n}\n"))))}p.isMDXComponent=!0},90387:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tscord_architecture_DARK-85b5ceed8fa4c42b3607d824b5f8cc0c.png"},13393:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tscord_architecture_LIGHT-1a4327c59af42c2307667d4ad300e03f.png"}}]);