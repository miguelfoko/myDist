(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"B+Yz":function(n,t){n.exports='<nb-card [nbSpinner]="lodingAdherer" nbSpinnerStatus="success" nbSpinnerSize="xlarge" nbSpinnerMessage="Adh\xe9sion en cours ...">\n    <nb-card-body>\n  \n      <div class="row">\n        <div class="col-md-8">\n          <h4> <i class="fa fa-users"></i> Mes communaut\xe9s actuelles <span class="text-warning"> ({{ myContactsLength }}) </span></h4>\n          <nb-list>\n              <nb-list-item *ngFor="let contract of myContracts">\n                <nb-card status="success">\n                  <nb-card-header>\n                    {{ contract.appGroup.designation }} \n                      <span *ngIf="contract.state" class="badge badge-pill badge-success"> Membre </span>\n                      <span *ngIf="!contract.state" class="badge badge-pill badge-warning"> Adh\xe9sion en cours </span>\n                  </nb-card-header>\n  \n                  <nb-card-body>\n                    <div>\n                      <img class="group-avatar" src="../../../../assets/images/adult-afro-blazer-1056556.jpg"\n                        alt="">\n                      &nbsp;\n                      <p style="text-align: justify; padding-left: 30px;">\n                          Descriptif sur la communaut\xe9\n                      </p>\n                    </div>\n                  </nb-card-body>\n\n                  <nb-card-footer>\n                    <button *ngIf="contract.state" nbButton size="xsmall" status="success">suivre les activit\xe9s</button> \n                    <i *ngIf="!contract.state" class="text-warning">Demande d\'adh\xe9sion en attente de validation</i> \n                  </nb-card-footer>\n                </nb-card>\n              </nb-list-item>\n            </nb-list>\n  \n        </div>\n        <div class="col-md-4">\n          <h4> <i class="fa fa-plus"></i> Autres communaut\xe9s <span class="text-warning"> ({{ otherGroupsLength }}) </span> </h4>\n          <nb-list>\n            <nb-list-item *ngFor="let group of otherGroups">\n              <h6 style="color: #40dc7e">{{ group.designation }}</h6>\n                <button nbButton size="xsmall" (click)="becomeMember(group)" shape="round" outline status="success" style="float: right;">adh\xe9rer</button>\n            </nb-list-item>\n          </nb-list>\n        </div>\n      </div>\n  \n  \n     \n    </nb-card-body>\n  </nb-card>\n  \n'},C7sM:function(n,t){n.exports=":host {\n  display: -webkit-box;\n  display: flex; }\n\nnb-card {\n  -webkit-box-flex: 1;\n          flex: 1 1 45%;\n  margin: 0 2.5%; }\n\nnb-card.own-scroll {\n    height: 30rem; }\n\nbutton {\n  margin-top: 0.4em; }\n\na {\n  text-decoration: none;\n  margin-left: 1em; }\n\n.group-avatar {\n  width: 100px;\n  height: 100px;\n  float: left;\n  margin-right: 20px;\n  border-radius: 50%; }\n"},KTmM:function(n,t){n.exports='<nb-card>\n  <nb-card-body>\n    <nb-stepper #stepper>\n      <nb-step [stepControl]="firstForm" label="Etape 1" status="success">\n        <form [formGroup]="firstForm" (ngSubmit)="onFirstSubmit()" class="step-container">\n\n          <nb-alert status="success">\n            Identification\n          </nb-alert>\n\n          <br>\n          <nb-alert status="danger" *ngIf="idReseauFound">Le plaform member n\'a pu etre touve</nb-alert>\n          <br>\n\n          <div style="vertical-align: middle;">\n            <label>Identifiant reseau</label>&nbsp;&nbsp;\n            <input type="text" nbInput placeholder="Identifiant du reseau" formControlName="identifiant_reseau"\n              [ngClass]="{\'form-control-danger\': firstForm.invalid && (firstForm.dirty || firstForm.touched)}">\n          </div>\n          <br>\n          <button nbButton size="small" status="success" nbStepperNext>next</button>\n        </form>\n      </nb-step>\n\n      <nb-step label="Etape 2">\n\n        <nb-alert status="success">\n          Verification de l\'dentification\n        </nb-alert>\n\n        <div class="row">\n          <div class="col-md-4">\n            <p> <strong>Identifiant Reseau </strong>: XXXXXXXXXXXXXXX</p>\n            <p><strong>Raison sociale:</strong> XXXXXXXXXXXXXXXX</p>\n            <p><strong>Immatriculation:</strong> XXXXXXXXXXXXX</p>\n            <p><strong>Activit\xe9 principale:</strong> XXXXXXXXXXXX</p>\n          </div>\n          <div class="col-md-4">\n            <button nbButton size="small" status="success">plus d\'info</button>\n          </div>\n        </div>\n        \x3c!-- <div class="input-group">\n            <input type="text" placeholder="Enter favorite movie" class="form-control" formControlName="secondCtrl"\n              [ngClass]="{\'form-control-danger\': secondForm.invalid && (secondForm.dirty || secondForm.touched)}">\n          </div> --\x3e\n\n        <br><br>\n        <button nbButton size="small" status="success" nbStepperPrevious>retour</button>\n        &nbsp;\n        <button nbButton size="small" status="success" nbStepperNext>continuer</button>\n      </nb-step>\n\n      <nb-step [stepControl]="secondForm" label="Etape 3">\n        <form [formGroup]="secondForm" (ngSubmit)="onSecondSubmit()" class="step-container">\n\n          <nb-alert status="success">\n            Profil du partenariat\n          </nb-alert>\n\n          <div class="row justify-content-md-center">\n            <div class="col-md-8">\n\n              <div class="row input-group">\n                <div class="col-md-3">\n                  <br>\n                  <label>N\xb0 de contrat</label>\n                </div>\n                <div class="col-md-9">\n                  <input type="text" placeholder="Entrer le numero de contrat" class="form-control" formControlName="numero_contrat"\n                    [ngClass]="{\'form-control-danger\': secondForm.invalid && (secondForm.dirty || secondForm.touched)}">\n                </div>\n              </div>\n\n              <br>\n              <div class="row input-group">\n                <div class="col-md-3">\n                  <br>\n                  <label>Date de creation</label>\n                </div>\n                <div class="col-md-9">\n                  <input readonly placeholder="Entrer la date de creation" class="form-control" formControlName="date_creation"\n                    [nbDatepicker]="formpicker" [ngClass]="{\'form-control-danger\': secondForm.invalid && (secondForm.dirty || secondForm.touched)}">\n                  <nb-datepicker #formpicker></nb-datepicker>\n                </div>\n              </div>\n\n              <br>\n              <div class="row input-group">\n                <div class="col-md-3">\n                  <br>\n                  <label>Type de profil</label>\n                </div>\n                <div class="col-md-9">\n                  <select placeholder="" class="form-control" formControlName="type_profil" [ngClass]="{\'form-control-danger\': secondForm.invalid && (secondForm.dirty || secondForm.touched)}">\n                    <option value="">profil 1</option>\n                    <option value="">profil 2</option>\n                  </select>\n                </div>\n              </div>\n\n              <br>\n              <div class="row input-group">\n                <div class="col-md-3">\n                  <br>\n                  <label>Nom commerciale</label>\n                </div>\n                <div class="col-md-9">\n                  <input type="text" placeholder="Entrer le nom commerciale" class="form-control" formControlName="nom_commerciale"\n                    [ngClass]="{\'form-control-danger\': secondForm.invalid && (secondForm.dirty || secondForm.touched)}">\n                </div>\n              </div>\n\n              <br>\n              <div class="row input-group">\n                <div class="col-md-3">\n                  <br>\n                  <label>Partenaire parent</label>\n                </div>\n                <div class="col-md-9">\n                  <input type="text" placeholder="Entrer le partenaire parent" class="form-control" formControlName="partenaire_parent"\n                    [ngClass]="{\'form-control-danger\': secondForm.invalid && (secondForm.dirty || secondForm.touched)}">\n                </div>\n              </div>\n\n              <br>\n              <div class="row input-group">\n                <div class="col-md-3">\n                  <br>\n                  <label>Identifiant admin</label>\n                </div>\n                <div class="col-md-9">\n                  <input type="text" placeholder="identifiant admin" class="form-control" formControlName="identifiant_admin">\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          <br><br>\n          <button nbButton size="small" status="success" nbStepperPrevious>prev</button>\n          &nbsp;\n          <button nbButton size="small" status="success" nbStepperNext>next</button>\n        </form>\n      </nb-step>\n\n      <nb-step label="Etape 4" status="success">\n        <form [formGroup]="thirdForm" (ngSubmit)="onThirdSubmit()" class="step-container">\n\n          <nb-alert status="success">\n            Details du profil du partenariat\n          </nb-alert>\n\n          <br><br>\n          <button nbButton size="small" status="success" nbStepperPrevious>retour</button>\n          &nbsp;\n          <button nbButton size="small" status="success" nbStepperNext>confimer</button>\n        </form>\n      </nb-step>\n\n      <nb-step [hidden]="true" label="Final">\n        <br>\n        <div class="step-container">\n          <h3>Creation du partenaire effectu\xe9 avec succes.</h3>\n          <br>\n          <a nbButton [routerLink]="[ \'..\' ]" (click)="showToast(\'info\')">Ok</a> \x3c!-- (click)="stepper.reset()" --\x3e\n        </div>\n      </nb-step>\n\n    </nb-stepper>\n  </nb-card-body>\n</nb-card>\n'},SlLX:function(n,t){n.exports='<br><br>\n<nb-card>\n  <nb-card-body>\n\n    <nb-tabset>\n      <nb-tab tabTitle="Operations" tabIcon="nb-person" responsive>\n        <br><br>\n        <div class="row">\n\n          <div class="col-md-3">\n            <nb-card status="success">\n              <nb-card-header>Creer un pertenaire</nb-card-header>\n              <nb-card-body>\n                Ici vous effectuer la creation d\'un pertenaire.\n\n                <br><br>\n                <a nbButton size="small" status="success" outline [routerLink]="[ \'add-partenaire\' ]">creer un partenaire</a>\n              </nb-card-body>\n            </nb-card>\n          </div>\n\n          <div class="col-md-9">\n            \n          </div>\n        </div>\n      </nb-tab>\n      <nb-tab tabTitle="Tous les partenaires" tabIcon="nb-notifications" responsive>\n        <p>List of <strong>Tous les partenaires</strong>.</p>\n      </nb-tab>\n    </nb-tabset>\n\n  </nb-card-body>\n</nb-card>\n'},VoAZ:function(n,t){n.exports="<router-outlet></router-outlet>\n"},j2Zw:function(n,t,e){"use strict";e.r(t);var o=e("mrSG"),r=e("CcnG"),s=e("Ip0R"),a=e("ZYCi"),i=function(){function n(){}return n.prototype.ngOnInit=function(){},n=o.c([Object(r.n)({selector:"app-social-network",template:e("VoAZ"),styles:[e("pjrG")]}),o.f("design:paramtypes",[])],n)}(),c=function(){function n(){}return n.prototype.ngOnInit=function(){},n=o.c([Object(r.n)({selector:"app-partenairesPfm",template:e("SlLX"),styles:[e("l1a4")]}),o.f("design:paramtypes",[])],n)}(),l=e("gIcY"),d=e("TtU4"),p=e("E49E"),u=function(){function n(n,t,e){this.formBuilder=n,this.toastrService=t,this.groupeManagementService=e,this.index=0,this.idReseauFound=!1}return n.prototype.ngOnInit=function(){this.firstForm=this.formBuilder.group({identifiant_reseau:["",[l.g.required]]}),this.secondForm=this.formBuilder.group({numero_contrat:["",[]],date_creation:["",[]],type_profil:["",[]],nom_commerciale:["",[]],partenaire_parent:["",[]],identifiant_admin:["",[]]}),this.thirdForm=this.formBuilder.group({thirdCtrl:["",l.g.required]})},n.prototype.onFirstSubmit=function(){this.firstForm.markAsDirty()},n.prototype.onSecondSubmit=function(){this.secondForm.markAsDirty()},n.prototype.onThirdSubmit=function(){this.thirdForm.markAsDirty(),this.showToast("info")},n.prototype.showToast=function(n){this.toastrService.show(n,"Un partenaire a \xe9t\xe9 cr\xe9e.",{status:n})},n.prototype.getPlatFormMember=function(){var n=this,t=this.firstForm.value.identifiant_reseau;this.groupeManagementService.getPlatFormMember(t).subscribe(function(t){console.log(t),n.idReseauFound=!0},function(t){console.log(t),n.idReseauFound=!1})},n=o.c([Object(r.n)({selector:"app-add-partenaire",template:e("KTmM"),styles:[e("myGl")]}),o.f("design:paramtypes",[l.b,d.B,p.a])],n)}(),b=e("lqWm"),m=function(){function n(n,t){this.groupService=n,this.contractService=t,this.allGroups=[],this.myContracts=[],this.otherGroups=[],this.news=[],this.placeholders=[],this.pageSize=3,this.pageToLoadNext=1,this.loading=!1,this.lodingAdherer=!1}return n.prototype.ngOnInit=function(){var n=this;this.groupService.getStateGroups("validated").subscribe(function(t){n.allGroups=t,n.allGroupLength=t.length},function(n){console.log(n)}),this.contractService.getPlatformMemberContracts("join_group_contract").subscribe(function(t){n.myContracts=t,n.myContactsLength=t.length;var e=[];n.myContracts.forEach(function(n){e.push(n.appGroup.id)}),n.allGroups.forEach(function(t){e.includes(t.id)||n.otherGroups.push(t)}),n.otherGroupsLength=n.otherGroups.length},function(n){console.log(n)})},n.prototype.loadNextContacts=function(){var n=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.groupService.load(this.pageToLoadNext,this.pageSize,"validated").subscribe(function(t){var e;n.placeholders=[],(e=n.allGroups).push.apply(e,t),n.loading=!1,n.pageToLoadNext++,n.pageToLoadNext*n.pageSize>11&&(n.loading=!0)}))},n.prototype.loadNextOtherGroups=function(){var n=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.groupService.load(this.pageToLoadNext,this.pageSize,"validated").subscribe(function(t){var e;n.placeholders=[],(e=n.allGroups).push.apply(e,t),n.loading=!1,n.pageToLoadNext++,n.pageToLoadNext*n.pageSize>11&&(n.loading=!0)}))},n.prototype.becomeMember=function(n){var t=this;this.lodingAdherer=!0,this.groupService.becomeMember(n).subscribe(function(e){console.log(e),t.myContracts.push(e),t.otherGroups=t.removeGroupFromOthers(t.otherGroups,n),t.lodingAdherer=!1,t.myContactsLength=t.myContracts.length,t.otherGroupsLength=t.otherGroups.length},function(n){console.log(n),t.lodingAdherer=!1})},n.prototype.removeGroupFromOthers=function(n,t){return n.filter(function(n){return n!=t})},n=o.c([Object(r.n)({selector:"app-groupes-pfm",template:e("B+Yz"),styles:[e("C7sM")]}),o.f("design:paramtypes",[p.a,b.a])],n)}(),f=[{path:"",component:i,children:[{path:"partenairesPfm",component:c},{path:"partenairesPfm/add-partenaire",component:u},{path:"all-groupes",component:m}]}],h=function(){function n(){}return n=o.c([Object(r.J)({imports:[a.d.forChild(f)],exports:[a.d]})],n)}();e.d(t,"SocialNetworkPfmModule",function(){return g});var g=function(){function n(){}return n=o.c([Object(r.J)({declarations:[i,c,u,m],imports:[s.b,l.f,d.y,d.f,d.e,d.x,d.c,d.m,d.o,d.w,d.i.forRoot(),d.A.forRoot(),h]})],n)}()},l1a4:function(n,t){n.exports=""},myGl:function(n,t){n.exports=""},pjrG:function(n,t){n.exports=""}}]);