"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[541],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(7294),o=n(6010),s=n(2389),i=n(7392),l=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,s=e.lazy,d=e.block,f=e.defaultValue,m=e.values,b=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var A=(0,l.U)(),N=A.tabGroupChoices,T=A.setTabGroupChoices,E=(0,r.useState)(k),S=E[0],O=E[1],w=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var _=N[b];null!=_&&_!==S&&h.some((function(e){return e.value===_}))&&O(_)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==S&&(D(t),O(a),null!=b&&T(b,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=w.indexOf(e.currentTarget)+1;n=null!=(a=w[r])?a:w[0];break;case"ArrowLeft":var o,s=w.indexOf(e.currentTarget)-1;n=null!=(o=w[s])?o:w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function f(e){var t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var a,r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=n(5488),l=(n(5162),["components"]),u={sidebar_position:0},c="Configuration",p={unversionedId:"features/database/configuration",id:"features/database/configuration",title:"Configuration",description:"TSCord supports different databases:",source:"@site/docs/features/database/configuration.mdx",sourceDirName:"features/database",slug:"/features/database/configuration",permalink:"/tscord-docs/docs/features/database/configuration",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/features/database/configuration.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Activities",permalink:"/tscord-docs/docs/discord/activities"},next:{title:"ORM",permalink:"/tscord-docs/docs/features/database/orm"}},d={},f=[{value:"Env",id:"env",level:2}],m=(a="Tab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),b={toc:f};function v(e){var t=e.components,n=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"TSCord supports different databases:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"SQLite (by default)"),(0,s.kt)("li",{parentName:"ul"},"MySQL"),(0,s.kt)("li",{parentName:"ul"},"MariaDB"),(0,s.kt)("li",{parentName:"ul"},"PostgreSQL")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"By default, the template is configured to use ",(0,s.kt)("strong",{parentName:"p"},"SQLite"),". If your bot doesn't aim to be used on thousands of guilds with\nhundred of thousands of users, you should keep it."),(0,s.kt)("p",{parentName:"div"},"Plus, SQLite is the only database supported by the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/docs/features/database/backups"},"automatic backup system")),"."))),(0,s.kt)("p",null,"You can configure all of this in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/config/database.ts")," file."),(0,s.kt)("p",null,"Indeed, this file exports a ",(0,s.kt)("inlineCode",{parentName:"p"},"mikroOrmConfig")," constant, which contains a production configuration and an optional development configuration. At runtime, the good configuration is chosen thanks to the NODE_ENV environment variable."),(0,s.kt)("p",null,"You can find here the configuration for the different types of databases:"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(m,{label:"SQLite",value:"sqlite",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/database.ts",title:"src/config/database.ts"},"{\n    type: 'sqlite',\n    dbName: `${databaseConfig.path}db.sqlite`, // path to the db .sqlite file\n}\n"))),(0,s.kt)(m,{label:"PostgreSQL",value:"postgresql",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/database.ts",title:"src/config/database.ts"},"{\n    type: 'postgresql',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 5432,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n"))),(0,s.kt)(m,{label:"MySQL",value:"mysql",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/database.ts",title:"src/config/database.ts"},"{\n    type: 'mysql',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 3306,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n"))),(0,s.kt)(m,{label:"MariaDB",value:"mariadb",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/database.ts",title:"src/config/database.ts"},"{\n    type: 'mariadb',\n    dbName: process.env['DATABASE_NAME'],\n    host: process.env['DATABASE_HOST'],\n    port: 3306,\n    user: process.env['DATABASE_USER'],\n    password: process.env['DATABASE_PASSWORD'],\n}\n")))),(0,s.kt)("h2",{id:"env"},"Env"),(0,s.kt)("p",null,"You surely noticed that the database connection informations are stored in the environment variables."),(0,s.kt)("p",null,"You can edit it in the ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=.env",title:".env"},'#...\n\nDATABASE_HOST="database"\nDATABASE_PORT=3306\nDATABASE_NAME="tscord_bot"\nDATABASE_USER="tscord"\nDATABASE_PASSWORD="tscord123"\n\n#...\n')))}v.isMDXComponent=!0}}]);