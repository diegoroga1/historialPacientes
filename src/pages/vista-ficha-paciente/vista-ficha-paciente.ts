import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController  } from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import {CausaPage} from '../causa/causa';
import {DiagnosticoPage} from '../diagnostico/diagnostico';
import {PedircitaPage} from '../pedircita/pedircita';
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
  diags_uid=[];
  list_diags:FirebaseListObservable<any>;
  paciente_diag=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public af:AngularFire) {
    this.user_uid=this.navParams.get("uid");
    this.diags=af.database.list('/usuarios/'+this.user_uid+"/diagnosticos");
    this.list_diags=af.database.list('/diags');
    this.diags.forEach(data=>{
      data.forEach(item=>{
        this.diags_uid.push(item.uid)
        })
      })
    this.list_diags.forEach(data2=>{
      data2.forEach(item2=>{
        this.diags_uid.forEach(uid=>{
          if(item2.$key==uid){
            this.paciente_diag.push(item2)
          }
        })

      })
      console.log(this.paciente_diag);
      this.paciente_diag.reverse();
    })
    this.user=af.database.list('/usuarios/'+this.user_uid)
    this.user.forEach(data=> {
      data.forEach(item => {
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
  uid: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaFichaPacientePage');
  }
  getDiags(){
    this.af.database.list('/diags');
  }
  pedirCita(){
    this.navCtrl.push(PedircitaPage);
  }
  addDiag(){
    console.log("Añadir diagnostico");
    this.navCtrl.push(CausaPage,{
      uid:this.user_uid
    });

  }
  goToViewDiag(diagId){
    this.navCtrl.push(DiagnosticoPage,{
      diagId: diagId
    });
  }

}
