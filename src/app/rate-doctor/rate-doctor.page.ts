import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-rate-doctor',
  templateUrl: './rate-doctor.page.html',
  styleUrls: ['./rate-doctor.page.scss'],
})
export class RateDoctorPage implements OnInit {
  private currentDocteur: DocteurModel ;
  formRating: number = 0;

  constructor(private docteurService: DocteurService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.currentDocteur = this.docteurService.currentDocteur;
  }

    onRate(currentDocteur: DocteurModel) {
        
    }

  async rateDocteur(currentDocteur: DocteurModel, formRating: number) {
    this.alertCtrl.create({
      mode: 'ios',
      message : 'Note enregistrée!'
    }).then(res => {
      res.present();
      //POST NOTE TO BACKEND
      setTimeout(()=>{
        res.dismiss();
      }, 3000);
    });
    console.log('Note : ' +formRating);
  }
}
