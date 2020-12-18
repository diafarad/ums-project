import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomePage } from './admin-home.page';

const routes: Routes = [
  {
    path: 'admin-home',
    component: AdminHomePage,
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
    ],
  },
  {
    path: '',
    redirectTo: 'admin-home/admin-accueil',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminHomePageRoutingModule {}
