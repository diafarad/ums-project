import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TakeRDVService} from '../services/take-rdv.service';
import {DocteurModel} from '../model/Docteur.model';
import {getLocaleDateFormat} from '@angular/common';
import {DocteurService} from '../services/docteur.service';

@Component({
  selector: 'app-take-rdv',
  templateUrl: './take-rdv.page.html',
  styleUrls: ['./take-rdv.page.scss'],
})
export class TakeRDVPage implements OnInit {
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
