import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {NavController, ToastController, MenuController} from 'ionic-angular';
import {IntroPage} from "../intro/intro";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  userName: string;
  constructor(public navCtrl: NavController, private firebase: AngularFire, public toast: ToastController, public menu: MenuController) {
    this.userName = "Bienvenido";
    this.menu.enable(true);
  }

  logOut() {
    this.firebase.auth.logout().then(
      () => {
        localStorage.removeItem("user_uid");
        this.navCtrl.setRoot(IntroPage);
        let toast = this.toast.create({
          message: 'Esperamos verle pronto',
          duration: 3000
        });
        toast.present();
      }
    );
  }

  ionViewWillLeave(){
    this.menu.enable(false);
  }

}
