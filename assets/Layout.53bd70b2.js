import{s as ee,U as te,V as ne,_ as w,f as B,m as C,h as v,O as z,o as l,c,a as f,y as s,P as I,k as g,t as b,r as L,F as N,i as T,n as Z,b as m,x as E,u as oe,l as H,w as D,e as F,j as U,W as ae,p as se,B as Q,M as re,N as le,X as ie,L as ce,Y as O,z as ue,Z as de,T as _e}from"./app.a53b81af.js";import{r as pe,P as me,a as he,L as J,b as ge,u as fe,C as ve}from"./Pagation.29b869f4.js";let A=null,X=null;const ke={wait:()=>A,pending:()=>{A=new Promise(t=>X=t)},resolve:()=>{X==null||X(),A=null,X=null}},be=()=>ke,ye={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},$e=({docsRepo:t,docsBranch:e,docsDir:r,path:d,editLinkPattern:i})=>{const n=pe(t);let o;if(i?o=i:n!==null&&(o=ye[n]),!o)return null;const a=d.replace(/\.html$/,".md");return o.replace(/:repo/,ee(t)?t:`https://github.com/${t}`).replace(/:branch/,e).replace(/:path/,te(`${ne(r)}/${a}`))};function K(){const t=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"],e=Math.floor(Math.random()*t.length);return t[e]}const Le={class:"hero-content"},we=["src"],Be={key:1},xe={key:2},Se=B({__name:"Banner",setup(t){const e=C(),r=v(()=>{var n,o,a,u;return(o=(n=e.value)==null?void 0:n.banner)!=null&&o.heroImage?z((u=(a=e.value)==null?void 0:a.banner)==null?void 0:u.heroImage):null}),d=v(()=>e.value.banner.heroImageStyle||{}),i=v(()=>{var u;const{bgImageStyle:n,bgImage:o}=((u=e.value)==null?void 0:u.banner)||{},a=o?{textAlign:"center",overflow:"hidden",background:`url(${z(o)}) center/cover no-repeat`}:{};return n?{...a,...n}:a});return(n,o)=>{var a,u,h,_,p,y,$,k;return l(),c("section",{class:"banner-wrapper",style:I({...s(i)})},[f("div",Le,[s(r)?(l(),c("img",{key:0,src:s(r),style:I({heroImageStyle:s(d)}),alt:"heroImage"},null,12,we)):g("",!0),(u=(a=s(e))==null?void 0:a.banner)!=null&&u.heroText?(l(),c("h1",Be,b((_=(h=s(e))==null?void 0:h.banner)==null?void 0:_.heroText),1)):g("",!0),(y=(p=s(e))==null?void 0:p.banner)!=null&&y.tagline?(l(),c("p",xe,b((k=($=s(e))==null?void 0:$.banner)==null?void 0:k.tagline),1)):g("",!0)])],4)}}});var Ce=w(Se,[["__file","Banner.vue"]]);const Pe={class:"hero-content"},Ie=["src"],Xe={class:"hero-text"},Ne={key:0},Te={key:1},De={key:2,class:"btn-group"},Ee=B({__name:"BannerBrand",setup(t){const e=C(),r=v(()=>{var o,a,u,h;return(a=(o=e.value)==null?void 0:o.bannerBrand)!=null&&a.heroImage?z((h=(u=e.value)==null?void 0:u.bannerBrand)==null?void 0:h.heroImage):null}),d=v(()=>{var o,a;return((a=(o=e.value)==null?void 0:o.bannerBrand)==null?void 0:a.buttons)||[]}),i=v(()=>e.value.bannerBrand.heroImageStyle||{}),n=v(()=>{var h;const{bgImageStyle:o,bgImage:a}=((h=e.value)==null?void 0:h.bannerBrand)||{},u=a?{overflow:"hidden",background:`url(${z(a)}) center/cover no-repeat`}:{};return o?{...u,...o}:u});return(o,a)=>{var h,_,p,y,$,k,x,S;const u=L("Xicons");return l(),c("section",{class:"banner-brand-wrapper",style:I({...s(n)})},[f("div",Pe,[s(r)?(l(),c("img",{key:0,src:s(r),style:I({heroImageStyle:s(i)}),alt:"heroImage"},null,12,Ie)):g("",!0),f("div",Xe,[(_=(h=s(e))==null?void 0:h.bannerBrand)!=null&&_.heroText?(l(),c("h1",Ne,b((y=(p=s(e))==null?void 0:p.bannerBrand)==null?void 0:y.heroText),1)):g("",!0),(k=($=s(e))==null?void 0:$.bannerBrand)!=null&&k.tagline?(l(),c("p",Te,b((S=(x=s(e))==null?void 0:x.bannerBrand)==null?void 0:S.tagline),1)):g("",!0),s(d).length>0?(l(),c("ul",De,[(l(!0),c(N,null,T(s(d),(P,M)=>(l(),c("li",{class:Z(P.type),key:M},[m(u,{icon:P.icon,text:P.text,link:P.link,"icon-size":"20","text-size":"14"},null,8,["icon","text","link"])],2))),128))])):g("",!0)])])],4)}}});var Fe=w(Ee,[["__file","BannerBrand.vue"]]);const Me=B({setup(t,e){const r=E(),d=C(),i=v(()=>{var n,o;return(((o=(n=d.value)==null?void 0:n.blog)==null?void 0:o.socialLinks)||[]).map(a=>(a.color||(a.color=K()),a))});return{themeLocal:r,socialLinks:i}}}),Ue={class:"personal-info-wrapper"},ze=["src"],Oe={key:1,class:"name"},Ae={class:"social-links"},He=f("hr",null,null,-1);function Re(t,e,r,d,i,n){const o=L("Xicons");return l(),c("div",Ue,[t.themeLocal.authorAvatar?(l(),c("img",{key:0,class:"personal-img",src:t.$withBase(t.themeLocal.authorAvatar),alt:"author-avatar"},null,8,ze)):g("",!0),t.themeLocal.author?(l(),c("p",Oe,b(t.themeLocal.author),1)):g("",!0),f("ul",Ae,[(l(!0),c(N,null,T(t.socialLinks,(a,u)=>(l(),c("li",{class:"social-item",key:u},[m(o,{icon:a.icon,link:a.link,style:I({color:a.color})},null,8,["icon","link","style"])]))),128))]),He])}var Ye=w(Me,[["render",Re],["__file","PersonalInfo.vue"]]);const Ve={class:"home-blog-content"},Ge={class:"blog-list"},je={class:"info-wrapper"},qe={class:"module-title"},We={class:"category-wrapper"},Ze={class:"text"},Qe={class:"num"},Je={class:"module-title"},Ke={class:"tag-wrapper"},et=B({__name:"Blog",setup(t){const{posts:e,classificationSummary:r}=oe(),d=H(1),i=H(0),n=10,o=v(()=>{var _,p;return((p=(_=r.value)==null?void 0:_.categories)==null?void 0:p.items)||[]}),a=v(()=>{var _,p;return((p=(_=r.value)==null?void 0:_.tags)==null?void 0:p.items)||[]}),u=v(()=>{const _=(d.value-1)*n,p=d.value*n;return(e.value||[]).slice(_,p)});let h=_=>{};return h=_=>{if(d.value=_,i.value===0){const p=document.querySelector(".home-blog-content");p&&(i.value=p.getBoundingClientRect().top)}setTimeout(()=>{window.scrollTo({left:0,top:-i.value,behavior:"smooth"})},100)},(_,p)=>{const y=L("Xicons"),$=L("router-link");return l(),c("section",Ve,[f("section",Ge,[m(me,{data:s(u),total:s(e).length,"page-size":10,"current-page":d.value},null,8,["data","total","current-page"]),m(he,{currentPage:d.value,total:s(e).length,onChange:s(h)},null,8,["currentPage","total","onChange"])]),f("section",je,[m(Ye),f("h4",qe,[m(y,{icon:"LayoutGrid",text:"\u5206\u7C7B"})]),f("ul",We,[(l(!0),c(N,null,T(s(o),(k,x,S)=>(l(),c("li",{class:"category-item",key:S},[m($,{class:"category-link",to:`/categories/${x}/1/`},{default:D(()=>[f("span",Ze,b(k.label),1),f("span",Qe,b(k.length),1)]),_:2},1032,["to"])]))),128))]),f("h4",Je,[m(y,{icon:"Tag",text:"\u6807\u7B7E"})]),f("ul",Ke,[(l(!0),c(N,null,T(s(a),(k,x,S)=>(l(),c("li",{class:"tag-item",key:S,style:I({borderColor:s(K)()})},[m($,{class:"tag-link",to:`/tags/${x}/1/`},{default:D(()=>[F(b(k.label),1)]),_:2},1032,["to"])],4))),128))])])])}}});var tt=w(et,[["__file","Blog.vue"]]);const nt={},ot={class:"theme-reco-default-content"};function at(t,e){const r=L("Content");return l(),c("section",ot,[m(r)])}var st=w(nt,[["render",at],["__file","MdContent.vue"]]);const rt={class:"footer-wrapper"},lt={key:0},it={key:0},ct=F("\xA0\xA0 "),ut={key:1},dt={key:1,class:"cyber-security"},_t=f("img",{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""},null,-1),pt=["href"],mt=B({__name:"Footer",setup(t){const e=E(),r=C();return(d,i)=>{var o,a,u,h,_,p,y,$,k,x,S,P;const n=L("Xicons");return l(),c("div",rt,[(a=(o=s(r))==null?void 0:o.footer)!=null&&a.record?(l(),c("span",lt,[m(n,{icon:"ShieldCheck",link:((h=(u=s(r))==null?void 0:u.footer)==null?void 0:h.recordLink)||"#",text:(p=(_=s(r))==null?void 0:_.footer)==null?void 0:p.record},null,8,["link","text"])])):g("",!0),f("span",null,[m(n,{icon:"Copyright"},{default:D(()=>{var M,Y,V,G,j,q;return[s(e).author?(l(),c("a",it,b(s(e).author),1)):g("",!0),ct,((Y=(M=s(r))==null?void 0:M.footer)==null?void 0:Y.startYear)&&((G=(V=s(r))==null?void 0:V.footer)==null?void 0:G.startYear)!=new Date().getFullYear()?(l(),c("a",ut,b((q=(j=s(r))==null?void 0:j.footer)==null?void 0:q.startYear)+" - ",1)):g("",!0),F(" "+b(new Date().getFullYear()),1)]}),_:1})]),($=(y=s(r))==null?void 0:y.footer)!=null&&$.cyberSecurityRecord?(l(),c("p",dt,[_t,f("a",{href:((x=(k=s(r))==null?void 0:k.footer)==null?void 0:x.cyberSecurityLink)||"#"},b((P=(S=s(r))==null?void 0:S.footer)==null?void 0:P.cyberSecurityRecord),9,pt)])):g("",!0)])}}});var ht=w(mt,[["__file","Footer.vue"]]);const gt={class:"home-wrapper"},ft=B({name:"HomeWrapper",components:{Banner:Ce,BannerBrand:Fe,Blog:tt,MdContent:st,Footer:ht}}),vt=B({...ft,setup(t){const e=C();return(r,d)=>(l(),c("div",gt,[(l(!0),c(N,null,T(s(e).modules||["Banner","Blog","Footer"],i=>(l(),U(ae(i),{key:i}))),128))]))}});var kt=w(vt,[["__file","index.vue"]]);const W=t=>t===!1?null:re(t)?le(t):ie(t)?t:!1,R=(t,e,r)=>{const d=t.findIndex(i=>i.link===e);if(d!==-1){const i=t[d+r];return i!=null&&i.link?i:null}for(const i of t)if(i.children){const n=R(i.children,e,r);if(n)return n}return null},bt=B({name:"PageNav",components:{Link:J},setup(){const t=C(),e=se(),r=Q(),d=v(()=>{const n=W(t.value.prev);return n!==!1?n:R(e.value,r.path,-1)}),i=v(()=>{const n=W(t.value.next);return n!==!1?n:R(e.value,r.path,1)});return{prevNavLink:d,nextNavLink:i}}}),yt={key:0,class:"page-nav"},$t={class:"inner"},Lt={key:0,class:"prev"},wt=F(" \u2190 "),Bt={key:1,class:"next"},xt=F(" \u2192 ");function St(t,e,r,d,i,n){const o=L("Link");return t.prevNavLink||t.nextNavLink?(l(),c("nav",yt,[f("p",$t,[t.prevNavLink?(l(),c("span",Lt,[wt,m(o,{item:t.prevNavLink},null,8,["item"])])):g("",!0),t.nextNavLink?(l(),c("span",Bt,[m(o,{item:t.nextNavLink},null,8,["item"]),xt])):g("",!0)])])):g("",!0)}var Ct=w(bt,[["render",St],["__file","PageNav.vue"]]);function Pt(t){const e=new Date(t);return e.setHours(e.getHours(),e.getMinutes()-e.getTimezoneOffset()),e.toISOString().replace("T"," ").replace("Z","").split(".")[0]}const It=()=>{const t=E(),e=O(),r=C();return v(()=>{var _,p;if(!((p=(_=r.value.editLink)!=null?_:t.value.editLink)!=null?p:!0))return null;const{repo:i,docsRepo:n=i,docsBranch:o="main",docsDir:a="",editLinkText:u}=t.value;if(!n)return null;const h=$e({docsRepo:n,docsBranch:o,docsDir:a,path:e.value.path,editLinkPattern:t.value.editLinkPattern});return h?{text:u!=null?u:"Edit this page",link:h,icon:"Edit",hideExternalLinkIcon:!0}:null})},Xt=()=>{ce();const t=E(),e=O(),r=C();return v(()=>{var n,o,a,u;if(!((o=(n=r.value.lastUpdated)!=null?n:t.value.lastUpdated)!=null?o:!0)||!((a=e.value.git)!=null&&a.updatedTime))return null;const i=new Date((u=e.value.git)==null?void 0:u.updatedTime);return Pt(i)})},Nt=B({name:"PageMeta",components:{Link:J},setup(){const t=E(),e=It(),r=Xt();return{themeLocale:t,editNavLink:e,lastUpdated:r}}}),Tt={class:"page-meta"},Dt={key:0,class:"meta-item edit-link"},Et={key:1,class:"meta-item last-updated"};function Ft(t,e,r,d,i,n){const o=L("Link"),a=L("Xicons");return l(),c("footer",Tt,[t.editNavLink?(l(),c("div",Dt,[m(o,{class:"meta-item-label",item:t.editNavLink},null,8,["item"])])):g("",!0),t.lastUpdated?(l(),c("div",Et,[m(a,{class:"meta-item-label",icon:"CalendarTime",text:`${t.themeLocale.lastUpdatedText||"Last Updated"} ${t.lastUpdated}`,"icon-size":"20","text-size":"14"},null,8,["text"])])):g("",!0)])}var Mt=w(Nt,[["render",Ft],["__file","PageMeta.vue"]]);const Ut={class:"page-container"},zt={key:0,class:"page-title"},Ot={class:"theme-reco-default-content"},At=B({__name:"Page",setup(t){const e=O();Q();const r=v(()=>{var n,o,a;return((o=(n=e==null?void 0:e.value)==null?void 0:n.frontmatter)==null?void 0:o.title)||((a=e==null?void 0:e.value)==null?void 0:a.title)||""}),d=H(!1);let i;return ue(()=>{const n=document.querySelector("html");d.value=n.classList.contains("dark"),i=new MutationObserver(()=>{d.value=n.classList.contains("dark")}),i.observe(n,{attributeFilter:["class"],attributes:!0})}),de(()=>{i.disconnect()}),(n,o)=>{const a=L("Content"),u=L("CommentService");return l(),c("main",Ut,[s(r)?(l(),c("h1",zt,b(s(r)),1)):g("",!0),m(ge,{"page-data":s(e)},null,8,["page-data"]),f("div",Ot,[m(a)]),m(Mt),m(Ct),m(u,{darkmode:d.value},null,8,["darkmode"])])}}});var Ht=w(At,[["__file","Page.vue"]]);const Rt={class:"theme-container"},Yt=B({__name:"Layout",setup(t){const e=O(),r=C(),{isShowSidebar:d,isShowCatalog:i}=fe(),n=be(),o=n.resolve,a=n.pending;return(u,h)=>(l(),c("div",Rt,[m(ve,null,{default:D(()=>[s(r).home===!0?(l(),U(kt,{key:0})):(l(),U(_e,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:s(o),onBeforeLeave:s(a)},{default:D(()=>[(l(),U(Ht,{key:s(e).path,class:Z({"show-series":s(d),"show-catalog":s(i)})},null,8,["class"]))]),_:1},8,["onBeforeEnter","onBeforeLeave"]))]),_:1})]))}});var jt=w(Yt,[["__file","Layout.vue"]]);export{jt as default};
