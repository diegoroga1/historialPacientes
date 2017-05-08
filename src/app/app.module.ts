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



// Import the AF2 Module
import { AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';
import {ListadoMedicosPage} from "../pages/listado-medicos/listado-medicos";
import {CrearSubdiagPage} from "../pages/crear-subdiag/crear-subdiag";
import {SubdiagnosticoPage} from "../pages/subdiagnostico/subdiagnostico";
import {PerfilPage} from "../pages/perfil/perfil";



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
    ListadoMedicosPage,
    CrearSubdiagPage,
    SubdiagnosticoPage,
    PerfilPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
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
    ListadoMedicosPage,
    CrearSubdiagPage,
    SubdiagnosticoPage,
    PerfilPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
