import{e as v,f as P,g as S,i as o}from"./chunk-HBSDQOGV.js";import{a as H}from"./chunk-5HGWMLCT.js";import"./chunk-JG3PE4XK.js";import{a as D,c as E}from"./chunk-4PUHRW2A.js";import{$a as C,Ga as u,Pa as f,Qb as _,Rb as O,Ta as g,W as d,Y as a,Ya as s,Za as m,_a as h,ab as y,cb as c,gb as x,jb as M,pb as p}from"./chunk-HXUONIRB.js";var F=()=>{if(_()){let t=d(H).getItem("sessionId");return t&&d(P).navigate([`/${o.FILMS}`]),!!t}return!0};function B(e,t){if(e&1&&(C(0),s(1,"h3",1),M(2,"Finder"),m(),y()),e&2){let l=x();u(),f("routerLink",l.routes.EMPTY)}}var L=(()=>{let t=class t{constructor(){this.routes=o}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["fa-header"]],hostVars:1,hostBindings:function(n,r){n&2&&c("@fade",r.true)},standalone:!0,features:[p],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[3,"routerLink"]],template:function(n,r){n&1&&g(0,B,3,1,"ng-container",0),n&2&&f("translocoRead","HeaderComponent")},dependencies:[O,S],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:fixed;top:0;padding:2rem 4rem;width:100%;gap:1rem;z-index:1}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:.5rem}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;color:var(--fa-text-01)}@media screen and (max-width: 1280px){[_nghost-%COMP%]{justify-content:center}[_nghost-%COMP%] > h3[_ngcontent-%COMP%]{font-size:4rem}}"],data:{animation:[E]},changeDetection:0});let e=t;return e})();var R=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a({type:t,selectors:[["fa-layout"]],hostVars:1,hostBindings:function(n,r){n&2&&c("@routeAnimation",r.true)},standalone:!0,features:[p],decls:3,vars:0,consts:[[1,"content"]],template:function(n,r){n&1&&(s(0,"section",0),h(1,"fa-header")(2,"router-outlet"),m())},dependencies:[v,L],styles:["[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;z-index:1}"],data:{animation:[D]},changeDetection:0});let e=t;return e})();var X=[{path:o.EMPTY,component:R,children:[{path:o.EMPTY,loadComponent:()=>import("./chunk-453SLK2C.js").then(e=>e.GetStartedComponent),canActivate:[F]},{path:o.FILMS,loadComponent:()=>import("./chunk-FRZ77KTU.js").then(e=>e.FilmsComponent)}]}];export{X as default};