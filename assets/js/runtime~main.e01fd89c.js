(()=>{"use strict";var e,a,t,r,f,d={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=d,b.c=c,e=[],b.O=(a,t,r,f)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var c=!0,o=0;o<t.length;o++)(!1&f||d>=f)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(c=!1,f<d&&(d=f));if(c){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);b.r(f);var d={};a=a||[null,t({}),t([]),t(t)];for(var c=2&r&&e;"object"==typeof c&&!~a.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(f,d),f},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",82:"0b6814dd",167:"44197f31",272:"fde56748",981:"ff4dedd1",995:"7a1bad98",1250:"56ef1c3d",1457:"63ce0110",1535:"e00eb39c",1716:"3eaaeb48",1733:"35eda867",2072:"8745f9ff",2080:"13ce953d",2424:"bff762e6",2519:"3b6d741f",2528:"2e89325b",2588:"76338a10",2743:"22953a4b",2802:"6e596b40",3206:"f8409a7e",3237:"1df93b7f",3428:"ae1ac29d",3559:"af3ba1ab",3769:"6ce7b256",4427:"d62dbe98",4789:"ab627164",5473:"120146b9",6320:"07e6ab62",6614:"f10bce7b",6697:"7c7dfd00",6731:"6e27eb59",6921:"9d1f8e9b",6978:"0c47f8c1",7243:"250944fb",7462:"43fec352",7865:"3be149a2",7918:"17896441",7920:"1a4e3797",8107:"3eb65e31",8111:"a06615e1",8173:"e83dd556",8246:"9d12e225",8260:"6cbd52ee",8608:"4a53a61c",8615:"1437e366",9514:"1be78505",9521:"790aec18",9630:"dd6285a6",9862:"e6d97af0"}[e]||e)+"."+{53:"e5c59f39",82:"c3429cb1",167:"679fac8f",272:"f45c304c",981:"555d3bdf",995:"bbe0ba2b",1068:"0011dd49",1250:"91de0f5e",1457:"a339c2de",1535:"5dec303c",1716:"e2c720e0",1733:"494ff578",2072:"ab2d1d67",2080:"e975f8cf",2424:"3a329bf1",2519:"0c4d6d9a",2528:"25b28d4a",2588:"ac518dbe",2743:"ab4fc746",2802:"b1590336",3206:"af6df714",3237:"46a359e1",3428:"e0a357c2",3559:"971e77fa",3769:"0fbd9c95",4427:"29c002b0",4609:"f9a4e1d3",4789:"65ffed9f",4972:"114d228a",5473:"144ddf94",5525:"5246ca2d",6320:"f11bc2f3",6614:"413f20c4",6697:"3fec2fb9",6731:"3add6b02",6921:"28bc206f",6978:"7ae61b86",7243:"6f555ad8",7462:"2f65d079",7674:"d123eb98",7865:"1e77f8fb",7918:"db14f417",7920:"b33b0ea5",8107:"63c75ad5",8111:"ef97cfad",8173:"0cdedf5a",8246:"746c9972",8260:"b959199a",8443:"6f131477",8608:"3dd6f157",8615:"64b07224",9514:"4dd781dc",9521:"78f5ec9a",9630:"51cbe052",9862:"c2fa5171"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="tscord-docs:",b.l=(e,a,t,d)=>{if(r[e])r[e].push(a);else{var c,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+t){c=l;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",f+t),c.src=e),r[e]=[a];var u=(a,t)=>{c.onerror=c.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/tscord-docs/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53","0b6814dd":"82","44197f31":"167",fde56748:"272",ff4dedd1:"981","7a1bad98":"995","56ef1c3d":"1250","63ce0110":"1457",e00eb39c:"1535","3eaaeb48":"1716","35eda867":"1733","8745f9ff":"2072","13ce953d":"2080",bff762e6:"2424","3b6d741f":"2519","2e89325b":"2528","76338a10":"2588","22953a4b":"2743","6e596b40":"2802",f8409a7e:"3206","1df93b7f":"3237",ae1ac29d:"3428",af3ba1ab:"3559","6ce7b256":"3769",d62dbe98:"4427",ab627164:"4789","120146b9":"5473","07e6ab62":"6320",f10bce7b:"6614","7c7dfd00":"6697","6e27eb59":"6731","9d1f8e9b":"6921","0c47f8c1":"6978","250944fb":"7243","43fec352":"7462","3be149a2":"7865","1a4e3797":"7920","3eb65e31":"8107",a06615e1:"8111",e83dd556:"8173","9d12e225":"8246","6cbd52ee":"8260","4a53a61c":"8608","1437e366":"8615","1be78505":"9514","790aec18":"9521",dd6285a6:"9630",e6d97af0:"9862"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var r=b.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var d=b.p+b.u(a),c=new Error;b.l(d,(t=>{if(b.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+f+": "+d+")",c.name="ChunkLoadError",c.type=f,c.request=d,r[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,d=t[0],c=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(r in c)b.o(c,r)&&(b.m[r]=c[r]);if(o)var i=o(b)}for(a&&a(t);n<d.length;n++)f=d[n],b.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return b.O(i)},t=self.webpackChunktscord_docs=self.webpackChunktscord_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();