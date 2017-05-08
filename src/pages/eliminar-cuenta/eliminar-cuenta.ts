import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseAuth, FirebaseListObservable} from "angularfire2";

/*
  Generated class for the EliminarCuenta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eliminar-cuenta',
  templateUrl: 'eliminar-cuenta.html'
})
export class EliminarCuentaPage {

  usuarios:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: AngularFire, public auth: FirebaseAuth) {

    this.usuarios = firebase.database.list('/usuarios', {
      query: {
        orderByChild: 'especialidad',
      }
    });
  }

  eliminarCuenta(usuario){
    this.firebase.database.object('/usuarios/'+usuario).remove();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EliminarCuentaPage');
  }

}
