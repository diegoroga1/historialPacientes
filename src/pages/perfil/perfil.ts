import { Component } from '@angular/core';
import {NavController, NavParams, Platform, AlertController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {DomSanitizer} from "@angular/platform-browser";
import { Camera, CameraOptions } from 'ionic-native';
/*
  Generated class for the Perfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  user:any;
  userprofile:FirebaseListObservable<any>;
  base64Image:any;

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public firebase: AngularFire,public alertCtrl: AlertController,public domSanitizer: DomSanitizer) {
      this.user= localStorage.getItem("user_uid");
      this.userprofile = firebase.database.list('/usuarios/'+this.user);
  }

  takePicture(): void {
    this.platform.ready().then(() => {
      const options: CameraOptions = {
        destinationType: Camera.DestinationType.DATA_URL,
        quality: 75
      };
      Camera.getPicture(options).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        this.firebase.database.object("/usuarios/"+this.user).update({imagen: this.base64Image});
      }, (error) => {
        console.log(error);
      });
    });
  }
  selecPicture(){
    this.platform.ready().then(() => {
      Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 1000,
        targetHeight: 1000
      }).then((imagen) => {
        console.log(imagen);
        this.base64Image = "data:image/jpeg;base64," + imagen;
        this.firebase.database.object("/usuarios/"+this.user).update({imagen: this.base64Image});
      }, (err) => {
        console.log(err);
      });
    });
  }
  changeEmail(){
    let popup = this.alertCtrl.create();
    popup.setTitle('El correo no se puede modificar');
    popup.addButton("Volver");
    popup.present();
  }

  changeName(){
    let popup2 = this.alertCtrl.create({
      title: 'Cambiar nombre de usuario',
      message: 'Introduzca el nuevo nombre',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Cambiar nombre',
          handler: cambio => {
            this.firebase.database.object("/usuarios/"+this.user).update({nombre: cambio.nombre});
          }
        }
      ]
    });
    popup2.present();
  }
  changePhone(){
    let popup3 = this.alertCtrl.create({
      title: 'Cambiar numero de telefono',
      message: 'Introduzca el nuevo numero',
      inputs: [
        {
          name: 'numero',
          type: 'number',
          placeholder: '928928928'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Cambiar numero',
          handler: cambio => {
            this.firebase.database.object("/usuarios/"+this.user).update({telefono: cambio.numero});
          }
        }
      ]
    });
    popup3.present();
  }

  changeImage(){
    let popup4 = this.alertCtrl.create({
      title: 'Cambiar imagen de perfil',
      message: 'Toma la nueva foto',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Tomar foto',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Seleccionar foto',
          handler: () => {
            this.selecPicture();
          }
        }
      ]
    });
    popup4.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
