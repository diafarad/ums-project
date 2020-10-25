import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {RegisterService} from '../services/register.service';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

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
  message: string;
  public myPhoto: any;
  private loading: any;
  public error: string | null = null;

  constructor(private camera: Camera,
              private alertCtrl: AlertController,
              private registerService: RegisterService,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController,
              private readonly http: HttpClient,
              private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  async onLoadImageUser() {
      const option1: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA
      };

      const option2: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
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
              this.camera.getPicture(option1).then(imageData=>{
                this.myPhoto = this.convertFileSrc(imageData);
                this.patient.photo = this.myPhoto;
                this.changeDetectorRef.detectChanges();
                this.changeDetectorRef.markForCheck();
                this.uploadPhoto(imageData);
              }, (error: any) => this.error = JSON.stringify(error));
            }
          },
          {
            text: 'Choisir depuis la galerie',
            cssClass: 'myAlertBtn',
            handler: () => {
              this.camera.getPicture(option2).then(imageData=>{
                this.myPhoto = this.convertFileSrc(imageData);
                this.patient.photo = this.myPhoto;
                this.uploadPhoto(imageData);
              }, (error: any) => this.error = JSON.stringify(error));
            }
          }
        ]
      }).then(res => {
        res.present();
      });
  }

  /*async getPicture(option: CameraOptions) {
    this.camera.getPicture(option).then(imageData=>{
      this.myPhoto = this.convertFileSrc(imageData);
      this.changeDetectorRef.detectChanges();
      this.changeDetectorRef.markForCheck();
      this.uploadPhoto(imageData);
    }, (error: any) => this.error = JSON.stringify(error));
  }*/

  private convertFileSrc(url: string): string {
    if (!url) {
      return url;
    }
    if (url.startsWith('/')) {
      // @ts-ignore
      return window.WEBVIEW_SERVER_URL + '/_app_file_' + url;
    }
    if (url.startsWith('file://')) {
      // @ts-ignore
      return window.WEBVIEW_SERVER_URL + url.replace('file://', '/_app_file_');
    }
    if (url.startsWith('content://')) {
      // @ts-ignore
      return window.WEBVIEW_SERVER_URL + url.replace('content:/', '/_app_content_');
    }
    return url;
  }

  private async uploadPhoto(imageFileUri: any): Promise<void> {
    this.error = null;
    this.loading = await this.loadingCtrl.create({
      message: 'Uploading...'
    });

    await this.loading.present();

    // @ts-ignore
    window.resolveLocalFileSystemURL(imageFileUri,
        (entry: any) => {
          entry.file((file: any) => this.readFile(file));
        });
  }

  private readFile(file: any): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      if (reader.result) {
        const imgBlob = new Blob([reader.result], {type: file.type});
        formData.append('file', imgBlob, file.name);
        this.postData(formData);
      }
    };
    reader.readAsArrayBuffer(file);
  }

  private postData(formData: FormData): void {
    this.http.post<boolean>(`${environment.REST_API_SERVER}/upload`, formData)
        .pipe(
            catchError(e => this.handleError(e)),
            finalize(() => this.loading.dismiss())
        )
        .subscribe(ok => this.showToast(ok));
  }

  private async showToast(ok: boolean | {}): Promise<void> {
    if (ok === true) {
      const toast = await this.toastCtrl.create({
        message: 'Upload successful',
        duration: 3000,
        position: 'top'
      });
      await toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Upload failed',
        duration: 3000,
        position: 'top'
      });
      await toast.present();
    }
  }

  private handleError(error: any): Observable<never> {
    const errMsg = error.message ? error.message : error.toString();
    this.error = errMsg;
    this.changeDetectorRef.detectChanges();
    return throwError(errMsg);
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
