import {Component} from '@angular/core';
import {NavController, MenuController, ToastController} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {IntroAdmin} from '../introAdmin/introAdmin';
import {IntroMedico} from '../pantalla-medico/pantalla-medico';
import {IntroPaciente} from '../pantalla-paciente/pantalla-paciente';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

/*
 Generated class for the Intro page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  saludo: string;
  tipo: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, private firebase: AngularFire, public menu: MenuController, public toast: ToastController) {
    this.saludo = 'Login'
    this.menu.enable(false);
  }

  submitForm(form: any) {
    this.firebase.auth.login(
      {
        email: form.value.email,
        password: form.value.password
      }).then(
      (success) => {
        this.tipo = this.firebase.database.object('/usuarios/' + success.uid + '/tipo', {preserveSnapshot: true});
        localStorage.setItem("user_uid", success.uid);
        this.tipo.subscribe(snapshot => {
          localStorage.setItem("user_type", snapshot.val());
          switch (snapshot.val()) {
            case "admin":
              this.navCtrl.setRoot(IntroAdmin);
              break;
            case "medico":
              this.navCtrl.setRoot(IntroMedico);
              break;
            case "paciente":
              this.navCtrl.setRoot(IntroPaciente);
              break;
          }
        });
      }
    ).catch(
      (error) => {
        switch (error.message) {
          case "There is no user record corresponding to this identifier. The user may have been deleted.":
            // Cambiar por toast
            this.writeToast('Este correo no se corresponde con ningún usuario');
            break;
          case "The password is invalid or the user does not have a password.":
            // Cambiar por toast
            this.writeToast('La contraseña no coincide');
            break;
        }
      }
    );
  }

  writeToast(message) {
    let toast = this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidEnter() {
    this.menu.close('menu1');
    //this.menu.enable(false);
  }

  ionViewWillLeave() {
    //this.menu.enable(true);
  }


}
