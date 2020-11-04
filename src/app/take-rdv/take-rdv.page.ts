import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';

@Component({
  selector: 'app-take-rdv',
  templateUrl: './take-rdv.page.html',
  styleUrls: ['./take-rdv.page.scss'],
})
export class TakeRDVPage implements OnInit {
  private coverImg = '../../assets/images//imgMedCov.jpg';
  private checkDocteur: DocteurModel ;
  today: String = new Date().toISOString();
  d = new Date();
  year = this.d.getFullYear();
  month = this.d.getMonth();
  day = this.d.getDate();
  nextYear = new Date(this.year + 1, this.month, this.day).toISOString();

  constructor(private docteurService: DocteurService) { }

  ngOnInit() {
    this.checkDocteur = this.docteurService.currentDocteur;
  }

}
