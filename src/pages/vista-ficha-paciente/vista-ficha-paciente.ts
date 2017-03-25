import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController  } from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
import {CausaPage} from '../causa/causa';
import {DiagnosticoPage} from '../diagnostico/diagnostico';
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
    this.diags=af.database.list('/diags');

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
  showOptions(diagId, diagTitle) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'ver',
          role: 'ver',
          handler: () => {
            this.navCtrl.push(DiagnosticoPage,{
              diagId: diagId
            });
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
