import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRdvPageRoutingModule } from './admin-rdv-routing.module';

import { AdminRdvPage } from './admin-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRdvPageRoutingModule
  ],
  declarations: [AdminRdvPage]
})
export class AdminRdvPageModule {}
