import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocteurPageRoutingModule } from './docteur-routing.module';

import { DocteurPage } from './docteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocteurPageRoutingModule
  ],
  declarations: [DocteurPage]
})
export class DocteurPageModule {}
