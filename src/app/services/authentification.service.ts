import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private authentificate : boolean;
  private token: string;

  constructor(private router: Router) { }

  login(username : string, password : string){
    if (username == "admin" && password == "passer"){
      this.authentificate = true;
      this.saveToken();
    }
    else {
      this.authentificate = false;
    }
    return this.authentificate;
  }

  private saveToken() {
    this.token = 'laisserPasser';
    localStorage.setItem("myToken", this.token);
  }

  public loadToken(){
    let token = localStorage.getItem("myToken");
    if (token == 'laisserPasser'){
      this.authentificate = true;
    }else{
      this.authentificate = false;
    }
    return this.authentificate;
  }

  logout() {
    localStorage.removeItem('myToken');
  }
}
