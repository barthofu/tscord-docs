"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[3986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},i="CI/CD",l={unversionedId:"bot/devops/ci-cd",id:"version-2.1/bot/devops/ci-cd",title:"CI/CD",description:"TSCord bundles itself with a complete setup for Github Actions!",source:"@site/versioned_docs/version-2.1/bot/devops/ci-cd.mdx",sourceDirName:"bot/devops",slug:"/bot/devops/ci-cd",permalink:"/docs/2.1/bot/devops/ci-cd",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.1/bot/devops/ci-cd.mdx",tags:[],version:"2.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Debug with VSCode",permalink:"/docs/2.1/bot/devops/debug-with-vscode"},next:{title:"Deployment",permalink:"/docs/2.1/bot/devops/deployment"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Secrets",id:"secrets",level:3},{value:"Workflow config file",id:"workflow-config-file",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cicd"},"CI/CD"),(0,r.kt)("p",null,"TSCord bundles itself with a complete setup for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/features/actions"},"Github Actions")),"!"),(0,r.kt)("p",null,"Github Actions lets you automate your workflow for building, testing and deploying your application."),(0,r.kt)("p",null,"More concretely, the provided config will permit you to deploy your bot to a SSH accessible remote machine (like a VPS) on precise events, like the creation of a tag on Github, a push to the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch, on demand, etc..."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"secrets"},"Secrets"),(0,r.kt)("p",null,"First, you need to setup some ",(0,r.kt)("em",{parentName:"p"},"secrets")," in the settings of your github repo (",(0,r.kt)("strong",{parentName:"p"},"Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Secrets")," > ",(0,r.kt)("strong",{parentName:"p"},"Actions"),")."),(0,r.kt)("p",null,"From there, add the following secrets (don't worry, after you've set a secret nobody will be able to read it):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IP")),(0,r.kt)("td",{parentName:"tr",align:null},"The IP of the machine that will host your bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PORT")),(0,r.kt)("td",{parentName:"tr",align:null},"Put ",(0,r.kt)("inlineCode",{parentName:"td"},"22")," (SSH port)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"USER")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the host user to connect as")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PASSWORD")),(0,r.kt)("td",{parentName:"tr",align:null},"Password of the host user to connect as")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROJECT_PATH")),(0,r.kt)("td",{parentName:"tr",align:null},"The absolute path to your project on the host")))),(0,r.kt)("h3",{id:"workflow-config-file"},"Workflow config file"),(0,r.kt)("p",null,"Then, you can customize the behavior in the ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yml")," config file."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To know how to use Github Actions config files, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"},"check the doc here")),".")),(0,r.kt)("p",null,"By default, the deploy workflow is only triggerable on-demand (",(0,r.kt)("strong",{parentName:"p"},"Actions")," > ",(0,r.kt)("strong",{parentName:"p"},"Deploy (SSH)")," > ",(0,r.kt)("strong",{parentName:"p"},"Run workflow"),").",(0,r.kt)("br",null),"\nWe recommand you to either add a trigger on release tag creation or on pushes on your ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch, depending on your global git workflow."),(0,r.kt)("p",null,"Also, by default, the deploy action will use ",(0,r.kt)("strong",{parentName:"p"},"Docker"),", but you can easily replace it with ",(0,r.kt)("strong",{parentName:"p"},"PM2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=.github/workflows/deploy.yml",title:".github/workflows/deploy.yml"},"        script: |\n            cd $PROJECT_PATH\n            git pull https://github.com/barthofu/tscord-template.git main\n            // remove-next-line\n            docker-compose up -d --build\n            // add-next-line\n            pm2 restart pm2.config.json\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Each line under the ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," property is a command that'll be run on your host machine. You can customize it as you want!")))}d.isMDXComponent=!0}}]);