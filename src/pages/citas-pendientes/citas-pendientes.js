"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
 Generated class for the CitasPendientes page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CitasPendientesPage = (function () {
    function CitasPendientesPage(firebase) {
        this.citasPendientes = [];
        this.firebase = firebase;
        this.citas = this.firebase.database.list('/usuarios/' + localStorage.getItem("user_uid") + '/citas', { preserveSnapshot: true });
    }
    CitasPendientesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.citas.subscribe(function (citas) {
            citas.forEach(function (cita) {
                var tempInfo = {};
                _this.firebase.database.object('/citas/' + cita.val().uid, { preserveSnapshot: true }).subscribe(function (infoCita) {
                    console.log(infoCita.val());
                    if (infoCita.val()) {
                        _this.firebase.database.object('/usuarios/' + infoCita.val().medico, { preserveSnapshot: true }).subscribe(function (infoMedico) {
                            tempInfo = infoCita.val();
                            tempInfo.nombreMedico = infoMedico.val().nombre;
                            _this.citasPendientes.push(tempInfo);
                        });
                    }
                });
            });
        });
    };
    CitasPendientesPage = __decorate([
        core_1.Component({
            selector: 'page-citas-pendientes',
            templateUrl: 'citas-pendientes.html'
        })
    ], CitasPendientesPage);
    return CitasPendientesPage;
}());
exports.CitasPendientesPage = CitasPendientesPage;
