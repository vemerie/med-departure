import{a as _,b,c as P,d as x,e as F,f as O,g as T,h as w,i as M,j as E}from"./chunk-JVYFHXQB.js";import{A as g,C as u,G as n,H as r,I as s,M as S,O as l,R as f,V as y,h as v,k as C,m as p,v as d,w as h,z as c}from"./chunk-GP5HTK5Y.js";var k=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-loader"]],standalone:!0,features:[f],decls:3,vars:0,consts:[[1,"loader-wrapper"],[1,"loader"],[1,"loader-inner"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"div",1),s(2,"span",2),r()())},styles:[".loader-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;background-color:#33323360;display:flex;justify-content:center;align-items:center;inset:0}.loader[_ngcontent-%COMP%]{display:inline-block;width:30px;height:30px;position:relative;border:4px solid #fff;animation:_ngcontent-%COMP%_loader 3s infinite ease}.loader-inner[_ngcontent-%COMP%]{vertical-align:top;display:inline-block;width:100%;background-color:#ecd52a;animation:_ngcontent-%COMP%_loader-inner 3s infinite ease-in}@keyframes _ngcontent-%COMP%_loader{0%{transform:rotate(0)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(360deg)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_loader-inner{0%{height:0%}25%{height:0%}50%{height:100%}75%{height:100%}to{height:0%}}"]});let i=t;return i})();var j="https://jsonplaceholder.typicode.com/",m={POSTS:{posts:"posts"}};var I=(()=>{let t=class t{constructor(e){this.http=e,this.base_url=j}getAllPost(){return this.http.get(`${this.base_url}${m.POSTS.posts}`)}createPost(e){return this.http.post(`${this.base_url}${m.POSTS.posts}`,e)}updatePost(e){return this.http.put(`${this.base_url}${m.POSTS.posts}/${e.id}`,e)}deletePost(e){return this.http.get(`${this.base_url}${m.POSTS.posts}/${e}`)}};t.\u0275fac=function(o){return new(o||t)(C(y))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function D(i,t){i&1&&s(0,"app-loader",0)}function G(i,t){i&1&&(n(0,"h2"),l(1,"Posts"),r())}function B(i,t){i&1&&(n(0,"p"),l(1,"Update post"),r())}function V(i,t){i&1&&(n(0,"p"),l(1,"Create post"),r())}var R=(()=>{let t=class t{constructor(e,o){this.dashboardService=e,this.formBuilder=o,this.postForm=new F({}),this.loading=!1}ngOnInit(){this.initForm()}initForm(){this.postForm=this.formBuilder.group({title:[this.item?.title,b.required],body:[this.item?.body,b.required]})}onSubmit(e){let o=e.value;this.item.id?this.updatePost(o):this.createPost(o)}updatePost(e){this.loading=!0,this.dashboardService.createPost(e).subscribe(o=>{o&&(this.loading=!1)})}createPost(e){this.loading=!0,this.dashboardService.updatePost(e).subscribe(o=>{o&&(this.loading=!1)})}};t.\u0275fac=function(o){return new(o||t)(h(I),h(M))},t.\u0275cmp=p({type:t,selectors:[["app-create"]],inputs:{item:"item"},standalone:!0,features:[f],decls:20,vars:5,consts:[[1,""],[1,"w-full","max-w-lg"],[3,"ngSubmit","formGroup"],[1,"mb-8"],["for","title",1,"block","text-gray-700","text-sm","font-normal","mb-2"],["formControlName","title","id","title","type","text","placeholder","Enter title"],["for","body",1,"block","text-gray-700","text-sm","font-normal","mb-2"],["formControlName","body","id","body","type","text","placeholder","Enter body","rows","5"],["type","submit",3,"disabled"],[1,"flex"]],template:function(o,a){o&1&&(c(0,D,1,0,"app-loader",0),n(1,"div")(2,"div")(3,"div",1),c(4,G,2,0,"h2"),s(5,"div"),n(6,"form",2),S("ngSubmit",function(){return a.onSubmit(a.postForm)}),n(7,"div",3)(8,"label",4),l(9," Title "),r(),s(10,"input",5),r(),n(11,"div",3)(12,"label",6),l(13," Body "),r(),s(14,"textarea",7),r(),n(15,"div")(16,"button",8)(17,"div",9),c(18,B,2,0,"p")(19,V,2,0),r()()()()()()()),o&2&&(u(0,a.loading?0:-1),d(4),u(4,a.item!=null&&a.item.id?-1:4),d(2),g("formGroup",a.postForm),d(10),g("disabled",a.postForm.invalid),d(2),u(18,a.item!=null&&a.item.id?18:19))},dependencies:[E,O,_,P,x,T,w,k]});let i=t;return i})();export{I as a,R as b};
