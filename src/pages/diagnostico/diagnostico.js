"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var crear_subdiag_1 = require("../crear-subdiag/crear-subdiag");
var subdiagnostico_1 = require("../subdiagnostico/subdiagnostico");
/*
 Generated class for the Diagnostico page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var DiagnosticoPage = (function () {
    function DiagnosticoPage(navCtrl, navParams, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.paciente_subdiag = [];
        this.subdiag_uid = [];
        this.diagId = this.navParams.get('diagId');
        this.diags = af.database.list('/diags');
        this.Subdiags = af.database.list('/subdiagnosticos');
        this.subdiags_uid = af.database.list('/diags/' + this.diagId + '/subdiagnosticos');
        this.data = af.database.object('/diags/' + this.diagId);
        console.log(this.subdiags_uid);
        this.subdiags_uid.forEach(function (data) {
            data.forEach(function (item) {
                _this.subdiag_uid.push(item.uid);
                console.log(_this.subdiag_uid);
            });
        });
        this.Subdiags.forEach(function (data) {
            data.forEach(function (item) {
                _this.subdiag_uid.forEach(function (uid) {
                    if (item.$key == uid) {
                        _this.paciente_subdiag.push(item);
                        console.log(item);
                    }
                });
            });
            _this.paciente_subdiag.reverse();
        });
    }
    DiagnosticoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiagnosticoPage');
    };
    DiagnosticoPage.prototype.goToViewSub = function (SubdiagId) {
        this.navCtrl.push(subdiagnostico_1.SubdiagnosticoPage, {
            diagId: this.diagId,
            subId: SubdiagId
        });
    };
    DiagnosticoPage.prototype.addDiag = function () {
        console.log("Añadir diagnostico");
        this.navCtrl.push(crear_subdiag_1.CrearSubdiagPage, {
            diagId: this.diagId
        });
    };
    DiagnosticoPage = __decorate([
        core_1.Component({
            selector: 'page-diagnostico',
            templateUrl: 'diagnostico.html'
        })
    ], DiagnosticoPage);
    return DiagnosticoPage;
}());
exports.DiagnosticoPage = DiagnosticoPage;
