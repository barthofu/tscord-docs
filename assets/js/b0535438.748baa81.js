"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[426],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9177:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:5},c="CI/CD",s={unversionedId:"devops/ci-cd",id:"devops/ci-cd",title:"CI/CD",description:"TSCord bundles itself with a complete setup for Github Actions!",source:"@site/docs/devops/ci-cd.mdx",sourceDirName:"devops",slug:"/devops/ci-cd",permalink:"/tscord-docs/docs/devops/ci-cd",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/devops/ci-cd.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Debug with VSCode",permalink:"/tscord-docs/docs/devops/debug-with-vscode"}},p={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Secrets",id:"secrets",level:3},{value:"Workflow config file",id:"workflow-config-file",level:3}],u={toc:d};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cicd"},"CI/CD"),(0,a.kt)("p",null,"TSCord bundles itself with a complete setup for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/features/actions"},"Github Actions")),"!"),(0,a.kt)("p",null,"Github Actions lets you automate your workflow for building, testing and deploying your application."),(0,a.kt)("p",null,"More concretely, the provided config will permit you to deploy your bot to a SSH accessible remote machine (like a VPS) on precise events, like the creation of a tag on Github, a push to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, on demand, etc..."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"secrets"},"Secrets"),(0,a.kt)("p",null,"First, you need to setup some ",(0,a.kt)("em",{parentName:"p"},"secrets")," in the settings of your github repo (",(0,a.kt)("strong",{parentName:"p"},"Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Secrets")," > ",(0,a.kt)("strong",{parentName:"p"},"Actions"),")."),(0,a.kt)("p",null,"From there, add the following secrets (don't worry, after you've set a secret nobody will be able to read it):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IP")),(0,a.kt)("td",{parentName:"tr",align:null},"The IP of the machine that will host your bot")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PORT")),(0,a.kt)("td",{parentName:"tr",align:null},"Put ",(0,a.kt)("inlineCode",{parentName:"td"},"22")," (SSH port)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"USER")),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the host user to connect as")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PASSWORD")),(0,a.kt)("td",{parentName:"tr",align:null},"Password of the host user to connect as")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PROJECT_PATH")),(0,a.kt)("td",{parentName:"tr",align:null},"The absolute path to your project on the host")))),(0,a.kt)("h3",{id:"workflow-config-file"},"Workflow config file"),(0,a.kt)("p",null,"Then, you can customize the behavior in the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yml")," config file."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To know how to use Github Actions config files, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"},"check the doc here"))))),(0,a.kt)("p",null,"By default, the deploy workflow is only triggerable on-demand (",(0,a.kt)("strong",{parentName:"p"},"Actions")," > ",(0,a.kt)("strong",{parentName:"p"},"Deploy (SSH)")," > ",(0,a.kt)("strong",{parentName:"p"},"Run workflow"),").",(0,a.kt)("br",null),"\nWe recommand you to either add a trigger on release tag creation or on pushes on your ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, depending on your global git workflow."),(0,a.kt)("p",null,"Also, by default, the deploy action will use ",(0,a.kt)("strong",{parentName:"p"},"Docker"),", but you can easily replace it with ",(0,a.kt)("strong",{parentName:"p"},"PM2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=.github/workflows/deploy.yml",title:".github/workflows/deploy.yml"},"        script: |\n            cd $PROJECT_PATH\n            git pull https://github.com/barthofu/tscord-template.git main\n            // remove-next-line\n            docker-compose up -d --build\n            // add-next-line\n            pm2 restart pm2.config.json\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Each line under the ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," property is a command that'll be run on your host machine. You can customize it as you want!"))))}m.isMDXComponent=!0}}]);