import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {IntroPage} from "../pages/intro/intro";
<<<<<<< HEAD
import { HistorialpacientePage } from "../pages/historialpaciente/historialpaciente";

=======
import {IntroMedico} from '../pages/pantalla-medico/pantalla-medico';
>>>>>>> 2ecf354706ff7e6a0b1cf627a98cb5522de94637
// Import the AF2 Module
import { AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';
import {IntroAdmin} from "../pages/introAdmin/introAdmin";


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
<<<<<<< HEAD
    HistorialpacientePage
=======
    IntroMedico,
    IntroAdmin
>>>>>>> 2ecf354706ff7e6a0b1cf627a98cb5522de94637
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
<<<<<<< HEAD
    HistorialpacientePage
=======
    IntroMedico,
    IntroAdmin
>>>>>>> 2ecf354706ff7e6a0b1cf627a98cb5522de94637
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
