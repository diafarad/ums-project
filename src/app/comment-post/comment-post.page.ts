import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {PostPayload} from '../model/PostPayload';
import {PostCommentPayload} from '../model/PostCommentPayload';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.page.html',
  styleUrls: ['./comment-post.page.scss'],
})
export class CommentPostPage implements OnInit {
  private currentPost: PostPayload;
  private lesCommentaires : any ;
  format = 'data:image/jpeg;base64,';
  iconHeart : string = 'heart-outline';
  iconColor : string;
  comment: any = '';
  public postCommentaire : PostCommentPayload = {
    datecom : '',
    content : '',
    iduser : 0,
    idpost : 0,
    likes : 0,
    id : 0
  };
  private userName: string;
  private iduser: number = 0;

  constructor(private postService: PostService,
              private authService:  AuthentificationService) {
    this.currentPost = this.postService.currentPost;
    this.userName = localStorage.getItem('username');
    this.getAllComments();
  }

  ngOnInit() {
    this.currentPost = this.postService.currentPost;
    this.getAllComments();
  }

  ionViewWillEnter(){
    this.getUserProfile();
  }

  getAllComments(){
    this.postService.getAllCommentsPost(this.currentPost.id)
        .subscribe(data=>{
          this.lesCommentaires = data;
          console.log('Comments OK');
        },error=>{
          console.log(error);
        });
  }

  postComment() {
      this.postCommentaire.idpost = this.currentPost.id;
      this.postCommentaire.content = this.comment;
      this.postCommentaire.iduser = this.iduser;
     // alert('User : '+this.iduser);
      this.postService.addCommentPost(this.postCommentaire)
          .subscribe(res=>{
            console.log("Comment Add");
            this.comment = '';
            this.ngOnInit();
              },error=>{
                console.log(error);
              }
          );
  }

  getUserProfile(){
    this.authService.requestUser(this.userName)
        .subscribe(res=>{
              if(res.body.status !== 'error'){
                this.iduser = res.body.data.id;
              }
            },error=>{
              console.log(error);
            }
        );
  }
}
