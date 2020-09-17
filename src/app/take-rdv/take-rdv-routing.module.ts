import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeRDVPage } from './take-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: TakeRDVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeRDVPageRoutingModule {}
