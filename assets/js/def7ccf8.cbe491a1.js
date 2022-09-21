"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[532],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,f=e.defaultValue,m=e.values,h=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,O=w.setTabGroupChoices,I=(0,a.useState)(y),P=I[0],T=I[1],A=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=N[h];null!=x&&x!==P&&b.some((function(e){return e.value===x}))&&T(x)}var C=function(e){var t=e.currentTarget,n=A.indexOf(t),r=b[n].value;r!==P&&(E(t),T(r),null!=h&&O(h,String(r)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=A.indexOf(e.currentTarget)+1;n=null!=(r=A[a])?r:A[0];break;case"ArrowLeft":var o,i=A.indexOf(e.currentTarget)-1;n=null!=(o=A[i])?o:A[A.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return A.push(e)},onKeyDown:_,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function f(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},8925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(5488),n(5162),["components"]),l={sidebar_position:40},s="API",u={unversionedId:"features/api",id:"features/api",title:"API",description:"TSCord is not only a Discord Bot, it has also an API in its core!",source:"@site/docs/features/api.mdx",sourceDirName:"features",slug:"/features/api",permalink:"/tscord-docs/docs/features/api",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/features/api.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Custom Events",permalink:"/tscord-docs/docs/features/custom-events"},next:{title:"Local Store",permalink:"/tscord-docs/docs/features/local-store"}},c={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Swagger",id:"swagger",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Architecture",id:"architecture",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api"},"API"),(0,o.kt)("p",null,"TSCord is not only a Discord Bot, it has also an API in its core!",(0,o.kt)("br",null),"\nThis API lets you interact with the bot instance and the DB from external services using REST requests."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"routing-controllers")," package under the hood, check the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/typestack/routing-controllers#table-of-contents"},"official documentation here"))," to learn how to customize it and add new endpoints."))),(0,o.kt)("h2",{id:"initialization"},"Initialization"),(0,o.kt)("p",null,"First, you need to put a unique ",(0,o.kt)("strong",{parentName:"p"},"API_ADMIN_TOKEN")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file (you can generate it ",(0,o.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/version1"},"here"),").\nYou can also customize the port it is running on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env",metastring:"title=.env",title:".env"},'API_PORT=4000\nAPI_ADMIN_TOKEN="PUT_A_RANDOM_TOKEN_HERE"\n')),(0,o.kt)("p",null,"Then, you'll have to enable the API server in the config as it is disabled by default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/general.ts",title:"src/config/general.ts"},"export const generalConfig: GeneralConfigType = {\n\n    //highlight-next-line\n    enabled: true,\n    port: process.env['API_PORT'] ? parseInt(process.env['API_PORT']) : 4000,\n}\n")),(0,o.kt)("h2",{id:"swagger"},"Swagger"),(0,o.kt)("p",null,"The API includes an OpenAPI Swagger webpage, accessible at this endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/docs\n")),(0,o.kt)("p",null,"It is an interactive documentation of all the endpoints and their parameters."),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Most of the API is protected by an authorization system.\nIt is designed following a classic ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer-like header authorization")," pattern."),(0,o.kt)("p",null,"It accepts two type of tokens:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Discord OAuth2 token"),": the authorization system will fetch the actual discord user from the provided token, and then checks if its ID is included in the ",(0,o.kt)("inlineCode",{parentName:"li"},"devs")," config property."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Admin Token"),": if the provided token correspond to the one in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),", it will authorize the request.")),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"All the API code lives in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/api/"),".\nIt is splitted as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"src/api/\n\u251c\u2500\u2500 controllers # all the controllers (= endpoints), grouped by module file\n\u251c\u2500\u2500 middlewares # the middlewares are functions that are executed before the controller\n\u2514\u2500\u2500 server.ts # the server itself\n")))}f.isMDXComponent=!0}}]);