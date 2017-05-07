import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import {CausaPage} from '../causa/causa';
import {DiagnosticoPage} from '../diagnostico/diagnostico';
import "rxjs/add/operator/map";
/*
  Generated class for the VerFichaPropia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ver-ficha-propia',
  templateUrl: 'ver-ficha-propia.html'
})
export class VerFichaPropiaPage {
  diags:FirebaseListObservable<any>;
  user:FirebaseListObservable<any>;
  user_uid:any;
  user_name:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire) {
    this.diags=af.database.list('/diags',{
    }).map((array)=>array.reverse()) as FirebaseListObservable<any>;
    this.user_uid=localStorage.getItem("user_uid");
    this.user=af.database.list('/usuarios/'+this.user_uid);
    this.user.forEach(data=>{
      data.forEach(item=>{
        if(item.$key=="nombre"){
          this.user_name=item.$value;
          console.log(this.user_name);
        }
      })

    })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VerFichaPropiaPage');
  }
  getDiags(){
    this.af.database.list('/diags');
  }

  goToViewDiag(diagId){
    this.navCtrl.push(DiagnosticoPage,{
      diagId: diagId
    });
  }

}
