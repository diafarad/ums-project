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
        path: 'admin-home',
        loadChildren: () => import('../admin-home/admin-home.module').then( m => m.AdminHomePageModule)
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
      },
      {
        path: 'rate-doctor',
        loadChildren: () => import('../rate-doctor/rate-doctor.module').then( m => m.RateDoctorPageModule)
      },
      {
        path: 'post',
        loadChildren: () => import('../post/post.module').then( m => m.PostPageModule)
      },
      {
        path: 'comment-post',
        loadChildren: () => import('../comment-post/comment-post.module').then( m => m.CommentPostPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
