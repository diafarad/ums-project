import { Component, OnInit } from '@angular/core';
import {DocteurService} from '../services/docteur.service';
import {HopitalService} from '../services/hopital.service';
import {AlertController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-new-docteur',
  templateUrl: './new-docteur.page.html',
  styleUrls: ['./new-docteur.page.scss'],
})
export class NewDocteurPage implements OnInit {

  private lesHopitaux : any ;
  private lesSpecialites : any ;
  medecin = {
    username: '',
    password: '',
    email: '',
    photo: '',
    nom: '',
    prenom: '',
    dateNaiss: '',
    idHopital : 0,
    tel: '',
    adresse: '',
    idSpecialite: 0,
    image: '',
    registerAt: '',
  };
  hopital = 0;
  specialite = 0;
  confpassWord = '';
  message: string;
  selectedFile: File;
  public error: string | null = null;
  private image64:any;

  constructor(private docteurService : DocteurService,
              private hopitalService : HopitalService,
              private alertCtrl: AlertController,
              private camera: Camera) {
    this.getAllHopitaux();
    this.getAllSpecialites();
  }

  ngOnInit() {
    this.getAllHopitaux();
    this.getAllSpecialites();
  }

  getAllHopitaux(){
    this.hopitalService.getHopital()
        .subscribe(data=>{
          this.lesHopitaux = data;
        },error=>{
          console.log(error);
        });
  }

  getAllSpecialites(){
    this.hopitalService.getSpecialite()
        .subscribe(data=>{
          this.lesSpecialites = data;
        },error=>{
          console.log(error);
        });
  }

    onAddDoc(value: any) {
    this.medecin = value;
      this.medecin.idHopital = this.hopital;
      this.medecin.idSpecialite = this.specialite;
      this.medecin.image = this.image64;
      let today = new Date();
      let dd = String(today. getDate()). padStart(2, '0');
      let mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
      let yyyy = today. getFullYear();
      this.medecin.registerAt = dd+'/'+mm+'/'+yyyy;
      //alert(this.patient.dateNaiss);
      //alert('BASE : '+this.patient.blob);
      // console.log(this.selectedFile);

      if(this.medecin.password === this.confpassWord){
        this.docteurService.register(this.medecin);
      }
      else{
          this.showAlert();
      }
    //alert(this.medecin.hopital);
      console.log(value);
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

  onLoadPhotoDoc() {
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
      this.medecin.photo = base64Image;
    });
  }


  optionsHop() {
    this.medecin.idHopital = this.hopital;
    //alert(this.hopital);
  }

  optionsSpe() {
    this.medecin.idSpecialite = this.specialite;
  }
}
