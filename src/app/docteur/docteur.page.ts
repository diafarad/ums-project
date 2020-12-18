import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TakeRDVPageModule} from '../take-rdv/take-rdv.module';
import {AlertController} from '@ionic/angular';
import {RateDoctorPageModule} from '../rate-doctor/rate-doctor.module';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.page.html',
  styleUrls: ['./docteur.page.scss'],
})
export class DocteurPage implements OnInit {
  private currentDocteur: DocteurModel ;
  private arrayDispo : any;
  customForm: FormGroup;
  formRating: any = 0;
  rate: any = 2.4;
  format = 'data:image/jpeg;base64,';

  constructor(private docteurService: DocteurService,
              private router: Router,
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.disponibilite();
    this.currentDocteur = this.docteurService.currentDocteur;
    this.customForm = this.formBuilder.group({
      // set default initial value
      starRating: [3]
    });
  }

  onRate(currentDocteur: DocteurModel) {
    this.docteurService.currentDocteur = currentDocteur;
    this.router.navigateByUrl('/menu/rate-doctor').then(r => RateDoctorPageModule);
  }

  disponibilite(){
    this.arrayDispo = [];
    let date = new Date();
    let auj = date.getDate(); // Days you want to subtract
    let l = 7;
    for (let i = 1; i < l; i++) {
      let next = new Date(date.getTime() + (24 * i * 3600 * 1000));
      if (next.getDay() === 0){
        l++;
      }
      else {
        let jour = next.getDay();
        let day = next.getDate();
        let month = next.getMonth();
        let year = next.getFullYear();
        let jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        let mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        let dayName = jours[jour];
        let moisName = mois[month];
        let journee = dayName + ' ' + day + ' ' + moisName + ' ' + year;
        this.arrayDispo.push(journee);
      }
    }
  }

  onTakeRdv(currentDocteur: DocteurModel) {
    this.docteurService.currentDocteur = currentDocteur;
    this.router.navigateByUrl('/menu/takerdv').then(res=>TakeRDVPageModule);
  }

}
