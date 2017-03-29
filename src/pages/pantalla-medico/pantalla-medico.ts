import { Component,ViewChild } from '@angular/core';
import { Nav,NavController, NavParams } from 'ionic-angular';
import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {CitasPendientesMedicoPage} from "../citas-pendientes-medico/citas-pendientes-medico";


@Component({
  selector: 'page-pantalla-medico',
  templateUrl: 'pantalla-medico.html',
})
export class IntroMedico {
  @ViewChild(Nav) nav: Nav;
  user:any;
  menuItems=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user='Diego Rodriguez Garcia';
    this.menuItems=[
      'Perfil',
      'Pacientes',
      'Citas',
      'Médicos',
      'Cerrar sesion'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantallaMedicoPage');

  }
  buscarPaciente(){
    console.log("Ir a buscar paciente");
  }
  irACitasPendientes(){
    this.navCtrl.push(CitasPendientesMedicoPage);
  }
  irAListadoMedicos(){
    console.log("Ir a Listado Medicos");
  }
  irAPerfilMedico(){
    console.log("Ir a Perfil");
  }

}
