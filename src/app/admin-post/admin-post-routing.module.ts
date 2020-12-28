import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPostPage } from './admin-post.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPostPageRoutingModule {}
