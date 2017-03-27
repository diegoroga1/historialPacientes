import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-historialpaciente',
  templateUrl: 'historialpaciente.html'
})
export class HistorialpacientePage {
  
  diagnosticos;
  claveDiagnostico;
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

  /*
      voltear() {

          if (Object.keys(this.diagnosticos).length < 2) {
            return;
          }

          if (Object.keys(this.diagnosticos).length == 2) {
              if (this.diagnosticos[1].fecha > this.diagnosticos[0].fecha) {
                this.diagnosticos.reverse();      
              }
              return;
          } 
          

          if ((this.diagnosticos[Object.keys(this.diagnosticos).length - 1].fecha > this.diagnosticos[Object.keys(this.diagnosticos).length - 2].fecha) 
          && (this.diagnosticos[Object.keys(this.diagnosticos).length - 2].fecha > this.diagnosticos[Object.keys(this.diagnosticos).length - 3].fecha)) {
              this.diagnosticos.reverse();
          } else {
            var ultimoElemento = this.diagnosticos.pop();
            this.diagnosticos.reverse();
            this.diagnosticos.push(ultimoElemento);
            this.diagnosticos.reverse();
          }
        }
       */
  
  accederDiagnostico(keyDiag) {
    alert("Has accedido al diagnóstico y su clave es: " + keyDiag);
  }
  
}

