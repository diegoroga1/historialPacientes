import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {IntroAdmin} from '../pages/introAdmin/introAdmin'
import {IntroPage} from "../pages/intro/intro";
import {IntroMedico} from '../pages/pantalla-medico/pantalla-medico';
import {IntroPaciente} from "../pages/pantalla-paciente/pantalla-paciente";
import {VistaFichaPacientePage} from '../pages/vista-ficha-paciente/vista-ficha-paciente';
import {NewPage} from '../pages/new/new';
import {CausaPage} from '../pages/causa/causa';
import {DiagnosticoPage} from '../pages/diagnostico/diagnostico';
import {PedircitaPage} from "../pages/pedircita/pedircita";
import {CitasPendientesMedicoPage} from "../pages/citas-pendientes-medico/citas-pendientes-medico";
import {CitasPendientesPage} from "../pages/citas-pendientes/citas-pendientes";

// Import the AF2 Module
import { AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';


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
    Page1,
    Page2,
    IntroMedico,
    IntroAdmin,
    IntroPaciente,
    VistaFichaPacientePage,
    CausaPage,
    NewPage,
    DiagnosticoPage,
    PedircitaPage,
    CitasPendientesMedicoPage,
    CitasPendientesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    Page1,
    Page2,
    IntroMedico,
    IntroAdmin,
    IntroPaciente,
    VistaFichaPacientePage,
    CausaPage,
    NewPage,
    DiagnosticoPage,
    PedircitaPage,
    CitasPendientesMedicoPage,
    CitasPendientesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
