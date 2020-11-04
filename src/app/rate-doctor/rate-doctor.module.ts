import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateDoctorPageRoutingModule } from './rate-doctor-routing.module';

import { RateDoctorPage } from './rate-doctor.page';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateDoctorPageRoutingModule,
    BarRatingModule
  ],
  declarations: [RateDoctorPage]
})
export class RateDoctorPageModule {}
