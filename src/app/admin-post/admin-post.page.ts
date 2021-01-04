import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {RateDoctorPageModule} from '../rate-doctor/rate-doctor.module';
import {Router} from '@angular/router';
import {PostPageModule} from '../post/post.module';
import {PostPayload} from '../model/PostPayload';
import {PopoverController} from '@ionic/angular';
import {AccueilPage} from '../accueil/accueil.page';
import {PopoverComponent} from '../popover/popover.component';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.page.html',
  styleUrls: ['./admin-post.page.scss'],
})
export class AdminPostPage implements OnInit {

  private lesPosts : any ;
  img = '../assets/images/ta.jpg';
  format = 'data:image/jpeg;base64,';

  constructor(private postService: PostService,
              private router: Router,
              private popOver: PopoverController) {
    this.getAllPost();
  }

  ngOnInit() {
      this.getAllPost();
  }

  getAllPost(){
    this.postService.getAllPosts()
        .subscribe(data=>{
          console.log('LES MEDS : '+data);
          this.lesPosts = data;
        },error=>{
          console.log(error);
        });
  }

  convertDate(date)
  {
      let today = new Date(date);
      let dd = String(today. getDate()). padStart(2, '0');
      let mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
      let yyyy = today. getFullYear();
      return dd+'/'+mm+'/'+yyyy;
  }

  onPostCheck(m: PostPayload) {
      this.postService.currentPost = m;
      this.router.navigate(['/admin-menu/post']);
  }

    async onOptionsPostCheck(ev,m: PostPayload) {
        const popover = await this.popOver.create({
            component: PopoverComponent,
            cssClass: 'my-custom-class',
            event : ev,
            componentProps:{'ok' : 'yes'},
            translucent: true
        });
        return await popover.present();
    }

    onAddPost() {
        this.router.navigateByUrl('/admin-menu/add-post')
    }
}
