import { MedicoscitaAdminPage } from './../medicoscita-admin/medicoscita-admin';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import {Alert, AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import { DatePicker } from "@ionic-native/date-picker";
import { ModalHorarioPage } from "../modal-horario/modal-horario";


@Component({
  selector: 'page-listado-citas-admin',
  templateUrl: 'listado-citas-admin.html'
})
export class ListadoCitasAdminPage {

  citas;
  citaObservable: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams, public alert: AlertController, public toast: ToastController, public datePicker: DatePicker) {

    this.citaObservable = af.database.list('citas/');

    this.citaObservable.subscribe(aux => {
        this.citas = aux;
    });
    
  }

  

  accederCita(keyCita, uidPaciente, estado, especialidad, medicoAsignado) {

    if (estado == "espera") {
      this.navCtrl.push(MedicoscitaAdminPage, {
          keyCita: keyCita,
          uidPaciente: uidPaciente,
          especialidad: especialidad
      });
    }

    if (estado == "cambio") {
        this.irACalendarioCambio (uidPaciente, medicoAsignado, keyCita);
    }
  }


      /*
      this.navCtrl.push(MedicoscitaAdminPage, {
          keyCita: keyCita,
          uidMedico: medicoAsignado,
          uidPaciente: uidPaciente
      });*/
        

    //alert("Has accedido a la cita y su clave es: " + keyDiag + " uid del Médico: " + uidMedico +
    //" La uid del paciente es: " + uidPaciente );
  

    irACalendarioCambio (uidPaciente, codigoMedico, keyCita) {
      this.datePicker.show({
          date: new Date(),
          minDate: new Date(),
          mode: 'date',
          allowOldDates: false,
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
          
      }).then(
          date => {
            console.log('Got date: ', date);
            this.irAModal(date, codigoMedico, uidPaciente, keyCita);
            },
          err => console.log('Error occurred while getting date: ', err)
      );   
  }

    irAModal(fecha, codigoMedico, uidPaciente, keyCita) {
      console.log("Ir A MODAL" + codigoMedico);
        this.navCtrl.push(ModalHorarioPage, {
            fecha: fecha,
            clavePac: uidPaciente,
            claveMed: codigoMedico,
            claveCi:  keyCita,
            cambio : true
        });
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
