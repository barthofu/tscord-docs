"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[2528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,k=d["".concat(p,".").concat(b)]||d[b]||u[b]||o;return a?n.createElement(k,s(s({ref:t},l),{},{components:a})):n.createElement(k,s({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6},s="Backups",i={unversionedId:"bot/features/database/backups",id:"bot/features/database/backups",title:"Backups",description:"Backups are only supported by SQLite databases!",source:"@site/docs/bot/features/database/backups.mdx",sourceDirName:"bot/features/database",slug:"/bot/features/database/backups",permalink:"/tscord-docs/docs/bot/features/database/backups",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/bot/features/database/backups.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Single Data Type",permalink:"/tscord-docs/docs/bot/features/database/single-data-type"},next:{title:"Internationalization (i18n)",permalink:"/tscord-docs/docs/bot/features/internationalization"}},p={},c=[{value:"Scheduled backups",id:"scheduled-backups",level:2},{value:"Manual backups",id:"manual-backups",level:2},{value:"API backups",id:"api-backups",level:2},{value:"Restore a backup",id:"restore-a-backup",level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backups"},"Backups"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("h4",{parentName:"admonition",id:"backups-are-only-supported-by-sqlite-databases"},"Backups are only supported by ",(0,r.kt)("strong",{parentName:"h4"},"SQLite")," databases!"),(0,r.kt)("p",{parentName:"admonition"},"If you're using other databases, script your own backup system.")),(0,r.kt)("p",null,"TSCord use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/barthofu/saveqlite"},"saveqlite"))," to make incrementals backups of the SQLite database file."),(0,r.kt)("p",null,"Backing up a SQLite database file on a regular basis can quickly become really heavy. Indeed, the total weight of the backup will be ",(0,r.kt)("inlineCode",{parentName:"p"},"(database_size * num_backups)"),"."),(0,r.kt)("p",null,"With an incremental backup system, only the difference since the last snapshot is saved!"),(0,r.kt)("p",null,"So we end up with a lightweight save, including multiple snapshots to rollback to any state of the database."),(0,r.kt)("h2",{id:"scheduled-backups"},"Scheduled backups"),(0,r.kt)("p",null,"A backup is ",(0,r.kt)("a",{parentName:"p",href:"/docs/bot/features/scheduler"},"scheduled")," per day, happening at ",(0,r.kt)("strong",{parentName:"p"},"23:59:59")," (or ",(0,r.kt)("em",{parentName:"p"},"11:59:59 pm"),").\nYou can modify this time or the frequency in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/services/Database.ts")," file at the ",(0,r.kt)("inlineCode",{parentName:"p"},"backup()")," method."),(0,r.kt)("h2",{id:"manual-backups"},"Manual backups"),(0,r.kt)("p",null,"You can either create a backup programmaticaly by calling this ",(0,r.kt)("inlineCode",{parentName:"p"},"backup()")," method and by referencing a custom file name for the backup."),(0,r.kt)("p",null,"E.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// first, we import the Database service\nconst db = container.resolve(Database)\n\n// then we chose a name for the backup snapshot\nconst snapshotName = `snapshot-${formatDate(new Date(), 'onlyDateFileName')}-manual-${Date.now()}`\n\n// finaly, we generate the snapshot\nconst success = await db.backup(snapshotName)\n")),(0,r.kt)("h2",{id:"api-backups"},"API backups"),(0,r.kt)("p",null,"Finaly, you can create a backup using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/bot/features/api"},"API")," by simply make a ",(0,r.kt)("em",{parentName:"p"},"POST")," request on this endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://localhost:3000/database/backup\n")),(0,r.kt)("p",null,"The server will return a response containing the name of the backup."),(0,r.kt)("h2",{id:"restore-a-backup"},"Restore a backup"),(0,r.kt)("p",null,"To restore a precise backup, you will have to either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"restore()")," method of the ",(0,r.kt)("em",{parentName:"li"},"Database")," service."),(0,r.kt)("li",{parentName:"ul"},"Make a POST request on the ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/database/restore")," endpoint and precising the ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshotName")," in the body.")))}u.isMDXComponent=!0}}]);