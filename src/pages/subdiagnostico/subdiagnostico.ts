import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, FirebaseObjectObservable, AngularFire} from "angularfire2";

/*
  Generated class for the Subdiagnostico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subdiagnostico',
  templateUrl: 'subdiagnostico.html'
})
export class SubdiagnosticoPage {
  diags: FirebaseListObservable<any>;
  Subdiags: FirebaseListObservable<any>;
  data: FirebaseObjectObservable<any>;
  diagId: string;
  subId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, af : AngularFire) {
    this.diagId = this.navParams.get('diagId');
    this.subId = this.navParams.get('subId');
    this.diags = af.database.list('/diags/'+this.diagId+'/subdiagnosticos');
    this.Subdiags = af.database.list('/subdiagnosticos');
    console.log(this.Subdiags)
    this.data = af.database.object('/diags/'+this.diagId);
<<<<<<< HEAD

=======
>>>>>>> 6119b5595a5ae9844f7df0ec274d5c5e76e86221
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubdiagnosticoPage');
  }

}
