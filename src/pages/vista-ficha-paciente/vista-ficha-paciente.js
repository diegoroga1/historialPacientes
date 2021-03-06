"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var causa_1 = require('../causa/causa');
var diagnostico_1 = require('../diagnostico/diagnostico');
var pedircita_1 = require('../pedircita/pedircita');
require("rxjs/add/operator/map");
/*
  Generated class for the VistaFichaPaciente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var VistaFichaPacientePage = (function () {
    function VistaFichaPacientePage(navCtrl, navParams, actionSheetCtrl, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.af = af;
        this.diags_uid = [];
        this.paciente_diag = [];
        this.user_uid = this.navParams.get("uid");
        this.diags = af.database.list('/usuarios/' + this.user_uid + "/diagnosticos");
        this.list_diags = af.database.list('/diags');
        this.diags.forEach(function (data) {
            data.forEach(function (item) {
                _this.diags_uid.push(item.uid);
            });
        });
        this.list_diags.forEach(function (data2) {
            data2.forEach(function (item2) {
                _this.diags_uid.forEach(function (uid) {
                    if (item2.$key == uid) {
                        _this.paciente_diag.push(item2);
                    }
                });
            });
            console.log(_this.paciente_diag);
            _this.paciente_diag.reverse();
        });
        this.user = af.database.list('/usuarios/' + this.user_uid);
        this.user.forEach(function (data) {
            data.forEach(function (item) {
                if (item.$key == "nombre") {
                    _this.user_name = item.$value;
                }
                if (item.$key == "edad") {
                    _this.user_edad = item.$value;
                }
                if (item.$key == "sexo") {
                    _this.user_sexo = item.$value;
                }
                if (item.$key == "dni") {
                    _this.user_dni = item.$value;
                }
                if (item.$key == "fecha") {
                    _this.user_fecha = item.$value;
                }
            });
        });
    }
    VistaFichaPacientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VistaFichaPacientePage');
    };
    VistaFichaPacientePage.prototype.getDiags = function () {
        this.af.database.list('/diags');
    };
    VistaFichaPacientePage.prototype.pedirCita = function () {
        this.navCtrl.push(pedircita_1.PedircitaPage);
    };
    VistaFichaPacientePage.prototype.addDiag = function () {
        console.log("Añadir diagnostico");
        this.navCtrl.push(causa_1.CausaPage, {
            uid: this.user_uid
        });
    };
    VistaFichaPacientePage.prototype.goToViewDiag = function (diagId) {
        this.navCtrl.push(diagnostico_1.DiagnosticoPage, {
            diagId: diagId
        });
    };
    VistaFichaPacientePage = __decorate([
        core_1.Component({
            selector: 'page-vista-ficha-paciente',
            templateUrl: 'vista-ficha-paciente.html'
        })
    ], VistaFichaPacientePage);
    return VistaFichaPacientePage;
}());
exports.VistaFichaPacientePage = VistaFichaPacientePage;
