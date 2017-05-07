import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController, NavParams } from 'ionic-angular';
import {PedirCambioPage} from "../pedir-cambio/pedir-cambio";
/*
 Generated class for the CitasPendientes page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-citas-pendientes',
  templateUrl: 'citas-pendientes.html'
})
export class CitasPendientesPage {
  private citas: FirebaseListObservable<any[]>;
  private citasPendientes: any[] = [];
  private firebase;

  constructor(firebase: AngularFire,public navCtrl: NavController) {
    this.firebase = firebase;
    this.citas = this.firebase.database.list('/usuarios/' + localStorage.getItem("user_uid") + '/citas', {preserveSnapshot: true});
  }

  ionViewDidLoad() {
    this.citas.subscribe(citas => {
      citas.forEach(cita => {
        var tempInfo: any = {};
        this.firebase.database.object('/citas/' + cita.val().uid, {preserveSnapshot: true}).subscribe(infoCita => {
          console.log(infoCita.val());
          if (infoCita.val()) {
            this.firebase.database.object('/usuarios/' + infoCita.val().medico, {preserveSnapshot: true}).subscribe(infoMedico => {
              tempInfo = infoCita.val();
              tempInfo.nombreMedico = infoMedico.val().nombre;
              this.citasPendientes.push(tempInfo);
            });
          }
        });
      });
    });
  }
  cambiarCita(){
    this.navCtrl.push(PedirCambioPage);
  }

}
