import { Component, OnInit } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {DocteurService} from '../services/docteur.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
  format = 'data:image/jpeg;base64,';
  searchTerm: string ;
  filterItem:any;

  constructor(private docteurService: DocteurService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  onDocteurCheck(item: DocteurModel) {
    this.docteurService.currentDocteur = item;
    this.router.navigateByUrl('/menu/docteur');
  }

  loadData(){
    let data:Observable<any>;
    data = this.http.get("http://localhost:8080/medecin/all");
    data.subscribe(result => {
      this.items = result;
      this.filterItem= this.items;
    })
  }

  filterItems(){
    this.isItemAvailable = true;
    this.filterItem = this.items.filter((item) =>  {
      return (item.prenom.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) ||
          (item.nom.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) ||
          (item.adresse.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) ||
          (item.specialite.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
    })
    //this.isItemAvailable = false;
  }
}
