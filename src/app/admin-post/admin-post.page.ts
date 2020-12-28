import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {RateDoctorPageModule} from '../rate-doctor/rate-doctor.module';
import {Router} from '@angular/router';
import {PostPageModule} from '../post/post.module';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.page.html',
  styleUrls: ['./admin-post.page.scss'],
})
export class AdminPostPage implements OnInit {

  private lesPosts : any ;
  format = 'data:image/jpeg;base64,';

  constructor(private postService: PostService,
              private router: Router) {
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

  onPostCheck(m: any) {
      this.postService.currentPost = m;
      this.router.navigateByUrl('/admin-menu/post').then(r => PostPageModule);
  }
}
