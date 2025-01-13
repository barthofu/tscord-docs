"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[5473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:A}=(0,l.U)(),[T,E]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==T&&g.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==T&&(S(t),E(a),null!=f&&A(f,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:D,onFocus:N,onClick:N},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},76897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(65488);n(85162);const i={sidebar_position:0},s="Configuration",l={unversionedId:"bot/features/database/configuration",id:"bot/features/database/configuration",title:"Configuration",description:"TSCord supports different databases:",source:"@site/docs/bot/features/database/configuration.mdx",sourceDirName:"bot/features/database",slug:"/bot/features/database/configuration",permalink:"/docs/next/bot/features/database/configuration",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/features/database/configuration.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Activities",permalink:"/docs/next/bot/discord/activities"},next:{title:"ORM",permalink:"/docs/next/bot/features/database/orm"}},u={},c=[{value:"Env",id:"env",level:2}],p=(d="Tab",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"TSCord supports different databases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQLite (by default)"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"MariaDB"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default, the template is configured to use ",(0,r.kt)("strong",{parentName:"p"},"SQLite"),". If your bot doesn't aim to be used on thousands of guilds with\nhundred of thousands of users, you should keep it."),(0,r.kt)("p",{parentName:"admonition"},"Plus, SQLite is the only database supported by the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/bot/features/database/backups"},"automatic backup system")),".")),(0,r.kt)("p",null,"You can configure all of this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/database.ts")," file."),(0,r.kt)("p",null,"Indeed, this file exports a a ",(0,r.kt)("inlineCode",{parentName:"p"},"mikroOrmConfig")," constant, which contains a production configuration and an optional development configuration. At runtime, the good configuration is chosen thanks to the NODE_ENV environment variable.\nThe database type should be explicitely set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mikroOrmConfig.production.type")," constant as it will be used to determine which entity manager type Mikro-ORM should use internaly."),(0,r.kt)("p",null,"You can find here the configuration for the different types of databases:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(p,{label:"SQLite",value:"sqlite",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: 'sqlite'\n    dbName: `${databaseConfig.path}db.sqlite`, // path to the db .sqlite file\n}\n"))),(0,r.kt)(p,{label:"PostgreSQL",value:"postgresql",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: 'postgres',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 5432,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n"))),(0,r.kt)(p,{label:"MySQL",value:"mysql",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: 'mysql',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 3306,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n"))),(0,r.kt)(p,{label:"MariaDB",value:"mariadb",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: 'mariadb',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 3306,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n"))),(0,r.kt)(p,{label:"MongoDB",value:"mongo",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: 'mongo',\n    clientUrl: process.env['DATABASE_HOST'],\n}\n")))),(0,r.kt)("h2",{id:"env"},"Env"),(0,r.kt)("p",null,"You surely noticed that the database connection informations are stored in the environment variables."),(0,r.kt)("p",null,"You can edit it in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=.env",title:".env"},'#...\n\nDATABASE_HOST="database"\nDATABASE_PORT=3306\nDATABASE_NAME="tscord_bot"\nDATABASE_USER="tscord"\nDATABASE_PASSWORD="tscord123"\n\n#...\n')))}f.isMDXComponent=!0}}]);