import { Injectable } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';

@Injectable({
  providedIn: 'root'
})
export class DocteurService {
  currentDocteur: DocteurModel;

  constructor() { }


}
