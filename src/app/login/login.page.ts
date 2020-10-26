import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {RegisterPageModule} from '../register/register.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  darkmode : boolean = true;
  user: any;
  public avatarImage = "assets/images/profile.jpg";
  message: string;

  constructor(private router: Router, private authService: AuthentificationService) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkmode = prefersDark.matches;
    this.user = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  changeTheme(){
    //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkmode = ! this.darkmode;
    document.body.classList.toggle('dark');
  }

  onLogin(user) {
    this.user = user;
    this.authService.login(this.user);
  }

  onRegister() {
    this.router.navigateByUrl('register').then(r => RegisterPageModule);
  }
}
