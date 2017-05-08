import {Component, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {VistaFichaPacientePage} from '../vista-ficha-paciente/vista-ficha-paciente';

/*
 Generated class for the Causa page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-causa',
  templateUrl: 'causa.html'
})
export class CausaPage {
  diags: FirebaseListObservable<any>;
  medico: FirebaseListObservable<any>;
  paciente: FirebaseListObservable<any>;
  Uid = localStorage.getItem("user_uid");
  uid: any;
  diagmedico ={
    fecha: new Date().getDate() +'/'+ (new Date().getMonth()+1) + '/'+(new Date().getFullYear()),
    uid: ''
  };
  diagpaciente ={
    fecha: new Date().getDate() +'/'+ (new Date().getMonth()+1) + '/'+(new Date().getFullYear()),
    uid: ''
  };
  campos = {
    fecha: new Date().getDate() + '/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear(),
    hora:new Date().getHours()+ ':'+ new Date().getMinutes()

  };
  constructor(public navCtrl: NavController,public navParams: NavParams, af: AngularFire) {
    this.diags = af.database.list('/diags');
    this.uid= navParams.get('uid');
    console.log(this.uid)
    this.paciente = af.database.list('/usuarios/'+this.uid+'/diagnosticos')
    this.medico = af.database.list('/usuarios/'+this.Uid+'/diagnosticos');
<<<<<<< HEAD
  }

  add(){
    this.diags.push(this.campos);
    this.navCtrl.push(VistaFichaPacientePage);
=======

  }
  add(){
>>>>>>> 6119b5595a5ae9844f7df0ec274d5c5e76e86221
    var Idkey,key;
    Idkey = this.diags.push(this.campos);
    key = Idkey.key;
    this.diagmedico.uid = key;
    this.diagpaciente.uid = key;
<<<<<<< HEAD
    console.log(this.diagpaciente);
=======
>>>>>>> 6119b5595a5ae9844f7df0ec274d5c5e76e86221
    this.paciente.push(this.diagpaciente)
    this.medico.push(this.diagmedico)
    this.navCtrl.push(VistaFichaPacientePage,{uid:this.uid});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CausaPage');

  }

}
