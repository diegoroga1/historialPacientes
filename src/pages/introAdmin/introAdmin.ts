import { ListadoCitasAdminPage } from './../listado-citas-admin/listado-citas-admin';
import { Component } from '@angular/core';
import {NavController, ToastController, MenuController} from "ionic-angular";
import {AngularFire} from "angularfire2";
import {IntroPage} from "../intro/intro";


@Component({
  selector: 'introAdmin',
  templateUrl: 'introAdmin.html',
})
export class IntroAdmin {

  rootPage: any = IntroAdmin;

  menus: Array<{title: string}>;

  constructor(public navCtrl: NavController, private firebase: AngularFire, public toast: ToastController, public menu: MenuController) {

    this.menus = [{
      title: 'Nombre: '
    }, {
      title: 'Apellidos: '
    },{
      title: 'Fecha de nacimiento: '
    },{
      title: 'Dirección: '
    }];

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

  accederCitasPendientes() {
    this.navCtrl.push(ListadoCitasAdminPage);
  }

}
