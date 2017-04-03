import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-listado-citas-admin',
  templateUrl: 'listado-citas-admin.html'
})
export class ListadoCitasAdminPage {
/*
    citas = [
                {id: 1,
                paciente: 'Pepe Pérez',
                especialidadDemandada: 'Médico de cabecera', 
                medico: 'Antonio Pérez', 
                fecha: '12/02/17', 
                prioridad: 'Alta'},
                {id: 2, 
                paciente: 'Juan Rodríguez',
                especialidadDemandada: 'Traumatología', 
                medico: 'Antonio Gutiérrez', 
                fecha: '24/11/16', 
                prioridad: 'Baja'},
                {id: 3, 
                paciente: 'María Sosa',
                especialidadDemandada: 'Psicología', 
                medico: 'José García', 
                fecha: '17/06/16', 
                prioridad: 'Media'},
                {id: 4, 
                paciente: 'Lola Ginés',
                especialidadDemandada: 'Urgencias', 
                medico: 'María Dolores', 
                fecha: '10/05/15', 
                prioridad: 'Alta'},
                {id: 5, 
                paciente: 'Pérez Reverte',
                especialidadDemandada: 'Nefrología', 
                medico: 'José Medina', 
                fecha: '12/03/15', 
                prioridad: 'Baja'},
                {id: 6, 
                paciente: 'Andrés Montes',
                especialidadDemandada: 'Alergología', 
                medico: 'Laura Silva', 
                fecha: '07/04/14', 
                prioridad: 'Alta'}
  ]; */
  
  citas;
  //uidpaciente = 'iORou2Gu6pU9iECbldeC7sZQYZg1'; 
  citaObservable: FirebaseListObservable<any[]>;
  
  constructor(public navCtrl: NavController, private af: AngularFire, public navParams: NavParams) {

    this.citaObservable = af.database.list('citas/');

    this.citaObservable.subscribe(aux => {
        console.log(aux);
        this.citas = aux;
    });
  }
  
  accederCita(keyDiag, uidMedico, uidPaciente) {
    alert("Has accedido a la cita y su clave es: " + keyDiag + " uid del Médico: " + uidMedico + 
    " La uid del paciente es: " + uidPaciente );
  }
  
}