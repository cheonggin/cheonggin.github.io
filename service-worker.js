if(!self.define){let s,e={};const a=(a,b)=>(a=new URL(a+".js",b).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(b,i)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let c={};const f=s=>a(s,d),r={module:{uri:d},exports:c,require:f};e[d]=Promise.all(b.map((s=>r[s]||f(s)))).then((s=>(i(...s),c)))}}define(["./workbox-2572b17b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"Gin's blog"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/20220524.html.27f494de.js",revision:"7eb0e8fc4d7b5c379f38e52b956769d7"},{url:"assets/20220524.html.818d6526.js",revision:"976cf352390f6005bd493a299b484f3f"},{url:"assets/20220525.html.1e73d1f1.js",revision:"e38e8d757b76958031990de697096d8b"},{url:"assets/20220525.html.3a412df5.js",revision:"2152fe5b42d5ddf2daa178f863c0c4d6"},{url:"assets/20220531.html.710b3e11.js",revision:"a866570f38db2307717c0eadc99ec90a"},{url:"assets/20220531.html.a7edcee9.js",revision:"23311976c74841c70bbdb8fc06dfa233"},{url:"assets/20220618.html.3fbf56a1.js",revision:"85ff1711e533362fd0d192190eacbf8e"},{url:"assets/20220618.html.a5fdfb3c.js",revision:"dd419b661b059a6d5a943c23ed08295e"},{url:"assets/20220623.html.a2f602ab.js",revision:"60076e60b396f9d9db7abc1a2ef562ca"},{url:"assets/20220623.html.e5069995.js",revision:"69d016a642620b5993a66cacb556043a"},{url:"assets/20220630.html.98d568a1.js",revision:"c4fab2cff78e4acae7ccb77722012bca"},{url:"assets/20220630.html.af3ffc81.js",revision:"a35376bd08f39b1a7f74c4086734a3a0"},{url:"assets/20220701.html.2681d810.js",revision:"123bbde59fe55e292dfb2d087e41b113"},{url:"assets/20220701.html.e9c1b9bd.js",revision:"2917a7c45a361ad08286a42feece41b2"},{url:"assets/404.88379aa8.js",revision:"638ce1c05a4d94ac1e0e9f53ced2a7ac"},{url:"assets/404.html.b4c6daf6.js",revision:"d8b91b6f740148fc3bc5d4b76392fa6a"},{url:"assets/404.html.b75728dd.js",revision:"e04f261e95169cab291aca0128673ba6"},{url:"assets/back-to-top.8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/Categories.6b36d9cd.js",revision:"3caa3db6e4b0c3b1ab27b3c0d3c1bb84"},{url:"assets/index.html.00f92382.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.0a865398.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.0ce1c1c2.js",revision:"3b8d4dcfea88526bed21eaea5423ff2d"},{url:"assets/index.html.0cf66ffe.js",revision:"872a62428959f64e42cdece14c020a2f"},{url:"assets/index.html.10f5f2a3.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.20eb43e2.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.294271e8.js",revision:"58dc0db7697db23ab0e32e648a097d2a"},{url:"assets/index.html.37f1c1af.js",revision:"3afa60265bfd534640fb3c6614f57cde"},{url:"assets/index.html.3c66efbd.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.5af68d24.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.60e2bd77.js",revision:"56507e1e014ab94ed89d13767d37ed80"},{url:"assets/index.html.64f17473.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.6f08d314.js",revision:"1a51c200a1f8b3cdcc535c50490eb00f"},{url:"assets/index.html.7ea6ecc2.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.7eaf964d.js",revision:"1279465d881b28405cb3004c8eda6d77"},{url:"assets/index.html.9b8c4cf7.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.a0915359.js",revision:"978938e696bc9d086af622e279312454"},{url:"assets/index.html.b6dbe528.js",revision:"4fe1b7a899faa18bdc70a205f0b6c8d7"},{url:"assets/index.html.b7b17d69.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.c98a9dc1.js",revision:"93ccc0390832cd2465d4cd1b13676902"},{url:"assets/index.html.d7a6ba47.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.d9ba0b4b.js",revision:"738be18378a7112b5e1aabcc619aef5a"},{url:"assets/index.html.df0026fa.js",revision:"bf8ee1639b39c4b56901e3c4969a9f06"},{url:"assets/index.html.df3da326.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.f31fb32f.js",revision:"a5a73ba9f968ab11d8b7c39540b2372e"},{url:"assets/index.html.f9f47b58.js",revision:"cf691e1becbe22b49d2a5297b0ef7524"},{url:"assets/Layout.052bfb08.js",revision:"c634e460aa77235660a4d5c3bb4aee1a"},{url:"assets/Pagation.1393cbcc.js",revision:"94ea698b399cd6f3ac2743741a4faaf3"},{url:"assets/Post.27802629.js",revision:"613e301e4a735fa47099fe6c411955bd"},{url:"assets/reco-valine.88224ab5.js",revision:"53c0f9fc6178437acb35f4ff33d63b22"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/style.f88857b6.css",revision:"5e2f271cebaca7fcc48c58f9f5bceab1"},{url:"assets/Timeline.78f7c0ff.js",revision:"ca1489295e3fb56b0b6f9bbcc9573c18"},{url:"index.html",revision:"422242595fbf229ceb743767fff9df86"},{url:"404.html",revision:"df85b06355172938dc7c4f59ac0c9dcf"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map