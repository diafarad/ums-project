import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgencePage } from './urgence.page';

const routes: Routes = [
  {
    path: '',
    component: UrgencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgencePageRoutingModule {}
