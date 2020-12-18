import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {CalendarComponentOptions} from "ion2-calendar";

@Component({
  selector: 'app-take-rdv',
  templateUrl: './take-rdv.page.html',
  styleUrls: ['./take-rdv.page.scss'],
})
export class TakeRDVPage implements OnInit {
  private coverImg = '../../assets/images//imgMedCov.jpg';
  private checkDocteur: DocteurModel ;
  format = 'data:image/jpeg;base64,';
  today: String = new Date().toISOString();
  d = new Date();
  year = this.d.getFullYear();
  month = this.d.getMonth();
  day = this.d.getDate();
  nextYear = new Date(this.year + 1, this.month, this.day).toISOString();

  constructor(private docteurService: DocteurService) {
    this.checkDocteur = this.docteurService.currentDocteur;
  }

  ngOnInit() {

  }

  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'single',
    color: 'dark',
    disableWeeks: [0, 6],
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthPickerFormat: ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DEC']
  };

  onChangeDate($event) {
    alert($event);
  }

  onTakeRdv(value: any) {

  }

  dateDispo(){
    let today = new Date();
    let oneDaysFromNow = new Date(today);
    let tenDaysFromNow = new Date(today);
    oneDaysFromNow.setDate( tenDaysFromNow.getDate() + 1);
    tenDaysFromNow.setDate( tenDaysFromNow.getDate() + 10);
    return this.getDatesBetweenDates(oneDaysFromNow,tenDaysFromNow);
  }

  getDatesBetweenDates = (startDate, endDate) => {
    let dates = []
    //to avoid modifying the original date
    const theDate = new Date(startDate)
    while (theDate < endDate) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    return dates
  };

  dateSelected($event: Date) {
    alert($event);
  }

}
