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

  campos = {
    fecha: new Date().getDate() + '/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear(),
    hora:new Date().getHours()+ ':'+ new Date().getMinutes()

  };
  constructor(public navCtrl: NavController,public navParams: NavParams, af: AngularFire) {
    this.diags = af.database.list('/diags');


  }
  add(){
    this.diags.push(this.campos);
    this.navCtrl.push(VistaFichaPacientePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CausaPage');

  }

}
