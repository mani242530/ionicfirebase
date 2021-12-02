(self.webpackChunkfirebase_database_tutorial=self.webpackChunkfirebase_database_tutorial||[]).push([[3488],{3488:(t,e,o)=>{"use strict";o.r(e),o.d(e,{PaymentPageModule:()=>g});var a=o(4762),n=o(639),r=o(8583),i=o(3679),d=o(1348),l=o(3083),m=o(4212);let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-payment"]],decls:67,vars:0,consts:[[1,"osahan-header-nav","shadow-sm","p-3","d-flex","align-items-center","bg-purple"],[1,"font-weight-normal","mb-0","text-white"],["routerLink","/get-started",1,"text-purple"],["icon","arrow-left",1,"icofont-rounded-left"],["id","content","fullscreen",""],[1,"osahan-index","bg-c","d-flex","align-items-center","justify-content-center","vh-80","index-page"],[1,"osahan-form","pt-5","px-3"],[1,"your-ticket","pt-2"],[1,"p-3"],[1,"payment-borrad","shadow-sm","bg-white","mt-2","rounded-1"],[1,"border","p-3"],[1,"w-100","mastercard","custom-control","custom-radio","custom-control-inline","mr-0"],["type","radio","id","customRadiomaster1","name","customRadiocard1","checked","",1,"custom-control-input"],["for","customRadiomaster1",1,"custom-control-label","small","w-100"],[1,"d-flex","align-items-start"],[1,""],[1,"mb-0","text-dark"],[1,"text-muted"],["src","assets/img/master.png",1,"img-fluid","rounded","ml-auto"],[1,"w-100","visa","custom-control","custom-radio","custom-control-inline","mr-0"],["type","radio","id","customRadiovisa1","name","customRadiocard1",1,"custom-control-input"],["for","customRadiovisa1",1,"custom-control-label","small","w-100"],["src","assets/img/visa.png",1,"img-fluid","rounded","ml-auto"],[1,"payment-borrad","shadow","bg-white","m-3","rounded-1","p-3"],[1,"d-flex","small"],[1,"ml-auto","font-weight-bold","text-danger"],[1,"small"],[1,"form-group","row","mb-3"],["for","exampleInputEmail1",1,"mb-1","small","text-muted"],["src","assets/img/master-card.png",1,"img-fluid","ml-auto","rounded"],["type","number","placeholder","1234 5678 9145 4589","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control","form-control-sm","px-1"],[1,"col-8"],["for","exampleInputmondate1",1,"mb-1","small","text-muted"],[1,"d-flex","border","rounded"],["type","number","placeholder","DD","id","exampleInputmondate1","aria-describedby","mondateHelp",1,"form-control","text-center","form-control-sm","border-0","px-1"],[1,"pt-2"],["type","number","placeholder","MM","id","exampleInputmondate1","aria-describedby","mondateHelp",1,"form-control","text-center","form-control-sm","border-0","px-1"],[1,"col-4"],["for","exampleInputcvv1",1,"mb-1","small","text-muted"],["type","number","placeholder","000","id","exampleInputcvv1","aria-describedby","cvvHelp",1,"form-control","text-center","form-control-sm"],[1,"col-12"],["type","submit","data-toggle","modal","data-target","#paymentModal","routerLink","/select-vehicle",1,"btn","btn-purple","btn-block"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar"),n.TgZ(2,"div",0),n.TgZ(3,"h5",1),n.TgZ(4,"a",2),n._UZ(5,"fa-icon",3),n.qZA(),n.TgZ(6,"ion-title"),n._uU(7,"Payment"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"ion-content",4),n.TgZ(9,"div",5),n.TgZ(10,"div",6),n.TgZ(11,"div",7),n.TgZ(12,"div",8),n.TgZ(13,"div",9),n.TgZ(14,"div",10),n.TgZ(15,"div",11),n._UZ(16,"input",12),n.TgZ(17,"label",13),n.TgZ(18,"a",14),n.TgZ(19,"div",15),n.TgZ(20,"p",16),n._uU(21,"Mastercard / Visa / Rupay"),n.qZA(),n.TgZ(22,"small",17),n._uU(23,"Pay from mastercard account using mastercard payment gateway"),n.qZA(),n.qZA(),n._UZ(24,"img",18),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(25,"div",10),n.TgZ(26,"div",19),n._UZ(27,"input",20),n.TgZ(28,"label",21),n.TgZ(29,"a",14),n.TgZ(30,"div",15),n.TgZ(31,"p",16),n._uU(32,"Net Banking"),n.qZA(),n.TgZ(33,"small",17),n._uU(34,"Pay from your bank account using net banking gateway"),n.qZA(),n.qZA(),n._UZ(35,"img",22),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(36,"div",23),n.TgZ(37,"div",24),n.TgZ(38,"p"),n._uU(39,"Total Payable INR"),n.qZA(),n.TgZ(40,"p",25),n._uU(41,"5,000"),n.qZA(),n.qZA(),n.TgZ(42,"div",26),n.TgZ(43,"div",27),n.TgZ(44,"div",14),n.TgZ(45,"label",28),n._uU(46,"Card Number"),n.qZA(),n._UZ(47,"img",29),n.qZA(),n.TgZ(48,"div",14),n._UZ(49,"input",30),n.qZA(),n.qZA(),n.TgZ(50,"div",27),n.TgZ(51,"div",31),n.TgZ(52,"label",32),n._uU(53,"Month / Date"),n.qZA(),n.TgZ(54,"div",33),n._UZ(55,"input",34),n.TgZ(56,"span",35),n._uU(57,"/"),n.qZA(),n._UZ(58,"input",36),n.qZA(),n.qZA(),n.TgZ(59,"div",37),n.TgZ(60,"label",38),n._uU(61,"CVV"),n.qZA(),n._UZ(62,"input",39),n.qZA(),n.qZA(),n.TgZ(63,"div",27),n.TgZ(64,"div",40),n.TgZ(65,"button",41),n._uU(66," Pay "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA())},directives:[l.Gu,l.sr,d.yS,l.YI,m.BN,l.wd,l.W2,d.rH],styles:[".opt[_ngcontent-%COMP%]{border:1px solid #dc3545!important;border-radius:6px;font-size:46px;font-weight:700;padding:0}#verificationModal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px}h1.success-icon[_ngcontent-%COMP%]{font-size:80px!important;color:#5bc550}"]}),t})();const s=[{path:"",component:c}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.Bz.forChild(s)],d.Bz]}),t})();const Z=[{path:"",component:c}],p=[r.ez,i.u5,l.Pc,d.Bz.forChild(Z),m.uH,u];let g=class{};g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({providers:[],imports:[p]}),g=(0,a.gn)([(0,n.LVF)({imports:[r.ez,i.u5,l.Pc,d.Bz.forChild(Z),m.uH],declarations:[c]})],g)}}]);