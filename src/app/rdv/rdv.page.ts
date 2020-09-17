import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.page.html',
  styleUrls: ['./rdv.page.scss'],
})
export class RdvPage implements OnInit {
    keywordfind: string;

  // Declare the variable (in this case and initialize it with false)
  isItemAvailable = false;
  private items : DocteurModel[];

  constructor(private docteurService: DocteurService,
              private router: Router) { }

  ngOnInit() {
  }

  initializeItems(){
    this.items = [
      {id: 1, nom: 'Abdou Salam SAMBA', photo: '../../assets/users/1.jpg', adresse: 'Dakar', fonction: 'Chirurgien-dentiste'},
      {id: 2, nom: 'Coumba TALL', photo: '../../assets/users/2.png', adresse: 'Thiès', fonction: 'Chirurgienne-orphopédiste'},
      {id: 3, nom: 'Fatoumata CISSE', photo: '../../assets/users/5.png', adresse: 'Foundioune', fonction: 'Cardiologue'},
      {id: 4, nom: 'Karim DIOUF', photo: '../../assets/users/3.jpg', adresse: 'Podor', fonction: 'Généraliste'},
      {id: 5, nom: 'Sophie KANE', photo: '../../assets/users/6.png', adresse: 'Dakar', fonction: 'Dentiste'},
      {id: 6, nom: 'Malick GUEYE', photo: '../../assets/users/4.png', adresse: 'Louga', fonction: 'Chirurgien-dentiste'},
      {id: 7, nom: 'Badara MBENGUE', photo: '../../assets/users/1.jpg', adresse: 'Dakar', fonction: 'Cardiologue'},
      {id: 8, nom: 'Pape Karim GUEYE', photo: '../../assets/users/1.jpg', adresse: 'Podor', fonction: 'Chirurgien-dentiste'},
      {id: 9, nom: 'Aminata KANE', photo: '../../assets/users/6.png', adresse: 'Dakar', fonction: 'Cardiologue'},
      {id: 10, nom: 'Pape Malick DIOUF', photo: '../../assets/users/1.jpg', adresse: 'Louga', fonction: 'Dentiste'},
    ]
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                (item.fonction.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                (item.adresse.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isItemAvailable = false;
    }
  }

  onDocteurCheck(item: DocteurModel) {
    this.docteurService.currentDocteur = item;
    this.router.navigateByUrl('/menu/docteur');
  }
}
