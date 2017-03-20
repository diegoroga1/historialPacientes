import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-historialpaciente',
  templateUrl: 'historialpaciente.html'
})
export class HistorialpacientePage {


  diagnosticos = [
                  {id: 1, 
                  especialidad: 'Médico de cabecera', 
                  medico: 'Antonio Pérez', 
                  fecha: '12/02/17', 
                  introduccion: 'El paciente se encontraba con dolores de garganta...'},
                  {id: 2, 
                  especialidad: 'Traumatología', 
                  medico: 'Antonio Gutiérrez', 
                  fecha: '24/11/16', 
                  introduccion: 'Dolor en el fémur...'},
                  {id: 3, 
                  especialidad: 'Psicología', 
                  medico: 'José García', 
                  fecha: '17/06/16', 
                  introduccion: 'Fuerte depresión y pensamientos negativos...'},
                  {id: 4, 
                  especialidad: 'Urgencias', 
                  medico: 'María Dolores', 
                  fecha: '10/05/15', 
                  introduccion: 'Dolores estomacales producidos por...'},
                  {id: 5, 
                  especialidad: 'Nefrología', 
                  medico: 'José Medina', 
                  fecha: '12/03/15', 
                  introduccion: 'Cólico nefrítico producido por piedras en el riñón y ...'},
                  {id: 6, 
                  especialidad: 'Alergología', 
                  medico: 'Laura Silva', 
                  fecha: '07/04/14', 
                  introduccion: 'Molestias producidas por las siguientes alergias:...'}
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  accederDiagnostico() {
    alert("Has accedido al diagnóstico");
  }
  
}
