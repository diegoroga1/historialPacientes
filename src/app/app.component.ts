import {Component, ViewChild} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import { Splashscreen } from 'ionic-native';

import { IntroPage } from '../pages/intro/intro';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {PantallaMedicoPage} from '../pages/pantalla-medico/pantalla-medico';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController
  user: string[] = [null];

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {

    this.pages = [{
      title: "page1",
      component: Page1
    },{
      title: "page2",
      component: Page2
    },{
      title: "pagina medico",
      component: PantallaMedicoPage
    }];

    this.initializeApp();

    localStorage.getItem("user_uid") ? this.user[0] = localStorage.getItem("user_uid") : this.user[0] = null;

    if(this.user[0] == null){
      //this.nav.setRoot(IntroPage);
      this.rootPage = IntroPage;
    }else{
      //this.nav.setRoot(Page1);
      this.rootPage  = PantallaMedicoPage;
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
