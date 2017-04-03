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

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public af:AngularFire) {
    this.diags=af.database.list('/diags',{
          }).map((array)=>array.reverse()) as FirebaseListObservable<any>;
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
