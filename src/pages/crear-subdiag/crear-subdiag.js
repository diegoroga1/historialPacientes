"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var diagnostico_1 = require("../diagnostico/diagnostico");
/*
  Generated class for the CrearSubdiag page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CrearSubdiagPage = (function () {
    function CrearSubdiagPage(navCtrl, navParams, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.citasM = {
            fecha: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getFullYear()),
            uid: ''
        };
        this.campos = {
            fecha: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
            hora: new Date().getHours() + ':' + new Date().getMinutes()
        };
        this.firebase = af;
        this.diagId = this.navParams.get('diagId');
        this.diags = af.database.list('/subdiagnosticos');
    }
    CrearSubdiagPage.prototype.add = function () {
        var IDkey, key;
        IDkey = this.diags.push(this.campos);
        key = IDkey.key;
        console.log(IDkey);
        this.citasM.uid = key;
        this.subdiag = this.firebase.database.list('/diags' + '/' + this.diagId + '/subdiagnosticos');
        this.subdiag.push(this.citasM);
        this.navCtrl.push(diagnostico_1.DiagnosticoPage, {
            diagId: this.diagId
        });
    };
    CrearSubdiagPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearSubdiagPage');
    };
    CrearSubdiagPage = __decorate([
        core_1.Component({
            selector: 'page-crear-subdiag',
            templateUrl: 'crear-subdiag.html'
        })
    ], CrearSubdiagPage);
    return CrearSubdiagPage;
}());
exports.CrearSubdiagPage = CrearSubdiagPage;
