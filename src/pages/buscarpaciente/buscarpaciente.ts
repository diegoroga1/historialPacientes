import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {VistaFichaPacientePage} from "../vista-ficha-paciente/vista-ficha-paciente";

/*
  Generated class for the Buscarpaciente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-buscarpaciente',
  templateUrl: 'buscarpaciente.html'
})
export class BuscarpacientePage {

  pacientes: any;
  pacientes2: FirebaseListObservable<any>;
  arraypacientes = [];
  i=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: AngularFire) {
    this.initializeItems();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarpacientePage');
  }


  pasarNombrePaciente(uid){
    this.navCtrl.push(VistaFichaPacientePage,{uid:uid});
  }


  initializeItems(){
    this.pacientes2 = this.firebase.database.list('/usuarios/');
    this.pacientes = this.firebase.database.list('/usuarios/', { preserveSnapshot: true})
      .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          if(snapshot.val().tipo =='paciente'){
            this.arraypacientes[this.i]={
              nombre: snapshot.val().nombre,
              id: snapshot.key
            }
            this.i=this.i+1;
            console.log(this.arraypacientes);
          }
        });
        this.i = 0;
      })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log("variable: " + val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.arraypacientes = this.arraypacientes.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
