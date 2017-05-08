"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var vista_ficha_paciente_1 = require('../vista-ficha-paciente/vista-ficha-paciente');
/*
 Generated class for the Causa page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CausaPage = (function () {
    function CausaPage(navCtrl, navParams, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.campos = {
            fecha: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
            hora: new Date().getHours() + ':' + new Date().getMinutes()
        };
        this.diags = af.database.list('/diags');
    }
    CausaPage.prototype.add = function () {
        this.diags.push(this.campos);
        this.navCtrl.push(vista_ficha_paciente_1.VistaFichaPacientePage);
    };
    CausaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CausaPage');
    };
    CausaPage = __decorate([
        core_1.Component({
            selector: 'page-causa',
            templateUrl: 'causa.html'
        })
    ], CausaPage);
    return CausaPage;
}());
exports.CausaPage = CausaPage;
