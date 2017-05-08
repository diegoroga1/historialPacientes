import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {ModificarDatosPage} from "../modificar-datos/modificar-datos";

/*
  Generated class for the ModificarCuenta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modificar-cuenta',
  templateUrl: 'modificar-cuenta.html'
})
export class ModificarCuentaPage {

  usuarios:FirebaseListObservable<any>;
  datos:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public firebase: AngularFire,
              public alertCtrl: AlertController,
              public NavCtrl: NavController) {

    this.usuarios = firebase.database.list('/usuarios', {
      query: {
        orderByChild: 'especialidad',
      }
    });
  }

  modificarDatos(usuario){
    this.navCtrl.push(ModificarDatosPage, {
      uid: usuario
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarCuentaPage');
  }

}
