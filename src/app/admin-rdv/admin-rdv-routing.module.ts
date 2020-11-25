import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRdvPage } from './admin-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRdvPageRoutingModule {}
