import{j as S}from"./chunk-JVYFHXQB.js";import{$ as y,A as c,G as i,H as o,I as f,J as u,K as h,O as r,R as v,S as C,_ as x,ba as a,i as d,m as p,n as l,v as s}from"./chunk-GP5HTK5Y.js";var L=()=>["/dashboard/create"],E=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p({type:t,selectors:[["app-dashboard"]],standalone:!0,features:[v],decls:16,vars:2,consts:[[1,"container"],[1,"flex","justify-between"],[1,"flex","gap-1"],[1,""],[3,"routerLink"],[1,"bg-primary","text-white"]],template:function(n,w){n&1&&(i(0,"div",0)(1,"div",1),u(2),i(3,"div",2)(4,"div",3),r(5,"Logo"),o(),i(6,"div",3),r(7,"Title"),o(),i(8,"div"),r(9,"Body"),o()(),h(),i(10,"div")(11,"a",4)(12,"button",5),r(13,"Add Post"),o()()()(),i(14,"main"),f(15,"router-outlet"),o()()),n&2&&(s(11),c("routerLink",C(1,L)))},dependencies:[x,S,y]});let e=t;return e})();var b=[{path:"",component:E,children:[{path:"list",loadComponent:()=>import("./chunk-T62YK7PC.js").then(e=>e.ListComponent)},{path:"create",loadComponent:()=>import("./chunk-IDEHS3L3.js").then(e=>e.CreateComponent)},{path:"**",redirectTo:"list"}]}],A=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l({type:t}),t.\u0275inj=d({imports:[a.forChild(b),a]});let e=t;return e})();export{A as DashboardRoutingModule};
