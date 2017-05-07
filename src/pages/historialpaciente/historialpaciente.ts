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
  diag: FirebaseListObservable<any[]>;
  usuario: FirebaseListObservable<any>;
  uid:any;
  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams) {

    this.diagObservable = af.database.list('diagnosticos/' + localStorage.getItem("user_uid"));
    this.usuario = af.database.list('/usuarios/'+localStorage.getItem("user_uid")+'/diagnosticos',{preserveSnapshot:true});
    this.usuario.subscribe(usuarios => {
      var temp: any;
      usuarios.forEach(usuario => {
        temp = usuario.val();
        temp.uidMedico = usuario.key;
        this.uid = usuario.val().uid
      });
    });
    this.diag = af.database.list('/diags/'+this.uid);
    this.diagObservable.subscribe(aux => {
        this.diagnosticos = aux;
      });
  }

  accederDiagnostico(keyDiag) {
    alert("Has accedido al diagnóstico y su clave es: " + keyDiag);
  }

}

