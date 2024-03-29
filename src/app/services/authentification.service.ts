import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HomePageModule} from '../home/home.module';
import {AboutPageModule} from '../about/about.module';
import {PatientProfileModel} from '../model/PatientProfile.model';
import {AdminHomePageModule} from '../admin-home/admin-home.module';
import {AccueilPageModule} from '../accueil/accueil.module';
import {AddPostPageModule} from '../add-post/add-post.module';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private authentificate : number = 0;
  private REST_API_SERVER = "http://localhost:8080";
  public message: string;
  public userOnline : string;
  public autorisation : string;
  public currentProfile: any;

  constructor(private router: Router, public http: HttpClient) { }

  public loginRequest(user: any){
    return this.http.post<any>(this.REST_API_SERVER + "/login", user, {observe:'response'});
  }

  login(user){
    this.loginRequest(user).subscribe(res => {
          //console.log('Resultats : '+res);
          //console.log('Statut : '+res.body.status+' Données : '+res.body.data);
          if(res.body.status !== 'error'){
            this.saveToken(res.body.data);
            this.userOnline = res.body.data.username;
            this.autorisation = res.body.data.authorities[0].authority;
            localStorage.setItem('autorisation', this.autorisation);
            //alert(this.autorisation);
            console.log('Username : '+ res.body.data.username);
            this.message = '';
            if(res.body.data.authorities[0].authority === 'ROLE_ADMIN'){
              this.router.navigateByUrl('/admin-menu/admin-home').then(r => AddPostPageModule);
              //alert('ADMIN');
            }
            if(res.body.data.authorities[0].authority === 'ROLE_USER'){
              this.router.navigateByUrl('/menu/home');
              //alert('USER');
            }
            if(res.body.data.authorities[0].authority === 'ROLE_MEDECIN'){
              this.router.navigateByUrl('/menu/about').then(r => AboutPageModule);
              //alert('MEDECIN');
            }
          }
          else{
            if (res.body.data.error === 'INVALID_USERNAME'){
              this.message = 'Utilisateur inexistant';
            }
            else if (res.body.data.error === 'BAD_CREDENTIALS'){
              this.message = 'Mot de passe incorrect';
            }
          }
        },
        err => {
          console.log(err);
        });
  }

  requestUserProfile(userName: string){
    return this.http.get<any>(this.REST_API_SERVER + '/getUser/'+userName,{observe:'response'});
  }

  requestUser(userName: string){
    return this.http.get<any>(this.REST_API_SERVER + '/getUtilisateur/'+userName,{observe:'response'});
  }

  requestAdminProfile(userName: string){
    return this.http.get<any>(this.REST_API_SERVER + '/getAdmin/'+userName,{observe:'response'});
  }

  saveToken(jwt){
    localStorage.setItem('token', jwt.accessToken);
    localStorage.setItem('authorities', jwt.authorities);
    localStorage.setItem('username', jwt.username);
  }

  public loadToken(){
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    let auth = localStorage.getItem("autorisation");
    //alert('AUTO : '+auth);
    console.log('TOKEN : '+token);
    console.log('USERNAME : '+username);
    console.log('AUTHORITIES : '+auth);
    if (token !== null && username !== null && token !== 'undefined'){
      if(auth === 'ROLE_ADMIN')
        this.authentificate = 1;
      if(auth === 'ROLE_MEDECIN')
        this.authentificate = 2;
      if(auth === 'ROLE_SECRETAIRE')
        this.authentificate = 3;
      if(auth === 'ROLE_USER')
        this.authentificate = 4;
    }
    else{
      this.authentificate = 0;
    }
    return this.authentificate;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authorities');
    localStorage.removeItem('username');
    localStorage.removeItem('autorisation');
  }

}
