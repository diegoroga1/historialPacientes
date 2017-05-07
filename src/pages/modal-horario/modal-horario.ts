import { ListadoCitasAdminPage } from './../listado-citas-admin/listado-citas-admin';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";
import { DatePipe } from "@angular/common";

/*
  Generated class for the ModalHorario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-horario',
  templateUrl: 'modal-horario.html'
})
export class ModalHorarioPage {

  fechaElegida;
  clavePaciente;
  claveMedico;
  claveCita;

  hora8 = true;
  hora830 = true;
  hora9 = true;
  hora930 = true;
  hora10 = true;
  hora1030 = true;
  hora11 = true;
  hora1130 = true;
  hora12 = true;
  hora1230 = true;
  hora13 = true;
  hora1330 = true;
  hora14 = true;

  fechaActualObservable: FirebaseListObservable<any[]>;
  horasOcupadas;

  citaObservable: FirebaseObjectObservable<any[]>;
  datosCitaActual;

  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams,
  public alertCtrl: AlertController, public datepipe: DatePipe) {

      this.fechaElegida = navParams.get("fecha");
      this.clavePaciente = navParams.get("clavePac");
      this.claveMedico = navParams.get("claveMed");
      this.claveCita = navParams.get("claveCi");

      this.citaObservable = this.af.database.object('citas/' + this.claveCita);
      
      this.citaObservable.subscribe(auxCitaActual => {
         this.datosCitaActual = auxCitaActual;
         console.log(this.datosCitaActual);
      });


      this.fechaElegida = this.datepipe.transform(this.fechaElegida, 'dd-MM-yyyy');
      console.log(this.fechaElegida);
      this.fechaActualObservable = this.af.database.list('usuarios/' + this.claveMedico + '/horario' );

      //Si no existe en firebase this.horasOcupadas devuelve []

      this.fechaActualObservable.subscribe(aux => {
          this.horasOcupadas = aux;
          console.log("Horas ocupadas");
          console.log(this.horasOcupadas);
          if (this.horasOcupadas) {
            for (var i=0; i < this.horasOcupadas.length; i++) {
              if (this.horasOcupadas[i].fecha == this.fechaElegida) {
                  switch (this.horasOcupadas[i].hora) {
                    case "ocho":
                      this.hora8 = false;
                      break;
                    case "ochoMedia":
                      this.hora830 = false;
                      break;
                    case "nueve":
                      this.hora9 = false;
                      break;
                    case "nueveMedia":
                      this.hora930 = false;
                      break;
                    case "diez":
                      this.hora10 = false;
                      break;
                    case "diezMedia":
                      this.hora1030 = false;
                      break;
                    case "once":
                      this.hora11 = false;
                      break;
                    case "onceMedia":
                      this.hora1130 = false;
                      break;
                    case "doce":
                      this.hora12 = false;
                      break;
                    case "doceMedia":
                      this.hora1230 = false;
                      break;
                    case "trece":
                      this.hora13 = false;
                      break;
                    case "treceMedia":
                      this.hora1330 = false;
                      break;
                    case "catorce":
                      this.hora14 = false;
                      break;
                    default:
                      console.log("No se encontró hora");                      
                }
              }
            }
          }
    });
  }

  //formato (hora) = ocho nueveMedia
  
  reservarCita(hora) {

      let confirmRechazar = this.alertCtrl.create({
      title: 'Confirmar cita',
      message: "¿Estás seguro de que deseas aceptar esta cita?",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar ha sido pulsado');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
          
          console.log(hora);
          
          this.datosCitaActual.medico = this.claveMedico;
          this.datosCitaActual.fecha = this.fechaElegida;
          this.datosCitaActual.hora = hora;

          var insertarCitaMedico: FirebaseListObservable<any>;
          insertarCitaMedico = this.af.database.list('usuarios/' + this.claveMedico + '/horario' );
          insertarCitaMedico.push(this.datosCitaActual);

          var insertarCitaPaciente: FirebaseListObservable<any>;
          insertarCitaPaciente = this.af.database.list('usuarios/' + this.clavePaciente + '/citasAceptadas' );
          insertarCitaPaciente.push(this.datosCitaActual);

          this.navCtrl.push(ListadoCitasAdminPage);

          }
        }
      ]
    });
    confirmRechazar.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalHorarioPage');
  }

}
