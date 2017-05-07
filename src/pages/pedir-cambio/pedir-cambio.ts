import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pedir-cambio',
  templateUrl: 'pedir-cambio.html'
})
export class PedirCambioPage {
  user_name:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedirCambioPage');
  }

}
