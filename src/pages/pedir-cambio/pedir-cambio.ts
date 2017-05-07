import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {FirebaseListObservable,AngularFire} from "angularfire2";
import {CitasPendientesPage} from "../citas-pendientes/citas-pendientes";

@Component({
  selector: 'page-pedir-cambio',
  templateUrl: 'pedir-cambio.html'
})
export class PedirCambioPage {
  user_name:any;
  user_uid:any;
  user:any;
  cita_uid:any;
  citas:FirebaseListObservable<any>;
  cambios:FirebaseListObservable<any>;
  cita:FirebaseListObservable<any>;
  descripcion:'';
  constructor(public navCtrl: NavController,public af:AngularFire,public alertCtrl:AlertController, public navParams: NavParams) {
    this.cambios=af.database.list('/citasCambio');
    this.cita_uid=this.navParams.get('cita');
    this.citas=af.database.list('/citas');
    console.log(this.citas);

  }
  presentConfirm(form) {
    let alert = this.alertCtrl.create({
      title: 'Cambiar Cita',
      message: '¿Quieres cambiar la cita?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {

            this.actualizaEstadoCita(form);
            this.navCtrl.push(CitasPendientesPage);
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PedirCambioPage');
  }
  actualizaEstadoCita(form:any) {
    this.descripcion=form.value.descripcion;
  console.log(this.descripcion);
    this.af.database.object('/citas/'+this.cita_uid).update({estado:"cambio"})
    this.cambios.push({
      cita_uid:this.cita_uid,
      descripcion:this.descripcion
    });
  }

}
