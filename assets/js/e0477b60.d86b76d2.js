"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[6446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),g=r,c=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},49128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:60},o="Assets",l={unversionedId:"bot/features/assets",id:"version-2.3/bot/features/assets",title:"Assets",description:"We all know that working with assets (and mainly images) is really painful with Discord bots.",source:"@site/versioned_docs/version-2.3/bot/features/assets.mdx",sourceDirName:"bot/features",slug:"/bot/features/assets",permalink:"/docs/2.3/bot/features/assets",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/versioned_docs/version-2.3/bot/features/assets.mdx",tags:[],version:"2.3",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Local Store",permalink:"/docs/2.3/bot/features/local-store"},next:{title:"Scheduler",permalink:"/docs/2.3/bot/features/scheduler"}},s={},m=[{value:"Enable image upload",id:"enable-image-upload",level:2},{value:"Image entity",id:"image-entity",level:2},{value:"Use images",id:"use-images",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assets"},"Assets"),(0,r.kt)("p",null,"We all know that working with assets (and mainly images) is really painful with Discord bots.",(0,r.kt)("br",null),"\nIndeed, embeds allow you to only use ",(0,r.kt)("strong",{parentName:"p"},"hosted images"),", which can be quite annoying to manage and to work with."),(0,r.kt)("p",null,"But TSCord solves this issue!",(0,r.kt)("br",null),"\nIt has an auto image upload service that will ",(0,r.kt)("em",{parentName:"p"},"scan")," every image file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images")," directory and upload them on ",(0,r.kt)("a",{parentName:"p",href:"https://imgur.com/"},"imgur"),".",(0,r.kt)("br",null),"\nThe uploaded images url are then saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," table of the database, along with some useful metadata."),(0,r.kt)("h2",{id:"enable-image-upload"},"Enable image upload"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/general.ts")," and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"automaticUploadImageToImgur")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/config/general.ts",title:"src/config/general.ts"},"export const generalConfig: GeneralConfigType = {\n    //...\n    //highlight-next-line\n    automaticUploadImagesToImgur: true,\n    //...\n}\n")),(0,r.kt)("p",null,"Then, you'll have to get a Client ID in order to use the Imgur API.",(0,r.kt)("br",null),"\nSteps to follow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign in or register on imgur - ",(0,r.kt)("a",{parentName:"li",href:"https://imgur.com/"},"https://imgur.com/")),(0,r.kt)("li",{parentName:"ol"},"Navigate to the following page to register an OAuth application - ",(0,r.kt)("a",{parentName:"li",href:"https://api.imgur.com/oauth2/addclient"},"https://api.imgur.com/oauth2/addclient")),(0,r.kt)("li",{parentName:"ol"},"Fill the form with your application details"),(0,r.kt)("li",{parentName:"ol"},"On the authorization callback URL section, register the following URL: ",(0,r.kt)("a",{parentName:"li",href:"https://imgur.com/"},"https://imgur.com/")),(0,r.kt)("li",{parentName:"ol"},'Click on "Save" and that\'s it!')),(0,r.kt)("p",null,"Now just paste the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file on the following property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:"title=.env",title:".env"},'IMGUR_CLIENT_ID="YOUR_IMGUR_CLIENT_ID"\n')),(0,r.kt)("p",null,"Now that the upload service is enabled, the next time you start the bot it'll upload all images recursively in the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images")," directory."),(0,r.kt)("p",null,"Plus, if an image is removed from the directory, it'll also be removed from both database and imgur, and if one has a broken link on imgur, it'll be automatically reuploaded!"),(0,r.kt)("h2",{id:"image-entity"},"Image entity"),(0,r.kt)("p",null,"When an image is uploaded, the following data is saved in the db:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"fileName")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The file name of the image (including its format)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"basePath")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Relative path to the image, using the ",(0,r.kt)("inlineCode",{parentName:"td"},"assets/images")," directory as root path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The imgur hosted URL to access the image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Total size of the image in Bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tags")),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Editable list of tags to batch search images of the same type. By default, it will split the ",(0,r.kt)("inlineCode",{parentName:"td"},"basePath")," of the image in different tags (ex: if the image is located in ",(0,r.kt)("inlineCode",{parentName:"td"},"assets/images/foo/bar/image.png"),", it'll have the ",(0,r.kt)("inlineCode",{parentName:"td"},"foo")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"bar")," tags")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteHash")," properties are also stored in the database, but it is meant for an internal operation so don't worry about these."),(0,r.kt)("h2",{id:"use-images"},"Use images"),(0,r.kt)("p",null,"To use images in your code, just retrieve it from the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Database } from '@/services'\nimport { Image } from '@/entities'\nimport { Discord, Injectable } from '@/decorators'\n\n@Discord()\n@Injectable()\nexport default class PingCommand {\n\n    constructor(\n        private db: Database\n    )\n\n    @Slash({ name: 'ping' })\n    async pingHandler(\n        interaction: CommandInteraction\n    ) {\n\n        //highlight-next-line\n        const image = await this.db.get(Image).findOne({ fileName: 'image.png' }) // find by fileName\n\n        // or you can find by tags\n        //highlight-next-line\n        const imagesExplicit = await this.db.get(Image).findByTags(['foo', 'bar']) // will search for images that have 'foo' AND 'bar'\n        //highlight-next-line\n        const imagesNonExplicit = await this.db.get(Image).findByTags(['foo', 'bar'], false) // will search for images that have 'foo' OR 'bar'\n\n        interaction.followUp(image.url)\n    }\n}\n")))}d.isMDXComponent=!0}}]);