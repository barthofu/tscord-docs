(()=>{"use strict";var e,a,d,t,r,f={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var d=c[e]={id:e,loaded:!1,exports:{}};return f[e].call(d.exports,d,d.exports,b),d.loaded=!0,d.exports}b.m=f,b.c=c,e=[],b.O=(a,d,t,r)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){d=e[i][0],t=e[i][1],r=e[i][2];for(var c=!0,o=0;o<d.length;o++)(!1&r||f>=r)&&Object.keys(b.O).every((e=>b.O[e](d[o])))?d.splice(o--,1):(c=!1,r<f&&(f=r));if(c){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[d,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var f={};a=a||[null,d({}),d([]),d(d)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=d(c))Object.getOwnPropertyNames(c).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(r,f),r},b.d=(e,a)=>{for(var d in a)b.o(a,d)&&!b.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,d)=>(b.f[d](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",82:"0b6814dd",167:"44197f31",272:"fde56748",981:"ff4dedd1",995:"7a1bad98",1250:"56ef1c3d",1457:"63ce0110",1535:"e00eb39c",1716:"3eaaeb48",1733:"35eda867",2072:"8745f9ff",2080:"13ce953d",2424:"bff762e6",2519:"3b6d741f",2528:"2e89325b",2588:"76338a10",2743:"22953a4b",2802:"6e596b40",3206:"f8409a7e",3237:"1df93b7f",3428:"ae1ac29d",3559:"af3ba1ab",3769:"6ce7b256",4427:"d62dbe98",4789:"ab627164",5473:"120146b9",6320:"07e6ab62",6614:"f10bce7b",6697:"7c7dfd00",6731:"6e27eb59",6921:"9d1f8e9b",6978:"0c47f8c1",7243:"250944fb",7462:"43fec352",7865:"3be149a2",7918:"17896441",7920:"1a4e3797",8107:"3eb65e31",8111:"a06615e1",8173:"e83dd556",8246:"9d12e225",8260:"6cbd52ee",8608:"4a53a61c",8615:"1437e366",9514:"1be78505",9521:"790aec18",9630:"dd6285a6",9862:"e6d97af0"}[e]||e)+"."+{53:"28c4bf54",82:"d8ed9730",167:"73abe602",272:"125ffe13",981:"2d0b66f4",995:"17c0e3f1",1068:"0011dd49",1250:"67610494",1457:"e5d95bf8",1535:"dc878502",1716:"8c347321",1733:"64286ab6",2072:"306b0e8e",2080:"6a78dab3",2424:"75827a7e",2519:"fa8e1ef7",2528:"d66ff36a",2588:"925ea132",2743:"4cb7a28f",2802:"d4b5d6ad",3206:"e5c0d238",3237:"cd8b36ed",3428:"1325f4f3",3559:"f6f88257",3769:"0fbd9c95",4427:"fcddc8a2",4609:"f9a4e1d3",4789:"b19860a9",4972:"114d228a",5473:"ceddbd24",5525:"5246ca2d",6320:"a7054733",6614:"7eb42766",6697:"992f9b8a",6731:"f650d8cb",6921:"28bc206f",6978:"e7d3e022",7243:"89eb8263",7462:"941c4094",7674:"d123eb98",7865:"8d0b9585",7918:"db14f417",7920:"b33b0ea5",8107:"303f8add",8111:"06aef450",8173:"6855ca2e",8246:"7ede64e4",8260:"72376b39",8443:"6f131477",8608:"93467e74",8615:"57fe06f7",9514:"4dd781dc",9521:"aee48766",9630:"f3234f0a",9862:"c2fa5171"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="tscord-docs:",b.l=(e,a,d,f)=>{if(t[e])t[e].push(a);else{var c,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+d){c=l;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",r+d),c.src=e),t[e]=[a];var u=(a,d)=>{c.onerror=c.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53","0b6814dd":"82","44197f31":"167",fde56748:"272",ff4dedd1:"981","7a1bad98":"995","56ef1c3d":"1250","63ce0110":"1457",e00eb39c:"1535","3eaaeb48":"1716","35eda867":"1733","8745f9ff":"2072","13ce953d":"2080",bff762e6:"2424","3b6d741f":"2519","2e89325b":"2528","76338a10":"2588","22953a4b":"2743","6e596b40":"2802",f8409a7e:"3206","1df93b7f":"3237",ae1ac29d:"3428",af3ba1ab:"3559","6ce7b256":"3769",d62dbe98:"4427",ab627164:"4789","120146b9":"5473","07e6ab62":"6320",f10bce7b:"6614","7c7dfd00":"6697","6e27eb59":"6731","9d1f8e9b":"6921","0c47f8c1":"6978","250944fb":"7243","43fec352":"7462","3be149a2":"7865","1a4e3797":"7920","3eb65e31":"8107",a06615e1:"8111",e83dd556:"8173","9d12e225":"8246","6cbd52ee":"8260","4a53a61c":"8608","1437e366":"8615","1be78505":"9514","790aec18":"9521",dd6285a6:"9630",e6d97af0:"9862"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,d)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)d.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((d,r)=>t=e[a]=[d,r]));d.push(t[2]=r);var f=b.p+b.u(a),c=new Error;b.l(f,(d=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",c.name="ChunkLoadError",c.type=r,c.request=f,t[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,d)=>{var t,r,f=d[0],c=d[1],o=d[2],n=0;if(f.some((a=>0!==e[a]))){for(t in c)b.o(c,t)&&(b.m[t]=c[t]);if(o)var i=o(b)}for(a&&a(d);n<f.length;n++)r=f[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},d=self.webpackChunktscord_docs=self.webpackChunktscord_docs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();