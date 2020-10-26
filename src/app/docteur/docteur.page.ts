import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.page.html',
  styleUrls: ['./docteur.page.scss'],
})
export class DocteurPage implements OnInit {
  private currentDocteur: DocteurModel ;
  private array = [];

  constructor(private docteurService: DocteurService,
              private router: Router) { }

  ngOnInit() {
    this.disponibilite();
    this.currentDocteur = this.docteurService.currentDocteur;
  }

  onShareDocteur() {
    alert('Partager OK');
  }

  disponibilite(){
    let date = new Date();
    let auj = date.getDate(); // Days you want to subtract
    let dim = date.getDay();
    let l = 6;
    for (let i = 1; i < l; i++) {
      let next = new Date(date.getTime() + (auj * i * 60 * 60 * 1000));
      let jour = next.getDay();
      if (jour == 0){
        l = 7;
      }
      else {
        let day = next.getDate();
        let month = next.getMonth();
        let year = next.getFullYear();
        let jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        let mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let dayName = jours[jour];
        let moisName = mois[month];
        let journee = dayName + ' ' + day + ' ' + moisName + ' ' + year;
        this.array.push(journee);
      }
    }
  }

  onTakeRdv(currentDocteur: DocteurModel) {
    this.docteurService.currentDocteur = currentDocteur;
    this.router.navigateByUrl('/menu/takerdv');
  }
}
