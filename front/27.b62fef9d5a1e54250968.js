(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"27/8":function(t,n){t.exports=""},"5Xvo":function(t,n){t.exports=""},"9NUX":function(t,n){t.exports=""},KG41:function(t,n){t.exports="<router-outlet></router-outlet>\n"},MUFu:function(t,n){t.exports="<p>\n  ventes works!\n</p>\n"},NueP:function(t,n){t.exports="<p>\n  autres works!\n</p>\n"},VkGP:function(t,n){t.exports=""},qwXp:function(t,n,e){"use strict";e.r(n);var o=e("mrSG"),r=e("CcnG"),p=e("Ip0R"),c=e("ZYCi"),s=e("NT7v"),u=e("HBUA"),a=function(){function t(t,n){this.route=t,this.pfmComp=n}return t.prototype.ngOnInit=function(){var t=this;this.route.data.subscribe(function(n){return t.data=n}),this.data.activateMenu&&(this.pfmComp.menu=u.a)},t.ctorParameters=function(){return[{type:c.a},{type:s.a}]},t=o.c([Object(r.n)({selector:"app-market-place-pfm",template:e("KG41"),styles:[e("5Xvo")]}),o.f("design:paramtypes",[c.a,s.a])],t)}(),i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o.c([Object(r.n)({selector:"app-ventes",template:e("MUFu"),styles:[e("27/8")]}),o.f("design:paramtypes",[])],t)}(),f=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o.c([Object(r.n)({selector:"app-achats",template:e("r0Bx"),styles:[e("VkGP")]}),o.f("design:paramtypes",[])],t)}(),m=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o.c([Object(r.n)({selector:"app-autres",template:e("NueP"),styles:[e("9NUX")]}),o.f("design:paramtypes",[])],t)}(),l=[{path:"",component:a,children:[{path:"ventes",component:i},{path:"achats",component:f},{path:"autres",component:m}]}],h=function(){function t(){}return t=o.c([Object(r.M)({imports:[c.e.forChild(l)],exports:[c.e]})],t)}();e.d(n,"MarketPlacePfmModule",function(){return d});var d=function(){function t(){}return t=o.c([Object(r.M)({declarations:[a,i,f,m],imports:[p.b,h]})],t)}()},r0Bx:function(t,n){t.exports="<p>\n  achats works!\n</p>\n"}}]);