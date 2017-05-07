import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire, FirebaseObjectObservable} from "angularfire2";
import {CrearSubdiagPage} from "../crear-subdiag/crear-subdiag";
import {SubdiagnosticoPage} from "../subdiagnostico/subdiagnostico";

/*
 Generated class for the Diagnostico page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html'
})
export class DiagnosticoPage {
  diags: FirebaseListObservable<any>;
  Subdiags: FirebaseListObservable<any>;
  data: FirebaseObjectObservable<any>;
  diagId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, af : AngularFire) {
    this.diagId = this.navParams.get('diagId');
    this.diags = af.database.list('/diags');
    this.Subdiags = af.database.list('/subdiagnosticos');
    this.data = af.database.object('/diags/'+this.diagId);
    console.log(this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticoPage');
  }
  goToViewSub(SubdiagId){
    this.navCtrl.push(SubdiagnosticoPage,{
      diagId: this.diagId,
      subId: SubdiagId
    });
  }
  addDiag(){
    console.log("Añadir diagnostico");
    this.navCtrl.push(CrearSubdiagPage,{
      diagId : this.diagId
    });
  }

}
