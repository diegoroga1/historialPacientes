import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-historialpaciente',
  templateUrl: 'historialpaciente.html'
})
export class HistorialpacientePage {
  
  diagnosticos;
//uidpaciente = 'iORou2Gu6pU9iECbldeC7sZQYZg1'; 
  diagObservable: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams) {
    
    this.diagObservable = af.database.list('diagnosticos/' + localStorage.getItem("user_uid"), {
      query:{
        orderByChild:'fecha'
      }
    });

    this.diagObservable.subscribe(aux => {
        console.log(aux);
        this.diagnosticos = aux;
      });
  }
  
  accederDiagnostico(keyDiag) {
    alert("Has accedido al diagnóstico y su clave es: " + keyDiag);
  }
  
}

