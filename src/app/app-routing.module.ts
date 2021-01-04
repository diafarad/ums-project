import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'rdv',
    loadChildren: () => import('./rdv/rdv.module').then( m => m.RdvPageModule)
  },
  {
    path: 'urgence',
    loadChildren: () => import('./urgence/urgence.module').then( m => m.UrgencePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'urg-tabs',
    loadChildren: () => import('./urg-tabs/urg-tabs.module').then( m => m.UrgTabsPageModule)
  },
  {
    path: 'rdv-tabs',
    loadChildren: () => import('./rdv-tabs/rdv-tabs.module').then( m => m.RdvTabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'docteur',
    loadChildren: () => import('./docteur/docteur.module').then( m => m.DocteurPageModule)
  },
  {
    path: 'take-rdv',
    loadChildren: () => import('./take-rdv/take-rdv.module').then( m => m.TakeRDVPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'rate-doctor',
    loadChildren: () => import('./rate-doctor/rate-doctor.module').then( m => m.RateDoctorPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule)
  },
  {
    path: 'admin-accueil',
    loadChildren: () => import('./admin-accueil/admin-accueil.module').then( m => m.AdminAccueilPageModule)
  },
  {
    path: 'admin-rdv',
    loadChildren: () => import('./admin-rdv/admin-rdv.module').then( m => m.AdminRdvPageModule)
  },
  {
    path: 'new-docteur',
    loadChildren: () => import('./new-docteur/new-docteur.module').then( m => m.NewDocteurPageModule)
  },
  {
    path: 'access-denied',
    loadChildren: () => import('./access-denied/access-denied.module').then( m => m.AccessDeniedPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'register-success',
    loadChildren: () => import('./register-success/register-success.module').then( m => m.RegisterSuccessPageModule)
  },
  {
    path: 'add-post',
    loadChildren: () => import('./add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'admin-post',
    loadChildren: () => import('./admin-post/admin-post.module').then( m => m.AdminPostPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'comment-post',
    loadChildren: () => import('./comment-post/comment-post.module').then( m => m.CommentPostPageModule)
  },
  {
    path: 'admin-rdv-tab',
    loadChildren: () => import('./admin-rdv-tab/admin-rdv-tab.module').then( m => m.AdminRdvTabPageModule)
  },
  {
    path: 'admin-detail-rdv',
    loadChildren: () => import('./admin-detail-rdv/admin-detail-rdv.module').then( m => m.AdminDetailRdvPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
