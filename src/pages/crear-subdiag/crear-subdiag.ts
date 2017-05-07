import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CausaPage} from "../causa/causa";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {DiagnosticoPage} from "../diagnostico/diagnostico";

/*
  Generated class for the CrearSubdiag page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-crear-subdiag',
  templateUrl: 'crear-subdiag.html'
})
export class CrearSubdiagPage {
  diags: FirebaseListObservable<any>;
  subdiag: FirebaseListObservable<any>;
  diagId: string;
  citasM = {
    fecha: new Date().getDate() +'/'+ (new Date().getMonth()+1) + '/'+(new Date().getFullYear()),
    uid: ''
  }
  campos = {
    fecha: new Date().getDate() + '/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear(),
    hora:new Date().getHours()+ ':'+ new Date().getMinutes()

  };
  private firebase;
  constructor(public navCtrl: NavController, public navParams: NavParams, af:AngularFire) {
    this.firebase=af;
    this.diagId = this.navParams.get('diagId');
    this.diags = af.database.list('/subdiagnosticos');
  }
  add(){
    var IDkey,key;
    IDkey = this.diags.push(this.campos);
    key =  IDkey.key
    console.log(IDkey);
    this.citasM.uid = key;
    this.subdiag = this.firebase.database.list('/diags'+'/'+this.diagId+'/subdiagnosticos');
    this.subdiag.push(this.citasM)
    this.navCtrl.push(DiagnosticoPage,{
      diagId: this.diagId
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearSubdiagPage');
  }

}
