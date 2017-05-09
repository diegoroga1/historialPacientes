import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {IntroPaciente} from "../pantalla-paciente/pantalla-paciente";

@Component({
  selector: 'page-pedircita',
  templateUrl: 'pedircita.html'
})
export class PedircitaPage {
  uid:string;
  citas: FirebaseListObservable<any>;
  medicos: FirebaseListObservable<any>;
  citasmedicos: FirebaseListObservable<any>;
  citaspaciente: FirebaseListObservable<any>;
  names = {

  };
  citasM = {
    fecha: new Date().getDate() +'/'+ (new Date().getMonth()+1) + '/'+(new Date().getFullYear()),
    uid: ''
  }
  nombres :any[]= []
  campos = {
    fecha: new Date().getDate() +'/'+ (new Date().getMonth()+1) + '/'+(new Date().getFullYear()),
    uidPaciente: '0',
    uidMedico: ''
  }
  private firebase;
  constructor(public navCtrl: NavController, public navParams: NavParams, af:AngularFire) {
    this.firebase = af;
    this.uid = this.navParams.get('userUid');
    this.campos.uidPaciente = this.uid;
    this.citas = af.database.list('/citas');
    this.medicos = af.database.list('/usuarios',{preserveSnapshot:true});

    //this.citasmedicos = af.database.list('/usuarios'+'/'+this.campos.medico+'/citas');
    console.log(this.campos.uidMedico)

    this.medicos.subscribe(usuarios => {
      var temp: any;
      usuarios.forEach(usuario => {
        temp = usuario.val();
        temp.uidMedico = usuario.key;
        usuario.val().tipo == "medico" ? this.nombres.push(temp) : false;
      });
    });

  }

  add(){
    var IDkey,key;
    IDkey = this.citas.push(this.campos);
    key =  IDkey.key
    console.log(IDkey);
    this.citasM.uid = key;
    this.citasmedicos = this.firebase.database.list('/usuarios'+'/'+this.campos.uidMedico+'/citas');
    this.citaspaciente = this.firebase.database.list('/usuarios'+'/'+this.uid+'/citas');
    this.citasmedicos.push(this.citasM);
    this.citaspaciente.push(this.citasM);

    this.navCtrl.setRoot(IntroPaciente);
  }

}
