import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HomePageModule} from '../home/home.module';
import {AboutPageModule} from '../about/about.module';
import {UrgencePageModule} from '../urgence/urgence.module';
import {UrgTabsPageModule} from '../urg-tabs/urg-tabs.module';
import {PatientProfileModel} from '../model/PatientProfile.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private authentificate : boolean;
  private REST_API_SERVER = "http://localhost:8080";
  public message: string;
  public userOnline : string;
  public currentProfile: PatientProfileModel;

  constructor(private router: Router, public http: HttpClient) { }

  public loginRequest(user: any){
    return this.http.post<any>(this.REST_API_SERVER + "/login", user, {observe:'response'});
  }

  login(user){
    this.loginRequest(user).subscribe(res => {
          console.log('Resultats : '+res);
          console.log('Statut : '+res.body.status+' Données : '+res.body.data);
          if(res.body.status !== 'error'){
            this.saveToken(res.body.data);
            this.userOnline = res.body.data.username;
            console.log('Username : '+ res.body.data.username);
            this.message = '';
            if(res.body.data.authorities[0].authority === 'ROLE_ADMIN'){
              this.router.navigate(['/menu/home']).then(r => HomePageModule);
            }
            if(res.body.data.authorities[0].authority === 'ROLE_USER'){
              this.router.navigate(['/menu/urgenceTab']).then(r => UrgTabsPageModule);
            }
            if(res.body.data.authorities[0].authority === 'ROLE_MEDECIN'){
              this.router.navigate(['/menu/about']).then(r => AboutPageModule);
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


  saveToken(jwt){
    localStorage.setItem('token', jwt.accessToken);
    localStorage.setItem('authorities', jwt.authorities);
    localStorage.setItem('username', jwt.username);
  }

  public loadToken(){
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    console.log('TOKEN : '+token);
    console.log('USERNAME : '+username);
    this.authentificate = token !== null && username !== null && token !== 'undefined';
    return this.authentificate;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authorities');
    localStorage.removeItem('username');
  }

}
