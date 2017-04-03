import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {IntroPaciente} from "../pantalla-paciente/pantalla-paciente";


/*
 Generated class for the Pedircita page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-pedircita',
  templateUrl: 'pedircita.html'
})
export class PedircitaPage {
  uid:string;
  citas: FirebaseListObservable<any>;
  medicos: FirebaseListObservable<any>;
  names = {

  };
  nombres :any[]= []
  campos = {
    fecha: new Date().getDate() +'/'+ (new Date().getMonth()+1) + '/'+(new Date().getFullYear()),
    uidPaciente: '0'
  }
  private firebase;
  constructor(public navCtrl: NavController, public navParams: NavParams, af:AngularFire) {
    this.firebase = af;
    this.uid = this.navParams.get('userUid');
    this.campos.uidPaciente = this.uid;
    this.citas = af.database.list('/citas');
    this.medicos = af.database.list('/usuarios',{preserveSnapshot:true});

    this.medicos.subscribe(usuarios => {
      var temp: any;
      usuarios.forEach(usuario => {
        temp = usuario.val();
        temp.uidMedico = usuario.key;
        usuario.val().tipo == "medico" ? this.nombres.push(temp) : false;
        console.log(this.nombres)
      });
    });

  }

  add(){
    this.citas.push(this.campos);
    this.navCtrl.push(IntroPaciente);
  }

}
