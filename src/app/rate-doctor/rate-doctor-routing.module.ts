import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateDoctorPage } from './rate-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: RateDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateDoctorPageRoutingModule {}
