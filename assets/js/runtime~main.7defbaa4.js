(()=>{"use strict";var e,a,t,f,r,d={},b={};function c(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=d,c.c=b,e=[],c.O=(a,t,f,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&r||d>=r)&&Object.keys(c.O).every((e=>c.O[e](t[o])))?t.splice(o--,1):(b=!1,r<d&&(d=r));if(b){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var b=2&f&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,c.d(r,d),r},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",82:"0b6814dd",167:"44197f31",272:"fde56748",981:"ff4dedd1",995:"7a1bad98",1250:"56ef1c3d",1457:"63ce0110",1535:"e00eb39c",1716:"3eaaeb48",1733:"35eda867",2072:"8745f9ff",2080:"13ce953d",2424:"bff762e6",2519:"3b6d741f",2528:"2e89325b",2588:"76338a10",2743:"22953a4b",2802:"6e596b40",3206:"f8409a7e",3237:"1df93b7f",3428:"ae1ac29d",3559:"af3ba1ab",3769:"6ce7b256",4427:"d62dbe98",4789:"ab627164",5473:"120146b9",6320:"07e6ab62",6614:"f10bce7b",6697:"7c7dfd00",6731:"6e27eb59",6921:"9d1f8e9b",6978:"0c47f8c1",7243:"250944fb",7462:"43fec352",7865:"3be149a2",7918:"17896441",7920:"1a4e3797",8107:"3eb65e31",8111:"a06615e1",8173:"e83dd556",8246:"9d12e225",8260:"6cbd52ee",8608:"4a53a61c",8615:"1437e366",9514:"1be78505",9521:"790aec18",9630:"dd6285a6",9862:"e6d97af0"}[e]||e)+"."+{53:"e5c59f39",82:"c3429cb1",167:"679fac8f",272:"f45c304c",981:"555d3bdf",995:"bbe0ba2b",1068:"0011dd49",1250:"91de0f5e",1457:"a339c2de",1535:"5dec303c",1542:"ac58dbb4",1716:"e2c720e0",1733:"494ff578",2072:"ab2d1d67",2080:"e975f8cf",2424:"3a329bf1",2519:"0c4d6d9a",2528:"25b28d4a",2588:"ac518dbe",2743:"ab4fc746",2802:"b1590336",3206:"af6df714",3237:"938e9af7",3428:"e0a357c2",3559:"971e77fa",3769:"0fbd9c95",4427:"29c002b0",4609:"f9a4e1d3",4789:"65ffed9f",4972:"114d228a",5473:"144ddf94",5525:"5246ca2d",6320:"f11bc2f3",6614:"413f20c4",6697:"3fec2fb9",6731:"3add6b02",6921:"28bc206f",6978:"7ae61b86",7243:"6f555ad8",7462:"2f65d079",7865:"1e77f8fb",7918:"db14f417",7920:"b33b0ea5",8107:"63c75ad5",8111:"ef97cfad",8173:"0cdedf5a",8246:"746c9972",8260:"b959199a",8443:"6f131477",8608:"3dd6f157",8615:"64b07224",9514:"4dd781dc",9521:"78f5ec9a",9630:"51cbe052",9862:"c2fa5171"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="tscord-docs:",c.l=(e,a,t,d)=>{if(f[e])f[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+t){b=l;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.setAttribute("data-webpack",r+t),b.src=e),f[e]=[a];var u=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],b.parentNode&&b.parentNode.removeChild(b),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=u.bind(null,b.onerror),b.onload=u.bind(null,b.onload),o&&document.head.appendChild(b)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/tscord-docs/",c.gca=function(e){return e={17896441:"7918","935f2afb":"53","0b6814dd":"82","44197f31":"167",fde56748:"272",ff4dedd1:"981","7a1bad98":"995","56ef1c3d":"1250","63ce0110":"1457",e00eb39c:"1535","3eaaeb48":"1716","35eda867":"1733","8745f9ff":"2072","13ce953d":"2080",bff762e6:"2424","3b6d741f":"2519","2e89325b":"2528","76338a10":"2588","22953a4b":"2743","6e596b40":"2802",f8409a7e:"3206","1df93b7f":"3237",ae1ac29d:"3428",af3ba1ab:"3559","6ce7b256":"3769",d62dbe98:"4427",ab627164:"4789","120146b9":"5473","07e6ab62":"6320",f10bce7b:"6614","7c7dfd00":"6697","6e27eb59":"6731","9d1f8e9b":"6921","0c47f8c1":"6978","250944fb":"7243","43fec352":"7462","3be149a2":"7865","1a4e3797":"7920","3eb65e31":"8107",a06615e1:"8111",e83dd556:"8173","9d12e225":"8246","6cbd52ee":"8260","4a53a61c":"8608","1437e366":"8615","1be78505":"9514","790aec18":"9521",dd6285a6:"9630",e6d97af0:"9862"}[e]||e,c.p+c.u(e)},(()=>{var e={1303:0,532:0};c.f.j=(a,t)=>{var f=c.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var d=c.p+c.u(a),b=new Error;c.l(d,(t=>{if(c.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",b.name="ChunkLoadError",b.type=r,b.request=d,f[1](b)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,d=t[0],b=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(f in b)c.o(b,f)&&(c.m[f]=b[f]);if(o)var i=o(c)}for(a&&a(t);n<d.length;n++)r=d[n],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(i)},t=self.webpackChunktscord_docs=self.webpackChunktscord_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();