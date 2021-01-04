import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDetailRdvPageRoutingModule } from './admin-detail-rdv-routing.module';

import { AdminDetailRdvPage } from './admin-detail-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDetailRdvPageRoutingModule
  ],
  declarations: [AdminDetailRdvPage]
})
export class AdminDetailRdvPageModule {}
