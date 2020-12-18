import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
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
    ]
  },
  {
    path: '',
    redirectTo: 'home/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
