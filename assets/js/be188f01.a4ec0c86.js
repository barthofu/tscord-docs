"use strict";(self.webpackChunktscord_docs=self.webpackChunktscord_docs||[]).push([[231],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(p,".").concat(m)]||d[m]||l[m]||s;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3650:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={sidebar_position:6},p="Backups",c={unversionedId:"features/database/backups",id:"features/database/backups",title:"Backups",description:"Backups are only supported by SQLite databases!",source:"@site/docs/features/database/backups.mdx",sourceDirName:"features/database",slug:"/features/database/backups",permalink:"/docs/features/database/backups",draft:!1,editUrl:"https://github.com/barthofu/tscord-docs/tree/main/docs/features/database/backups.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Single Data Type",permalink:"/docs/features/database/single-data-type"},next:{title:"Internationalization (i18n)",permalink:"/docs/features/internationalization"}},u={},l=[{value:"Scheduled backups",id:"scheduled-backups",level:2},{value:"Manual backups",id:"manual-backups",level:2},{value:"API backups",id:"api-backups",level:2},{value:"Restore a backup",id:"restore-a-backup",level:2}],d={toc:l};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"backups"},"Backups"),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("h4",{parentName:"div",id:"backups-are-only-supported-by-sqlite-databases"},"Backups are only supported by ",(0,s.kt)("strong",{parentName:"h4"},"SQLite")," databases!"),(0,s.kt)("p",{parentName:"div"},"If you're using other databases, script your own backup system."))),(0,s.kt)("p",null,"TSCord use ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/barthofu/saveqlite"},"saveqlite"))," to make incrementals backups of the SQLite database file."),(0,s.kt)("p",null,"Backing up a SQLite database file on a regular basis can quickly become really heavy. Indeed, the total weight of the backup will be ",(0,s.kt)("inlineCode",{parentName:"p"},"(database_size * num_backups)"),"."),(0,s.kt)("p",null,"With an incremental backup system, only the difference since the last snapshot is saved!"),(0,s.kt)("p",null,"So we end up with a lightweight save, including multiple snapshots to rollback to any state of the database."),(0,s.kt)("h2",{id:"scheduled-backups"},"Scheduled backups"),(0,s.kt)("p",null,"A backup is ",(0,s.kt)("a",{parentName:"p",href:"/docs/features/scheduler"},"scheduled")," per day, happening at ",(0,s.kt)("strong",{parentName:"p"},"23:59:59")," (or ",(0,s.kt)("em",{parentName:"p"},"11:59:59 pm"),").\nYou can modify this time or the frequency in the ",(0,s.kt)("inlineCode",{parentName:"p"},"src/services/Database.ts")," file at the ",(0,s.kt)("inlineCode",{parentName:"p"},"backup()")," method."),(0,s.kt)("h2",{id:"manual-backups"},"Manual backups"),(0,s.kt)("p",null,"You can either create a backup programmaticaly by calling this ",(0,s.kt)("inlineCode",{parentName:"p"},"backup()")," method and by referencing a custom file name for the backup."),(0,s.kt)("p",null,"E.g:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// first, we import the Database service\nconst db = container.resolve(Database)\n\n// then we chose a name for the backup snapshot\nconst snapshotName = `snapshot-${formatDate(new Date(), 'onlyDateFileName')}-manual-${Date.now()}`\n\n// finaly, we generate the snapshot\nconst success = await db.backup(snapshotName)\n")),(0,s.kt)("h2",{id:"api-backups"},"API backups"),(0,s.kt)("p",null,"Finaly, you can create a backup using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/features/api"},"API")," by simply make a ",(0,s.kt)("em",{parentName:"p"},"POST")," request on this endpoint:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"http://localhost:3000/database/backup\n")),(0,s.kt)("p",null,"The server will return a response containing the name of the backup."),(0,s.kt)("h2",{id:"restore-a-backup"},"Restore a backup"),(0,s.kt)("p",null,"To restore a precise backup, you will have to either:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use the ",(0,s.kt)("inlineCode",{parentName:"li"},"restore()")," method of the ",(0,s.kt)("em",{parentName:"li"},"Database")," service."),(0,s.kt)("li",{parentName:"ul"},"Make a POST request on the ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/database/restore")," endpoint and precising the ",(0,s.kt)("inlineCode",{parentName:"li"},"snapshotName")," in the body.")))}m.isMDXComponent=!0}}]);