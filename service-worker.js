if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>a(e,d),l={module:{uri:d},exports:r,require:t};s[d]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Gin's blog"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/20220524.html.65ccb758.js",revision:"e49a9e604caffed09909d47296e30b16"},{url:"assets/20220524.html.a985854e.js",revision:"6dd751132382e770fd95dbfe8964665d"},{url:"assets/20220525.html.25cc016c.js",revision:"c0611c4f1df9ec88fd64090de9e41bcb"},{url:"assets/20220525.html.37efca0f.js",revision:"28c41a7e90ae3bbe712e95e4a549cf2e"},{url:"assets/20220531.html.5778dd02.js",revision:"5f1e08f70aeb11bed694720fa74517fd"},{url:"assets/20220531.html.c2ef21bf.js",revision:"206e80d883db08d7a945bca827e06cfa"},{url:"assets/20220618.html.17b1018f.js",revision:"27380a4c63ae19057af6c444a218daa2"},{url:"assets/20220618.html.652bca57.js",revision:"af0471c585579876cc3f47ee651379fd"},{url:"assets/404.a56abbbe.js",revision:"0073302dca26dc84d7842de79a43fd39"},{url:"assets/404.html.358ea272.js",revision:"8bdba9e9af5bce51fa38cc804d9cf0d4"},{url:"assets/404.html.4078305d.js",revision:"629aa28ec7c7ff1927e506e590195fb9"},{url:"assets/app.e2550815.js",revision:"b354950f083da882d668304e36d494cc"},{url:"assets/Blog.9fb42686.js",revision:"c5b496689c18941175d404cb6ee3e912"},{url:"assets/index.html.04591540.js",revision:"4b44bd4b11e88265fc4ac57c3744d444"},{url:"assets/index.html.054d0fe0.js",revision:"14a844614de3b792e170cc3a8a6ec9b2"},{url:"assets/index.html.06801ff6.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.07bf1b01.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.15913794.js",revision:"5fc97a55d23118d797aa2ed9814070b0"},{url:"assets/index.html.17129cf8.js",revision:"9e29756c22059ba0e2c3dc9161b0b1ce"},{url:"assets/index.html.214fac4a.js",revision:"7aac7db2f0843ef8f3ab3a8b9daba312"},{url:"assets/index.html.22259de1.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.2597a3d3.js",revision:"8634d3653e09127e863de07d42fa90dd"},{url:"assets/index.html.286c6b42.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.2af91d56.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.2cbc15f4.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.2e288c00.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.34a07f78.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.3a25d537.js",revision:"3e96cdc62020d640f7dd78cf24b257ef"},{url:"assets/index.html.3b0842ba.js",revision:"dbb3423c8b3befef7c5c22fe8c4c74d3"},{url:"assets/index.html.5035b615.js",revision:"4eff0b79f9fac865d174015bc5c7f7e4"},{url:"assets/index.html.5bf7fe36.js",revision:"cb2d1fb694d29a15792f1929b889a3fc"},{url:"assets/index.html.6653bb4c.js",revision:"b095af56fe5e0721079bf87b1ddd0a16"},{url:"assets/index.html.6725a7f4.js",revision:"c1af358ba93dc1506bc4ea1f4882ea54"},{url:"assets/index.html.67b4484b.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.747d8743.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.749b06b5.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.7f4dfcaf.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.9e757ea3.js",revision:"c5f1d5dc2d2cfd46bd4b250f02ec5947"},{url:"assets/index.html.a52a6347.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.ada322b2.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.bb3d79e7.js",revision:"1dab4b0a401523509054746c3e5f316b"},{url:"assets/index.html.d1610053.js",revision:"b3b63e6c43ecc8d899986e566a9be9ed"},{url:"assets/index.html.e2ba0dc9.js",revision:"7eea4c11efd0575be61870b310f5a03e"},{url:"assets/index.html.eddb6b3f.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/index.html.f34cffbb.js",revision:"119e71e42e71767e705064038cc3256a"},{url:"assets/Layout.68fd92fb.js",revision:"9c24b780f48f14240055ad46f2ba32ec"},{url:"assets/photoswipe.esm.92018b73.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SkipLink.eaaa4424.js",revision:"3e5415918638a358c5b696932134915f"},{url:"assets/style.5629a5fd.css",revision:"613555403f39a2b1317afb32e7ccf553"},{url:"assets/Xicons.6c72f408.js",revision:"2101a73ea697873d390d69fef779b029"},{url:"index.html",revision:"612dc78ca5e22967a25e68d0e6c09192"},{url:"404.html",revision:"46cadfd302114d5c5367e42caa823eb8"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
