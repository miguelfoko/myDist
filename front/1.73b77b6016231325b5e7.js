(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{E49E:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var i=e("mrSG"),o=e("CcnG"),r=e("t/Na"),s=e("AytR"),a=e("67Y/"),u=e("vubp"),c={headers:new r.e({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})},l=function(){function t(t){this.http=t,this.group_url=s.a.serverEndpoint+"auth/sn/user/groups",this.group_group_type_url=s.a.serverEndpoint+"auth/sn/user/group_types",this.group_detail_url=s.a.serverEndpoint+"auth/sn/user/groupdetail",this.group_type_detail_url=s.a.serverEndpoint+"auth/sn/user/group_type_details",this.group_state_url=s.a.serverEndpoint+"auth/sn/user/groups/status/",this.group_person_url=s.a.serverEndpoint+"auth/sn/user/groups/validator",this.get_plateform_code_url=s.a.serverEndpoint+"auth/sn/user/platform_members/membership_code/type/",this.join_group_url=s.a.serverEndpoint+"auth/sn/user/platform_members/becomeMember",this.authenticated_token=window.sessionStorage.getItem("AuthToken"),this.authenticated_username=window.sessionStorage.getItem("AuthUsername"),this.authenticated_info={AuthToken:this.authenticated_token,AuthUsername:this.authenticated_username}}return t.prototype.getGroups=function(){return this.http.get(this.group_url,c)},t.prototype.getGroupsForPfm=function(t){return this.http.get(this.group_url+"/"+t,c)},t.prototype.load=function(t,n,e){var i=(t-1)%3*n;return this.http.get(this.group_state_url+e,c).pipe(Object(a.a)(function(t){return t.splice(i,n)}),Object(u.a)(1500))},t.prototype.addGroup=function(t){return this.http.post(this.group_url+"/create",t,c)},t.prototype.addGroupAdmin=function(t){return this.http.post(this.group_url+"/admin/create",t,c)},t.prototype.validateGroup=function(t){return this.http.put(this.group_url+"/activate",t,c)},t.prototype.inValidateGroup=function(t){return this.http.put(this.group_url+"/desactivate",t,c)},t.prototype.addGroupDetail=function(t){return this.http.post(this.group_detail_url+"/create",t,c)},t.prototype.getGroupTypes=function(){return this.http.get(this.group_group_type_url,c)},t.prototype.addGroupType=function(t){return this.http.post(this.group_group_type_url+"/create",t,c)},t.prototype.getGroupTypeDetails=function(){return this.http.get(this.group_type_detail_url,c)},t.prototype.addGroupTypeDetail=function(t){return this.http.post(this.group_type_detail_url+"/create",t,c)},t.prototype.getStateGroups=function(t){return this.http.get(this.group_state_url+t,c)},t.prototype.getGroupsInitiator=function(t){return this.http.post(this.group_person_url,t,c)},t.prototype.becomeMember=function(t){return this.http.post(this.join_group_url,t,c)},t.prototype.getPlatFormMember=function(t){return this.http.get(this.get_plateform_code_url+t,c)},t.ctorParameters=function(){return[{type:r.b}]},t=i.c([Object(o.D)({providedIn:"root"}),i.f("design:paramtypes",[r.b])],t)}()},HBUA:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var i=[{title:"Profils",icon:"nb-person",children:[{title:"Profil personnel",link:"checkProfile"},{title:"Profil entrepreneur",link:"./"},{title:"Profil investisseur",link:"./"}]},{title:"Comptes",icon:"nb-person",children:[{title:"MoneyTel",link:"./"},{title:"AlterNa",link:"./"},{title:"BG",link:"bourse-financements/financial-activities"},{title:"Reservation",link:"#"},{title:"Nantissement",link:"#"},{title:"Compte temps",link:"#"}]},{title:"R\xe9seau",icon:"nb-person",children:[{title:"Microcap",link:"social-network-pfm/all-groupes"},{title:"Mon r\xe9seau",link:"social-network-pfm/all-groupes"}]},{title:"Bourse des financements",icon:"nb-lightbulb",children:[{title:"Tous les financements",link:"./"},{title:"Mes demandes",link:"bourse-financements/artefacts"},{title:"Mes offres",link:"bourse-financements/artefacts"}]},{title:"Bourse des opportunit\xe9s",icon:"nb-star",children:[{title:"BG",link:"bourse-financements/recharge-compte"},{title:"Evennementiels",link:"./"},{title:"Activit\xe9s (projets, ...)",link:"./"}]},{title:"Contrats & Services",icon:"nb-bar-chart",children:[{title:"Services",link:"./"},{title:"Contrats",link:"./"}]},{title:"Ressources",icon:"nb-list",children:[{title:"Calendrier",link:"./"},{title:"Contacts",link:"./"},{title:"Documents",link:"./"},{title:"Mys2Mys",link:"./"},{title:"Training & learning",link:"./"},{title:"Mediath\xe8que",link:"./"}]}],o=[{title:"",icon:"nb-compose"}]},NT7v:function(t,n,e){"use strict";var i=e("mrSG"),o=e("CcnG"),r=e("HBUA"),s=[{title:"Profils",icon:"nb-person",children:[{title:"Profil personnel",link:"checkProfile"},{title:"Profil entrepreneur",link:"./"},{title:"Profil investisseur",link:"./"}]},{title:"Comptes",icon:"nb-person",children:[{title:"MoneyTel",link:"./"},{title:"AlterNa",link:"./"},{title:"BG",link:"bourse-financements/financial-activities"},{title:"Reservation",link:"#"},{title:"Nantissement",link:"#"},{title:"Compte temps",link:"#"}]},{title:"R\xe9seau",icon:"nb-person",children:[{title:"Microcap",link:"social-network-pfm/all-groupes"},{title:"Mon r\xe9seau",link:"social-network-pfm/all-groupes"}]},{title:"Bourse des financements",icon:"nb-lightbulb",children:[{title:"Tous les financements",link:"./"},{title:"Mes demandes",link:"bourse-financements/artefacts"},{title:"Mes offres",link:"bourse-financements/artefacts"}]},{title:"Bourse des opportunit\xe9s",icon:"nb-star",children:[{title:"BG",link:"bourse-financements/recharge-compte"},{title:"Evennementiels",link:"./"},{title:"Activit\xe9s (projets, ...)",link:"./"}]},{title:"Contrats & Services",icon:"nb-bar-chart",children:[{title:"Services",link:"./"},{title:"Contrats",link:"./"}]},{title:"Ressources",icon:"nb-list",children:[{title:"Calendrier",link:"./"},{title:"Contacts",link:"./"},{title:"Documents",link:"./"},{title:"Mys2Mys",link:"./"},{title:"Training & learning",link:"./"},{title:"Mediath\xe8que",link:"./"}]}],a=e("E49E"),u=e("q4qu"),c=e("ZYCi"),l=e("qfBg"),p=e("nEDP"),f=e("Xk95"),m=e("OC8m"),h=e("lomD"),d=e("o3x0"),g=e("4AVo");e.d(n,"a",function(){return b});var b=function(){function t(t,n,e,i,o,a,u,c){var l=this;this.userService=t,this.notificationService=n,this.groupService=e,this.PFMService=i,this.sidebarService=o,this.dialogService=a,this.router=u,this.dialog=c,this.loading=!0,this.isIn=!1,this.menu=r.a,this.menu_non_validate_account=s,this.groupJoined=!1,this.joiningGroupLoader=!1,this.notificationMenus=r.b,this.countNotifications=0,this.isFirstConnection=!0,this.subscription=this.notificationService.getMessage().subscribe(function(t){var n=t.text;"update-count-notification"===n?l.profile&&l.fetchNotificationCount(l.profile):"update-picture-profile"===n&&l.userService.getCurrentUser().then(function(t){l.profile=t}).catch(function(t){console.log(t)})})}return t.prototype.ngOnInit=function(){return i.b(this,void 0,void 0,function(){var t=this;return i.e(this,function(n){switch(n.label){case 0:return[4,this.userService.getCurrentUser().then(function(n){t.profile=n,t.isIn=!0,setInterval(function(){t.fetchNotificationCount(t.profile)},5e3)}).catch(function(t){console.error(t)})];case 1:return n.sent(),this.isIn?null!=this.profile.otp?(this.isFirstConnection=!1,this.info={username:"..."},this.info.username=this.profile.loginUtilisateur,this.groupService.getGroups().subscribe(function(n){t.groups=n})):(this.isFirstConnection=!0,this.countNotifications=1,this.info={username:"..."},this.info.username=this.profile.loginUtilisateur,this.groupService.getGroups().subscribe(function(n){t.groups=n}),this.router.navigate(["/pfm"])):this.router.navigate(["/home"]),[2]}})})},t.prototype.toggleSidebar=function(){this.sidebarService.toggle(!0)},t.prototype.joinGroup=function(t){var n=this;this.joiningGroupLoader=!0,this.PFMService.joinGroup(t).subscribe(function(t){n.joiningGroupLoader=!1,n.groupJoined=!0},function(t){n.errorJoiningGroup=t.error.message,n.joiningGroupLoader=!1})},t.prototype.logout=function(){p.a.logout()},t.prototype.isAdmin=function(){return p.a.hasAnyRole(["admin"])},t.prototype.versAdmin=function(){this.router.navigate(["/admin"])},t.prototype.versOverview=function(){this.router.navigate(["/pfm"])},t.prototype.openNotifications=function(){var t=this;this.userService.getCurrentUser().then(function(n){t.router.navigate(["/pfm/notifications"])}).catch(function(n){console.log(n),404===n.status&&(console.log("Pas trouver"),t.router.navigate(["/auth/register"]))})},t.prototype.fetchNotificationCount=function(t){return i.b(this,void 0,void 0,function(){var n=this;return i.e(this,function(e){switch(e.label){case 0:return null===t.idUtilisateur?[3,2]:[4,this.notificationService.fetchCountNotificationUser(t).then(function(t){n.countNotifications<t&&new Audio("../../assets/audio/me-too.mp3").play();n.countNotifications=t}).catch(function(t){console.log(t)})];case 1:e.sent(),e.label=2;case 2:return[2]}})})},t.prototype.reduceStringEmail=function(t){return t.substring(0,10)+"..."},t.prototype.contractCount=function(t){return t<10?"0"+t:t>100?"99+":t},t.prototype.openFirstDefaultNotification=function(){var t=this;this.dialog.open(g.a).afterClosed().subscribe(function(n){"true"==n&&(!0,t.dialogService.open(h.a,{closeOnBackdropClick:!0}).onClose.subscribe(function(t){}))})},t.prototype.openSenderCodeDialog=function(t){this.dialogService.open(h.a,{closeOnBackdropClick:t}).onClose.subscribe(function(t){})},t.prototype.goToMyAccess=function(){this.router.navigate(["/pfm/pfmAccess"])},t.prototype.goToProfil=function(){this.router.navigate(["/pfm/checkProfile"])},t.ctorParameters=function(){return[{type:l.a},{type:m.a},{type:a.a},{type:u.a},{type:f.I},{type:f.r},{type:c.c},{type:d.a}]},t=i.c([Object(o.n)({selector:"app-pfm",template:e("rDlc"),styles:[e("RK/y")]}),i.f("design:paramtypes",[l.a,m.a,a.a,u.a,f.I,f.r,c.c,d.a])],t)}()},OC8m:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var i=e("mrSG"),o=e("CcnG"),r=e("t/Na"),s=e("AytR"),a=e("K9Ia"),u={headers:new r.e({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})},c=function(){function t(t){this.http=t,this.subject=new a.b,this.url=s.a.serverEndpoint+"/commun/notifications/",this.urlHome=s.a.serverEndpointWithoutAuth+"/commun/notification-attentions/30/as-limit"}return t.prototype.fetchCountNotificationUser=function(t){return this.http.get(this.url+t.idUtilisateur+"/utilisateurs/count",u).toPromise()},t.prototype.fetchCountNotificationDedicated=function(t,n){return this.http.get(this.url+t.idUtilisateur+"/utilisateurs/"+n+"/count",u).toPromise()},t.prototype.fetchDataNotificationNoVisited=function(t){return this.http.get(this.url+t.idUtilisateur+"/utilisateurs/non-lues",u).toPromise()},t.prototype.fetchDataNotificationVisitedAndNoTreated=function(t){return this.http.get(this.url+t.idUtilisateur+"/utilisateurs/lues-et-non-traites",u).toPromise()},t.prototype.fetchDataNotifications=function(t){return this.http.get(this.url+t.idUtilisateur+"/utilisateurs/all",u).toPromise()},t.prototype.confirmVisit=function(t,n){return this.http.put(this.url+t.id+"/lues",n,u).toPromise()},t.prototype.confirmTreat=function(t,n){return this.http.put(this.url+t.id+"/traites",n,u).toPromise()},t.prototype.sendMessage=function(t){this.subject.next({text:t})},t.prototype.clearMessage=function(){this.subject.next()},t.prototype.getMessage=function(){return this.subject.asObservable()},t.prototype.notifsAccueil=function(){return this.http.get(this.urlHome,u).toPromise()},t.ctorParameters=function(){return[{type:r.b}]},t=i.c([Object(o.D)({providedIn:"root"}),i.f("design:paramtypes",[r.b])],t)}()},"RK/y":function(t,n){t.exports="\n@import url(\"https://fonts.googleapis.com/css?family=Rubik&display=swap\");\n/**\n * Global\n *---------------*/\n.pfm-space ::ng-deep, .pfm-space ::ng-deep nb-menu,\n.pfm-space ::ng-deep nb-layout-header nb-user .user-name,\n.pfm-space ::ng-deep nb-layout-footer {\n  font-size: 11pt !important;\n  font-family: 'Rubik', sans-serif !important; }\n.pfm-space ::ng-deep a {\n  text-decoration: none;\n  cursor: pointer; }\n.pfm-space ::ng-deep button, .pfm-space ::ng-deep [nbbutton] {\n  cursor: pointer; }\n.pfm-space ::ng-deep nb-tooltip .content {\n  font-size: 0.9rem;\n  font-family: 'Rubik', sans-serif !important; }\n/**\n * Header\n *---------------*/\n.pfm-header {\n  width: 100%; }\n.pfm-header, .pfm-header .logo-container, .pfm-header .expansion {\n    display: flex;\n    align-items: center; }\n.pfm-header ::ng-deep nb-user .user-name {\n    text-transform: capitalize; }\n.pfm-header .flex-grow {\n    flex-grow: 1; }\n/**\n * Sidebar\n *---------------*/\nnb-sidebar ::ng-deep nb-menu > .menu-items > .menu-item:first-child {\n  border-width: 3px; }\nnb-sidebar ::ng-deep nb-menu > .menu-items > .menu-item:first-child a {\n    padding: 3px 12px; }\nnb-sidebar ::ng-deep .menu-items > .menu-item:first-child {\n  margin-top: 0 !important; }\nnb-sidebar ::ng-deep .menu-item a:hover, nb-sidebar ::ng-deep .menu-item a.active {\n  color: #000000;\n  font-weight: normal; }\n/**\n * Main viewport\n */\nnb-layout-column ::ng-deep .layout-content, nb-layout-column ::ng-deep .layout-content *,\nnb-layout-column ::ng-deep .tabset, nb-layout-column ::ng-deep nb-tab, nb-layout-column ::ng-deep nb-tab * {\n  font-family: 'Rubik', sans-serif !important; }\nnb-layout-column ::ng-deep .tabset {\n  font-size: 1.1rem; }\nnb-layout-column ::ng-deep .tabset .tab.active a {\n    font-weight: 400; }\n/**\n * Fixes\n *---------------*/\nnb-layout-header.fixed {\n  top: 0; }\nnb-sidebar ::ng-deep .main-container-fixed {\n  top: 4.75rem; }\nnb-sidebar ::ng-deep .menu-icon {\n  margin-right: 0.25rem !important; }\n/**\n* Enable or disable links\n*------*/\n/*a.disabled {\n  color: gray;\n  cursor: not-allowed;\n  text-decoration: underline;\n}*/\n#disabled {\n  pointer-events: none;\n  cursor: not-allowed; }\n.p_text_without_connection {\n  text-align: center;\n  font-size: x-large;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder; }\n#menuForLogOut {\n  background-color: white; }\n"},q4qu:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var i=e("mrSG"),o=e("t/Na"),r=e("CcnG"),s=e("AytR"),a={headers:new o.e({"Content-Type":"application/json","Access-Control-Allow-Origin":"*"})},u=function(){function t(t){this.http=t,this.url=s.a.serverEndpoint+"auth/sn/user/platform_members",this.join_group_url=s.a.serverEndpoint+"auth/sn/user/platform_members/add/to/groups",this.organisation_url=s.a.serverEndpoint+"auth/sn/user/organisations/"}return t.prototype.getPlatformMembers=function(){return this.http.get(this.url)},t.prototype.joinGroup=function(t){return this.http.post(this.join_group_url,t,a)},t.prototype.getOrganisationById=function(t){return this.http.get(this.organisation_url+t,a)},t.ctorParameters=function(){return[{type:o.b}]},t=i.c([Object(r.D)({providedIn:"root"}),i.f("design:paramtypes",[o.b])],t)}()},rDlc:function(t,n){t.exports='<nb-layout class="pfm-space">\n\n  <nb-layout-header fixed>\n    <div class="pfm-header">\n\n      <div class="logo-container mr-2">\n        <nb-actions size="medium" class="sidebar-toggle mr-2">\n          <nb-action icon="nb-menu" class="px-0"\n           (click)="toggleSidebar()">\n          </nb-action>\n        </nb-actions>\n\n        <a [routerLink]="[\'/home\']">\n          <img src="../../assets/images/logomicrocap_1.png" \n            width="100" height="50" alt="" class="logo">\n        </a>\n      </div>\n      <nb-actions>\n        <nb-action  icon="nb-grid-a-outline" [disabled]="isFirstConnection"\n            nbTooltip="Overview" nbTooltipPlacement="bottom"\n           (click)="versOverview()">\n          </nb-action>\n          <nb-action [disabled]="isFirstConnection">\n            <a [routerLink]="[\'/pfm\']">\n              Entreprise\n            </a>\n          </nb-action>\n          \n          <nb-action [disabled]="isFirstConnection">\n            <a [routerLink]="[\'/pfm\']">\n              Projet\n            </a>\n          </nb-action>\n          \n          <nb-action [disabled]="isFirstConnection">\n            <a [routerLink]="[\'/pfm\']">\n              Id\xe9e\n            </a>\n          </nb-action>\n          \n      </nb-actions>\n      \n\n      <div class="flex-grow"></div>\n\n      <div class="expansion">\n        <nb-actions size="medium" class="d-flex align-center mx-4">\n          \x3c!-- <nb-action icon="nb-notifications" *ngIf="isFirstConnection"\n                     (click)="openFirstDefaultNotification()" badgeText="01"\n                      badgePosition="top right"\n                      badgeStatus="info"> \n                       *ngIf="!isFirstConnection"\n          </nb-action> --\x3e\n          <nb-action icon="nb-notifications"\n                     (click)="openNotifications()" badgeText="{{ contractCount(countNotifications) }}"\n                      badgePosition="top right"\n                      badgeStatus="info">\n          </nb-action>\n        </nb-actions>\n\n        <nb-user title="{{ info != null ? info.username : \'\' }}" size="large" [matMenuTriggerFor]="menuLogOut"\n         [name]="info != null ? reduceStringEmail(info.username) : \'Inconnu\'"\n         [title]="info != null ? reduceStringEmail(info.authorities) : \'Inconnu\'"\n         [picture]="!profile.profile ? \'../../assets/images/avatar-user.png\' : \'data:image/png;base64,\' + profile.profile">\n        </nb-user>\n        \n        \x3c!-- <button mat-button [matMenuTriggerFor]="menu">Menu</button>--\x3e\n        <mat-menu #menuLogOut="matMenu" id="menuForLogOut">\n          <button mat-menu-item *ngIf="isAdmin()" icon="nb-gear" [disabled]="isFirstConnection"\n          nbTooltip="Espace administrateur" nbTooltipPlacement="bottom"\n          (click)="versAdmin()">Espace administrateur</button>\n          <button mat-menu-item (click)="goToProfil()">Profil<mat-icon matSuffix>perm_identity</mat-icon></button>\n\n          <button mat-menu-item icon="nb-person" [disabled]="isFirstConnection" (click)="goToMyAccess()">Mes acc\xe8s<mat-icon matSuffix>lock</mat-icon></button>\n\n          <button mat-menu-item>Pr\xe9f\xe9rences<mat-icon matSuffix>settings</mat-icon></button>\n          \n          <button mat-menu-item (click)="logout()">D\xe9connexion<mat-icon matSuffix>power_settings_new</mat-icon></button>\n        </mat-menu>\n\n      </div>\n      \n    </div>\n  </nb-layout-header>\n\n  <nb-sidebar >\n    <nb-menu *ngIf="!isFirstConnection"  [items]="menu" autoCollapse=true ></nb-menu>\n    <nb-menu *ngIf="isFirstConnection"  [items]="menu_non_validate_account" autoCollapse=true ></nb-menu>\n  </nb-sidebar>\n\n  <nb-layout-column>      \n    <router-outlet></router-outlet>\n  </nb-layout-column>\n\n  \x3c!-- <nb-layout-column *ngIf="isFirstConnection">      \n    <p class="p_text_without_connection">Cliquez sur l\'ic\xf4ne des notifications pour activer votre compte.</p>\n  </nb-layout-column> --\x3e\n\n  <nb-layout-footer>&copy; Microcap</nb-layout-footer>\n</nb-layout>\n'}}]);