import{a as S,b as W,e as pe}from"./chunk-N2GTNEUK.js";import"./chunk-NXDBGRZV.js";import"./chunk-RJTVMIHQ.js";import{b as me,d as le}from"./chunk-2DP2SI4E.js";import{$ as F,$a as P,Da as Q,Fa as Y,Ja as m,Ka as u,M as q,Ma as E,Mb as re,N as J,O as A,Oa as T,Qb as ae,Rb as se,Ta as Z,Ua as ee,Va as H,Xa as j,Xb as ce,Y as p,Ya as I,Z as K,Za as V,_a as w,aa as D,ab as r,bb as a,cb as U,fb as R,hb as te,jb as g,kb as ne,lb as C,m as L,mb as b,nb as y,ob as c,pb as B,qb as G,rb as ie,s as h,ub as d,vb as $,wb as N,x as f,xb as oe,y as _,z as X}from"./chunk-G6SFJTCI.js";var he=["*"],de=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["fa-card"],["a","card",""]],hostAttrs:[1,"card"],standalone:!0,features:[d],ngContentSelectors:he,decls:1,vars:0,template:function(n,o){n&1&&(b(),y(0))},encapsulation:2,changeDetection:0});let t=e;return t})();function _e(t,e){if(t&1){let s=R();r(0,"button",2),g("click",function(){F(s);let n=C();return D(n.toggle())}),c(1," Show less "),a()}}var Ce=["*"],fe=(()=>{let e=class e{constructor(){this.expanded=!1}toggle(){this.expanded=!this.expanded}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["fa-line-clamp"],["div","lineClamp",""],["span","lineClamp",""]],hostVars:2,hostBindings:function(n,o){n&2&&H("expanded",o.expanded)},standalone:!0,features:[d],ngContentSelectors:Ce,decls:4,vars:3,consts:[["class","link-button"],[1,"link-button","expand",3,"click"],[1,"link-button",3,"click"]],template:function(n,o){n&1&&(b(),y(0),j(1,_e,2,0,"button",0),r(2,"button",1),g("click",function(){return o.toggle()}),c(3,` Read more
`),a()),n&2&&(m(),I(1,o.expanded?1:-1),m(),H("expand_hidden",o.expanded))},styles:[`[lineClamp]{line-height:1.25rem;max-height:1.25rem;position:relative;overflow:hidden;padding:0 100px 0 0;transition:max-height .5s cubic-bezier(0,1,0,1)}.expanded{overflow:auto;padding:0;max-height:100rem;transition:max-height .5s cubic-bezier(1,0,0,1)}.expanded::-webkit-scrollbar{width:4px;height:4px}.expanded::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:10px}.expanded::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:10px}.expanded::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.4)}.expand{transition:opacity .3s ease-in-out;position:absolute;top:0;right:0}.expand_hidden{opacity:0;visibility:hidden}
`],encapsulation:2,changeDetection:0});let t=e;return t})();function be(t,e){if(t&1&&c(0),t&2){let s=C();G(" ",s.film.directedBy," ")}}function ye(t,e){if(t&1&&(r(0,"button",9),c(1),a()),t&2){let s=e.$implicit;m(),B(s)}}var ue=(()=>{let e=class e{constructor(){this.emitSwipe=new T}get image(){let[i]=this.film.movieImages.posters;return`url(${i.file_path})`}updateFilm(i){this.emitSwipe.emit(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["fa-film-card"]],inputs:{film:"film"},outputs:{emitSwipe:"emitSwipe"},standalone:!0,features:[d],decls:17,vars:5,consts:[[1,"film"],[1,"film__info"],[1,"authors"],[1,"genres"],["lineClamp",""],[1,"actions"],[1,"secondary-button","button-size-m",3,"click"],["src","./assets/icons/dislike.png","alt",""],["src","./assets/icons/like.png","alt",""],[1,"primary-button","button-size-xs"],["class","primary-button button-size-xs"]],template:function(n,o){n&1&&(r(0,"fa-card",0)(1,"fa-card",1)(2,"h3"),c(3),a(),r(4,"span",2),w(5,be,1,1,null,null,V),a(),r(7,"section",3),w(8,ye,2,1,"button",10,V),a(),r(10,"span",4),c(11),a(),r(12,"section",5)(13,"button",6),g("click",function(){return o.updateFilm("unlike")}),U(14,"img",7),a(),r(15,"button",6),g("click",function(){return o.updateFilm("like")}),U(16,"img",8),a()()()()),n&2&&(ee("background-image",o.image),m(3),ie("",o.film.name," (",o.film.year,")"),m(2),P(o.film.directedBy),m(3),P(o.film.genres),m(3),G(" ",o.film.description," "))},dependencies:[de,fe],styles:['[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center}[_nghost-%COMP%]   .film[_ngcontent-%COMP%]{height:100%;background-image:url("./media/image_placeholder-AGDUSBCA.jpeg");background-size:cover;background-position:center;aspect-ratio:9/16;transition:all .5s ease-in-out;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}[_nghost-%COMP%]   .film[_ngcontent-%COMP%]:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;max-height:100%;padding:1rem 2rem;background:var(--fa-primary-background);display:flex;flex-direction:column;gap:.5rem}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%] > button[_ngcontent-%COMP%], [_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{padding:1rem;border-radius:var(--fa-secondary-radius)}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%]{display:flex;gap:.5rem}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{cursor:inherit}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4rem}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   .authors[_ngcontent-%COMP%]{font-weight:300}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:3rem}[_nghost-%COMP%]   .film__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}'],changeDetection:0});let t=e;return t})();var Me=["*"],ge=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["fa-loader"]],standalone:!0,features:[d],ngContentSelectors:Me,decls:8,vars:0,consts:[[1,"dot"]],template:function(n,o){n&1&&(b(),r(0,"h3"),y(1),r(2,"span",0),c(3,"."),a(),r(4,"span",0),c(5,"."),a(),r(6,"span",0),c(7,"."),a()())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:4rem}[_nghost-%COMP%]   .dot[_ngcontent-%COMP%]{animation-fill-mode:both;animation:fadeInOut 1.8s infinite ease-in-out}[_nghost-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(1){animation-delay:-.32s}[_nghost-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(2){animation-delay:-.16s}"],changeDetection:0});let t=e;return t})();var M=class M{constructor(e,s,i,n){this.elementRef=e,this.document=s,this.renderer=i,this.destroyRef=n,this.emitSwipe=new T;let o=_(f(this.elementRef.nativeElement,"mousedown").pipe(h(this.mouseMapper)),f(this.elementRef.nativeElement,"touchstart").pipe(h(this.touchMapper))),l=_(f(this.document,"mousemove").pipe(h(this.mouseMapper)),f(this.document,"touchmove").pipe(h(this.touchMapper))),k=_(f(this.document,"mouseup"),_(f(this.document,"touchend"),f(this.document,"touchcancel")));o.pipe(q(z=>l.pipe(h(x=>x-z),A(x=>this.handleMove(x)),X(x=>Math.abs(x)>this.elementRef.nativeElement.clientWidth*.25),J(_(k,this.emitSwipe)))),S(this.destroyRef)).subscribe(z=>this.emitSwipe.emit(z>0?"like":"unlike")),k.pipe(A(this.setTransform.bind(this,"")),S(this.destroyRef)).subscribe()}handleMove(e){let s=e*.05;this.setTransform(`translate(${e}px, 0px) rotate(${s}deg)`)}setTransform(e){this.renderer.setStyle(this.elementRef.nativeElement,"transform",e)}mouseMapper(e){return e.preventDefault(),e.clientX}touchMapper(e){return e.changedTouches[0].clientX}};M.\u0275fac=function(s){return new(s||M)(u(Q),u(re),u(Y),u(E))},M.\u0275dir=K({type:M,selectors:[["","faSwipe",""]],outputs:{emitSwipe:"emitSwipe"},standalone:!0});var v=M;L([W],v.prototype,"mouseMapper",null);L([W],v.prototype,"touchMapper",null);var xe=(t,e)=>e.name;function we(t,e){if(t&1){let s=R();r(0,"fa-film-card",0),g("emitSwipe",function(n){let l=F(s).$implicit,k=C(2);return D(k.swipe(n,l.name))}),a()}if(t&2){let s=e.$implicit;Z("film",s)}}function Pe(t,e){t&1&&(r(0,"fa-loader"),c(1),$(2,"transloco"),a()),t&2&&(m(),B(N(2,1,"FilmsComponent.message")))}function Se(t,e){t&1&&(w(0,we,1,1,"fa-film-card",1,xe,!1,Pe,3,3),$(3,"slice")),t&2&&P(oe(3,1,e,e.length-2,e.length+1))}var ot=(()=>{let e=class e{resetState(){this.state=""}constructor(i,n){this.filmsService=i,this.destroyRef=n,this.films$=this.filmsService.films$}swipe(i,n){this.changeSwipeState(i),this.filmsService.updateFilm(n,i).pipe(S(this.destroyRef)).subscribe()}changeSwipeState(i){this.state=i==="like"?"swipeRight":"swipeLeft"}};e.\u0275fac=function(n){return new(n||e)(u(pe),u(E))},e.\u0275cmp=p({type:e,selectors:[["fa-films"]],hostVars:2,hostBindings:function(n,o){n&1&&ne("@swipe.done",function(){return o.resetState()}),n&2&&te("@slide",o.true)("@swipe",o.state)},standalone:!0,features:[d],decls:2,vars:3,consts:[["faSwipe","",3,"film","emitSwipe"],["faSwipe","",3,"film"]],template:function(n,o){if(n&1&&(j(0,Se,4,5),$(1,"async")),n&2){let l;I(0,(l=N(1,1,o.films$))?0:-1,l)}},dependencies:[ae,se,ue,ge,ce,v],styles:["[_nghost-%COMP%]{display:grid;height:100%;padding:10rem 0}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{grid-column:1;grid-row:1}"],data:{animation:[me,le]},changeDetection:0});let t=e;return t})();export{ot as FilmsComponent};
