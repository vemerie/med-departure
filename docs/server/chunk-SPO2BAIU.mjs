import './polyfills.server.mjs';
import{j as S}from"./chunk-QM2S3XBZ.mjs";import{H as s,La as C,Oa as y,P as c,Qa as a,V as i,W as o,X as f,Y as u,Z as h,ba as r,ea as v,fa as x,i as d,o as p,p as l}from"./chunk-PC64KVDR.mjs";import"./chunk-VVCT4QZE.mjs";var b=()=>["/dashboard/create"],E=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[v],decls:16,vars:2,consts:[[1,"container"],[1,"flex","justify-between"],[1,"flex","gap-1","item-center"],[1,"text-primary"],[1,""],[3,"routerLink"],[1,"bg-primary","text-white"]],template:function(n,w){n&1&&(i(0,"div",0)(1,"div",1),u(2),i(3,"div",2)(4,"h3",3),r(5,"MedDeparture"),o(),i(6,"div",4),r(7,"Title"),o(),i(8,"div"),r(9,"Body"),o()(),h(),i(10,"div")(11,"a",5)(12,"button",6),r(13,"Add Post"),o()()()(),i(14,"main"),f(15,"router-outlet"),o()()),n&2&&(s(11),c("routerLink",x(1,b)))},dependencies:[C,S,y]});let t=e;return t})();var g=[{path:"",component:E,children:[{path:"list",loadComponent:()=>import("./chunk-H4FCA5JH.mjs").then(t=>t.ListComponent)},{path:"create",loadComponent:()=>import("./chunk-ZEVVCKCP.mjs").then(t=>t.CreateComponent)},{path:"**",redirectTo:"list"}]}],N=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l({type:e}),e.\u0275inj=d({imports:[a.forChild(g),a]});let t=e;return t})();export{N as DashboardRoutingModule};