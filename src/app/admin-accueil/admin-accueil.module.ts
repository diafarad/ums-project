import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAccueilPageRoutingModule } from './admin-accueil-routing.module';

import { AdminAccueilPage } from './admin-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAccueilPageRoutingModule
  ],
  declarations: [AdminAccueilPage]
})
export class AdminAccueilPageModule {}
