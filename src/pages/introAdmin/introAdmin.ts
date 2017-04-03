import { Component } from '@angular/core';
import {NavController, ToastController, MenuController, NavParams} from "ionic-angular";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {IntroPage} from "../intro/intro";
import { foundService } from "../../providers/providers";


@Component({
  selector: 'introAdmin',
  templateUrl: 'introAdmin.html',
})
export class IntroAdmin {

  rootPage: any = IntroAdmin;

  menus: Array<{title: string}>;
  //pacientes: FirebaseListObservable<any>;
  pacientes: any;
  arraypacientes = [];


  constructor(public navCtrl: NavController,
              private firebase: AngularFire,
              public toast: ToastController,
              public menu: MenuController,
              public af: AngularFire,
              private foundservice: foundService,
              private navParams: NavParams ) {

    this.menus = [{
      title: 'Nombre: '
    }, {
      title: 'Apellidos: '
    },{
      title: 'Fecha de nacimiento: '
    },{
      title: 'Dirección: '
    }];


    //this.pacientes = af.database.list('/usuarios')

  }

  pac(){
    let selectedPaciente = this.navParams.data;
    this.foundservice.getPacientesData(selectedPaciente).subscribe(data => {
      this.arraypacientes = data;

    });
  }


  buscar(){
    this.foundservice.getPacientes().then(data => this.pacientes = data);
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


}
