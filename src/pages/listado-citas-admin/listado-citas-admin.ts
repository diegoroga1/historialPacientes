import { MedicoscitaAdminPage } from './../medicoscita-admin/medicoscita-admin';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-listado-citas-admin',
  templateUrl: 'listado-citas-admin.html'
})
export class ListadoCitasAdminPage {


  citas;
  citaObservable: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams) {

    this.citaObservable = af.database.list('citas/');

    this.citaObservable.subscribe(aux => {
        this.citas = aux;
    });
    
  }

  

  accederCita(keyCita, uidMedico, uidPaciente) {

    this.navCtrl.push(MedicoscitaAdminPage, {
        keyCita: keyCita,
        uidMedico: uidMedico,
        uidPaciente: uidPaciente
    });
    //alert("Has accedido a la cita y su clave es: " + keyDiag + " uid del Médico: " + uidMedico +
    //" La uid del paciente es: " + uidPaciente );
  }

}
