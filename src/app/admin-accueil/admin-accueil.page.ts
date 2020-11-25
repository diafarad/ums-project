import { Component, OnInit } from '@angular/core';
import {DocteurService} from '../services/docteur.service';
import {Router} from '@angular/router';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurPageModule} from '../docteur/docteur.module';
import {NewDocteurPageModule} from '../new-docteur/new-docteur.module';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.page.html',
  styleUrls: ['./admin-accueil.page.scss'],
})
export class AdminAccueilPage implements OnInit {

  private lesMedecins : any ;
  format = 'data:image/jpeg;base64,';

  constructor(private docteurService : DocteurService,
              private router: Router) {
    this.getAllDocteur();
  }

  ngOnInit() {
    this.getAllDocteur();
  }

  getAllDocteur(){
    this.docteurService.getDocteurs()
        .subscribe(data=>{
          console.log('LES MEDS : '+data);
          this.lesMedecins = data;
        },error=>{
          console.log(error);
        });
  }

  onDocteurCheck(m: DocteurModel) {
    this.docteurService.currentDocteur = m;
    this.router.navigateByUrl('/admin-menu/docteur').then(r => DocteurPageModule);
  }

  onAddNewDocteur() {
    this.router.navigateByUrl('/admin-menu/new-docteur').then(r => NewDocteurPageModule);
  }

}
