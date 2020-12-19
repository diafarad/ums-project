import { Component, OnInit } from '@angular/core';
import {PatientProfileModel} from '../model/PatientProfile.model';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private patientProfil : PatientProfileModel;
  format = 'data:image/jpeg;base64,';

  constructor(private authService : AuthentificationService) { }

  ngOnInit() {
    this.patientProfil = this.authService.currentProfile;
  }

  onEditProfil(patientProfil: PatientProfileModel) {

  }
}
