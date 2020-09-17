import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdvTabsPage } from './rdv-tabs.page';
import {UrgTabsPage} from '../urg-tabs/urg-tabs.page';

const routes: Routes = [
  {
    path: 'rdvTab',
    component: RdvTabsPage,
    children: [
      {
        path: 'accueil', loadChildren : () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'rdv', loadChildren : () => import('../rdv/rdv.module').then( m => m.RdvPageModule)
      },
      {
        path: 'urgence', loadChildren : () => import('../urgence/urgence.module').then( m => m.UrgencePageModule)
      }
    ],
  },
  {
    path: '',
    redirectTo: 'rdvTab/rdv',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdvTabsPageRoutingModule {}
