"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[8992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),s=a(2389),i=a(7392),l=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:s,defaultValue:d,values:m,groupId:b,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,l.U)(),[A,N]=(0,r.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==A&&g.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==A&&(O(t),N(n),null!=b&&T(b,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},g.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>E.push(e),onKeyDown:D,onFocus:S,onClick:S},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":A===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},5369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(5488);a(5162);const s={sidebar_position:0},i="Configuration",l={unversionedId:"bot/features/database/configuration",id:"version-2.0.0/bot/features/database/configuration",title:"Configuration",description:"",source:"@site/versioned_docs/version-2.0.0/bot/features/database/configuration.mdx",sourceDirName:"bot/features/database",slug:"/bot/features/database/configuration",permalink:"/tscord-docs/docs/bot/features/database/configuration",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.0.0/bot/features/database/configuration.mdx",tags:[],version:"2.0.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Activities",permalink:"/tscord-docs/docs/bot/discord/activities"},next:{title:"ORM",permalink:"/tscord-docs/docs/bot/features/database/orm"}},u={},p=[{value:"Env",id:"env",level:2}],c=(d="Tab",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:p};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"TSCord supports different databases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SQLite (by default)"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"MariaDB"),(0,r.kt)("li",{parentName:"ul"},"PostgreSQL")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default, the template is configured to use ",(0,r.kt)("strong",{parentName:"p"},"SQLite"),". If your bot doesn't aim to be used on thousands of guilds with\nhundred of thousands of users, you should keep it."),(0,r.kt)("p",{parentName:"admonition"},"Plus, SQLite is the only database supported by the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/bot/features/database/backups"},"automatic backup system")),".")),(0,r.kt)("p",null,"You can configure all of this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/database.ts")," file."),(0,r.kt)("p",null,"Indeed, this file exports a ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseType")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"mikroOrmConfig")," constant, which contains a production configuration and an optional development configuration. At runtime, the good configuration is chosen thanks to the NODE_ENV environment variable.\nThe database type should be explicitely set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseType")," constant as it will be used to determine which entity manager type Mikro-ORM should use internaly."),(0,r.kt)("p",null,"You can find here the configuration for the different types of databases:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c,{label:"SQLite",value:"sqlite",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=databaseType",title:"databaseType"},"export const databaseType = 'better-sqlite' as const // (or 'sqlite') \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: databaseType,\n    dbName: `${databaseConfig.path}db.sqlite`, // path to the db .sqlite file\n}\n"))),(0,r.kt)(c,{label:"PostgreSQL",value:"postgresql",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=databaseType",title:"databaseType"},"export const databaseType = 'postgresql' as const\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: databaseType,\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 5432,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n"))),(0,r.kt)(c,{label:"MySQL",value:"mysql",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=databaseType",title:"databaseType"},"export const databaseType = 'mysql' as const \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: 'mysql',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 3306,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n"))),(0,r.kt)(c,{label:"MariaDB",value:"mariadb",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=databaseType",title:"databaseType"},"export const databaseType = 'mariadb' as const\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=mikroOrmConfig",title:"mikroOrmConfig"},"{\n    type: 'mariadb',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 3306,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n")))),(0,r.kt)("h2",{id:"env"},"Env"),(0,r.kt)("p",null,"You surely noticed that the database connection informations are stored in the environment variables."),(0,r.kt)("p",null,"You can edit it in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=.env",title:".env"},'#...\n\nDATABASE_HOST="database"\nDATABASE_PORT=3306\nDATABASE_NAME="tscord_bot"\nDATABASE_USER="tscord"\nDATABASE_PASSWORD="tscord123"\n\n#...\n')))}b.isMDXComponent=!0}}]);