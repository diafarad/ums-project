import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {RegisterService} from '../services/register.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ProfileModel} from '../model/Profile';

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
    dateNaiss: '',
    groupeSanguin: '',
    tel: '',
    adresse: '',
    blob: '',
    registerAt: ''
  };
  confpassWord = '';
  message: string;
  selectedFile: File;
  public error: string | null = null;
  private image64:any;

  constructor(private alertCtrl: AlertController,
              private camera: Camera,
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
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true
    };

    const option2: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    };

    this.alertCtrl.create({
      header: 'Ajouter une image',
      message: 'Choisir la source',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.getPicture(option1);
          }
        },
        {
          text: 'Galerie',
          handler: () => {
            this.getPicture(option2);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  getPicture(option: CameraOptions) {
    this.camera.getPicture(option).then(async imageData=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image64 = imageData;
      this.patient.photo = base64Image;
      /*let base64 = await fetch(base64Image);
      let blob = await base64.blob();
      alert('BLOB : '+blob);*/
      //this.image64 = base64Image;
      //this.imageProfil = blob;
      //this.selectedFile = new File([blob], this.patient.username || "picture", { type: 'image/png' });
    });
  }

  async onRegister(value) {
    this.patient = value;
    this.patient.blob = this.image64;
    let today = new Date();
    let dd = String(today. getDate()). padStart(2, '0');
    let mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
    let yyyy = today. getFullYear();
    this.patient.registerAt = dd+'/'+mm+'/'+yyyy;
    //alert(this.patient.dateNaiss);
    //alert('BASE : '+this.patient.blob);
   // console.log(this.selectedFile);

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
