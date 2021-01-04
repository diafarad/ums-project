import { Component, OnInit } from '@angular/core';
import {HopitalService} from '../services/hopital.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-rdv',
  templateUrl: './admin-rdv.page.html',
  styleUrls: ['./admin-rdv.page.scss'],
})
export class AdminRdvPage implements OnInit {

  private lesRdv : any ;
  format = 'data:image/jpeg;base64,';

  constructor(private hopitalService: HopitalService,
              private router: Router) {
    this.getAllRdvOrderByNew();
  }

  ngOnInit() {
    this.getAllRdvOrderByNew();
  }

  convertDate(date)
  {
    let today = new Date(date);
    let dd = String(today. getDate()). padStart(2, '0');
    let mm = String(today. getMonth() + 1). padStart(2, '0'); //January is 0!
    let yyyy = today. getFullYear();
    return dd+'/'+mm+'/'+yyyy;
  }

  getAllRdvOrderByNew(){
    this.hopitalService.getRdv()
        .subscribe(data=>{
          console.log('LES MEDS : '+data);
          this.lesRdv = data;
        },error=>{
          console.log(error);
        });
  }

  onRdvCheck(m: number) {
    this.hopitalService.getOneRdv(m)
        .subscribe(res=>{
          if(res.body.status !== 'error'){
            this.hopitalService.currentRdv.id = res.body.data.id;
            this.hopitalService.currentRdv.adresse = res.body.data.adresse;
            this.hopitalService.currentRdv.dateResponse = res.body.data.dateRdv;
            this.hopitalService.currentRdv.hopital= res.body.data.hopital;
            this.hopitalService.currentRdv.nomDocteur = res.body.data.medecin;
            this.hopitalService.currentRdv.nomPatient = res.body.data.patient;
          }
        },error=>{
          console.log(error);
        });
    this.router.navigateByUrl('/admin-menu/admin-detailRdv');
  }
}
