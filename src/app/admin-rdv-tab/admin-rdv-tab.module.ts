import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRdvTabPageRoutingModule } from './admin-rdv-tab-routing.module';

import { AdminRdvTabPage } from './admin-rdv-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRdvTabPageRoutingModule
  ],
  declarations: [AdminRdvTabPage]
})
export class AdminRdvTabPageModule {}
