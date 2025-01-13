"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[7404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:20},o="Usage",i={unversionedId:"cli/usage",id:"version-2.3/cli/usage",title:"Usage",description:"Commands",source:"@site/versioned_docs/version-2.3/cli/usage.mdx",sourceDirName:"cli",slug:"/cli/usage",permalink:"/docs/2.3/cli/usage",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.3/cli/usage.mdx",tags:[],version:"2.3",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/2.3/cli/installation"},next:{title:"TSCord Plugins",permalink:"/docs/2.3/plugins/"}},s={},p=[{value:"Commands",id:"commands",level:2},{value:"Init",id:"init",level:3},{value:"Info",id:"info",level:3},{value:"Generate",id:"generate",level:3},{value:"<strong>Extraction</strong>",id:"extraction",level:4},{value:"<strong>Plugin</strong>",id:"plugin",level:3},{value:"<strong>Install</strong>",id:"install",level:4},{value:"<strong>Uninstall</strong>",id:"uninstall",level:4},{value:"<strong>Update</strong>",id:"update",level:4},{value:"<strong>Search</strong>",id:"search",level:4},{value:"<strong>Info</strong>",id:"info-1",level:4},{value:"<strong>List</strong>",id:"list",level:4}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord --help\n")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"init"},"Init"),(0,r.kt)("p",null,"The easiest way to get started with TSCord is by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command. It'll enable you to quickly start building a new TSCord application, with everything set up for you."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For the moment, only the ",(0,r.kt)("inlineCode",{parentName:"p"},"bot")," template can be init with the CLI.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord init bot <name> [version]\n")),(0,r.kt)("p",null,"If no ",(0,r.kt)("strong",{parentName:"p"},"version")," is precised, then the latest release of TSCord will be used (recommanded)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-deps")," do not install dependencies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-git")," do not setup git")),(0,r.kt)("h3",{id:"info"},"Info"),(0,r.kt)("p",null,"Display info about your TSCord project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord info\n")),(0,r.kt)("h3",{id:"generate"},"Generate"),(0,r.kt)("p",null,"You can generate every type of file needed in a TSCord bot application using the CLI in order to speed up your development process."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The CLI auto-detects your current TSCord version and adapts the generated files to this version. ",(0,r.kt)("br",null),"Just keep in mind to update the CLI if you want to generate files for a brand new version prior to when you've installed the CLI.")),(0,r.kt)("p",null,"First, run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord generate\n")),(0,r.kt)("p",null,"Then, choose the type of file you want and finally answer the extra questions depending on the file type."),(0,r.kt)("p",null,"You can also shortcut it by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord generate <type>\n")),(0,r.kt)("p",null,"directly."),(0,r.kt)("h4",{id:"extraction"},(0,r.kt)("strong",{parentName:"h4"},"Extraction")),(0,r.kt)("p",null,"At some point you'll probably need to customize the generation CLI in different ways, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"edit the generated templates"),(0,r.kt)("li",{parentName:"ul"},"customize the logic behind the some generators"),(0,r.kt)("li",{parentName:"ul"},"add new generators and templates ")),(0,r.kt)("p",null,"It can be achieved by ",(0,r.kt)("strong",{parentName:"p"},"extracting")," it in your local project!"),(0,r.kt)("p",null,"Simply run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord generate --extract\n")),(0,r.kt)("p",null,"and the source code will be copied in the root of your tscord project under the ",(0,r.kt)("inlineCode",{parentName:"p"},"cli")," folder."),(0,r.kt)("p",null,"This part of the CLI is using ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://plopjs.com/"},"plop.js"))," under the hood, so we highly recommend you to check their documentation so you can understand and customize efficiently the generators/templates for your unique needs!"),(0,r.kt)("h3",{id:"plugin"},(0,r.kt)("strong",{parentName:"h3"},"Plugin")),(0,r.kt)("p",null,"Plugins are hosted on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/barthofu/tscord-plugins"},"barthofu/tscord-plugins")," github repository.\nThe CLI let you manage them in many ways!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"note"),"\nWhen we talk about ",(0,r.kt)("strong",{parentName:"p"},"plugin name"),", it is in fact their folder name which also acts as their unique identifier.")),(0,r.kt)("h4",{id:"install"},(0,r.kt)("strong",{parentName:"h4"},"Install")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin install")," command to install a plugin locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord plugin install <name>\n")),(0,r.kt)("h4",{id:"uninstall"},(0,r.kt)("strong",{parentName:"h4"},"Uninstall")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin uninstall")," command to uninstall a plugin locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord plugin uninstall <name>\n")),(0,r.kt)("h4",{id:"update"},(0,r.kt)("strong",{parentName:"h4"},"Update")),(0,r.kt)("p",null,"Updating a plugin is done with the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin update")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord plugin update <name>\n")),(0,r.kt)("h4",{id:"search"},(0,r.kt)("strong",{parentName:"h4"},"Search")),(0,r.kt)("p",null,"You can search for plugins and have info on them with the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin search")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord plugin search <query>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-l, --limit <number>"),' limit the number of results (default: "10")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-s, --short")," speed up search command by not showing extra information on plugins")),(0,r.kt)("h4",{id:"info-1"},(0,r.kt)("strong",{parentName:"h4"},"Info")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin info")," command show you all the information about a plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord plugin info <name>\n")),(0,r.kt)("h4",{id:"list"},(0,r.kt)("strong",{parentName:"h4"},"List")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin list")," command show you all the currently available plugins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tscord plugin list\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Options:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i, --installed")," list only installed plugins"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-l, --link")," put the link of each plugin right to its name")))}d.isMDXComponent=!0}}]);