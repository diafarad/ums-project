import { Component, OnInit } from '@angular/core';
import {PatientProfileModel} from '../model/PatientProfile.model';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {LoginPageModule} from '../login/login.module';
import {ProfilePageModule} from '../profile/profile.module';
import {AdminProfileModel} from '../model/AdminProfile.model';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.page.html',
  styleUrls: ['./admin-menu.page.scss'],
})
export class AdminMenuPage implements OnInit {
  public userName : string;
  darkmode : boolean = true;
  format = 'data:image/jpeg;base64,';
  public AdminProfile : AdminProfileModel = {
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
    {title : 'Accueil', url: '/admin-menu/admin-home', icon:'home-outline'},
    {title : 'RDV', url: '/admin-menu/admin-rdv-tab', icon: 'calendar-outline'},
    {title : 'Blog', url: '/admin-menu/admin-post', icon: 'chatbubble-ellipses-outline'},
    {title : 'Contact', url: '/admin-menu/contact', icon: 'people-outline'},
    {title : 'Déconnexion', url: 'logout', icon: 'log-out-outline'}
  ];

  constructor(private router: Router,
              private authService: AuthentificationService) {
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
    this.getAdminProfile();
  }

  getAdminProfile(){
    this.authService.requestAdminProfile(this.userName)
        .subscribe(res=>{
              if(res.body.status !== 'error'){
                this.AdminProfile.id = res.body.data.id;
                this.AdminProfile.prenom = res.body.data.prenom;
                this.AdminProfile.nom = res.body.data.nom;
                this.AdminProfile.dateNaiss = res.body.data.date;
                this.AdminProfile.adresse = res.body.data.adresse;
                this.AdminProfile.tel = res.body.data.tel;
                this.AdminProfile.email = res.body.data.email;
                this.AdminProfile.groupeSanguin = res.body.data.groupeSanguin;
                this.AdminProfile.username = res.body.data.username;
                this.AdminProfile.password = res.body.data.password;
                this.AdminProfile.photo = res.body.data.photo;
              }
            },error=>{
              console.log(error);
            }
        );
  }

  onMenuAction(m) {
    if(m.url==='logout'){
      this.authService.logout();
      this.router.navigateByUrl('/login').then(r => LoginPageModule);
    } else {
      this.router.navigateByUrl(m.url).then(r => r);
    }
  }

  onProfilePage(profile: AdminProfileModel) {
    console.log('Click_Profile : '+ profile.username);
    this.authService.currentProfile = profile;
    this.router.navigate(['profile']).then(r => ProfilePageModule);
  }

}
