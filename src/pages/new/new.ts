import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {DiagnosticoPage} from "../diagnostico/diagnostico";
import {CausaPage} from "../causa/causa";

/*
 Generated class for the New page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 añadir algo para poder ver el contenido del diagnostico, en el showoptions()
 */
@Component({
  selector: 'page-new',
  templateUrl: 'new.html'
})
export class NewPage {
  diags: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, af: AngularFire) {
    this.diags = af.database.list('/diags');
  }
  addDiag(){
    this.navCtrl.push(CausaPage);
    /*let prompt = this.alertCtrl.create({
     title: 'Diagnóstico',
     message: "Rellena los datos del nuevo diagnóstico",
     inputs: [
     {
     name: 'title',
     placeholder: 'Nombre del diagnóstico'
     },
     {
     type: 'text',
     name: 'Causa',
     placeholder: 'Causa de atencion'
     },
     {
     name: 'Padecimiento actual',
     placeholder: 'Padecimiento actual...'
     },
     {
     name: 'Diagnóstico definitivo',
     placeholder: 'Diagnóstico definitivo...'
     },
     ],
     buttons: [
     {
     text: 'Cancelar',
     handler: data => {
     console.log('Cancel clicked');
     }
     },
     {
     text: 'Crear',
     /*handler: data => {
     this.diags.push({
     title: data.title
     });
     }
     handler: () => {
     this.navCtrl.push(CausaPage);
     }
     }
     ]
     });
     prompt.present();*/
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
        },
        {
          text: 'Borrar',
          role: 'destructive',
          handler: () => {
            this.removeDiag(diagId);
          }
        },{
          text: 'Modificar',
          handler: () => {
            this.updateDiag(diagId, diagTitle);
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

  updateDiag(diagId, diagTitle){
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: "Modifica el diagnóstico",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: diagTitle
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.diags.update(diagId, {
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
  }

  removeDiag(diagId: string){
    this.diags.remove(diagId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
