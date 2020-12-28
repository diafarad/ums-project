import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {PostPayload} from '../model/PostPayload';
import {PostService} from '../services/post.service';
import {PostPageModule} from './post.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  private currentPost: PostPayload ;
  format = 'data:image/jpeg;base64,';
  nbClick: number = 1;
  iconHeart : string = 'heart-outline';
  iconColor : string;

  constructor(private postService: PostService,
              private router: Router) { }

  ionViewWillLeave(){
      //alert('TITRE : '+this.currentPost.username);
    this.postService.updateLikePost(this.currentPost).subscribe(data=>{
      console.log('Likes Update ');
    },error=>{
      console.log(error);
    });
  }

  ngOnInit() {
    this.currentPost = this.postService.currentPost;
  }

  convertDate(date)
  {
    let today = new Date(date);
    let dd = String(today. getDate()). padStart(2, '0');
    let mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
    let yyyy = today. getFullYear();
    return dd+'/'+mm+'/'+yyyy;
  }

    likePost() {
      this.nbClick++;
      if(this.nbClick % 2 == 0){
          this.currentPost.likes++;
          this.iconHeart = 'heart';
          this.iconColor = 'danger';
      }
      else{
          this.currentPost.likes--;
          this.iconHeart = 'heart-outline';
          this.iconColor = '';
      }
    }

  commentPost(currentPost: PostPayload) {
    this.postService.currentPost = currentPost;
    this.router.navigateByUrl('/admin-menu/comment-post').then(r => PostPageModule);
  }
}
