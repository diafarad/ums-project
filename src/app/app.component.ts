import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AuthentificationService} from './services/authentification.service';
import {LoginPageModule} from './login/login.module';
import {HomePageModule} from './home/home.module';
import {AdminHomePageModule} from './admin-home/admin-home.module';
import {AboutPageModule} from './about/about.module';
import {ContactPageModule} from './contact/contact.module';
import {AccueilPageModule} from './accueil/accueil.module';
import {AdminAccueilPageModule} from './admin-accueil/admin-accueil.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthentificationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkDarkTheme();
      this.login();
    });
  }

  checkDarkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }

  private login() {
    let auth = this.authService.loadToken();
    if (auth == 0){
      //console.log('AUTH : ' +auth);
      this.router.navigateByUrl('/login').then(res=>LoginPageModule);
    }
    else{
      if(auth == 1){
        //console.log('AUTH : ' +auth);
        this.router.navigateByUrl('/admin-menu/admin-home').then(res=>AdminAccueilPageModule);
      }
      if(auth == 2){
        //console.log('AUTH : ' +auth);
        this.router.navigateByUrl('/menu/contact').then(res=>ContactPageModule);
      }
      if(auth == 3){
        //console.log('AUTH : ' +auth);
        this.router.navigateByUrl('/menu/about').then(res=>AboutPageModule);
      }
      if(auth == 4){
        //console.log('AUTH : ' +auth);
        this.router.navigateByUrl('/menu/home');
      }
    }
  }
}
