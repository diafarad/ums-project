import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children : [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'rdvTab',
        loadChildren: () => import('../rdv-tabs/rdv-tabs.module').then( m => m.RdvTabsPageModule)
      },
      {
        path: 'urgenceTab',
        loadChildren: () => import('../urg-tabs/urg-tabs.module').then( m => m.UrgTabsPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'docteur',
        loadChildren: () => import('../docteur/docteur.module').then( m => m.DocteurPageModule)
      },
      {
        path: 'takerdv',
        loadChildren: () => import('../take-rdv/take-rdv.module').then( m => m.TakeRDVPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
