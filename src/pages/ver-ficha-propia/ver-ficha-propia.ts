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
  user_edad:any;
  user_sexo:any;
  user_dni:any;
  user_fecha:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire) {

    this.user_uid=localStorage.getItem("user_uid");
    this.diags=af.database.list("/usuarios/"+this.user_uid+"diagnosticos",{
    }).map((array)=>array.reverse()) as FirebaseListObservable<any>;
    this.diags.forEach(data=>{
      console.log(data);
    })
    this.user=af.database.list('/usuarios/'+this.user_uid);
    this.user.forEach(data=>{
      data.forEach(item=>{

        if(item.$key=="nombre") {
          this.user_name = item.$value;
        }
        if(item.$key=="edad") {
          this.user_edad = item.$value;
        }
        if(item.$key=="sexo") {
          this.user_sexo = item.$value;
        }
        if(item.$key=="dni") {
          this.user_dni = item.$value;
        }
        if(item.$key=="fecha") {
          this.user_fecha = item.$value;
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
