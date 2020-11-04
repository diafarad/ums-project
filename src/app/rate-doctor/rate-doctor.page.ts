import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';

@Component({
  selector: 'app-rate-doctor',
  templateUrl: './rate-doctor.page.html',
  styleUrls: ['./rate-doctor.page.scss'],
})
export class RateDoctorPage implements OnInit {
  private currentDocteur: DocteurModel ;
  formRating: number = 0;

  constructor(private docteurService: DocteurService) { }

  ngOnInit() {
    this.currentDocteur = this.docteurService.currentDocteur;
  }

    onRate(currentDocteur: DocteurModel) {
        
    }

  rateDocteur(currentDocteur: DocteurModel, formRating: number) {
    console.log('Note : ' +formRating);
  }
}
