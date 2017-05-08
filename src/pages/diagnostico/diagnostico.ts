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
<<<<<<< HEAD
  subdiags_uid:FirebaseListObservable<any>;
=======
>>>>>>> 6119b5595a5ae9844f7df0ec274d5c5e76e86221
  data: FirebaseObjectObservable<any>;
  diagId: string;
  paciente_subdiag=[];
  subdiag_uid=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, af : AngularFire) {
    this.diagId = this.navParams.get('diagId');
    this.diags = af.database.list('/diags');
    this.Subdiags = af.database.list('/subdiagnosticos');
<<<<<<< HEAD
    this.subdiags_uid=af.database.list('/diags/'+this.diagId+'/subdiagnosticos');
=======
>>>>>>> 6119b5595a5ae9844f7df0ec274d5c5e76e86221
    this.data = af.database.object('/diags/'+this.diagId);

    console.log(this.subdiags_uid);
    this.subdiags_uid.forEach(data=>{
      data.forEach(item=>{
        this.subdiag_uid.push(item.uid);
        console.log(this.subdiag_uid);
      })
    })
    this.Subdiags.forEach(data=>{
      data.forEach(item=>{
        this.subdiag_uid.forEach(uid=>{
          if(item.$key==uid){
            this.paciente_subdiag.push(item);
            console.log(item);
          }
        })
      })
      this.paciente_subdiag.reverse();
    })


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
