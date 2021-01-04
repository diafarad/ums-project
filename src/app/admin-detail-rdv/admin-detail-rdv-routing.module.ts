import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDetailRdvPage } from './admin-detail-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDetailRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDetailRdvPageRoutingModule {}
