import { Component,ViewChild } from '@angular/core';
import { Nav,NavController, NavParams } from 'ionic-angular';
import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {BuscarpacientePage} from "../buscarpaciente/buscarpaciente";
/*
  Generated class for the PantallaMedico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

      this.navCtrl.push(BuscarpacientePage);
  }
  irACitasPendientes(){
    console.log("Ir a Citas pendientes");
  }
  irAListadoMedicos(){
    console.log("Ir a Listado Medicos");
  }
  irAPerfilMedico(){
    console.log("Ir a Perfil");
  }

}
