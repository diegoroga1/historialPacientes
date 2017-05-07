import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController  } from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import {CausaPage} from '../causa/causa';
import {DiagnosticoPage} from '../diagnostico/diagnostico';
import "rxjs/add/operator/map";

/*
  Generated class for the VistaFichaPaciente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vista-ficha-paciente',
  templateUrl: 'vista-ficha-paciente.html'
})
export class VistaFichaPacientePage {
  diags:FirebaseListObservable<any>;
  user:FirebaseListObservable<any>;
  user_name:any;
  user_edad:any;
  user_fecha:any;
  user_sexo:any;
  user_dni:any;
  user_uid:any;
  diags_uid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public af:AngularFire) {
    this.user_uid=this.navParams.get("uid");
    this.diags=af.database.list('/usuarios/'+this.user_uid+"diagnosticos",{
          }).map((array)=>array.reverse()) as FirebaseListObservable<any>;
    this.diags.forEach(data=>{
      console.log(data);
      data.forEach(item=>{
        this.diags_uid=item.$key;

      })
    })
    this.user=af.database.list('/usuarios/'+this.user_uid);
    this.user.forEach(data=> {
      data.forEach(item => {
        console.log(item);
        if (item.$key == "nombre") {
          this.user_name = item.$value;
        }
        if (item.$key == "edad") {
          this.user_edad = item.$value;
        }
        if (item.$key == "sexo") {
          this.user_sexo = item.$value;
        }
        if (item.$key == "dni") {
          this.user_dni = item.$value;
        }
        if (item.$key == "fecha") {
          this.user_fecha = item.$value;
        }
      })
    })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaFichaPacientePage');
  }
  getDiags(){
    this.af.database.list('/diags');
  }
  addDiag(){
    console.log("Añadir diagnostico");
    this.navCtrl.push(CausaPage);
  }
  goToViewDiag(diagId){
    this.navCtrl.push(DiagnosticoPage,{
      diagId: diagId
    });
  }

}
