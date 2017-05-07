import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import {Alert, AlertController, NavController, NavParams, ToastController} from 'ionic-angular';


@Component({
  selector: 'page-listado-citas-admin',
  templateUrl: 'listado-citas-admin.html'
})
export class ListadoCitasAdminPage {


  citas;
  citaObservable: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams, public alert: AlertController, public toast:ToastController) {

    this.citaObservable = af.database.list('citas/');

    this.citaObservable.subscribe(aux => {
        this.citas = aux;
    });
  }

  accederCita(keyDiag, uidMedico, uidPaciente) {
    alert("Has accedido a la cita y su clave es: " + keyDiag + " uid del Médico: " + uidMedico +
    " La uid del paciente es: " + uidPaciente );
  }


  anularCita(keyDiag){
    let popup = this.alert.create();
    popup.setTitle('Anular cita');
    popup.setMessage('¿Está seguro que quiere anular esta cita?');
    popup.addButton('Cancelar');
    popup.addButton({
      text: 'Aceptar',
      handler: () => {
        this.citaObservable.remove(keyDiag).then(() => {
          let toast = this.toast.create({
            message: 'Se ha anulado la cita correctamente',
            duration: 3000
          });
          toast.present();
        });
      }
    });
    popup.present();
  }

}
