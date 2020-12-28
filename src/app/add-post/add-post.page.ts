import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostPayload} from '../model/PostPayload';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';
import {AlertController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  addPostForm: FormGroup;
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');
  private image64:any;

  constructor(private router: Router,
              private alertCtrl: AlertController,
              private camera: Camera,
              private addpostService: PostService) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: 0,
      content: '',
      title: '',
      username: '',
      image: '',
      dateCreate: 0,
      likes: 0
    }
  }

  ngOnInit() {
  }

  addPost() {
    //alert('Photo : ' + this.postPayload.image);
    this.postPayload.username = localStorage.getItem('username');
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe(data => {
      console.log('POST OK');
    }, error => {
      console.log('Failure Response');
    });
  }

  onLoadImagePost() {
      const option2: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: true
      };
      this.getPicture(option2);
  }

    getPicture(option: CameraOptions) {
        this.camera.getPicture(option).then(async imageData=>{
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.image64 = base64Image;
            this.postPayload.image = imageData;
        });
    }
}
