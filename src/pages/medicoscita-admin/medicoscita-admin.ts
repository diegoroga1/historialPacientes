import { ModalHorarioPage } from './../modal-horario/modal-horario';
import { VerCalendarioPage } from './../ver-calendario/ver-calendario';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { DatePipe } from "@angular/common";
import { DatePicker } from "@ionic-native/date-picker";

/*
  Generated class for the MedicoscitaAdmin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-medicoscita-admin',
  templateUrl: 'medicoscita-admin.html'
})
export class MedicoscitaAdminPage {

  claveCita;
  claveMedico;
  clavePaciente;

  paciente;
  medico;
  diagnostico;
  especialidad;
  listadoUsuarios;
  arrayMedicos = [];
  horaInicial;
  fechaElegida;

  especialidadObservable: FirebaseObjectObservable<any>;
  medicosObservable: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af : AngularFire,
  public datepipe: DatePipe, public datePicker: DatePicker, public datePicker2: DatePicker) {

      this.clavePaciente = navParams.get("uidPaciente");
      this.claveMedico = navParams.get("uidMedico");
      this.claveCita = navParams.get("keyCita");

      this.especialidadObservable = af.database.object('usuarios/' + this.claveMedico);

      this.especialidadObservable.subscribe(aux => {
          this.medico = aux;
          this.especialidad = this.medico.especialidad;
      });

      this.medicosObservable = af.database.list('usuarios/');
      this.medicosObservable.subscribe(aux2 => {
          this.listadoUsuarios = aux2;

          this.listadoUsuarios.forEach(element => {
            var existe = false;
            
            if (element.especialidad == this.especialidad) {
                
                for (var i= 0; i < this.arrayMedicos.length; i++) {
                    if (element.$key == this.arrayMedicos[i].$key) {
                        existe = true;
                        break;
                    }
                }

            } else {
              existe = true;
            }

            if (!existe) {
                this.arrayMedicos.push(element);
            }
          });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicoscitaAdminPage');
  }


  irACalendario (codigoMedico) {
      this.datePicker.show({
          date: new Date(),
          minDate: new Date(),
          mode: 'date',
          allowOldDates: false,
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
          
      }).then(
          date => {
            console.log('Got date: ', date);
            this.irAModal(date, codigoMedico);
            },
          err => console.log('Error occurred while getting date: ', err)
      );
      
  }

    irAModal(fecha, claveMed) {
    this.navCtrl.push(ModalHorarioPage, {
        fecha: fecha,
        clavePac: this.clavePaciente,
        claveMed: claveMed,
        claveCi:  this.claveCita
    });
  }
  
}
/*
  mostrarMinutero (fecha) {
    console.log("fechaMinutero");
    console.log(fecha);
    //this.horaInicial = fecha;    
    //this.horaInicial = this.horaInicial.setMinutes(0);
    //this.horaInicial = this.datepipe.transform(this.horaInicial, 'mm-ss');

    this.datePicker2.show({
        date: fecha,
        minDate: fecha,
        mode: 'time',
        allowOldDates: false,
        minuteInterval: 30,
        is24Hour: true,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL
        
    }).then(
        date => console.log('Got date: ', date),
        err => console.log('Error occurred while getting minutes: ', err)
    );
  }

*/





    /*
      this.horaInicial = new Date();
      this.horaInicial = this.horaInicial.setHours(8);
      //this.horaInicial = this.horaInicial.setMinutes(0);
      this.horaInicial = this.datepipe.transform(this.horaInicial, 'mm-ss');

      console.log(this.horaInicial);*/
/*
    this.navCtrl.push(VerCalendarioPage, {
        claveCita: this.claveCita,
        uidMedico: codigoMedico,
        uidPaciente: this.clavePaciente
    });*/