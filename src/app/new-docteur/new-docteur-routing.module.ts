import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDocteurPage } from './new-docteur.page';

const routes: Routes = [
  {
    path: '',
    component: NewDocteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDocteurPageRoutingModule {}
