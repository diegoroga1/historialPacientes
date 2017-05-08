import { Component,ViewChild } from '@angular/core';
import { Nav,NavController, NavParams } from 'ionic-angular';

import{ FichaPacientePage} from '../ficha-paciente/ficha-paciente';
import {BuscarpacientePage} from "../buscarpaciente/buscarpaciente";


import{ VistaFichaPacientePage} from '../vista-ficha-paciente/vista-ficha-paciente';
import {CitasPendientesMedicoPage} from "../citas-pendientes-medico/citas-pendientes-medico";
import {AngularFire} from "angularfire2";
import {PerfilPage} from "../perfil/perfil";
import {ListadoMedicosPage} from "../listado-medicos/listado-medicos";


@Component({
  selector: 'page-pantalla-medico',
  templateUrl: 'pantalla-medico.html',
})
export class IntroMedico {
  @ViewChild(Nav) nav: Nav;
  Uid = localStorage.getItem("user_uid");
  user:any;
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
    console.log('ionViewDidLoad PantallaMedicoPage');

  }
  buscarPaciente(){
      this.navCtrl.push(BuscarpacientePage);


  }
  irACitasPendientes(){
    this.navCtrl.push(CitasPendientesMedicoPage);
  }
  irAListadoMedicos(){
    console.log("Ir a Listado Medicos");
    this.navCtrl.push(ListadoMedicosPage);
  }
  IrAPerfil(){
    this.navCtrl.push(PerfilPage);
  }

}
