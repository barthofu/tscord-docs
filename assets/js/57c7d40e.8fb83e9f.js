"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[4952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="ORM",s={unversionedId:"bot/features/database/orm",id:"version-2.1/bot/features/database/orm",title:"ORM",description:"What is en ORM?",source:"@site/versioned_docs/version-2.1/bot/features/database/orm.mdx",sourceDirName:"bot/features/database",slug:"/bot/features/database/orm",permalink:"/docs/2.1/bot/features/database/orm",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.1/bot/features/database/orm.mdx",tags:[],version:"2.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/2.1/bot/features/database/configuration"},next:{title:"Migrations",permalink:"/docs/2.1/bot/features/database/migrations"}},l={},p=[{value:"What is en ORM?",id:"what-is-en-orm",level:2},{value:"Entities",id:"entities",level:2},{value:"Default values",id:"default-values",level:3},{value:"1. Typescript",id:"1-typescript",level:4},{value:"2. SQL",id:"2-sql",level:4},{value:"Entity Repository",id:"entity-repository",level:2},{value:"Query",id:"query",level:3},{value:"Insert",id:"insert",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"orm"},"ORM"),(0,r.kt)("h2",{id:"what-is-en-orm"},"What is en ORM?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-relational_mapping"},"Object-Relational Mapping"),' (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".'),(0,r.kt)("p",null,"An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.$"),(0,r.kt)("p",null,"TSCord uses ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://mikro-orm.io/"},"Mikro-ORM")),", an efficient battle-tested ORM library for Nodejs."),(0,r.kt)("h2",{id:"entities"},"Entities"),(0,r.kt)("p",null,"One big interest of an ORM is that you ",(0,r.kt)("strong",{parentName:"p"},"never")," touch the database, even when creating new tables."),(0,r.kt)("p",null,"Indeed, tables are represented by ",(0,r.kt)("strong",{parentName:"p"},"entities"),", which are plain Typescript classes using the ",(0,r.kt)("em",{parentName:"p"},"decorator")," syntax to provide a simple yet efficient way to build them."),(0,r.kt)("p",null,"Example of a simple entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/entities/User.ts",title:"src/entities/User.ts"},"import { Entity, PrimaryKey, Property } from '@mikro-orm/core'\nimport { CustomBaseEntity } from './BaseEntity'\n\n@Entity()\nexport class User extends CustomBaseEntity {\n\n    @PrimaryKey({ autoincrement: false })\n    id: string\n\n    @Property()\n    name: string\n\n}\n")),(0,r.kt)("p",null,"Some explanations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every entity must be placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"src/entities")," directory and be exported in the ",(0,r.kt)("inlineCode",{parentName:"li"},"src/entities/index.ts")," file."),(0,r.kt)("li",{parentName:"ul"},"Every entity class should be decorated with ",(0,r.kt)("inlineCode",{parentName:"li"},"@Entity()"),"."),(0,r.kt)("li",{parentName:"ul"},"Every entity must extends ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomBaseEntity"),", which will add ",(0,r.kt)("em",{parentName:"li"},"createdAt")," and ",(0,r.kt)("em",{parentName:"li"},"updatedAt")," properties."),(0,r.kt)("li",{parentName:"ul"},"Every attribute of the class marked with the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Property()")," decorator will be a property in the database table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@PrimaryKey()")," decorator is used to define entity's unique primary key identifier.")),(0,r.kt)("h3",{id:"default-values"},"Default values"),(0,r.kt)("p",null,"Mikro-ORM lets you define default values in two ways:"),(0,r.kt)("h4",{id:"1-typescript"},"1. Typescript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"    @Property()\n    name: string = 'John Doe'\n")),(0,r.kt)("p",null,"This will ensure the default value when you instantiate the new object in your code (e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"new User()"),"), but will doesn't affect the SQL table (the column will remain nullable without default value)"),(0,r.kt)("h4",{id:"2-sql"},"2. SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"    @Property({ default: 'John Doe' })\n    name: string\n")),(0,r.kt)("p",null,"The column in the SQL table will have the default value."),(0,r.kt)("h2",{id:"entity-repository"},"Entity Repository"),(0,r.kt)("p",null,"Now that you have your entities created, you surely want to query, insert or even update data in the database!"),(0,r.kt)("p",null,"It is done by using ",(0,r.kt)("em",{parentName:"p"},"entity repositories"),". To access one, you need to inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," service, and then call the ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," method.\nThis method takes one argument: the class type of the entity you want to interact with.\nIt will then return the repository of this entity, used to persist and query data."),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"You can query data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"findOne()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"find()")," repository methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\n@injectable()\nexport default class PingCommand {\n\n    constructor(\n        private db: Database\n    )\n\n    @Slash({ \n        name: 'ping' \n    })\n    async pingHandler(\n        interaction: CommandInteraction\n    ) {\n\n        const userRepo = this.db.get(User)\n\n        const user = await userRepo.findOne({ id: interaction.user.id }) // -> User\n        const users = await userRepo.findAll() // -> [User, User, User, ...]\n\n        interaction.reply(`${user.name}, pong!\\nThere is a total of ${users.length} users in the database.`)\n    }\n} \n")),(0,r.kt)("h3",{id:"insert"},"Insert"),(0,r.kt)("p",null,"In order to insert (create) a new entity in the database, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"insert()")," repository method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\n@injectable()\nexport default class PingCommand {\n\n    constructor(\n        private db: Database\n    )\n\n    @Slash({ \n        name: 'ping' \n    })\n    async pingHandler(\n        interaction: CommandInteraction\n    ) {\n\n        const userRepo = this.db.get(User)\n\n        const user = new User()\n        user.name = 'John Doe'\n        user.id = interaction.user.id\n\n        await userRepo.persistAndFlush(user)\n    }\n}\n")),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"In order to update an entity in the database, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"update()")," repository method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\n@injectable()\nexport default class PingCommand {\n\n    constructor(\n        private db: Database\n    )\n\n    @Slash({ \n        name: 'ping' \n    })\n    async pingHandler(\n        interaction: CommandInteraction\n    ) {\n\n        const userRepo = this.db.get(User)\n\n        const user = await userRepo.findOne({ id: interaction.user.id })\n        user.name = 'John Doe'\n\n        await userRepo.persistAndFlush(user)\n    }\n}\n")),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"In order to delete an entity in the database, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"remove()")," repository method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Discord()\n@injectable()\nexport default class PingCommand {\n\n    constructor(\n        private db: Database\n    )\n\n    @Slash({ \n        name: 'ping' \n    })\n    async pingHandler(\n        interaction: CommandInteraction\n    ) {\n\n        const userRepo = this.db.get(User)\n\n        const user = await userRepo.findOne({ id: interaction.user.id })\n        await userRepo.removeAndFlush(user)\n    }\n}\n")),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"important",type:"tip"},(0,r.kt)("h3",{parentName:"admonition",id:"for-more-information-on-how-to-use-mikro-orm-check-their-official-documentation-here"},"For more information on how to use Mikro-ORM, check their ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("a",{parentName:"strong",href:"https://mikro-orm.io/docs/"},"official documentation here")),".")))}d.isMDXComponent=!0}}]);