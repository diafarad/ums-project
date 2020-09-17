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

  constructor(private docteurService: DocteurService,
              private router: Router) { }

  ngOnInit() {
    this.currentDocteur = this.docteurService.currentDocteur;
  }

  onShareDocteur() {
    alert('Partager OK');
  }

  onTakeRdv(currentDocteur: DocteurModel) {
    this.docteurService.currentDocteur = currentDocteur;
    this.router.navigateByUrl('/menu/takerdv');
  }
}
