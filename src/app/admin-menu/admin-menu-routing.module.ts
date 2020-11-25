import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMenuPage } from './admin-menu.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMenuPage,
    children : [
      {
        path: 'admin-home',
        loadChildren: () => import('../admin-home/admin-home.module').then( m => m.AdminHomePageModule)
      },
      {
        path: 'admin-rdv',
        loadChildren: () => import('../admin-rdv/admin-rdv.module').then( m => m.AdminRdvPageModule)
      },
      {
        path: 'new-docteur',
        loadChildren: () => import('../new-docteur/new-docteur.module').then( m => m.NewDocteurPageModule)
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
      },
      {
        path: 'rate-doctor',
        loadChildren: () => import('../rate-doctor/rate-doctor.module').then( m => m.RateDoctorPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMenuPageRoutingModule {}
