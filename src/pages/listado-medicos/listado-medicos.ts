import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";

/*
  Generated class for the ListadoMedicos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listado-medicos',
  templateUrl: 'listado-medicos.html'
})
export class ListadoMedicosPage {

  todos: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebase: AngularFire) {
    this.todos = firebase.database.list('/usuarios');
  }


}
