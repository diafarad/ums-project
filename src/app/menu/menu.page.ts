import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public imgBG = '../assets/images/medecine.jpg';
  public imgUser = '../assets/images/user.png';

  public pages = [
    {title : 'Accueil', url: '/menu/home', icon:'home-outline'},
    {title : 'Rendez-vous', url: '/menu/rdvTab', icon: 'calendar-outline'},
    {title : 'Urgence', url: '/menu/urgenceTab', icon: 'fitness-outline'},
    {title : 'Contact', url: '/menu/contact', icon: 'people-outline'},
    {title : 'À propos', url: '/menu/about', icon: 'information-circle-outline'},
    {title : 'Déconnexion', url: 'logout', icon: 'log-out-outline'}
  ];

  constructor(private router: Router, private authService: AuthentificationService) { }

  ngOnInit() {
  }

  onMenuAction(m) {
    if(m.url=='logout'){
      this.authService.logout();
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl(m.url);
    }
  }
}
