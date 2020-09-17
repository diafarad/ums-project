import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgTabsPage } from './urg-tabs.page';

const routes: Routes = [
  {
    path: 'urgenceTab',
    component: UrgTabsPage,
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
    redirectTo: 'urgenceTab/urgence',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgTabsPageRoutingModule {}
