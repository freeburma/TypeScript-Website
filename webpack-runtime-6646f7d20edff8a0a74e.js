!function(){"use strict";var e,t,n,r,o,c,a,s={},f={};function i(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={exports:{}};return s[e].call(n.exports,n,n.exports,i),n.exports}i.m=s,e=[],i.O=function(t,n,r,o){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var a=!0,s=0;s<n.length;s++)(!1&o||c>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[s])}))?n.splice(s--,1):(a=!1,o<c&&(c=o));a&&(e.splice(f--,1),t=r())}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},i.d(o,c),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return{56:"component---src-templates-pages-index-tsx",73:"component---src-templates-pages-tools-tsx",82:"component---src-templates-tsconfig-option-one-page-tsx",175:"component---src-templates-pages-docs-handbook-index-tsx",198:"component---src-templates-playground-handbook-tsx",215:"component---src-templates-pages-dt-search-tsx",248:"component---src-templates-pages-download-tsx",264:"ad4dad098bfd61c888c73d7169bdb99478d87911",273:"5cdb9a1faef7e97fcc6849d7148df5c633719a46",306:"component---src-templates-pages-empty-tsx",346:"component---src-templates-pages-why-create-typescript-tsx",351:"commons",414:"17821066377c4486a980330106160c805ea5b4a9",416:"component---src-pages-branding-tsx",427:"component---src-templates-play-example-tsx",517:"component---src-templates-documentation-tsx",530:"component---src-pages-dev-twoslash-tsx",531:"component---src-pages-upcoming-tsx",532:"styles",533:"component---src-templates-pages-community-tsx",556:"component---src-templates-play-tsx",616:"component---src-templates-pages-docs-index-tsx",618:"component---src-pages-dev-bug-workbench-tsx",646:"component---src-pages-dev-sandbox-tsx",690:"component---src-templates-pages-docs-bootstrap-tsx",722:"183c9096950fb71588bafdbe7cf620580aa8ae09",739:"component---src-templates-tsconfig-reference-tsx",746:"component---src-templates-pages-dt-index-tsx",883:"component---src-pages-dev-typescript-vfs-tsx",925:"component---src-templates-glossary-tsx",930:"component---src-pages-dev-playground-plugins-tsx"}[e]+"-"+{56:"adbc2e31e32d13bb7347",73:"de495d561d8757eee91f",82:"9566a418989b3ff4b98a",175:"f86c07bd73d3af0d6568",198:"d6893e22d4b7b81ad0b2",215:"a2071d6186baa485ee43",248:"2e117a36d6df3c690a09",264:"0bf70f6c914b59bf9d01",273:"1fdbcd888937ad650ed7",306:"7602eb80cf5e2041e880",346:"8bfdc16923960a75ad52",351:"da0a74c18d0b880cd4df",414:"c2ac4e90d1b85204f9e6",416:"fcf9b3211ee81b97c78f",427:"e22080f6f661e224f78d",517:"a6e4fee958a56a168cf3",530:"b2964161ac915b7fef9c",531:"62ea6175e279d6677205",532:"16373979f7978b733ed0",533:"002fdadb4a0a2b0d9f4c",556:"35fc5d303df84243bcef",616:"21275747a14cfa22ae5f",618:"93a145df9d345c2a2c32",646:"63864ca3c1643c8cf26d",690:"6f239809cefaf170faac",722:"addef9ad10c0143007eb",739:"0f573cfcf4fb6f7ae02f",746:"00c8d32a3434f212c4f0",883:"a6f2511c1df8436f4545",925:"e4ef5189635918689bcb",930:"a051fa5da6fb4bfe5982"}[e]+".js"},i.miniCssF=function(e){return"styles.00cc9da897b1f0f6f9f3.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="typescriptlang-org:",i.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var a,s;if(void 0!==n)for(var f=document.getElementsByTagName("script"),p=0;p<f.length;p++){var u=f[p];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+n){a=u;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",c=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){var a;if((o=(a=c[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)n();else{var a=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=a,f.request=s,o.parentNode.removeChild(o),r(f)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},a={658:0},i.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{532:1}[e]&&t.push(a[e]=c(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={658:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=i.p+i.u(t),a=new Error;i.l(c,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],a=n[1],s=n[2],f=0;for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(s)var p=s(i);for(t&&t(n);f<c.length;f++)o=c[f],i.o(e,o)&&e[o]&&e[o][0](),e[c[f]]=0;return i.O(p)},n=self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-6646f7d20edff8a0a74e.js.map