"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
//import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
var pedircita_1 = require("../pedircita/pedircita");
var citas_pendientes_1 = require("../citas-pendientes/citas-pendientes");
var historialpaciente_1 = require("../historialpaciente/historialpaciente");
/*
 Generated class for the PantallaPaciente page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var IntroPaciente = (function () {
    function IntroPaciente(navCtrl, navParams, firebase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Uid = localStorage.getItem("user_uid");
        this.menuItems = [];
        firebase.database.object('/usuarios/' + this.Uid, { preserveSnapshot: true }).subscribe(function (info) {
            _this.user = info.val().nombre;
        });
        this.menuItems = [
            'Perfil',
            'Pacientes',
            'Citas',
            'Médicos',
            'Cerrar sesion'
        ];
    }
    IntroPaciente.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PantallaPacientePage');
    };
    IntroPaciente.prototype.irAPedirCita = function () {
        this.navCtrl.push(pedircita_1.PedircitaPage, {
            userUid: this.Uid
        });
    };
    IntroPaciente.prototype.buscarPaciente = function () {
        console.log("Ir a buscar paciente");
    };
    IntroPaciente.prototype.irACitasPendientes = function () {
        console.log("Ir a Citas pendientes");
        this.navCtrl.push(citas_pendientes_1.CitasPendientesPage);
    };
    IntroPaciente.prototype.irAListadoMedicos = function () {
        console.log("Ir a Listado Medicos");
    };
    IntroPaciente.prototype.irAPerfilMedico = function () {
        console.log("Ir a Perfil");
    };
    IntroPaciente.prototype.irAPerfil = function () {
        console.log("ir a perfil");
    };
    IntroPaciente.prototype.verFichaPaciente = function () {
        this.navCtrl.push(historialpaciente_1.HistorialpacientePage);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav)
    ], IntroPaciente.prototype, "nav", void 0);
    IntroPaciente = __decorate([
        core_1.Component({
            selector: 'page-pantalla-paciente',
            templateUrl: 'pantalla-paciente.html',
        })
    ], IntroPaciente);
    return IntroPaciente;
}());
exports.IntroPaciente = IntroPaciente;
