"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
  Generated class for the Subdiagnostico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SubdiagnosticoPage = (function () {
    function SubdiagnosticoPage(navCtrl, navParams, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.diagId = this.navParams.get('diagId');
        this.subId = this.navParams.get('subId');
        this.diags = af.database.list('/diags/' + this.diagId + '/subdiagnosticos');
        this.Subdiags = af.database.list('/subdiagnosticos');
        console.log(this.Subdiags);
        this.data = af.database.object('/diags/' + this.diagId);
    }
    SubdiagnosticoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubdiagnosticoPage');
    };
    SubdiagnosticoPage = __decorate([
        core_1.Component({
            selector: 'page-subdiagnostico',
            templateUrl: 'subdiagnostico.html'
        })
    ], SubdiagnosticoPage);
    return SubdiagnosticoPage;
}());
exports.SubdiagnosticoPage = SubdiagnosticoPage;
