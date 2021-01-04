import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';
import {PostPayload} from '../model/PostPayload';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  private homeImg = '../../assets/images/homeImg.jpg';

  private lesMedecins : any ;
  private lePost : PostPayload = {
    id: 0,
    title: '',
    content: '',
    username: '',
    image:'',
    likes: 0,
    dateCreate: 0
  } ;
  format = 'data:image/jpeg;base64,';
  private currentPage: number = 1;
  private size:number = 7;
  private totalPages: number;
  private dataMedecins =  [];

  constructor(private docteurService: DocteurService,
              private postService: PostService,
              private router: Router) {
    this.getLastPost();
    this.getAllDocteur();
  }

  ngOnInit() {
    this.getLastPost();
    this.getAllDocteur();
  }

  getAllDocteur(){
    this.docteurService.getDocteurs()
        .subscribe(data=>{
          console.log('LES MEDS : '+data);
            this.lesMedecins = data;
        },error=>{
          console.log(error);
        });
  }

  getLastPost(){
    this.postService.getLastPost()
        .subscribe(res=>{
          if(res.body.status !== 'error'){
            this.lePost.id = res.body.data.id;
            this.lePost.title = res.body.data.title;
            this.lePost.content = res.body.data.content;
            this.lePost.image = res.body.data.image;
            this.lePost.username = res.body.data.username;
            this.lePost.dateCreate = res.body.data.dateCreate;
            this.lePost.likes = res.body.data.likes;
          }
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

  onDocteurCheck(m: DocteurModel) {
    this.docteurService.currentDocteur = m;
    this.router.navigateByUrl('/menu/docteur');
  }

  viewPost(lePost: PostPayload) {
    this.postService.currentPost = lePost;
    this.router.navigate(['/menu/post'])
  }

  /*doSearch(){
    this.docteurService.getDocteurs()
        .subscribe(data=>{
          data[''].forEach(image=>{
            this.dataMedecins.push(image);
          });
          this.lesMedecins = data;
          this.totalPages = this.dataMedecins.length/this.size;
        },error=>{
          console.log(error);
        });
  }

  loadData(event) {
    if (this.currentPage < this.totalPages){
      console.log(this.currentPage + "/" + this.totalPages);
      ++this.currentPage;
      this.doSearch();
      event.target.complete();
    }
    if (this.currentPage>=this.totalPages)
      event.target.disabled = true;
  }*/
}
