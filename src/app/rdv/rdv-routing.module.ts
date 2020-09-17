import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdvPage } from './rdv.page';

const routes: Routes = [
  {
    path: '',
    component: RdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdvPageRoutingModule {}
