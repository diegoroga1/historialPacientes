import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";

/*
  Generated class for the CitasPendientesMedico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-citas-pendientes-medico',
  templateUrl: 'citas-pendientes-medico.html'
})
export class CitasPendientesMedicoPage {

  citas: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, af : AngularFire) {
    var user = localStorage.getItem("user_uid");
    this.citas = af.database.list('/usuarios/'+user+'/citas-medico');
  }
  cita(){
    console.log("hola esto es una cita");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CitasPendientesMedicoPage');
  }

}
