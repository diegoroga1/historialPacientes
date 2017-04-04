import { Component,ViewChild } from '@angular/core';
import { Nav,NavController, NavParams } from 'ionic-angular';
//import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {PedircitaPage} from "../pedircita/pedircita";
//import Auth = firebase.auth.Auth;
import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {CitasPendientesPage} from "../citas-pendientes/citas-pendientes";
import {HistorialpacientePage} from "../historialpaciente/historialpaciente";
import {AngularFire} from "angularfire2";
/*
 Generated class for the PantallaPaciente page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-pantalla-paciente',
  templateUrl: 'pantalla-paciente.html',
})
export class IntroPaciente {
  @ViewChild(Nav) nav: Nav;
  user:any;
  Uid = localStorage.getItem("user_uid");
  menuItems=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, firebase: AngularFire) {
    firebase.database.object('/usuarios/'+this.Uid,{preserveSnapshot: true}).subscribe(info => {
      this.user = info.val().nombre;
    });
    this.menuItems=[
      'Perfil',
      'Pacientes',
      'Citas',
      'Médicos',
      'Cerrar sesion'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallaPacientePage');

  }
  irAPedirCita(){
    this.navCtrl.push(PedircitaPage,{
      userUid: this.Uid
    });
  }
  buscarPaciente(){
    console.log("Ir a buscar paciente");
  }
  irACitasPendientes(){
    console.log("Ir a Citas pendientes");
    this.navCtrl.push(CitasPendientesPage);
  }
  irAListadoMedicos(){
    console.log("Ir a Listado Medicos");
  }
  irAPerfilMedico(){
    console.log("Ir a Perfil");
  }
  irAPerfil(){
    console.log("ir a perfil");
  }

  verFichaPaciente(){
    this.navCtrl.push(HistorialpacientePage);
  }

}
