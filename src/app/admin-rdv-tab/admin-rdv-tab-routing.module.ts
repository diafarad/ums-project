import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRdvTabPage } from './admin-rdv-tab.page';

const routes: Routes = [
  {
    path: 'admin-rdv-tab',
    component: AdminRdvTabPage,
    children: [
      {
        path: 'admin-accueil', loadChildren : () => import('../admin-accueil/admin-accueil.module').then( m => m.AdminAccueilPageModule)
      },
      {
        path: 'admin-rdv', loadChildren : () => import('../admin-rdv/admin-rdv.module').then( m => m.AdminRdvPageModule)
      },
      {
        path: 'urgence', loadChildren : () => import('../urgence/urgence.module').then( m => m.UrgencePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin-rdv-tab/admin-rdv',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRdvTabPageRoutingModule {}
