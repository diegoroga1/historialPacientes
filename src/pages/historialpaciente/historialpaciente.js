"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HistorialpacientePage = (function () {
    function HistorialpacientePage(navCtrl, af, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.af = af;
        this.navParams = navParams;
        this.diagObservable = af.database.list('diagnosticos/' + localStorage.getItem("user_uid"));
        this.usuario = af.database.list('/usuarios/' + localStorage.getItem("user_uid") + '/diagnosticos', { preserveSnapshot: true });
        this.usuario.subscribe(function (usuarios) {
            var temp;
            usuarios.forEach(function (usuario) {
                temp = usuario.val();
                temp.uidMedico = usuario.key;
                _this.uid = usuario.val().uid;
            });
        });
        this.diag = af.database.list('/diags/' + this.uid);
        this.diagObservable.subscribe(function (aux) {
            _this.diagnosticos = aux;
        });
    }
    HistorialpacientePage.prototype.accederDiagnostico = function (keyDiag) {
        alert("Has accedido al diagnóstico y su clave es: " + keyDiag);
    };
    HistorialpacientePage = __decorate([
        core_1.Component({
            selector: 'page-historialpaciente',
            templateUrl: 'historialpaciente.html'
        })
    ], HistorialpacientePage);
    return HistorialpacientePage;
}());
exports.HistorialpacientePage = HistorialpacientePage;
