import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  private homeImg = '../../assets/images/homeImg.jpg';

  private lesMedecins : DocteurModel[] ;

  constructor(private docteurService: DocteurService,
              private router: Router) {
    this.lesMedecins = [
      {id: 1, nom: 'Abdou Salam SAMBA', photo: '../../assets/users/1.jpg', adresse: 'Dakar', fonction: 'Chirurgien-dentiste'},
      {id: 2, nom: 'Coumba TALL', photo: '../../assets/users/2.png', adresse: 'Thiès', fonction: 'Chirurgienne-orphopédiste'},
      {id: 3, nom: 'Fatoumata CISSE', photo: '../../assets/users/5.png', adresse: 'Foundioune', fonction: 'Cardiologue'},
      {id: 4, nom: 'Karim DIOUF', photo: '../../assets/users/3.jpg', adresse: 'Podor', fonction: 'Généraliste'},
      {id: 5, nom: 'Sophie KANE', photo: '../../assets/users/6.png', adresse: 'Dakar', fonction: 'Dentiste'},
      {id: 6, nom: 'Malick GUEYE', photo: '../../assets/users/4.png', adresse: 'Louga', fonction: 'Chirurgien-dentiste'},
      {id: 7, nom: 'Badara MBENGUE', photo: '../../assets/users/1.jpg', adresse: 'Dakar', fonction: 'Cardiologue'},
      {id: 8, nom: 'Karim DIOUF', photo: '../../assets/users/3.jpg', adresse: 'Podor', fonction: 'Généraliste'},
      {id: 9, nom: 'Sophie KANE', photo: '../../assets/users/6.png', adresse: 'Dakar', fonction: 'Dentiste'},
      {id: 10, nom: 'Malick GUEYE', photo: '../../assets/users/4.png', adresse: 'Louga', fonction: 'Chirurgien-dentiste'},
    ]
  }

  ngOnInit() {
  }


  onDocteurCheck(m: DocteurModel) {
    this.docteurService.currentDocteur = m;
    this.router.navigateByUrl('/menu/docteur');
  }
}
