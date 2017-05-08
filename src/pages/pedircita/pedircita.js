"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var pantalla_paciente_1 = require("../pantalla-paciente/pantalla-paciente");
var PedircitaPage = (function () {
    function PedircitaPage(navCtrl, navParams, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.names = {};
        this.citasM = {
            fecha: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getFullYear()),
            uid: ''
        };
        this.nombres = [];
        this.campos = {
            fecha: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getFullYear()),
            uidPaciente: '0',
            uidMedico: ''
        };
        this.firebase = af;
        this.uid = this.navParams.get('userUid');
        this.campos.uidPaciente = this.uid;
        this.citas = af.database.list('/citas');
        this.medicos = af.database.list('/usuarios', { preserveSnapshot: true });
        //this.citasmedicos = af.database.list('/usuarios'+'/'+this.campos.medico+'/citas');
        console.log(this.campos.uidMedico);
        this.medicos.subscribe(function (usuarios) {
            var temp;
            usuarios.forEach(function (usuario) {
                temp = usuario.val();
                temp.uidMedico = usuario.key;
                usuario.val().tipo == "medico" ? _this.nombres.push(temp) : false;
            });
        });
    }
    PedircitaPage.prototype.add = function () {
        var IDkey, key;
        IDkey = this.citas.push(this.campos);
        key = IDkey.key;
        console.log(IDkey);
        this.citasM.uid = key;
        this.citasmedicos = this.firebase.database.list('/usuarios' + '/' + this.campos.uidMedico + '/citas');
        this.citaspaciente = this.firebase.database.list('/usuarios' + '/' + this.uid + '/citas');
        this.citasmedicos.push(this.citasM);
        this.citaspaciente.push(this.citasM);
        this.navCtrl.push(pantalla_paciente_1.IntroPaciente);
    };
    PedircitaPage = __decorate([
        core_1.Component({
            selector: 'page-pedircita',
            templateUrl: 'pedircita.html'
        })
    ], PedircitaPage);
    return PedircitaPage;
}());
exports.PedircitaPage = PedircitaPage;
