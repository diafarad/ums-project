import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HomePageModule} from '../home/home.module';
import {AboutPageModule} from '../about/about.module';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private authentificate : boolean;
  private REST_API_SERVER = "http://localhost:8080";
  public message: string;

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
            this.message = '';
            if(res.body.data.authorities[0].authority === 'ROLE_ADMIN'){
              this.router.navigate(['/menu/home']).then(r => HomePageModule);
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

  saveToken(jwt){
    localStorage.setItem('token', jwt.accessToken);
    localStorage.setItem('authorities', jwt.authorities);
    localStorage.setItem('username', jwt.username);
  }

  public loadToken(){
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    this.authentificate = token !== null && username !== null && token !== '';
    return this.authentificate;
  }

  public getToken(){

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authorities');
    localStorage.removeItem('username');
  }

}
