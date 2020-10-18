import { Component, OnInit } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  patient = {
    username: '',
    password: '',
    email: '',
    photo: '',
    nom: '',
    prenom: '',
    dateNaiss: Date,
    groupeSanguin: '',
    tel: '',
    adresse: '',
  };
  confpassWord = '';
  public error: string | null = null;
  message: string;

  constructor(private camera: Camera,
              private alertCtrl: AlertController,
              private registerService: RegisterService) {
  }

  ngOnInit() {
  }

  async onLoadImageUser() {
      const option1: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA
      };

      const option2: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      };

      this.alertCtrl.create({
        mode: 'ios',
        buttons: [
          {
            text: 'Prendre une photo',
            cssClass: 'myAlertBtn',
            handler: () => {
              this.getPicture(option1);
            }
          },
          {
            text: 'Choisir depuis la galerie',
            cssClass: 'myAlertBtn',
            handler: () => {
              this.getPicture(option2);
            }
          }
        ]
      }).then(res => {
        res.present();
      });
  }

  async getPicture(option: CameraOptions) {
    this.camera.getPicture(option).then(imageData=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.patient.photo = base64Image;
      /*this.selectedFile = imageData;
      this.selectedFile = imageData;

      alert(imageData);
      alert(base64Image);
      console.log(imageData);
      console.log(base64Image);*/

    }).then(r=>r);
  }

  async onRegister(value) {
    this.patient = value;
    if(this.patient.password === this.confpassWord){
      this.registerService.register(this.patient);
    }
    else{
      this.showAlert();
    }
  }

  async showAlert() {
    this.alertCtrl.create({
      mode: 'ios',
      subHeader: 'Mots de passe non identiques!',
      buttons: [
        {
          text: 'Mots de passe non identiques!',
          cssClass: 'myAlertBtn1'
        }
      ]
    }).then(res => {
      res.present();
      setTimeout(()=>{
        res.dismiss();
      }, 3000);
    });
  }

}
