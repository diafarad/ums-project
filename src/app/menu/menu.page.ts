import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {LoginPageModule} from '../login/login.module';
import {RegisterPageModule} from '../register/register.module';
import {ProfilePageModule} from '../profile/profile.module';
import {HttpClient} from '@angular/common/http';
import {PatientProfileModel} from '../model/PatientProfile.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private REST_API_SERVER = 'http://localhost:8080';

  public imgBG = '../assets/images/medecine.jpg';
  public imgUser = '../assets/images/user.png';
  public userName : string;
  darkmode : boolean = true;
  public PatientProfile : PatientProfileModel = {
      id : 0,
      prenom: '',
      nom: '',
      dateNaiss: null,
      adresse: '',
      email: '',
      tel: '',
      password:'',
      username: ''
  };

  public pages = [
    {title : 'Accueil', url: '/menu/home', icon:'home-outline'},
    {title : 'Rendez-vous', url: '/menu/rdvTab', icon: 'calendar-outline'},
    {title : 'Urgence', url: '/menu/urgenceTab', icon: 'fitness-outline'},
    {title : 'Contact', url: '/menu/contact', icon: 'people-outline'},
    {title : 'À propos', url: '/menu/about', icon: 'information-circle-outline'},
    {title : 'Déconnexion', url: 'logout', icon: 'log-out-outline'}
  ];

  constructor(private router: Router, private authService: AuthentificationService) {
      this.userName = localStorage.getItem('username');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkmode = prefersDark.matches;
      //console.log('Le nom User : '+this.userName);
  }

    changeTheme(){
        //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkmode = ! this.darkmode;
        document.body.classList.toggle('dark');
    }

  ngOnInit() {
  }

    ionViewWillEnter(){
      this.getUserProfile();
    }

    getUserProfile(){
        this.authService.requestUserProfile(this.userName)
            .subscribe(res=>{
                if(res.body.status !== 'error'){
                    console.log('Données utilisateurs : ' + res.body);
                    console.log('ID : ' + res.body.data.id);
                    console.log('Prenom : ' + res.body.data.prenom);
                    this.PatientProfile.id = res.body.data.id;
                    this.PatientProfile.prenom = res.body.data.prenom;
                    this.PatientProfile.nom = res.body.data.nom;
                    this.PatientProfile.dateNaiss = res.body.data.date;
                    this.PatientProfile.adresse = res.body.data.adresse;
                    this.PatientProfile.tel = res.body.data.tel;
                    this.PatientProfile.email = res.body.data.email;
                    this.PatientProfile.groupeSanguin = res.body.data.groupeSanguin;
                    this.PatientProfile.username = res.body.data.username;
                    this.PatientProfile.password = res.body.data.password;
                    this.PatientProfile.photo = res.body.data.photo;
                }
                },error=>{
                    console.log(error);
                }
            );
    }

  onMenuAction(m) {
    if(m.url=='logout'){
      this.authService.logout();
      this.router.navigateByUrl('/login').then(r => LoginPageModule);
    } else {
      this.router.navigateByUrl(m.url);
    }
  }

    onProfilePage(profile: PatientProfileModel) {
        console.log('Click_Profile : '+ profile.username);
      this.authService.currentProfile = profile;
      this.router.navigate(['profile']).then(r => ProfilePageModule);
    }
}
