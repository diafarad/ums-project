import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {CalendarComponentOptions} from "ion2-calendar";
import * as moment from 'moment';
import {PatientProfileModel} from '../model/PatientProfile.model';
import {AuthentificationService} from '../services/authentification.service';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-take-rdv',
  templateUrl: './take-rdv.page.html',
  styleUrls: ['./take-rdv.page.scss'],
})
export class TakeRDVPage implements OnInit {
  private coverImg = '../../assets/images//imgMedCov.jpg';
  private checkDocteur: DocteurModel ;
  dateRV: any;
  format = 'data:image/jpeg;base64,';
  today: String = new Date().toISOString();
  d = new Date();
  year = this.d.getFullYear();
  month = this.d.getMonth();
  day = this.d.getDate();
  rdv = {
    dateRdv: '',
    idMedecin: 0,
    idPatient: 0
  };
  private patientProfil : PatientProfileModel;
  userName : string;
  msg : string;
  stylecss : string;

  constructor(private docteurService: DocteurService,
              private authService: AuthentificationService,
              public alertController: AlertController) {
    this.userName = localStorage.getItem('username');
    this.checkDocteur = this.docteurService.currentDocteur;
    this.patientProfil = this.authService.currentProfile;
    this.getIdUser();
  }

  loadTheme(){

  }

  ngOnInit() {

  }

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'single',
    color: 'dark',
    disableWeeks: [0, 6],
    from : new Date(),
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthPickerFormat: ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DEC']
  };

  onChangeDate(event) {
      //alert(this.dateRV.format('YYYY-MM-DD'));
      this.rdv.dateRdv = event.format('YYYY-MM-DD');
      //alert(this.dateRV); // the statement you might think about
  }

 onTakeRdv() {
    /*alert('Date '+this.rdv.dateRdv);
    alert('ID doc '+this.checkDocteur.id);
    alert('ID Pat '+this.rdv.idPatient);*/
    this.rdv.idMedecin = this.checkDocteur.id;
    this.docteurService.takeRdv(this.rdv).subscribe(res => {
          if(res.body.status !== 'error'){
            this.alertController.create({
              header: 'Votre rendez-vous',
              mode: 'ios',
              message: 'Votre rendez-vous a été prise en charge. ' +
                  'Nous vous contacterons dans les plus brefs délais pour confirmation.',
              buttons: [
                {
                  text: 'OK'
                }
              ]
            }).then(res => {
              res.present();
            });
          }
          else{
            this.alertController.create({
              header: 'Votre rendez-vous',
              mode: 'ios',
              message: 'Oups! une petite erreur est survenue. Veuillez réessayer plutard. ' +
                  'Assurez de sélectionner une date valide.',
              buttons: [
                {
                  text: 'OK'
                }
              ]
            }).then(res => {
              res.present();
            });
          }
        },
        err => {
          console.log(err);
        });
  }


  getIdUser(){
    this.authService.requestUserProfile(this.userName)
        .subscribe(res=>{
              if(res.body.status !== 'error'){
                this.rdv.idPatient = res.body.data.id;
              }
            },error=>{
              console.log(error);
            }
        );
  }
}
