import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPostPageRoutingModule } from './admin-post-routing.module';

import { AdminPostPage } from './admin-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPostPageRoutingModule
  ],
  declarations: [AdminPostPage]
})
export class AdminPostPageModule {}
