/**
 * Created by Daniel Romero on 19/03/2017.
 */

import {Component} from '@angular/core';
import {AlertController, ToastController} from 'ionic-angular';
import {AngularFire} from "angularfire2";

/*
 Generated class for the Intro page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-introAdmin',
  templateUrl: 'introAdmin.html'
})

export class IntroAdmin {


  constructor(public alertCtrl: AlertController, private firebase: AngularFire, public toast: ToastController) {
  }

  //Selecciona el tipo de usuario
  selectType() {
    let popup = this.alertCtrl.create();
    popup.setTitle('Elija el tipo de usuario');
    popup.addInput({
      type: 'radio',
      label: 'Administrador',
      value: 'admin',
      checked: true
    })
    popup.addInput({
      type: 'radio',
      label: 'Médico',
      value: 'medico'
    })
    popup.addInput({
      type: 'radio',
      label: 'Paciente',
      value: 'paciente'
    })

    popup.addButton('Cancelar');
    popup.addButton({
      text: 'Rellenar datos',
      handler: type => {
        popup.dismiss();
        this.createAccount(type);
        return false
      }
    });
    popup.present();
  }

  //Rellena los datos del usuario
  createAccount(type) {
    let popup2 = this.alertCtrl.create({
      title: 'Crear Cuenta',
      message: 'Introduzca los datos para crear un nuevo usuario',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
        {
          name: 'contraseña',
          placeholder: 'Contraseña',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Crear cuenta',
          handler: information => {
            this.createNewUser(information.nombre,information.email, information.contraseña, type);
          }
        }
      ]
    });
    popup2.present();
  }

  //Crea la cuenta en firebase
  createNewUser(name,email, password, type) {
    this.firebase.auth.createUser({
      email: email,
      password: password
    }).then((sucess)=>{
      this.firebase.database.object('/usuarios/' + sucess.uid).set({
        name: name,
        tipo: type
      }).then(()=>{
        this.writeToast("Cuenta creada correctamente");
      });
    });
  }

  writeToast(message) {
    let toast = this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
