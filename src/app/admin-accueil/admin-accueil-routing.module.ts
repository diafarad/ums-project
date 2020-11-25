import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAccueilPage } from './admin-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAccueilPageRoutingModule {}
