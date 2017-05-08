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

  cambio;

  actualizarCita;

  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams,
  public alertCtrl: AlertController, public datepipe: DatePipe) {

      this.fechaElegida = navParams.get("fecha");
      this.clavePaciente = navParams.get("clavePac");
      this.claveMedico = navParams.get("claveMed");
      this.claveCita = navParams.get("claveCi");
      this.cambio = navParams.get("cambio");

      console.log("CLAVE MEDICO" + this.claveMedico);
      this.citaObservable = this.af.database.object('citas/' + this.claveCita);
      
      this.citaObservable.subscribe(auxCitaActual => {
         this.datosCitaActual = auxCitaActual;
      });


      this.fechaElegida = this.datepipe.transform(this.fechaElegida, 'dd-MM-yyyy');
      console.log(this.fechaElegida);
      this.fechaActualObservable = this.af.database.list('usuarios/' + this.claveMedico + '/citas' );

      //Si no existe en firebase this.horasOcupadas devuelve []

      this.fechaActualObservable.subscribe(aux => {
          this.horasOcupadas = aux;
          console.log("Horas ocupadas");
          console.log(this.horasOcupadas);
          if (this.horasOcupadas) {
            for (var i=0; i < this.horasOcupadas.length; i++) {
              if (this.horasOcupadas[i].fechaAsignada == this.fechaElegida) {
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

              if (this.cambio == false) {

                  this.datosCitaActual.medicoAsignado = this.claveMedico;
                  this.datosCitaActual.fechaAsignada = this.fechaElegida;
                  this.datosCitaActual.hora = hora;
                  this.datosCitaActual.estado = "aceptada";


                  this.actualizarCita = this.af.database.object('citas/' + this.claveCita);
                  this.actualizarCita.update(this.datosCitaActual);

                  var eliminarCitaEspera: FirebaseListObservable<any[]>;

                  eliminarCitaEspera = this.af.database.list('citasEspera/');
      
                  eliminarCitaEspera.subscribe(auxEliminarCita => {
                      var arrayCitas = auxEliminarCita;
                      for (var l = 0; l < arrayCitas.length; l++) {
                        if (arrayCitas[l].uid == this.claveCita) {
                            eliminarCitaEspera.remove(arrayCitas[l].$key);
                        }
                      }
                  });

                  var agregarCitaAceptada: FirebaseListObservable<any>;

                  agregarCitaAceptada = this.af.database.list('citasAceptadas/');

                  var objetoKeyAceptada = {
                      uid: this.claveCita
                  }
                  agregarCitaAceptada.push(objetoKeyAceptada);

                var objetoUsuario = {
                      uid: this.claveCita,
                      fecha: this.datosCitaActual.fecha,
                      estado: this.datosCitaActual.estado,
                      hora:  this.datosCitaActual.hora,
                      fechaAsignada: this.datosCitaActual.fechaAsignada
                }

                var actualizarCitaMedico: FirebaseListObservable<any>;
                actualizarCitaMedico = this.af.database.list('usuarios/' + this.claveMedico + '/citas');

                actualizarCitaMedico.push(objetoUsuario);

/*
                actualizarCitaMedico.subscribe(auxMedico => {
                    var arrayCitasMedico = auxMedico;
                    for (var h = 0; h < arrayCitasMedico.length; h++) {
                      if (arrayCitasMedico[h].uidCita == this.claveCita) {
                          console.log("UPDATE CITAS MEDICO" + arrayCitasMedico[h].$key);

                          var actualizarCitaMedico: FirebaseListObservable<any>;
                          actualizarCitaMedico = this.af.database.list('usuarios/' + this.claveMedico + '/citas');
                          
                          actualizarCitaMedico.update(arrayCitasMedico[h].$key, objetousuario);
                          break;
                      }
                    }
                });
*/
                var actualizarCitaPaciente: FirebaseListObservable<any>;
                actualizarCitaPaciente = this.af.database.list('usuarios/' + this.clavePaciente + '/citas');

                actualizarCitaPaciente.subscribe(auxMedico => {
                    var arrayCitaspaciente = auxMedico;
                    for (var m = 0; m < arrayCitaspaciente.length; m++) {
                      if (arrayCitaspaciente[m].uid == this.claveCita) {
                          console.log("Entré en la cita" + arrayCitaspaciente[m].uid);
                          var actualizarPaciente: FirebaseObjectObservable<any>;
                          actualizarPaciente = this.af.database.object('usuarios/' + this.clavePaciente + '/citas/' + arrayCitaspaciente[m].$key);
                          actualizarPaciente.update(objetoUsuario);
                      }
                    }
                });

              } else {
                  if (this.cambio == true) {

                      this.datosCitaActual.fechaAsignada = this.fechaElegida;
                      this.datosCitaActual.hora = hora;
                      this.datosCitaActual.estado = "aceptada";

                      this.actualizarCita = this.af.database.object('citas/' + this.claveCita);
                      this.actualizarCita.update(this.datosCitaActual);

                      var eliminarCitaCambio: FirebaseListObservable<any[]>;

                      eliminarCitaCambio = this.af.database.list('citasCambio/');
          
                      eliminarCitaCambio.subscribe(auxEliminarCitaCambio => {
                          
                          var arrayCitasCambio = auxEliminarCitaCambio;
                          for (var p = 0; p < arrayCitasCambio.length; p++) {
                            if (arrayCitasCambio[p].uid == this.claveCita) {
                                eliminarCitaCambio.remove(arrayCitasCambio[p].$key);
                            }
                          }
                      });

                      var agregarCitaAceptada: FirebaseListObservable<any>;

                      agregarCitaAceptada = this.af.database.list('citasAceptadas/');

                      var objetoKeyAceptada = {
                          uid: this.claveCita
                      }
                      agregarCitaAceptada.push(objetoKeyAceptada);  

                      var objetoUsuarioCambio = {
                          //uidCita: this.claveCita,
                          //fecha: this.datosCitaActual.fecha,
                          estado: this.datosCitaActual.estado,
                          hora:  this.datosCitaActual.hora,
                          fechaAsignada: this.datosCitaActual.fechaAsignada
                       }

                      var actualizarCitaMedico: FirebaseListObservable<any>;
                      actualizarCitaMedico = this.af.database.list('usuarios/' + this.claveMedico + '/citas');

                      actualizarCitaMedico.subscribe(auxMedico => {
                          var arrayCitasMedico = auxMedico;
                          for (var q = 0; q < arrayCitasMedico.length; q++) {
                              if (arrayCitasMedico[q].uid == this.claveCita) {

                                  var actualizarMedicoCambio: FirebaseObjectObservable<any>;
                                  actualizarMedicoCambio = this.af.database.object('usuarios/' + this.claveMedico + '/citas/' + arrayCitasMedico[q].$key);                                
                                  actualizarMedicoCambio.update(objetoUsuarioCambio);
                              }
                          }
                      });

                      var actualizarCitaPaciente: FirebaseListObservable<any>;
                      actualizarCitaPaciente = this.af.database.list('usuarios/' + this.clavePaciente + '/citas');

                      actualizarCitaPaciente.subscribe(auxPaciente => {
                          var arrayCitaspaciente = auxPaciente;
                          for (var g = 0; g < arrayCitaspaciente.length; g++) {
                              if (arrayCitaspaciente[g].uid == this.claveCita) {
                           
                                    var actualizarPacienteCambio: FirebaseObjectObservable<any>;
                                    actualizarPacienteCambio = this.af.database.object('usuarios/' + this.clavePaciente + '/citas/' + arrayCitaspaciente[g].$key);                                
                                    actualizarPacienteCambio.update(objetoUsuarioCambio);
                              }
                          }
                      });




                  }

              }

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
