import { MedicoscitaAdminPage } from './../pages/medicoscita-admin/medicoscita-admin';
import { ListadoCitasAdminPage } from './../pages/listado-citas-admin/listado-citas-admin';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {IntroAdmin} from '../pages/introAdmin/introAdmin'
import {IntroPage} from "../pages/intro/intro";
import {IntroMedico} from '../pages/pantalla-medico/pantalla-medico';
import {IntroPaciente} from "../pages/pantalla-paciente/pantalla-paciente";
import {BuscarpacientePage} from "../pages/buscarpaciente/buscarpaciente";
import {VistaFichaPacientePage} from '../pages/vista-ficha-paciente/vista-ficha-paciente';
import {NewPage} from '../pages/new/new';
import {CausaPage} from '../pages/causa/causa';
import {DiagnosticoPage} from '../pages/diagnostico/diagnostico';
import {PedircitaPage} from "../pages/pedircita/pedircita";
import {CitasPendientesMedicoPage} from "../pages/citas-pendientes-medico/citas-pendientes-medico";
import {CitasPendientesPage} from "../pages/citas-pendientes/citas-pendientes";
import { HistorialpacientePage } from "../pages/historialpaciente/historialpaciente";
import {VerFichaPropiaPage} from "../pages/ver-ficha-propia/ver-ficha-propia";
import {PedirCambioPage} from "../pages/pedir-cambio/pedir-cambio";
import {ModificarCuentaPage} from "../pages/modificar-cuenta/modificar-cuenta";


// Import the AF2 Module
import { AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';
import {ListadoMedicosPage} from "../pages/listado-medicos/listado-medicos";
import {PerfilPage} from "../pages/perfil/perfil";
import {CrearSubdiagPage} from "../pages/crear-subdiag/crear-subdiag";
import {SubdiagnosticoPage} from "../pages/subdiagnostico/subdiagnostico";
import {ModificarDatosPage} from "../pages/modificar-datos/modificar-datos";
import {EliminarCuentaPage} from "../pages/eliminar-cuenta/eliminar-cuenta";

import { DatePicker } from "@ionic-native/date-picker";
import { DatePipe } from "@angular/common";
import { ModalHorarioPage } from "../pages/modal-horario/modal-horario";

export const firebaseConfig = {
  apiKey: "AIzaSyCl1MSp5klkV1llJvw52GU3PzjOJjVYhq4",
  authDomain: "historial-pacientes.firebaseapp.com",
  databaseURL: "https://historial-pacientes.firebaseio.com",
  storageBucket: "historial-pacientes.appspot.com",
  messagingSenderId: "987462386572"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HistorialpacientePage,
    ListadoCitasAdminPage,
    IntroMedico,
    IntroAdmin,
    IntroPaciente,
    BuscarpacientePage,
    VistaFichaPacientePage,
    CausaPage,
    NewPage,
    DiagnosticoPage,
    PedircitaPage,
    CitasPendientesMedicoPage,
    CitasPendientesPage,
    VerFichaPropiaPage,
    PedirCambioPage,
    PerfilPage,
    CrearSubdiagPage,
    SubdiagnosticoPage,
    ListadoMedicosPage,
    CrearSubdiagPage,
    SubdiagnosticoPage,
    PerfilPage,
    ModificarCuentaPage,
    ModificarDatosPage,
    EliminarCuentaPage,
    MedicoscitaAdminPage,
    ModalHorarioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HistorialpacientePage,
    ListadoCitasAdminPage,
    IntroMedico,
    IntroAdmin,
    IntroPaciente,
    BuscarpacientePage,
    VistaFichaPacientePage,
    CausaPage,
    NewPage,
    DiagnosticoPage,
    PedircitaPage,
    CitasPendientesMedicoPage,
    CitasPendientesPage,
    VerFichaPropiaPage,
    PedirCambioPage,
    PerfilPage,
    CrearSubdiagPage,
    SubdiagnosticoPage,
    ListadoMedicosPage,
    CrearSubdiagPage,
    SubdiagnosticoPage,
    PerfilPage,
    ModificarCuentaPage,
    ModificarDatosPage,
    EliminarCuentaPage,
    MedicoscitaAdminPage,
    ModalHorarioPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DatePicker, DatePipe]
})
export class AppModule {}

