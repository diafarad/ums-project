import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from '../model/PostPayload';
import {Observable} from 'rxjs';
import {PostCommentPayload} from '../model/PostCommentPayload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public REST_API_SERVER = "http://localhost:8080";
  currentPost: PostPayload;

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload){
    return this.httpClient.post(this.REST_API_SERVER +'/api/post/add', postPayload);
  }

  addCommentPost(postComemntPayload: PostCommentPayload){
    return this.httpClient.post(this.REST_API_SERVER +'/api/post/addComment', postComemntPayload);
  }

  getAllPosts(){
    return this.httpClient.get(this.REST_API_SERVER +"/api/post/all");
  }

  getPost(permaLink: Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>(this.REST_API_SERVER +'/api/post/get/' + permaLink);
  }

  updateLikePost(postPayload: PostPayload){
    return this.httpClient.post(this.REST_API_SERVER +'/api/post/updateLike',postPayload);
  }

  getAllCommentsPost(id: number){
    return this.httpClient.get(this.REST_API_SERVER +"/api/post/allComments/"+id);
  }

  getLastPost(){
    return this.httpClient.get<any>(this.REST_API_SERVER +"/api/post/getLastPost",{observe:'response'});
  }
}
