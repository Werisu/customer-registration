"use strict";(self.webpackChunkcustomer_registration=self.webpackChunkcustomer_registration||[]).push([[312],{1312:(x,m,e)=>{e.r(m),e.d(m,{HomeModule:()=>H,homeRoutes:()=>d});var r=e(6814),f=e(1076),h=e(5145),a=e(1163),l=e(4486),g=e(9293),C=e(3519),u=e.n(C),t=e(9212);const v=(o,n)=>n.id;function Z(o,n){if(1&o&&(t.TgZ(0,"div",7),t._UZ(1,"customer-registration-customer-card",8),t.qZA()),2&o){const i=n.$implicit;t.xp6(1),t.Q6J("customer",i)}}function T(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"Nenhum cliente"),t.qZA())}function y(o,n){1&o&&(t.TgZ(0,"div",6),t.SjG(1,Z,2,1,"div",9,v,!1,T,2,0),t.qZA()),2&o&&(t.Q6J("@listState",void 0),t.xp6(1),t.wJu(n))}function A(o,n){1&o&&(t.TgZ(0,"div",10)(1,"span",11)(2,"span",12),t._uU(3,"Loading..."),t.qZA()(),t.TgZ(4,"span",11)(5,"span",12),t._uU(6,"Loading..."),t.qZA()(),t.TgZ(7,"span",11)(8,"span",12),t._uU(9,"Loading..."),t.qZA()()())}const d=[{path:"",component:(()=>{class o{constructor(i,s){this.ourCustomersService=i,this.ngbModal=s,this.customers$=this.ourCustomersService.getCustomers()}openModal(){this.ngbModal.open(g.y,{size:"lg"}).result.then(s=>{"object"==typeof s&&this.ourCustomersService.postCustomer(s).subscribe({next:()=>{u().fire({icon:"success",text:"cadastro realizado com sucesso",toast:!0,position:"bottom",timer:5e3,showConfirmButton:!1}),this.customers$=this.ourCustomersService.getCustomers()},error:()=>{u().fire({icon:"error",text:"houve um erro",toast:!0,position:"bottom",timer:5e3,showConfirmButton:!1})}})})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(h.UG),t.Y36(l.FF))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["customer-registration-home"]],standalone:!0,features:[t.jDz],decls:11,vars:3,consts:[[1,"container","mt-5"],[1,"text-center","mb-4"],[1,"row","my-2"],[1,"col"],[1,"btn","btn-primary",3,"click"],["class","row"],[1,"row"],[1,"col-md-6","col-lg-3","mb-4"],[3,"customer"],["class","col-md-6 col-lg-3 mb-4"],[1,"col","d-flex","justify-content-center","align-items-center","gap-2"],["role","status",1,"spinner-grow"],[1,"visually-hidden"]],template:function(s,p){if(1&s&&(t.TgZ(0,"main",0)(1,"section")(2,"h2",1),t._uU(3,"Nossos Clientes"),t.qZA(),t.TgZ(4,"div",2)(5,"div",3)(6,"button",4),t.NdJ("click",function(){return p.openModal()}),t._uU(7," Novo Cliente "),t.qZA()()(),t.YNc(8,y,4,2,"div",5),t.ALo(9,"async"),t.YNc(10,A,10,0),t.qZA()()),2&s){let c;t.xp6(8),t.um2(8,(c=t.lcZ(9,1,p.customers$))?8:10,c)}},dependencies:[r.ez,r.Ov,a.sP,l.bz],data:{animation:[a.yx]}})}return o})()}];let H=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[r.ez,f.Bz.forChild(d)]})}return o})()}}]);