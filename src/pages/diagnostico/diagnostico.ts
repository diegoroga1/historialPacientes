import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire, FirebaseObjectObservable} from "angularfire2";

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
  data: FirebaseObjectObservable<any>;
  diagId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, af : AngularFire) {
    this.diagId = this.navParams.get('diagId');
    this.diags = af.database.list('/diags');
    this.data = af.database.object('/diags/'+this.diagId);
    console.log(this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticoPage');
  }

}
