import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocteurPage } from './docteur.page';

const routes: Routes = [
  {
    path: '',
    component: DocteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocteurPageRoutingModule {}
