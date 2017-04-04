import { ListadoCitasAdminPage } from './../pages/listado-citas-admin/listado-citas-admin';
import { HistorialpacientePage } from './../pages/historialpaciente/historialpaciente';
import {Component, ViewChild} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {Splashscreen} from 'ionic-native';
import {IntroPage} from '../pages/intro/intro';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {IntroAdmin} from '../pages/introAdmin/introAdmin';
import {IntroMedico} from '../pages/pantalla-medico/pantalla-medico';
import {AngularFire} from 'angularfire2';
import {IntroPaciente} from "../pages/pantalla-paciente/pantalla-paciente";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController
  user: string[] = [null];

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private firebase: AngularFire) {

    this.pages = [{
      title: "page1",
      component: Page1
    }, {
      title: "page2",
      component: Page2
    }, {
      title: "pagina paciente",
      component: IntroPaciente
    }, {
      title: "pagina medico",
      component: IntroMedico
    }];

    this.initializeApp();

    localStorage.getItem("user_uid") ? this.user[0] = localStorage.getItem("user_uid") : this.user[0] = null;

    // TODO: arreglar redirección al loguear
    if (this.user[0] == null) {
      //this.nav.setRoot(IntroPage);
      this.rootPage = IntroPage;
    } else {
      //this.nav.setRoot(Page1);
      switch (localStorage.getItem("user_type")) {
        case "admin":
          this.rootPage = IntroAdmin;
          break;
        case "medico":
          this.rootPage = IntroMedico;
          break;
        case "paciente":
          this.rootPage = IntroPaciente;
          break;
      }
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
