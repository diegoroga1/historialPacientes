import { Component,ViewChild } from '@angular/core';
import { Nav,NavController, NavParams } from 'ionic-angular';
import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {CitasPendientesPage} from "../citas-pendientes/citas-pendientes";
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
  menuItems=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user='Hector Gonzalez Feo';
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

}
