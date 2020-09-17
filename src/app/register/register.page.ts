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
  
  private userName: string = '';
  private passWord: string = '';
  private confpassWord: string = '';
  private prenom: string = '';
  private nom: string = '';
  private email: string = '';
  private tel: string = '';

  private iconPhoto = '<ion-icon name="camera-outline"></ion-icon>';
  private iconGalery = '';

  constructor(private camera: Camera, private alertCtrl: AlertController, private registerService: RegisterService) {  }

  ngOnInit() {
  }

    async onLoadImageUser() {
      const option1: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: true
      };

      const option2: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true
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

  private getPicture(option: CameraOptions) {
    this.camera.getPicture(option).then(imageData=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      //this.currentLoc.photos.push(base64Image);
      alert('Image : ' + base64Image);
      //this.registerService.addPhoto(base64Image);
    });
  }

  onRegister() {

  }

}
